import React from 'react';
import PopularMoviePages from "./PopularMoviePages";
import TopRatingMovies from "../Сomponents/TopRatingMovies";

const HomePages = () => {
    return (
        <div>
            <PopularMoviePages />
            <TopRatingMovies/>
        </div>
    );
};

export default HomePages;