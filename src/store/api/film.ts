import { AppDispatch } from "..";
import { getFilmsByNameFailure, getFilmsByNameStart, getFilmsByNameSuccess, getFilmsFailure, getFilmsStart, getFilmsSuccess } from "../reducers/film";
import { ISwapiFilm, ISwapiFilmsResponse } from "./interfaces/swapi.interface";
import { publicRequest } from "./publicRequest";


export const getFilmsApi = async (dispatch: AppDispatch) => {
    dispatch(getFilmsStart());
    try {
        const res = (await publicRequest.get<ISwapiFilmsResponse<ISwapiFilm>>("/films")).data;
        const films = res.results.map((result) => (result));
        return dispatch(getFilmsSuccess(films));
    } catch (err) {
        dispatch(getFilmsFailure());
    }
};


export const getFilmsByNameApi = async (dispatch: AppDispatch, name: string) => {
    dispatch(getFilmsByNameStart());
    try {
        const { results } = (await publicRequest.get<ISwapiFilmsResponse<ISwapiFilm>>("/films")).data;
        const filmResultSet = results.filter((result) => result.director === name);
        return dispatch(getFilmsByNameSuccess(filmResultSet));
    } catch (err) {
        dispatch(getFilmsByNameFailure());
    }
};
