/**
 * Created by Z on 2017/12/22.
 */
import Header from 'components/header/header'
import Nav from 'components/nav/nav'
import HotSearch from './hot_search/hot_search'
import React, {Component} from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleHotClick = this.onHandleHotClick.bind(this);
    this.state = {
      keywords: ''
    }
  }
  onHandleChange(value) {
    this.setState({
      keywords: value
    })
  }
  onHandleHotClick(value) {
    this.setState({
      keywords: value
    })
  }
  render() {
    const {keywords} = this.state;
    const {history} = this.props;
    return (
      <div className="search">
        <Header history={history} setFatherValue={this.onHandleChange} keywords={this.state.keywords}/>
        <Nav/>
        <HotSearch onHandleHotClick={this.onHandleHotClick} keywords={keywords}/>
      </div>
    )
  }
}