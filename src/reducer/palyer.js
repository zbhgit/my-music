/**
 * Created by Z on 2017/12/25.
 */
// 初始状态
const initialState = {
  id: 418603077,
};
//  导出reducer player
export default function player(state = initialState, action) {
  switch (action.type) {
    case "SONG_ID":
      return Object.assign({}, ...state, {
        id: action.id,
      });
    default:
      return state
  }
}