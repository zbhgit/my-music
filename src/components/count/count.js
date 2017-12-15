/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import './count.scss'

export default class Count extends Component {
  render() {
    const {iconType, count} = this.props;
    const className = `icon iconfont ${iconType}`;
    return (
      <div className="countWrapper">
        <span className={className}></span>
        <span className="count">{count}</span>
      </div>
    )

  }
}