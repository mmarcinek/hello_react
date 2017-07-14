import React, { Component } from 'react';
import Hello from './Hello';
import AddGreeter from './AddGreeter';
import './HelloList.css';

class HelloList extends Component{
  constructor(props){
    super(props)
    this.state = {greetings: []}
    this.addGreeting = this.addGreeting.bind(this);
  }

  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
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
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    )
  }
}

export default HelloList;