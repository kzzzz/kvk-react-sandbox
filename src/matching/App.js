var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Matching tool</h1>
                    <Description />
                    <SearchBar />
                </div>
                <Footer />
            </div>
        );
    }
});

var Description = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Description here...</h2>
            </div>
        );
    }
});


React.render(<App />, document.getElementById("content"));