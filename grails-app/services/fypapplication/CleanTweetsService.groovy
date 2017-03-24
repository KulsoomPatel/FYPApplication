package fypapplication

import edu.stanford.nlp.ling.CoreAnnotations
import edu.stanford.nlp.neural.rnn.RNNCoreAnnotations
import edu.stanford.nlp.pipeline.Annotation
import edu.stanford.nlp.pipeline.StanfordCoreNLP
import edu.stanford.nlp.sentiment.SentimentCoreAnnotations
import edu.stanford.nlp.trees.Tree
import edu.stanford.nlp.util.CoreMap
import grails.transaction.Transactional

@Transactional
class CleanTweetsService {

    def cleanTweets(String[] theIndustries) {

        File dirtyTweets = new File("result.txt")
        File cleanTweets = new File("cleanTweets.txt")

        try {
            Scanner console = new Scanner(dirtyTweets)

            PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(cleanTweets)))
            LinkedHashSet<String> ln = new LinkedHashSet<String>()

            while (console.hasNextLine()) {

                String line = console.nextLine();

                String[] splitter = line.split("\\|\\|\\|")
                //Only looks at the english tweets
                if (splitter[0].equals("en")) {

                    line = line.replaceFirst("en", "")

                    String urlIdentifier = "((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?"

                    //Removes URL's, RT, Twitter usernames and any non alpha numeric character
                    String[] removeNoise = ["RT", urlIdentifier, "(?:\\s|\\A)[@]+([A-Za-z0-9-_]+)", "[^a-zA-Z0-9 ]"]

                    removeNoise.each { noise ->
                        line = line.replaceAll(noise, "")
                    }
                    ln.add(line)

                }
            }

            ln.each { line ->

                for (String industry : theIndustries) {
                    if (line.contains(industry)) {
                        printWriter.write(industry + "|||" + line.toLowerCase())
                        printWriter.println()
                    }

                }

            }
            printWriter.close()
            //write to file here
        }

        catch (IOException e) {
        }
    }

    def findSentiment() {

        File cleanTweets = new File("cleanTweets.txt")
        File annotateTweets = new File("annotateTweets.txt")

        try {

            Scanner console = new Scanner(cleanTweets)
            PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(annotateTweets)))

            Properties properties = new Properties();
            properties.setProperty("annotators", "tokenize,ssplit,parse,sentiment");

            //As only passing single line to the Annotator
            properties.setProperty("tokenize.whitespace", "true");
            properties.setProperty("ssplit.eolonly", "true");

            StanfordCoreNLP pipeline = new StanfordCoreNLP(properties)

            while (console.hasNextLine()) {

                def line = console.nextLine()

                String[] splitter = line.split("\\|\\|\\|")
                int mainSentiment = 0
                int longest = 0
                Annotation annotation = pipeline.process(splitter[1])
                for (CoreMap sentence : annotation.get(CoreAnnotations.SentencesAnnotation.class)) {
                    Tree tree = sentence.get(SentimentCoreAnnotations.SentimentAnnotatedTree.class)

                    int sentiment = RNNCoreAnnotations.getPredictedClass(tree)
                    String partText = sentence.toString()

                    if (partText.length() > longest) {
                        mainSentiment = sentiment
                        longest = partText.length()
                    }
                }

                def sentimentValue
                switch (mainSentiment) {
                    case 0:
                        sentimentValue = "Very Negative";
                        break
                    case 1:
                        sentimentValue = "Negative";
                        break
                    case 2:
                        sentimentValue = "Neutral";
                        break
                    case 3:
                        sentimentValue = "Positive";
                        break
                    case 4:
                        sentimentValue = "Very Positive";
                        break
                    default:
                        sentimentValue = "";
                        break
                }
                printWriter.write(sentimentValue + " || " + splitter[0] + " || " + splitter[1])
                printWriter.println()

            }

            printWriter.close()
        } catch (IOException e) {

        }
    }

    def showSentiment() {

        File annotatedTweets = new File("annotateTweets.txt")

        try {
            Scanner console = new Scanner(annotatedTweets)

            while (console.hasNextLine()) {

                String line = console.nextLine()
                String[] splitter = line.split("\\|\\|")

                if (splitter.length == 3) {

                    String sentiment = splitter[0]
                    String industry = splitter[1]

                    
                }
            }

        } catch (IOException e) {
        }
    }

}
