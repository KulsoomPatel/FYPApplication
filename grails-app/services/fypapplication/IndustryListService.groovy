package fypapplication

import grails.transaction.Transactional

@Transactional
class IndustryListService {

    def getIndustryList() {

        def theIndustries = MyIndustries.list()
        def listIndustries = []

        theIndustries.each { it ->
            listIndustries.add(it.industry)
        }
        return listIndustries;
    }

    def insertIndustryList(String[] industries) {

        industries.each { it ->
            new MyIndustries(industry: it).save(flush: true)
        }
    }

    def deleteIndustryList() {

        def savedIndustries = MyIndustries.list()

        if (savedIndustries != null) {
            savedIndustries.each { it ->
                it.delete(flush: true)
            }
        }
    }
}
