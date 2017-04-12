package fypapplication

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Shared
import spock.lang.Specification

/**
 * Created by Kulsoom on 12/04/2017.
 */
@Mock(Sector)
@TestFor(SectorDataService)
class SectorDataServiceSpec extends Specification{

    @Shared
    Sector theSector

    def setup(){
        theSector= new Sector(name: "Business").save(flush:true)
    }

    def "get the sector matching the name provided"() {

        given: "a sector name"
        String business = "Business"

        when: "call the service method"
        def secctor = service.getSectorByName(business)

        then: "The sector should match the name provided"
        secctor.name == business
    }

}
