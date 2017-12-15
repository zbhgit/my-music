import React,{Component} from 'react';
import './header.scss'
import MicCD from 'components/micCD/micCD'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="voice"></span>
        <div className="search">
          <span className="icon iconfont icon-search"></span>
          <input type="text" placeholder="搜索音乐、专辑、歌手"/>
        </div>
        <MicCD/>
      </div>
    )
  }
}

export default Header