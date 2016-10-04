"use strict";
/// <reference path="../typings/index.d.ts" />
var React = require("react");
var ReactDOM = require("react-dom");
// import * as _ from "lodash"
// var Hello = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name}</div>;
//     }
// });
// ReactDOM.render(<Hello name="World" />, document.body);
var Hello = React.createClass({
    render: function () {
        var name = "Tercel";
        return React.createElement("div", null, "Hello ", name, ".");
    }
});
ReactDOM.render(React.createElement(Hello, null), document.getElementById('hello'));
