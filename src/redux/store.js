/*
    redux 最核心的 store 对象模块
*/
//import {createStore, applyMiddleware} from 'redux'  // applyMiddleware 是包括使用异步 创建Store对象
//import thunk from 'redux-thunk' /* redux的使用异步函数 */
//import reducers from './reducers'   /* 放入 reducers 数据 */
//export default createStore(reducers, applyMiddleware(thunk))

import {createStore, applyMiddleware} from 'redux'  // applyMiddleware 是包括使用异步 创建Store对象
import thunk from 'redux-thunk' /* redux的使用异步函数 */
import reducers from './reducers'   /* 放入 reducers 数据 */

/* 数据持久化 */
import { persistStore, persistReducer } from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
// 引入 AsyncStorage 作为存储容器
import { AsyncStorage } from "react-native";

const persistConfig = {
    key: 'milk', // 对于数据 key 的定义
//    storage,     // 选择的存储引擎
    storage: AsyncStorage
}
/* # 对 reducers 的封装处理 */
const persistedReducer = persistReducer(persistConfig, reducers)


export default function configureStore() {

    /* 处理后的 reducers 需要作为参数传递在 createStore 中 */
    const store = createStore(persistedReducer, applyMiddleware(thunk))

    /* 持久化 store */
    let persistor = persistStore(store)

    return {store, persistor}
}