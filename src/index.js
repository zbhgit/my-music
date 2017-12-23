import React from 'react';
import ReactDOM from 'react-dom';
// import {Home,HotSinger,RankList,SongDetail,Singer,Player,Search} from './pages'
import RouterMap from './router/router'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
