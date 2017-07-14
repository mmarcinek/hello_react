import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  constructor(props){
    super(props)
    this.state = { greeting: 'Hello'}
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
      </div>
    );
  }
}

export default Hello;

