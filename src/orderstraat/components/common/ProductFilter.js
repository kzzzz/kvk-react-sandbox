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
