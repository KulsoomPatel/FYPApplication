package fypapplication

import grails.transaction.Transactional

@Transactional
class CleanTweetsService {

    def cleanTweets() {

        File dirtyTweets = new File("result.txt")
        File cleanTweets = new File("cleanTweets.txt")

        try {
            Scanner console = new Scanner(dirtyTweets)

            PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter(cleanTweets)))
            LinkedHashSet<String> ln = new LinkedHashSet<String>();

            while (console.hasNextLine()) {

                String line = console.nextLine();

                String[] splitter = line.split("\\|\\|\\|")
                //Only looks at the english tweets
                if (splitter[0] == "en") {

                    line = line.replaceFirst("en", "")

                    String urlIdentifier = "((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?"

                    //Removes URL's, RT, Twitter usernames and any non alpha numeric character
                    String[] removeNoise = ["RT", urlIdentifier, "(?:\\s|\\A)[@]+([A-Za-z0-9-_]+)", "[^a-zA-Z0-9 ]"]

                    removeNoise.each { noise ->
                        line = line.replaceAll(noise, "").toLowerCase()
                    }
                    ln.add(line)

                }
            }

            ln.each { line ->
                printWriter.write(line)
                printWriter.println()
            }
            //write to file here
        } catch (IOException e) {
        }
    }


}
