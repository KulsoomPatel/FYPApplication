package fypapplication

import grails.test.mixin.integration.Integration
import grails.transaction.*
import spock.lang.*

@Integration
@Rollback

class GetIndustriesBySectorSpec extends Specification {

    @Shared
    Sector techSector
    Industry AI
    Industry HCI
    def industryDataService

    def setup() {
        techSector = new Sector(name: "Technology").save(flush: true)
        AI = new Industry(name: "Artificial Intelligence", sector: techSector).save(flush: true)
        HCI = new Industry(name: "HCI", sector: techSector).save(flush: true)
    }


    def "get the industries which match the sector"() {

        given: "a sector name"
        String tech = "Technology"

        when: "get the industries"
        def industryList = industryDataService.getIndustriesToSector(tech)

        then: "only the industries which are within this sector should be returned"
        industryList.size == 2
    }
}
