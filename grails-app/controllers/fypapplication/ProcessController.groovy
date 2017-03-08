package fypapplication


import grails.rest.*
import grails.converters.*

class ProcessController {

    def cleanTweetsService

    def cleanTweets() {

        cleanTweetsService.cleanTweets()
    }
}
