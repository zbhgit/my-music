import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger,RankList,SongDetail} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<SongDetail />, document.getElementById('root'));
registerServiceWorker();
