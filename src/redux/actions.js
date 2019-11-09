/*
    包含所有 action creator 函数的模块
*/
//import {getAxios,postAxios} from '@/api/index';
import {
    GETSHOPNUMBER,
    SHOPLIST,
    LOGIN,
    LOGINOUT,
    INITLANGUAGE,
    SaveMenuShopList
} from './action-types'
//import { action } from '../api/index.js'

export const setLanguage = ( data ) =>({type:INITLANGUAGE,data})  //  设置语言

export const setLogin = (data)=> {
    // window.localStorage.setItem('people',obj);  //  设置
    // window.localStorage.getItem('people')   //  获取
//    window.localStorage.setItem('userInfo',JSON.stringify(data));  //  设置
//    window.localStorage.removeItem('shopList')  //  删除本地购物车

    return ({ type: LOGIN,data })
}
export const LoginOut = ()=> {
    window.localStorage.removeItem('userInfo');  //  设置
    window.sessionStorage.removeItem('LoginAndRegister')  //  登录注册信息
    return ({ type: LOGINOUT })
}


export const setShopNumber = (number) =>({type:GETSHOPNUMBER,data:number})  //  用于设置购物车数量

export const getShopNumber = (header) => {
    return async dispatch=> {
        const cartNumber = await action.cartNum(header)
        dispatch(setShopNumber(cartNumber.data.data.num))
    }
}

const setShopList = (data) => ({type: SHOPLIST,data});
export const getShopList = (header,discountCode="",callBack) => {
    return async dispatch=> {
        const cartList = await action.queryList(header) //  购物车列表
        // console.log(cartList.data.data);
        const compute = await action.cartCompute(header,discountCode) //  购物价格总数
        // console.log(compute.data.data);
        callBack&&callBack(compute)    //  回调返回购物价格的结果
        const shopList = {
            cartList:cartList.data.data,
            compute:compute.data.data
        }
        dispatch(setShopList(shopList))
    }
}


export const setMenuShopList = ( data ) =>({type:SaveMenuShopList,data})  //  保存商品列表



// 同步错误消息
// const errorMsg = (msg:any) => ({type:ERROR_MSG, data: msg})
// 同步成功响应
// const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// // 同步接收用户
// const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// // 同步重置用户
// export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// // 用户列表
// const receiveUserList = (users)=> ({type:RECEIVE_USER_LIST,data:users})
// /* 获取用户与对方（单个）的聊天信息 */
// export const userNews = (news)=> ({type:NEWS_USER,data:news})

// /* // 接受与用户聊天的展示 */
// const ChatMsgList = (data)=> ({type:REQ_CHAT_MSG_LIST,data:data})
// /* ChatMsgList 接受与用户聊天的展示  */
// async function getChatMsgList (dispatch){
//     const response = await reqChatMsgList()
//     const result = response.data
//     if (result.code === 0) {
//         dispatch(ChatMsgList(result))
//     }
// }

/*异步注册*/
// export function register({username, password, password2, type}) {
//     // 进行前台表单验证, 如果不合法返回一个同步 action 对象, 显示提示信息
//     if (!username || !password || !type) {
//         return errorMsg('用户名密码必须输入')
//     }
//     if (password !== password2) {
//         return errorMsg('密码和确认密码不同')
//     }
//     return async dispatch => {
//         // 异步 ajax 请求, 得到响应
//         const response = await reqRegister({username, password,password2, type})
//         // 得到响应体数据
//         const result = response.data
//         // 如果是正确的
//         if (result.code === 0) {
//             // 分发成功的 action
//             dispatch(authSuccess(result.data))
//             alert('注册成功');
//         } else {
//             // 分发提示错误的 action
//             dispatch(errorMsg(result.msg))
//         }
//     }
// }

/* 异步登陆 */
// export const login = ({username, password},route) => {
//     if (!username || !password) {
//         return errorMsg('用户密码必须输入')
//     }
//     return async dispatch => {
//         const response = await reqLogin({username, password})
//         const result = response.data
//         if (result.code === 0) {
//             // console.log(result.data)
//             dispatch(authSuccess(result.data))
//             getChatMsgList(dispatch)
//             IO.on('receiveMsg', (data)=> {
//                 // console.log('浏览器端接收到消息:',data)
//                 /* 如果别人不是发给我的消息，不必要在发送请求获取最新信息 */
//                 if(result.data._id===data.to||result.data._id===data.from){
//                     getChatMsgList(dispatch)
//                 }
//             })
//             route.replace('/')
//         } else {
//             dispatch(errorMsg(result.msg))
//         }
//     }
// }

/*  异步获取用户聊天信息  */
export const USERNEWS = () => {
    return dispatch=> {
        // const response = await news({to,from,InUpdate})
        // const result = response.data
        // if (result.code === 0) {
        //     await dispatch(userNews(result.data))    //
        //     await getChatMsgList(dispatch)
        // }
        console.log(123);
    }
}

// 异步获取用户列表
// export const getUserList = (type) => {
//     return async dispatch => {
//         const response = await reqUserList(type)
//         const result = response.data
//         if (result.code === 0) {
//             dispatch(receiveUserList(result.data))
//         }
//     }
// }


