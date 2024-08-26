import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardMovie from "./CardMovie/CardMovie";
import {useSearchParams} from "react-router-dom";

const Mov_Key = 'e517fdd963d18169b695e97d2c1e3ff2';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get("query")|| "");


    const handleSearch = e => {
        setSearchValue(e.target.value)
    }


    // useEffect(() => {
    //     if (searchValue && searchValue.trim()) {
    //         const handleSearch = setTimeout(() => {
    //             axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Mov_Key}&query=${searchValue}&language=ru-RU`)
    //                 .then(({ data }) => setMovies(data.results))
    //
    //             const searchQuery={
    //                 query:searchValue
    //             }
    //             setSearchParams(searchQuery)
    //
    //         }, 1500);
    //
    //         return () => clearTimeout(handleSearch);
    //     } else {
    //         setMovies([]);
    //     }
    // }, [searchValue]);













    const handleSubmitSearch = () => {
        if (searchValue.trim()) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Mov_Key}&query=${searchValue}&language=ru-RU`)
                .then(({ data }) => setMovies(data.results));

            const searchQuery = { query: searchValue };
            setSearchParams(searchQuery);
        } else {
            setMovies([]);
        }
    };

    useEffect(() => {
        const searchQuery = searchParams.get("query");
        if (searchQuery) {
            setSearchValue(searchQuery);
           handleSubmitSearch();
        }
    }, [searchParams]);

    useEffect(() => {
        const handleDebounceSearch = setTimeout(() => {
            handleSubmitSearch();
        }, 1500);

        return () => clearTimeout(handleDebounceSearch);
    }, [searchValue]);

    return (
        <div>
            <div className="container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search"
                    aria-label="Search"
                    defaultValue={searchValue}
                    onChange={ handleSearch}
                    onKeyDown={e=>{
                        if (e.key==='enter'){
                            handleSubmitSearch();
                    }
                    }
                    }
                />
                <button className="search-btn" onClick={handleSubmitSearch}>Search</button>
            </div>
            <CardMovie movies={movies} />
        </div>
    );
};

export default Search;
