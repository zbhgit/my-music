/**
 * Created by Z on 2017/12/13.
 */
import React, {Component} from 'react'
import Header from 'components/header/header'
import Nav from 'components/nav/nav'
import SingerList from './singer_list/singer_list'
export default class HotSinger extends Component{
  render() {
    return (
      <div className="hotSinger">
        <Header/>
        <Nav/>
        <SingerList/>
      </div>
    )
  }
}