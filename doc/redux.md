#### 添加redux的使用

1. 安装需要的包
```
   $ yarn add redux react-redux redux-devtools
```

2. 添加 reducer 和 actions

> reducer

```
// 初始状态
const initialState = {
  id: 0
};
//  导出reducer player 
export default function player(state = initialState, action) {
  switch (action.type) {
    case "SONG_ID":
      return Object.assign({}, ...state, {
        id: action.id
      });
    default:
      return state
  }
}
```
> action 

```
export const changeSongId = id => ({type: "SONG_ID", id});
```

3. 创建store

````
import {createStore, compose, applyMiddleware} from 'redux'

import rootReducer from './reducer/index'

// 初始值
const initState = {};


// 启用中间件
const middlewares = [];

// 高阶，window.devToolsExtension 是启用redux-devTools，使浏览器具有redux“时间旅行”功能
const enhancers = compose(applyMiddleware(...middlewares), (window && window.devToolsExtension ? window.devToolsExtension() : f => f ));
// 创建store
const store = createStore(rootReducer, initState, enhancers);

export default store;
````

4. 使用react-redux

> 主入口文件

```
import RouterMap from './router/router'
import registerServiceWorker from './registerServiceWorker'
// 引入Provider
import {Provider} from 'react-redux'
import store from './store'
import './assets/css/index.css'

// 最外侧 Provider包裹，并传入store
ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>
  , document.getElementById('root'));
```