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

        if (newIndustry.validate()) {
            newIndustry.save(flush: true)
        }
    }
}

