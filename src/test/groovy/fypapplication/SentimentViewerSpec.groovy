package fypapplication

import spock.lang.Shared
import spock.lang.Specification

/**
 * Created by Kulsoom on 11/04/2017.
 */

class SentimentViewerSpec extends Specification {

    @Shared
    SentimentViewer sentimentViewer = new SentimentViewer("Negative")
    String[] theIndustries = ["Doctor", "Nurse", "CEO", "Teacher"]

    def "insert the inital industries into SentimentViewer"() {

        when: "the SentimentViewer initialises the industryCount"
        sentimentViewer.initialIndustryInsert(theIndustries)

        then: "the creation of a HashMap with all the keys equal to 0"
        sentimentViewer.getIndustryCount() == ["Doctor": 0, "Nurse": 0, "CEO": 0, "Teacher": 0]
    }

    def "update the sentimentViewer count"() {

        when: "given an industry which matches the sentiment, update the count"
        sentimentViewer.updateCount("Nurse")

        then: "The nurse count should increase by 1"
        sentimentViewer.getIndustryCount() == ["Doctor": 0, "Nurse": 1, "CEO": 0, "Teacher": 0]
    }
}
