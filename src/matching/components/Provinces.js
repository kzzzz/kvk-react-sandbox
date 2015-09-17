var Provinces = React.createClass({
    getInitialState: function () {
        return {
            provinces:[]
        };
    },
    componentDidMount: function(){
      if(this.isMounted()){
          dataService.getProvinces().then(function(provinces){
              this.setState({
                  provinces: provinces
              });
          }.bind(this));
      }
    },
    render: function () {
        var provinces = this.state.provinces.map(
            function(province){
                return <Province data={province} />
            }
        );
        return (
          <ul>{provinces}</ul>
        );
    }
});

var Province = React.createClass({
    render: function () {
        return (
            <li>
                <span>{this.props.data.name}</span>
            </li>
        );
    }
});
