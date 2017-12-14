import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<HotSinger />, document.getElementById('root'));
registerServiceWorker();
