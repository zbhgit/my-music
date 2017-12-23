/**
 * Created by Z on 2017/12/22.
 */
import Header from 'components/header/header'
import Nav from 'components/nav/nav'
import HotSearch from './hot_search/hot_search'
import React, {Component} from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <Header/>
        <Nav/>
        <HotSearch/>
      </div>
    )
  }
}