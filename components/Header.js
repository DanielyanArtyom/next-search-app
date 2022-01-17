import { useState, useCallback } from 'react'
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux'
import { fetchResults, setFetching } from '../redux/searchReducer/searchActions'


const Header = () => {
    const [search, setSearch] = useState('')
    const { searchValue } = useSelector(state => state.search)
    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        const { value } = event.target
        setSearch(value)
        dispatch(setFetching())
        debounceSearch(value)
    }

    const debounceSearch = useCallback(debounce((newSearch) => {
        if (newSearch !== searchValue) {
            dispatch(fetchResults(newSearch))
        } else {
            dispatch(setFetching(false))
        }
    }, 3000), [])

    const onBlurHandler = (newSearch, oldSearch) => {
        if (newSearch !== oldSearch) {
            dispatch(fetchResults(newSearch))
        } else {
            dispatch(setFetching(false))
        }
    }

    return (
        <header className='header u-text-align-center'>
            <h1 className='header__title'>
                What do you want to search today
            </h1>
            <input className='header__input u-mw-400' value={search} onChange={onChangeHandler} onBlur={() => onBlurHandler(search, searchValue)} />
        </header>
    )
}

export default Header
