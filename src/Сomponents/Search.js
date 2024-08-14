import React, { useEffect, useState } from 'react';
import axios from "axios";
import MoviePages from "../Pages/MoviePages";
import CardMovie from "./CardMovie";

const Mov_Key = 'e517fdd963d18169b695e97d2c1e3ff2';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue.trim()) {
            const handleSearch = setTimeout(() => {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Mov_Key}&query=${searchValue}&language=ru-RU`)
                    .then(({ data }) => setMovies(data.results))
            }, 1500);

            return () => clearTimeout(handleSearch);
        } else {
            setMovies([]);
        }
    }, [searchValue]);

    return (
        <div>
            <div className="container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search"
                    aria-label="Search"
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button className="search-btn">Search</button>
            </div>
            <CardMovie movies={movies} />
        </div>
    );
};

export default Search;
