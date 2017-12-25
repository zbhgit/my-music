/**
 * Created by Z on 2017/12/25.
 */
import React, {Component} from 'react'
import loadingImg from './loading.gif'
export default class Loading extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent:'space-around',
      alignItems: 'center',
      minHeight: '80vh',
      fontSize: '10px'

    };
    return (
      <div style={style} className="loading">
        <div style={{
          textAlign: 'center'
        }}>
        <img src={loadingImg} width="24" height="24" alt="加载中" />
          <p>正在加载...</p>
        </div>
      </div>
    )
  }
}