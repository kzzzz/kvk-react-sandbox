(function () {
  "use strict";
  return{
      getBranches: function(){
          return $.getJSON("data/branches");
      },

      getCompanies: function(){
          return $.getJSON("data/companies.json")
      }
  }
})();