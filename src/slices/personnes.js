import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    personnes: [],
}

const personnesSlice = createSlice({
    name: 'personnes',
    initialState,
    reducers: {
        getPersonnes: state => {
            state.loading = true
        },
        getPersonnesSuccess: (state, {payload}) => {
            state.personnes = payload
            state.loading = false
            state.hasErrors = false
        },
        getPersonnesFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { getPersonnes, getPersonnesSuccess, getPersonnesFailure } = personnesSlice.actions

export const personnesSelector = state => state.personnes


export default personnesSlice.reducer

const personnesWithIdService = (idService) => {
    switch (idService) {
        case "1":
            console.log("coiffeurs");
            //coiffeurs
            return fetch('https://randomuser.me/api/?results=12')
        case "2":
            //beauté
            return fetch('https://randomuser.me/api/?results=12')
        case "3":
            //massage à domicile
            return fetch('https://randomuser.me/api/?results=12')
        case "4":
            //ménage
            return fetch('https://randomuser.me/api/?results=12')
        case "5":
            //garde d'enfants
            return fetch('https://randomuser.me/api/?results=12')
        case "6":
            //coach sportif personnel
            return fetch('https://randomuser.me/api/?results=12')
        default:
            break;
    }
}

export function fetchPersonnes(idService) {
    return async dispatch => {
        dispatch(getPersonnes())
        try {
           console.log("personnesWithIdService ",idService)
            const response = await personnesWithIdService(idService)
            const data = await response.json()
            console.log("data personnes : ", data['results'])
            dispatch(getPersonnesSuccess(data['results']))
        }
        catch (error) {
            dispatch(getPersonnesFailure())
        }
    }
}