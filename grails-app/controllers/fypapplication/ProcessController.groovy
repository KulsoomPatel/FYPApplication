package fypapplication

import grails.rest.*
import grails.converters.*

class ProcessController {

    def cleanTweetsService

    def processForSentiment() {

        String[] theIndustries = params.list("theIndustries")
        cleanTweetsService.cleanTweets(theIndustries)
        cleanTweetsService.findSentiment()

    }
}
