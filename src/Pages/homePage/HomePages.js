import React from 'react';
import PopularMoviePages from "../PopularMoviePages";
import TopRatingMovies from "../../Сomponents/TopRatingMovies";
import './style.scss'

const HomePages = () => {
    return (
        <div className="container">
                <PopularMoviePages/>
                <TopRatingMovies/>
        </div>
    );
};

export default HomePages;