import React from 'react';
import ReactDOM from 'react-dom';
import Application from './src';
import { unregister } from './service-worker';

// let NODE_ENV = "development"
// if (NODE_ENV !== "development") console.log = () => {};

const element = document.querySelector('#fastrackpackers');

ReactDOM.render(<Application />, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
