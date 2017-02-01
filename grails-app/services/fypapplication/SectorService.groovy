package fypapplication

import grails.transaction.Transactional

@Transactional
class SectorService {

    def getSectors() {

        def sectors = Sector.list()

    }
}
