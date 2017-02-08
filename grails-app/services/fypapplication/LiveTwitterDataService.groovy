package fypapplication

import grails.transaction.Transactional
import twitter4j.FilterQuery
import twitter4j.StallWarning
import twitter4j.Status
import twitter4j.StatusDeletionNotice
import twitter4j.StatusListener
import twitter4j.TwitterStream
import twitter4j.TwitterStreamFactory
import java.util.regex.Matcher
import java.util.regex.Pattern

@Transactional
class LiveTwitterDataService {

    def getIndustryData(String [] theIndustries) {

        PrintWriter printWriter = new PrintWriter(new BufferedWriter(new FileWriter("result.txt")))

        //Listens to Twitter statuses and carries out the following methods on the status
        StatusListener listener = new StatusListener() {
            @Override
            void onStatus(Status status) {

                printWriter.write(status.getText())

            }

            @Override
            void onDeletionNotice(StatusDeletionNotice statusDeletionNotice) {

            }

            @Override
            void onTrackLimitationNotice(int numberOfLimitedStatuses) {

            }

            @Override
            void onScrubGeo(long userId, long upToStatusId) {

            }

            @Override
            void onStallWarning(StallWarning warning) {

            }

            @Override
            void onException(Exception ex) {

            }
        }

        TwitterStream stream = new TwitterStreamFactory().getInstance()
        stream.addListener(listener)

        FilterQuery fq = new FilterQuery()

        fq.track(theIndustries)

        stream.filter(fq)

    }

    def processData(String type) {

        int count = 0;

        File file = new File("result.txt")
        try {
            Scanner sc = new Scanner(file)

            while (sc.hasNextLine()) {

                String line = sc.nextLine()

                Pattern p = Pattern.compile(type)

                Matcher m = p.matcher(line)

                while (m.find()) {
                    count++
                }

            }
        }

        catch (IOException e) {

        }

        return count
    }
}
