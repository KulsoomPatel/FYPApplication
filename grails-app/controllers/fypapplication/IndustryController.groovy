package fypapplication

import grails.rest.*
import grails.converters.*

class IndustryController {

    def liveTwitterDataService
    def sectorDataService
    def industryDataService

//returns a list of all sectors
    def getSectorList() {

        def sectorList = sectorDataService.getSectors()

        respond sectorList, model: [sectorCount: sectorList.size()]
    }

//sends a list of filter queries to Twitter when getting live data
    def getIndustryData() {

        String[] theIndustries = params.list("theIndustries")

        liveTwitterDataService.getIndustryData(theIndustries)
    }

    def displayData() {

        String[] theIndustries = params.list("theIndustries")
        def industryCount = []
        for (String industry : theIndustries) {
            int countMentions = liveTwitterDataService.processData(industry)
            industryCount.add(countMentions)
        }
        respond industryCount
    }

//returns a list of industries which match the sector name
    def getIndustryList(String sectorName) {

        def industryList = industryDataService.getIndustriesToSector(sectorName)

        respond industryList, view: 'industryList', model: [industryCount: industryList.size()]
    }
}

