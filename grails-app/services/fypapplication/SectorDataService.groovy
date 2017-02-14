package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorDataService {

    def getSectors() {

        def sectors = Sector.list()

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
