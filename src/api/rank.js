/**
 * Created by Z on 2017/12/24.
 */
import {baseUrl} from './constant'
import axios from 'axios'

export function getRankRanks() {
  let promiseArr = [];
  for (let i = 0; i < 22; i++) {
    promiseArr[i] = _getRankByIndex(i)
  }
  return Promise.all(promiseArr)
}

function _getRankByIndex(index) {
  const url = `${baseUrl}/top/list`;
  const data = {
    idx: index
  };
  return axios.get(url, {params: data})
    .then((response) => {
      if (response.data.code === 200) {
        return response.data.playlist
      }
    })
}