/// <reference path="../typings/index.d.ts" />
import * as React from "react"
import * as ReactDOM from "react-dom"
// import * as _ from "lodash"

// var Hello = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name}</div>;
//     }
// });
 
// ReactDOM.render(<Hello name="World" />, document.body);

var Hello = React.createClass({
  render: function() {
    var name = "Tercel";
    return <div>Hello {name}.</div>;
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);
