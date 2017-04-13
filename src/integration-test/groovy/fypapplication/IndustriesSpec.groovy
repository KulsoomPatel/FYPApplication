package fypapplication

import grails.test.mixin.integration.Integration
import grails.transaction.*
import spock.lang.*

@Integration
@Rollback

class IndustriesSpec extends Specification {

    @Shared
    Sector techSector
    Industry AI
    Industry HCI
    Industry softEng
    def industryDataService

    def setup() {
        techSector = new Sector(name: "Technology").save(flush: true)
        softEng = new Industry(name: "Software Engineering", sector: techSector).save(flush: true)
        AI = new Industry(name: "Artificial Intelligence", sector: techSector)
        HCI = new Industry(name: "HCI", sector: techSector)
    }

    def "save industries"() {

        when: "the industry is saved"
        def messageAI = industryDataService.insertIndustry(AI)
        def messageHCI = industryDataService.insertIndustry(HCI)

        then: "the industry should be saved and render the message"
        messageAI == AI.name + " has been saved"
        messageHCI == HCI.name + " has been saved"
    }

    def "delete industry"() {

        given: "an industry name"
        String sf = "Software Engineering"

        when: "delete the industry"
        def message = industryDataService.deleteIndustry(sf)

        then: "a message should be returned"
        message == sf + " has been deleted"

    }

}

