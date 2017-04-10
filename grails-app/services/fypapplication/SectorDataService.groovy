package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorDataService {

    def getSectors() {

        def sectors = Sector.list(sort: "name")

        return sectors
    }

    def getSectorByName(String sectorName) {

        Sector theSector = Sector.where {
            name == sectorName
        }.get()

        return theSector
    }

    def saveSector(Sector newSector) {

        String message

        if (newSector.validate()) {
            newSector.save(flush: true)
            message = newSector.name + " has been saved"
        } else if (newSector.name == null) {
            message = "Insert a Sector"
        } else {
            message = "Unable to save " + newSector.name
        }

        return message
    }

    def deleteSector(String sectorName) {
        String message

        if (sectorName != null) {

            Sector theSector = Sector.where {
                name == sectorName
            }.get()

            if (theSector != null) {
                theSector.delete(flush: true)
                message = theSector.name + " has been deleted"
            } else {
                message = "Unable to delete " + theSector.name
            }

        } else {
            message = "Enter Sector Name"
        }

        return message
    }
}
