import {useSelector, useDispatch} from 'react-redux'
import { selectBooks, selectGenres } from './selectors'
import { useCallback } from 'react'
import { filterbooks } from './booksSlice'

export const useBooksSelector = () => {
    return useSelector(selectBooks)
}

export const useGenreSelector = () => {
    return useSelector(selectGenres)
}



export const useFilterBooks = () => {
    const dispatch = useDispatch()
    return useCallback((genre) => {
        dispatch(filterbooks(genre))
    }, [dispatch])
}