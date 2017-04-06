package fypapplication

class ProcessController {

    def cleanTweetsService
    def generateWordCloudService

    def processForSentiment() {

        String[] theIndustries = params.list("theIndustries")
        cleanTweetsService.cleanTweets(theIndustries)
        cleanTweetsService.findSentiment()

    }

    def displaySentiment() {
        String[] theIndustries = params.list("theIndustries")

        /*String[] theIndustries = ["Doctor", "Nurse", "Midwife"]*/
        def sentimentResults = cleanTweetsService.showSentiment(theIndustries)

        respond sentimentResults

    }

    def cleanWordClouds() {

        generateWordCloudService.cleanTweetsWordCloud()
    }

    def getWordClouds() {

        def theIndustry = "CEO"
        generateWordCloudService.createWordClouds(theIndustry)
    }
}
