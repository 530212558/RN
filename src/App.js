
import React from 'react';
//import AppContainer from './RouteConfig.js'
import AppContainer from './views/route'
import { Provider } from 'react-redux'
//import store from './redux/store'


/*  数据持久化  */
import configureStore from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
const {store, persistor} = configureStore();

export default class Main extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer/>
            </PersistGate>
        </Provider>
    )
  }
}
