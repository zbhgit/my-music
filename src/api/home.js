/**
 * Created by Z on 2017/12/23.
 */
import axios from 'axios'

const url = 'http://www.zhangbinhe.com:3000';
// 获取banner轮播数据

export function getBannerData() {
  return axios.get(`${url}/banner`)
    .then((response) => {
    return Promise.resolve(response.data)
    })
}


