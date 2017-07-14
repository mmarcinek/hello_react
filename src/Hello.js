import React from 'react';
import './Hello.css'

const Hello = (props) => {
  return (
    <div className="Hello">Hello {props.name}</div>
  );
}

export default Hello;