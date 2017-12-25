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
    const {history} = this.props;
    return (
      <div className="home">
        <Header history={history}/>
        <Nav/>
        <Carousel/>
        <MusicList/>
      </div>
    )
  }
}

export default Recommend