import axios from 'axios'
import { defaultEnpodint } from '../../helpers/constants'
import * as actionTypes from './actionTypes'

export const setResults = (results) => {
    return {
        type: actionTypes.SET_RESULTS,
        payload: results
    }
}

export const setFetching = (isFetching = true) => {
    return {
        type: actionTypes.START_FETCHING,
        payload: isFetching,
    }
}

export const pagination = (newResult) => ({
    type: actionTypes.SET_PAGINATION,
    payload: newResult
})

export const resetResults = () => ({
    type: actionTypes.RESET_RESULTS,

})

export const errorHandler = (error) => ({
    type: actionTypes.ERROR_HANDLER,
    payload: error
})

export const fetchResults = (searchValue, page = 1, paginating = false) => async dispatch => {
    if (!searchValue) {
        return dispatch(resetResults())
    }
    try {

        const { data } = await axios.get(`${defaultEnpodint}?q=${searchValue}&per_page=5&page=${page}`)
        if (paginating) {
            return (
                dispatch(pagination({
                    items: data.items,
                    total_count: data.total_count,
                    page,
                }))
            )
        }
        return dispatch(setResults({
            items: data.items,
            total_count: data.total_count,
            searchValue,
            page
        }))
    }
    catch (err) {
        console.log('Error', err)
        dispatch(errorHandler('Ooow, something goes wrong! try again later'))
    }
} 