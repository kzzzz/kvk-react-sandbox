var App = React.createClass({
    getInitialState: function () {
        return {
            showFilters: false,
            filters: [],
            selectedFilters: [],
            products: [],
            productsToDisplay: []
        }
    },
    componentDidMount: function () {
        dataService.getProductFilters().then(function (response) {
            if (this.isMounted()) {
                this.setState({
                    filters: response.filters,
                    products: response.products,
                    productsToDisplay: response.products
                });
            }
        }.bind(this));
    },
    selectFilter: function (id) {

        var selectedFilters = updateSelectedFilters(this.state.selectedFilters);

        this.setState({
            selectedFilters: selectedFilters,
            productsToDisplay: getProductsToDisplay(selectedFilters, this.state.products)
        });

        function updateSelectedFilters(selectedFilters) {
            var contains = _.contains(selectedFilters, id);

            if (contains) {
                _.remove(selectedFilters, function (filter) {
                    return filter === id;
                })
            } else {
                selectedFilters.push(id);
            }

            return selectedFilters;
        }

        function getProductsToDisplay(selectedFilters, products) {
            if (selectedFilters.length === 0) {
                return products;
            } else {
                return _.filter(products, function (product) {
                    var result = _.difference(selectedFilters, product.tags);
                    return result.length === 0;
                })
            }
        }
    },
    toggleDisplayFilters: function () {
        this.setState({
            showFilters: !this.state.showFilters
        });
    },
    eachFilter: function (filter, i) {
        var isSelected = _.contains(this.state.selectedFilters, filter.id);
        return ( <Filter key={filter.id}
                         index={i}
                         filter={filter}
                         isSelected={isSelected}
                         toggleSelect={this.selectFilter}/>);
    },
    eachProduct: function (product, i) {
        return ( <Product key={product.id}
                          product={product}/>);
    },
    render: function () {
        var hidden = this.state.showFilters ? '' : 'hidden';
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Select product</h1>
                </div>
                <div class="panel-body">
                    <div><ProgressFlow /></div>
                    <div><OrderInfo /></div>
                    <div className={hidden}>
                        <div>
                            <ul className="list-group">{this.state.filters.map(this.eachFilter)}</ul>
                        </div>
                    </div>
                    <FilterInvoker displayed={this.state.showFilters}
                                   toggleDisplayFilters={this.toggleDisplayFilters}
                                   selectedFilters={this.state. selectedFilters}/>

                    <div>
                        <ul className="list-group">{this.state.productsToDisplay.map(this.eachProduct)}</ul>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(<App />, document.getElementById("content"));