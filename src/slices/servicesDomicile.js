import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    servicesDomicile: [],
}

const servicesDomicileSlice = createSlice({
    name: 'servicesDomicile',
    initialState,
    reducers: {
        getServicesDomicile: state => {
            state.loading = true
        },
        getServicesDomicileSuccess: (state, {payload}) => {
            state.servicesDomicile = payload
            state.loading = false
            state.hasErrors = false
        },
        getServicesDomicileFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { getServicesDomicile, getServicesDomicileSuccess, getServicesDomicileFailure } = servicesDomicileSlice.actions

export const servicesDomicileSelector = state => state.servicesDomicile

export default servicesDomicileSlice.reducer

export function fetchServicesDomicile() {
    return async dispatch => {
        dispatch(getServicesDomicile())
        try {
            const response = await fetch('https://ff64ec14-2a71-4d9a-80e4-b698de5c33e9.mock.pstmn.io/servicesDomicile')
            const data = await response.json()
            dispatch(getServicesDomicileSuccess(data))
        }
        catch (error) {
            dispatch(getServicesDomicileFailure())
        }
    }
}