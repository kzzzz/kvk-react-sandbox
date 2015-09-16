var dataService = (function () {
  "use strict";

    function getOrder(){
        return $.getJSON('data/order.json');
    }

    function getProductFilters(){
        return $.getJSON('data/product-filters.json');
    }

    return{
        getOrder: getOrder,
        getProductFilters: getProductFilters
    }
})();