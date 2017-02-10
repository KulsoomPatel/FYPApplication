package fypapplication


import grails.rest.*
import grails.converters.*

class DataController {

    def sectorDataService

    def saveSector(String sectorName) {

        def message = sectorDataService.saveSector(sectorName)

        render message
    }
}
