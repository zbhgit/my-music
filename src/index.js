import React from 'react';
import ReactDOM from 'react-dom';
import {Home,HotSinger,RankList,SongDetail,Singer} from './pages'
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css'
ReactDOM.render(<Singer />, document.getElementById('root'));
registerServiceWorker();
