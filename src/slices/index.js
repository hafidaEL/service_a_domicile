import { combineReducers } from 'redux'

import servicesDomicileReducer from './servicesDomicile'

const rootReducer = combineReducers({
    servicesDomicile: servicesDomicileReducer,
})

export default rootReducer