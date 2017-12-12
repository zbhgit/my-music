/**
 * Created by Z on 2017/12/12.
 */
import React,{Component} from 'react';
import Header from './header/header'
import Carousel from './carousel/carousel'
import MusicList from './music_list/music_list'
import Nav from './nav/nav'
class Home extends Component {
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

export default Home