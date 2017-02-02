package fypapplication

import grails.rest.*
import grails.converters.*

class IndustryController {

    def liveTwitterDataService
    def sectorService
    def industryDataService


    def getSectorList() {

        def sectorList = sectorService.getSectors()
        respond sectorList
    }

    def getIndustryData() {

        liveTwitterDataService.getIndustryData()
    }

    def displayData() {

        int accountingData = liveTwitterDataService.processData("accounting")
        int teachingData = liveTwitterDataService.processData("teaching")
        int engineeringData = liveTwitterDataService.processData("engineering")
        int retailData = liveTwitterDataService.processData("retail")

        [accountingData: accountingData, teachingData: teachingData, engineeringData: engineeringData, retailData: retailData]
    }

    def getIndustryList(String sectorName) {

        def industryList = industryDataService.getIndustriesToSector(sectorName)

        respond industryList
    }
}
