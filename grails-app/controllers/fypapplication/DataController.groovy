package fypapplication

import grails.rest.*
import grails.converters.*

class DataController {

    def sectorDataService

    def saveSector(Sector newSector) {

        def message = sectorDataService.saveSector(newSector)

        render message
    }
}
