/**
 * Created by Z on 2017/12/26.
 */
const initialState = {
  isShow: false
};
//  导出reducer player
export default function playerShow(state = initialState, action) {
  switch (action.type) {
    case "IS_SHOW":
      return{
        isShow:action.isShow,
      };
    default:
      return state
  }
}