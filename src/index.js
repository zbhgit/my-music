import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger,RankList,SongDetail,Singer,Player,Search} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<Search />, document.getElementById('root'));
registerServiceWorker();
