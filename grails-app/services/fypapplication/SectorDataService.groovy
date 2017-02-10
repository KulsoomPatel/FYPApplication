package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorDataService {

    def getSectors() {

        def sectors = Sector.list()

    }

    def saveSector(String sectorName) {

        def message
        Sector newSector = new Sector(name: sectorName)
        if (newSector.validate()) {
            newSector.save(flush: true)
            message = newSector.name + " has been saved"
        } else {
            message = "Unable to save " + newSector.name
        }

        return message
    }
}
