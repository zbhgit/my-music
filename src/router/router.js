/**
 * Created by Z on 2017/12/23.
 */
import React, {Component} from 'react'
import { Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {history} from '../store'
import { ConnectedRouter } from 'react-router-redux'
// import {bindActionCreators} from 'redux'
import Home from '../pages/home'
import HotSinger from '../pages/hot_singer'
import SingerDetail from '../pages/singer/'
import Rank from '../pages/rank'
import Search from '../pages/search'
import Player from '../pages/player'
import SongDetail from '../pages/songList_detail'
 class RouterMap extends Component {
  render() {
    const {isShow} = this.props;
    const height = isShow ? '100vh' :'auto';
    const relative = {
      width: '100%',
      height:height,
      position: 'relative',
      overflow: 'hidden'
    };
    return (
      <ConnectedRouter history={history}>
        <div style={relative}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/singer" component={HotSinger}/>
          <Route path="/singer/:singerId" component={SingerDetail}/>
          <Route path="/rank" component={Rank}/>
          <Route path="/search" component={Search}/>
          <Route path="/song/:songListId" component={SongDetail}/>
          <Player/>
        </div>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isShow:state.playerShow.isShow
  }
};
export default connect(
  mapStateToProps,
  null
)(RouterMap)