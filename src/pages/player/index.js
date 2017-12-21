import React, {Component} from 'react'
import Header from './header/player_header'
import Disc from './lyric/disc'
export default class Player extends Component {
  render() {
    const style = {
      backgroundColor: '#231e1b',
      width: '100%',
      height: '100vh',
    };
    return (
      <div style={style} className="palyer">
        <Header/>
        <Disc/>
      </div>
    )
  }
}

