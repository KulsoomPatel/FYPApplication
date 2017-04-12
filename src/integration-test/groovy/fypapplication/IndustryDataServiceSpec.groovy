package fypapplication

import grails.test.mixin.integration.Integration
import grails.transaction.*
import spock.lang.*

@Integration
@Rollback

class IndustryDataServiceSpec extends Specification {

    @Shared
    Sector techSector
    Industry AI
    Industry HCI
    def industryDataService

    def setup() {

        techSector = new Sector(name: "Technology")
        techSector.save(flush: true)
        AI = new Industry(name: "Artificial Intelligence")
        HCI = new Industry(name: "HCI")
        techSector.addToIndustries(AI)
        techSector.addToIndustries(HCI)

    }

    def "attach the sector to the industry"() {

        when: "the industry is saved"

        def messageAI = industryDataService.insertIndustry(AI)
        def messageHCI = industryDataService.insertIndustry(HCI)

        then: "the industry should be saved and render the message"
        messageAI == AI.name + " has been saved"
        messageHCI == HCI.name + " has been saved"
    }

    def "get the industries which match the sector"() {
        given: "a sector name"
        String tech = "Technology"

        when: "get the industries"
        def industryList = industryDataService.getIndustriesToSector(tech)

        then: "only the industries which are within this sector should be returned"
        industryList.size == 2
    }

    def cleaup() {
        AI.delete(flush: true)
        HCI.delete(flush: true)
        techSector.delete(flush: true)
    }

}

