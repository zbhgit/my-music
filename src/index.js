import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
