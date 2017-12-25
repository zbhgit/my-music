/**
 * Created by Z on 2017/12/25.
 */
import { combineReducers } from 'redux'
import player from './palyer'


// 合并多个reducer
const rootReducer = combineReducers({
  player
});

export default rootReducer