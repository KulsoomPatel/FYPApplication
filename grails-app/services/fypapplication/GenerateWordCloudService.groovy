package fypapplication

import grails.transaction.Transactional
import sun.security.jca.GetInstance
import weka.core.Attribute
import weka.core.DenseInstance
import weka.core.Instance
import weka.core.Instances
import weka.core.Stopwords
import weka.core.converters.ArffSaver
import weka.filters.unsupervised.attribute.StringToWordVector

@Transactional
class GenerateWordCloudService {

    def cleanTweetsWordCloud() {

        File theFile = new File("cleanTweets.txt")

        //Write to file when stop words are removed
        File cleanestTweets = new File("cleanestTweets.txt")
        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(cleanestTweets)))

        try {
            Scanner console = new Scanner(theFile)

            Stopwords stopwords = new Stopwords()

            while (console.hasNextLine()) {
                String line = console.nextLine()
                String newLine = ""
                String[] splitter = line.split("\\|\\|\\|")

                String theIndustry = splitter[0]
                String theLine = splitter[1]

                if (theLine != null) {

                    String[] eachWord = theLine.split(" ")

                    for (String word : eachWord) {

                        if (!stopwords.is(word)) {

                            newLine = newLine + " " + word
                        }
                    }

                    printWriter.write(theIndustry + " ||| " + newLine)
                    printWriter.println()
                }
            }

            printWriter.close()
        } catch (IOException e) {

        }

    }

    def createWordClouds(String theIndustry) {

        ArrayList<Attribute> attributes = new ArrayList<>()
        attributes.add(new Attribute("tweet", true))

        ArrayList<String> theLines = new ArrayList<>()
        File cleanestTweets = new File("cleanestTweets.txt")
        File theArffFile = new File("tweets.arff")
        Instances instances

        try {

            Scanner console = new Scanner(cleanestTweets)

            while (console.hasNextLine()) {

                String line = console.nextLine()

                String[] splitter = line.split("\\|\\|\\|")

                String industry = splitter[0].trim()
                String theLine = splitter[1]

                if (theIndustry.equals(industry)) {
                    theLines.add(theLine)
                }
            }

            Instance ins = new DenseInstance(1)
            instances = new Instances("TwitterData", attributes, theLines.size())
            theLines.each { it ->
                ins.setValue(attributes[0], it)
                instances.add(ins)
            }

            ArffSaver saver = new ArffSaver();
            saver.setInstances(instances);
            saver.setFile(theArffFile)
            saver.writeBatch()

        } catch (IOException e) {

        }
        String[] options = [""]
        StringToWordVector filter = new StringToWordVector()

    }
}
