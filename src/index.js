import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import fontAwesomeLibrary from './resources/services/iconsService.js';
import Io from './resources/services/Io.js';
import './styles/app.sass';

// window.addEventListener('message', e => {
//     if ('production' !== process.env.NODE_ENV) {
//         console.clear();
//     }
// });

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
