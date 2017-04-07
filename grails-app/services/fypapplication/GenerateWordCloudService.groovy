package fypapplication

import grails.transaction.Transactional
import weka.core.Attribute
import weka.core.DenseInstance
import weka.core.Instance
import weka.core.Instances
import weka.core.Stopwords
import weka.core.stemmers.SnowballStemmer
import weka.filters.unsupervised.attribute.StringToWordVector

@Transactional
class GenerateWordCloudService {

    def cleanTweetsWordCloud() {

        File theFile = new File("cleanTweets.txt")

        //Write to file when stop words are removed
        File cleanestTweets = new File("cleanestTweets.txt")
        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(cleanestTweets)))
        SnowballStemmer stemmer = new SnowballStemmer()
        stemmer.setStemmer("porter")
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

                            word = stemmer.stem(word)
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
        File savedResults = new File("savedResults.arff")
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

/*            ArffSaver saver = new ArffSaver();
            saver.setInstances(instances);
            saver.setFile(theArffFile)
            saver.writeBatch()*/

            StringToWordVector filter = new StringToWordVector()
            filter.setInputFormat(instances)
            filter.setDictionaryFileToSaveTo(savedResults)
            filter.setOutputWordCounts(true)
            filter.setTFTransform(true)
            filter.setWordsToKeep(15)
            Instances dataFiltered = weka.filters.Filter.useFilter(instances, filter)


        } catch (IOException e) {

        }

    }

    def renderWordCloud() {
        File theFile = new File("savedResults.arff");
        ArrayList<WordCloud> cloudResults = new ArrayList<>()

        try {

            Scanner console = new Scanner(theFile)

            while (console.hasNextLine()) {

                String line = console.nextLine()

                String[] splitter = line.split(",")

                String word = splitter[0]
                int wordCount = splitter[1] as Integer

                cloudResults.add(new WordCloud(word, wordCount))
            }
        } catch (IOException e) {

        }

        return cloudResults

    }

}
