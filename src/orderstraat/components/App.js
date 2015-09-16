var App = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Orderstraat</h1>
                </div>
                <div class="panel-body">
                    <ProgressFlow />
                    <OrderInfo />
                    <ProductFilters />
                </div>
            </div>
        );
    }
});

React.render(<App />, document.getElementById("content"));