import React from 'react';
import ReactDOM from 'react-dom';
// import {Home,HotSinger,RankList,SongDetail,Singer,Player,Search} from './pages'
import RouterMap from './router/router'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import store from './store'
import './assets/css/index.css'
ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
