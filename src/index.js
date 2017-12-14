import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger,RankList} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<RankList />, document.getElementById('root'));
registerServiceWorker();
