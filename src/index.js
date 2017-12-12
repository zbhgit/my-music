import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'
import './assets/css/normalize.css'
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
