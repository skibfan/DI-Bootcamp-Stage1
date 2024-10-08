import { createSelector } from "@reduxjs/toolkit"
import { state,books } from "./booksSlice"

export const selectBooks = createSelector([state], (state) => {
    if (state.filter == 'default') return state.books
    return state.books.filter(elem => {
        if (elem.genre == state.filter) return elem
    })
})


export const selectGenres = createSelector([state], (state) => {
    const genres = state.books.map(elem => {
        return elem.genre
    })
    const uniqueGenres = [...new Set(genres)]
    return uniqueGenres
})