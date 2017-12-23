/**
 * Created by Z on 2017/12/23.
 */
import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/home'
import HotSinger from '../pages/hot_singer'
import SingerDetail from '../pages/singer/'
import Rank from '../pages/rank'
import Search from '../pages/search'
import Player from '../pages/player'
import SongDetail from '../pages/songList_detail'
export default class RouterMap extends Component {
  render() {
    const relative = {
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    };
    return (
      <BrowserRouter>
        <div style={relative}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/singer" component={HotSinger}/>
          <Route path="/singer/:singerId" component={SingerDetail}/>
          <Route path="/rank" component={Rank}/>
          <Route path="/search" component={Search}/>
          <Route path="/song/:songListId" component={SongDetail}/>
          <Player/>
        </div>
      </BrowserRouter>
    )
  }
}