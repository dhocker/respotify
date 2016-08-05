import React from "react";
import ReactDOM from "react-dom";
import Greeting from './greeting';

const greeting = (t) => {
    console.log(`Hello! The time is ${t}!`);
};

var d = new Date();
greeting(d.toISOString());

ReactDOM.render(
    <Greeting time={d.toISOString()}/>,
    document.getElementById('container')
);