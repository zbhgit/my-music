import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
