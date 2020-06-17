import React, { Component } from 'react';
import logo from '../logo.svg';
import  Modal from '../modal/Modal';
class About extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){

    console.log('About Page Will Mount');

  }

  shouldComponentUpdate(){
    console.log('About Should Update Will Mount');

  }

  componentDidMount(){

    console.log('About Page did Mount');

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default About;
