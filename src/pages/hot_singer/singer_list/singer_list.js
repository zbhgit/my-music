/**
 * Created by Z on 2017/12/14.
 */
import './singer_list.scss'
import React, {Component} from 'react'
import SingerItem from 'components/singer_item/singer_item'
export default class SingerList extends Component {
  constructor(props) {
    super(...props)
    this.state = {
      singers: []
    }
  }

  render() {
    let {singers} = this.state;
    let elSingerList = singers.map((singer) => {
      return (
        <li className="singer_item" key={singer.id}>
          <SingerItem singer={singer} icon={true} />
        </li>
      )
    });
    return (
      <ul className="singer_list">
        {elSingerList}
      </ul>
    )
  }

  componentDidMount() {
    fetch('http://www.zhangbinhe.com:3000/top/artists?offset=0&limit=30').then(r => r.json()).then(r => {
      if (r.code === 200) {
        let {artists} = r;
        console.log(artists);
        this.setState({
          singers: artists
        })
      }

    }).catch(e => {
      console.log(e)
    })
  }
}