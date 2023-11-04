//actions are used to update,modify and provide data to the store
//api contains all the functions inside the api folder
import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) =>{

    try {
        const { data } = await api.signUp(authData)
        //AUTH type is in reducer
        dispatch({ type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }
     catch (error) {
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) =>{

    try {
        const { data } = await api.logIn(authData)
        //AUTH type is in reducer
        dispatch({ type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))

        navigate('/')
    }
     catch (error) {
        console.log(error)
    }
}


