import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
    isFetching: false,
    searchValue: "",
    results: [],
    totalCount: 0,
    page: 1,
    error: null,
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_RESULTS: {
            return {
                isFetching: false,
                results: action.payload.items,
                totalCount: action.payload.total_count,
                searchValue: action.payload.searchValue,
                page: action.payload.page,
                error: null,
            }
        }
        case actionTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: action.payload,
            }
        }
        case actionTypes.SET_PAGINATION: {
            return {
                ...state,
                results: [...action.payload.items, ...state.results],
                totalCount: action.payload.total_count,
                page: action.payload.page,
                isFetching: false,
            }
        }
        case actionTypes.ERROR_HANDLER: {
            return {
                searchValue: "",
                results: [],
                totalCount: 0,
                page: 1,
                isFetching: false,
                error: action.payload
            }
        }
        case actionTypes.RESET_RESULTS: {
            return {
                searchValue: "",
                results: [],
                totalCount: 0,
                page: 1,
                isFetching: false,
                error: null
            }
        }
        default: {
            return state
        }
    }
}

export default searchReducer