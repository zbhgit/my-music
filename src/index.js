import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger,RankList,SongDetail,Singer,Player} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<Player />, document.getElementById('root'));
registerServiceWorker();
