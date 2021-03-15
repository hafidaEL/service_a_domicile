import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


import App from  './App'
import rootReducer from './slices'

import { GlobalStyle } from "./shared/global";

const store = configureStore({reducer : rootReducer})

render (
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
)
