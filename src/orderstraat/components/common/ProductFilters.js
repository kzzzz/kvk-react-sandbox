var ProductFilters = React.createClass({
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
            <div>
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
        );
    }
});

var FilterInvoker = React.createClass({
    render: function () {

        var glyphicon = this.props.displayed ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down";
        return (
            <div onClick={this.toggleDisplay} className="well">
                <h3>{this.getTitle()}
                            <span className="pull-right">
                                <button className="btn btn-xs btn-info">
                                    <span className={glyphicon}></span>
                                </button>
                            </span>
                </h3>
            </div>
        );
    },
    toggleDisplay: function () {
        this.props.toggleDisplayFilters();
    },
    getTitle: function () {
        if (this.props.displayed) {
            return "Verberg filters";
        }

        var count = this.props.selectedFilters.length;

        if (count === 0) {
            return "Filter op productkenmerken";
        }

        return count === 1
            ? 'Gefilterd op ' + this.props.selectedFilters.length + ' kenmerk'
            : 'Gefilterd op ' + this.props.selectedFilters.length + ' kenmerken';
    }
});

var Filter = React.createClass({
    render: function () {
        var glyphicon = this.props.isSelected ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-plus';
        var button = this.props.isSelected ? 'btn btn-xs btn-success' : 'btn btn-xs btn-warning';
        return (
            <li className="list-group-item" onClick={this.toggleSelect}>{this.props.filter.name}
                        <span className="pull-right">
                            <button className={button}>
                                <span className={glyphicon}></span>
                            </button>
                        </span>
            </li>
        );
    },
    toggleSelect: function () {
        this.props.toggleSelect(this.props.filter.id);
    }
});

var Product = React.createClass({
    render: function () {
        return (
            <li className="list-group-item">{this.props.product.name}</li>
        );
    }
});
