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
        console.log('Display branches')
    },
    displayProvinces: function(){
        console.log('Display provinces')
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