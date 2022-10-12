import { createSlice } from "@reduxjs/toolkit";
import { ISwapiFilm } from "../api/interfaces/swapi.interface";

export interface IFilmReducerState {
    film: null | ISwapiFilm,
    films: Array<ISwapiFilm>,
    isFetching: boolean,
    error: boolean
}

const filmSlice = createSlice({
    name: "filmReducer",
    initialState: {
        film: null,
        films: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getFilmsStart: (state) => {
            state.isFetching = true;
        },
        getFilmsSuccess: (state, action) => {
            state.isFetching = false;
            state.films = action.payload;
        },
        getFilmsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getFilmsByNameStart: (state) => {
            state.isFetching = true;
        },
        getFilmsByNameSuccess: (state, action) => {
            state.isFetching = false;
            state.films = action.payload;
        },
        getFilmsByNameFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});


export const {
    getFilmsFailure, getFilmsStart, getFilmsSuccess,
    getFilmsByNameFailure, getFilmsByNameStart, getFilmsByNameSuccess,
} = filmSlice.actions;
export default filmSlice.reducer;