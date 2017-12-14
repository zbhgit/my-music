/**
 * Created by Z on 2017/12/14.
 */
import Header from 'components/header/header'
import Nav from 'components/nav/nav'
import React, {Component} from 'react'
import RankList from './rank_list/rank_list'
export default class Rank extends Component {
  render() {
    return (
      <div className="rank">
        <Header/>
        <Nav/>
        <RankList/>
      </div>
    )
  }
}