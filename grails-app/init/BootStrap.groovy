import fypapplication.Industry
import fypapplication.Sector
import org.grails.datastore.mapping.query.Query

class BootStrap {

    def init = { servletContext ->

        def sectors = ["Technology", "Engineering", "Business"]

        def techIndustry = ["Computer Science", "Artificial Intelligence", "Software Engineering"]
        def engIndustry = ["Chemical Engineering", "Mechanical Engineering", "Civil Engineering"]
        def businessIndustry = ["Human Resources", "Accounting", "CEO"]

        Sector techSector = new Sector(name: "Technology").save(flush: true)
        techIndustry.each { it ->

            techSector.addToIndustries(new Industry(name: it)).save(flush: true)
        }

        Sector engSector = new Sector(name: "Engineering").save(flush: true)

        engIndustry.each { it ->
            engSector.addToIndustries(new Industry(name: it)).save(flush: true)
        }

        Sector busiSector = new Sector(name: "Business").save(flush: true)

        businessIndustry.each { it ->
            busiSector.addToIndustries(new Industry(name: it)).save(flush: true)
        }

    }
    def destroy = {
    }
}
