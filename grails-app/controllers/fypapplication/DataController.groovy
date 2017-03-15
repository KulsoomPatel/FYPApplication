package fypapplication

import grails.rest.*
import grails.converters.*

class DataController {

    def sectorDataService
    def industryDataService

    def saveSector(Sector newSector) {

        String message = sectorDataService.saveSector(newSector)

        respond message
    }

    def deleteSector(String sectorName) {

        String message = sectorDataService.deleteSector(sectorName)

        respond message
    }

    def getSector(String sectorName) {
        def theSector = sectorDataService.getSectorByName(sectorName)

        respond theSector
    }

    def saveIndustry(Industry newIndustry) {

        String message = industryDataService.insertIndustry(newIndustry)

        respond message
    }

    def deleteIndustry(String industryName) {

        String message = industryDataService.deleteIndustry(industryName)

        respond message
    }
}
