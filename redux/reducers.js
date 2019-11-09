
/*  包含 n 个根据老的 state 和 action 返回新的 state 的函数的模块  */
import {combineReducers} from 'redux'
import {
    GETSHOPNUMBER,
    SHOPLIST,
    LOGIN,
    LOGINOUT,
    INITLANGUAGE,
    SaveMenuShopList
} from './action-types'

const initLanguage = {

}
function Language( state = initLanguage, action ) {
    switch (action.type) {
        case INITLANGUAGE:
            // console.log(action.data)
            return { ...action.data }
        default:
            return state
    }
}

const initLogin = {
    code: null,
    first: "wang",
    last: "sheng",
    uid: "",
    tourist: null
}
// console.log(initLogin)
function Login( state = initLogin, action ) {
    switch (action.type) {
        case LOGIN:
            // console.log(action.data)
            return { ...action.data }
        case LOGINOUT:
            // console.log(action.data)
            return { code: null,first: "",last: "", uid: "",tourist: null }
        default:
            return state
    }
}

const initShoppingCart = {
    shopNumber:0,
    shopList:null
};
function ShoppingCart(state = initShoppingCart, action) {
    switch (action.type) {
        case GETSHOPNUMBER: // 获取购物车商品数量
            // console.log(action.data)
            return {...state,shopNumber:action.data||0}
        case SHOPLIST: // 获取购物车列表与计算
            // console.log(action.data)
            return {...state,shopList:action.data}
        default:
            return state
    }
}

let initMenuShopList = null
function MenuShopList( state = initMenuShopList, action ) {
    switch (action.type) {
        case SaveMenuShopList:
            // console.log(action.data)
            return action.data
        default:
            return state
    }
}


// 返回合并的 reducer
export default combineReducers({
    Language,
    Login,
    ShoppingCart,
    MenuShopList
})
