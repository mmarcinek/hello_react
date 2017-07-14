import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  constructor(props){
    super(props)
    this.state = { greeting: 'Hello'}
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }

  frenchify(){
    if(this.state.greeting === "Hello"){
      this.setState({greeting: 'Bonjour'});
    }
    else {
      this.setState({greeting: 'Hello'})
    }
  }

  render(){
    return (
      <div className="Hello">
        {this.state.greeting} {this.props.name}
        <br/>
        <button onClick={this.frenchify = this.frenchify.bind(this)}>Frenchify</button>
        <br/>
        <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

export default Hello;

