/**
 * Created by Z on 2017/12/12.
 */
import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './nav.scss'
class Nav extends Component {
  render() {
    return (
      <ul className="home_nav">
        <li >
          <NavLink exact to="/" className="text" activeClassName='active'>推荐音乐</NavLink>
        </li>
        <li>
          <NavLink to="/singer" activeClassName='active' className="text">热门歌手</NavLink>
        </li>
        <li>
          <NavLink to="/rank" activeClassName='active' className="text">排行榜</NavLink>
        </li>
      </ul>
    )
  }
}

export default Nav