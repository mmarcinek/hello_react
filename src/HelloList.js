import React, { Component } from 'react';
import Hello from './Hello';
import './HelloList.css';

class HelloList extends Component{
  constructor(props){
    super(props)
    this.state = {greetings: ['Esther', 'Michael', 'Sir', 'Scott']}
  }


  renderGreetings(){
    return(
      this.state.greetings.map(name => (
        <Hello key={name} name={name} />
      )
    ));
  }
  
  render(){
    return(
      <div className="HelloWorldList">
        {this.renderGreetings()}
      </div>
    )
  }
}

export default HelloList;