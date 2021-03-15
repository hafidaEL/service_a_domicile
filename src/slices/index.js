import { combineReducers } from 'redux'

import servicesDomicileReducer from './servicesDomicile'
import personnesReducer from './personnes'

const rootReducer = combineReducers({
    servicesDomicile: servicesDomicileReducer,
    personnes: personnesReducer,
})

export default rootReducer