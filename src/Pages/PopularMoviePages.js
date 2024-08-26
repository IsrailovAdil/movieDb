import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardMovie from "../Сomponents/CardMovie/CardMovie";

const Mov_Key='e517fdd963d18169b695e97d2c1e3ff2';
const PopularMoviePages = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Mov_Key}&language=ru-RU`)
            .then(({data}) => {
                setMovies(data.results);
            })
    }, []);




    return (
        <div >
            <h2 style={{
                color: 'white',
                fontSize:'32px',
            }}>Popular Movies</h2>
            <CardMovie movies={movies}/>
        </div>
    );
};

export default PopularMoviePages;