/**
 * Created by Z on 2017/12/25.
 */
import { combineReducers } from 'redux'
import player from './palyer'
import playerShow from './player_show'


// 合并多个reducer
const rootReducer = combineReducers({
  player,
  playerShow
});

export default rootReducer