var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <input type="text"/>
                <Filters />
            </div>
        );
    }
});

var Filters = React.createClass({
    displayBranches: function(){
        React.render(<Branches />, document.getElementById("filter-list"));
    },
    displayProvinces: function(){
        React.render(<Provinces />, document.getElementById("filter-list"))
    },
    render: function () {
        return (
            <div>
                <span className="btn btn-default" onClick={this.displayBranches}>Select Branches</span>
                <span className="btn btn-default" onClick={this.displayProvinces}>Select Provinces</span>
            </div>
        );
    }
});