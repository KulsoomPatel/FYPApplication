package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorService {

    def getIndustries() {

        def sectors = Sector.list()

    }
}
