/**
 * Created by Kulsoom on 22/03/2017.
 */

angular.module("fypapplication.industry")
    .controller("SentimentController", ["ProcessFactory", "SharedList", SentimentController]);

function SentimentController(ProcessFactory, SharedList) {

    var vm = this;

    vm.theIndustries = SharedList.getList();
    ProcessFactory.list({theIndustries: vm.theIndustries, action: 'displaySentiment'}, function (response) {
        vm.sentimentResults = response;
        vm.drawSentimentResults()


    });

    vm.drawSentimentResults = function () {

    }


}