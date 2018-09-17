var HelloWorld = (props) => {
  return React.createElement("div", null, `Hello ${props.name}`)
}

var Application = createReactClass({
  render() {
    return React.createElement(HelloWorld, {name:"toto"})
  }
});

ReactDOM.render(React.createElement(Application), document.getElementById("app"))
