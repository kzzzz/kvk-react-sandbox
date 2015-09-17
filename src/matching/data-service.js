var dataService = (function () {
    "use strict";
    return {
        getBranches: function () {
            return $.getJSON("data/branches.json");
        },
        getProvinces: function(){
            return $.getJSON("data/provinces.json")
        },
        getCompanies: function () {
            return $.getJSON("data/companies.json")
        }
    }
})();