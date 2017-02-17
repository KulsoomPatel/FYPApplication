package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorDataService {

    def getSectors() {

        def sectors = Sector.list()

    }

    def getSectorByName(String sectorName) {

        def query = Sector.where {
            name == sectorName
        }
        def theSector = query.find()
        return theSector
    }

    def saveSector(Sector newSector) {

        def message

        if (newSector.validate()) {
            newSector.save(flush: true)
            message = newSector.name + " has been saved"
        } else {
            message = "Unable to save " + newSector.name
        }

        return message
    }
}
