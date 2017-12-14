/**
 * Created by Z on 2017/12/14.
 */
import './singer_list.scss'
import React, {Component} from 'react'
export default class SingerList extends Component {
  constructor(props) {
    super(...props)
    this.state = {
      singers: []
    }
  }
  render() {
    let {singers} = this.state;
    let elSingerList = singers.map((singer)=>{
      return (<li className="singer_item" key={singer.id}>
        <img className="singer_img" src={singer.img1v1Url} alt="歌手相片"/>
        <p className="singer_name">歌手: <span>{singer.name}</span> {singer.alias[0] ? `(${singer.alias[0]})`: ''}</p>
        <span className="icon iconfont icon-right"></span>
      </li>)
    });
    return (
      <ul className="singer_list">
        {elSingerList}
      </ul>
    )
  }
  componentDidMount() {
    fetch('http://www.zhangbinhe.com:3000/top/artists?offset=0&limit=30').then(r=>r.json()).then(r=>{
      if(r.code === 200 ){
        let {artists} = r
        this.setState({
          singers: artists
        })
      }

    }).catch(e=>{
      console.log(e)
    })
  }
}