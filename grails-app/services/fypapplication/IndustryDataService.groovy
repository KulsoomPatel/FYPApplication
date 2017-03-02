package fypapplication

import grails.transaction.Transactional

@Transactional
class IndustryDataService {

    def getIndustriesToSector(String sectorName) {

        def query = Industry.where {
            sector.name == sectorName
        }
        def industries = query.list()

        return industries
    }

    def insertIndustry(Industry newIndustry) {

        def message

        if (newIndustry.validate()) {
            newIndustry.save(flush: true)
            message = newIndustry.name + " has been saved"
        } else {
            message = newIndustry.name + " is not valid"
        }

        return message
    }
}

