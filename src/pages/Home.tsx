import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "../components/Hero";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { Spinner } from "../components/Spinner";
import { RootState } from "../store";
import { getFilmsApi, getFilmsByNameApi } from "../store/api/film";
import { IFilmReducerState } from "../store/reducers/film";



export function Home() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const { films, isFetching } = useSelector<RootState>(state => state.filmReducer) as IFilmReducerState;


    useEffect(() => {
        if (input.length > 0) {
            getFilmsByNameApi(dispatch, input);
            return;
        }
        getFilmsApi(dispatch);
        // eslint-disable-next-line 
    }, [input]);

    const handleClick = (input: string) => {
        setInput(input);
    };

    return (
        <div>
            <Hero maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    StarBox
                </Typography>
                <Search handleClick={handleClick} />
            </Hero>
            {isFetching &&
                <Spinner />
            }
            {films &&
                <MovieCard films={films} />
            }
        </div>
    );
}
