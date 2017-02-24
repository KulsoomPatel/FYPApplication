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

        def messageStatus

        if (theIndustries != null) {

            liveTwitterDataService.getIndustryData(theIndustries)
            messageStatus = "Success! Writing Twitter Data to file"

        } else {
            messageStatus = "An Error Occurred! Unable to wirte data"

        }
        respond messageStatus

    }

    def displayData() {

        int accountingData = liveTwitterDataService.processData("accounting")
        int teachingData = liveTwitterDataService.processData("teaching")
        int engineeringData = liveTwitterDataService.processData("engineering")
        int retailData = liveTwitterDataService.processData("retail")

        [accountingData: accountingData, teachingData: teachingData, engineeringData: engineeringData, retailData: retailData]
    }

//returns a list of industries which match the sector name
    def getIndustryList(String sectorName) {

        def industryList = industryDataService.getIndustriesToSector(sectorName)

        respond industryList, view: 'industryList', model: [industryCount: industryList.size()]
    }
}

