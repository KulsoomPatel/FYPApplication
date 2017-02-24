package fypapplication

import grails.rest.*
import grails.converters.*

class DataController {

    def sectorDataService
    def industryDataService

    def saveSector(Sector newSector) {

        def message = sectorDataService.saveSector(newSector)

        render message
    }

    def getSector(String sectorName) {
        Sector theSector = sectorDataService.getSectorByName(sectorName)

        render theSector, view: 'getSector'
    }

    def saveIndustry(Industry newIndustry) {

        industryDataService.insertIndustry(newIndustry)
    }
}
