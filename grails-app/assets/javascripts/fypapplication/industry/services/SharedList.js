/**
 * Created by Kulsoom on 17/03/2017.
 */

angular.module("fypapplication.industry")
    .factory("SharedList", SharedList);


function SharedList() {
    var list = [];

    var getList = function () {
        return list;
    };

    var clearList = function () {
        list.length = 0;
    };

    return {
        getList: getList,
        clearList: clearList
    }

}

