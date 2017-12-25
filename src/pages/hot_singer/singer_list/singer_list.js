/**
 * Created by Z on 2017/12/14.
 */
import './singer_list.scss'
import React, {Component} from 'react'
import SingerItem from 'components/singer_item/singer_item'
import LoadMore from 'components/load_more/load_more'
import {getSingerListData} from '../../../api/singer'
export default class SingerList extends Component {
  constructor(props) {
    super(...props);
    this.getSingerList = this.getSingerList.bind(this);
    this.state = {
      singers: [],
      hasMore: false,
      isLoadingMore: false
    }
  }

  getSingerList() {
    this.setState({
      isLoadingMore: true
    });
    const offset = this.state.singers.length;
    const limit = 20;
    getSingerListData(offset, limit)
      .then((response) => {
        if (response.code === 200) {
          const {more, artists} = response;
          this.setState({
            singers: this.state.singers.concat(artists),
            hasMore: more,
            isLoadingMore: false
          })
        }
      })
  }

  componentDidMount() {
    this.getSingerList()
  }

  render() {
    const style = {
      fontSize: '15px',
      height: '30px',
      textAlign: 'center',
      lineHeight: '30px',
      paddingBottom: '10px',
      color: '#969696'
    };
    let {singers, isLoadingMore, hasMore} = this.state;
    let elSingerList = singers.map((singer) => {
      return (
        <li key={singer.id}>
          <SingerItem singer={singer} icon={true}/>
        </li>
      )
    });
    return (
      <div>
        <ul className="singer_list">
          {elSingerList}
        </ul>
        {hasMore ? <LoadMore isLoadingMore={isLoadingMore} loadMoreFn={    this.getSingerList }/> :
          <p style={style}>没有更多了</p>}

      </div>
    )
  }


}