package fypapplication

import grails.transaction.Transactional

@Transactional
class IndustryDataService {

    def getIndustriesToSector(String sectorName) {

        def query = Industry.where {
            sector.name == sectorName
        }
        def industries = query.list(sort: "name")

        return industries
    }

    def insertIndustry(Industry newIndustry) {

        def message
        if (newIndustry != null) {
            if (newIndustry.validate()) {
                newIndustry.save(flush: true)
                message = newIndustry.name + " has been saved"
            } else {
                message = newIndustry.name + " is not valid"
            }
        } else {

            message = "Insert a Industry"
        }

        return message
    }

    def deleteIndustry(String industryName) {
        String message

        if (industryName != null) {
            Industry theIndustry = Industry.where {
                name == industryName
            }.get()

            if (theIndustry != null) {
                theIndustry.delete(flush: true)
                message = theIndustry.name + " has been deleted"
            } else {
                message = "Unable to delete " + theIndustry.name
            }
        } else {
            message = "Industry can not be empty"
        }
        return message
    }
}

