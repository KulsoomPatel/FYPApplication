package fypapplication

import com.google.gson.JsonObject
import grails.rest.*
import grails.converters.*

class ProcessController {

    def cleanTweetsService

    def processForSentiment() {

        String[] theIndustries = params.list("theIndustries")
        cleanTweetsService.cleanTweets(theIndustries)
        cleanTweetsService.findSentiment()

    }

    def displaySentiment() {
        /*String[] theIndustries = params.list("theIndustries")*/

        String[] theIndustries = ["Doctor", "Nurse", "Midwife"]
        def sentimentResults = cleanTweetsService.showSentiment(theIndustries)

        respond sentimentResults

    }
}
