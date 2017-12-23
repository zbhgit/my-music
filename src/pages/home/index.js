/**
 * Created by Z on 2017/12/12.
 */
import React, {Component} from 'react';
import Header from 'components/header/header'
import Carousel from './carousel/carousel'
import MusicList from './music_list/music_list'
import Nav from 'components/nav/nav'
class Recommend extends Component {
  render() {
    return (
      <div className="home">
        <Header/>
        <Nav/>
        <Carousel/>
        <MusicList/>
      </div>
    )
  }
}

export default Recommend