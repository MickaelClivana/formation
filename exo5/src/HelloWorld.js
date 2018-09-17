import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  render() {
    console.log("render");
    return <h1>Hello {this.props.name}</h1>;
  }
  constructor(props){
    super(props);
    this.state = {};
    console.log("constructor");
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return {};
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
}
HelloWorld.propTypes = {
  name : PropTypes.string.isRequired
}
export default HelloWorld;
