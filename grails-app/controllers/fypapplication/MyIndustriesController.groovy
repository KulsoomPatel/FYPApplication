package fypapplication


import grails.rest.*
import grails.converters.*

class MyIndustriesController {

    def industryListService

    def getList() {

        def theList = industryListService.getIndustryList()

        respond theList
    }

    def insertListData() {

        String[] theIndustries = params.list("theIndustries")

        industryListService.insertIndustryList(theIndustries)
    }

    def deleteListData() {

        industryListService.deleteIndustryList()

    }
}
