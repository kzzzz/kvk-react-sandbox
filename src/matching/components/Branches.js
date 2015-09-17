var Branches = React.createClass({
    getInitialState: function () {
        return {
            branches: []
        }
    },
    componentDidMount: function () {
        dataService.getBranches().then(function (branches) {
            if (this.isMounted()) {
                this.setState({
                    branches: branches
                });
            }
        }.bind(this));
    },
    eachBranch: function (branch) {
        return <Branch data={branch}/>;
    },
    render: function () {
        var branches = this.state.branches.map(this.eachBranch);
        return (
            <div>{branches}</div>
        );
    }
});

var Branch = React.createClass({
    render: function () {
        return (
            <li>
                <span>{this.props.data.name}</span>
            </li>
        );
    }
});
