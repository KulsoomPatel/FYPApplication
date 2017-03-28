package fypapplication

/**
 * Created by Kulsoom on 24/03/2017.
 */
class SentimentViewer {

    String sentimentType
    HashMap<String, Integer> industryCount

    SentimentViewer(String sentiment) {
        this.sentimentType = sentiment
        this.industryCount = new HashMap<String, Integer>()
    }

    String getSentiment() {
        return sentimentType
    }

    boolean checkSentimentCount(String industry) {
        if (industryCount.containsKey(industry)) {
            return true
        } else {
            return false

        }
    }

    def initialIndustryInsert(String[] theIndustries) {
        theIndustries.each { it ->
            industryCount.put(it, 0)
        }
    }

    def updateCount(String industry) {

        industryCount.put(industry, industryCount.get(industry) + 1)

    }

    def getIndustryCount() {
        return industryCount
    }

}