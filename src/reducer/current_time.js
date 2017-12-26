/**
 * Created by Z on 2017/12/26.
 */
const initialState = {
  currentTime: 0,
};
//  导出reducer player
export default function currentTime(state = initialState, action) {
  switch (action.type) {
    case "SET_TIME":
      return Object.assign({}, ...state, {
        currentTime: action.currentTime,
      });
    default:
      return state
  }
}