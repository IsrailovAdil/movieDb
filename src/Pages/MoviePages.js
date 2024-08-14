import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import  './MoviePages.css'
import {handleGenerateApi, imageW500} from "../servises/servis";



const MoviePages = () => {
    const {id}=useParams()
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios
            .get(handleGenerateApi(`movie/${id}`))
            .then(({ data }) => setMovie(data))
    }, [id]);


    return (
        <div>
            <div className="container">
                {movie && (
                    <div className="card bg-dark text-white ">
                        <div className="row g-0 d-flex justify-content-between">
                            <div className="col-md-4">
                                <img
                                    src={imageW500+movie.backdrop_path}
                                    className="img-fluid rounded-start"
                                    alt={movie.title}
                                />
                            </div>
                            <div className="card-img-overlay">
                                <p className={'rating-vote'}> {movie.vote_average}</p>
                            </div>

                            <div className="col-md-8">

                                <h5 className="card-title">{movie.title}</h5>
                                <div className="card-body">
                                    <p className="card-text">{movie.overview}</p>
                                    <p className="card-text"> Бюджет: {movie.budget} $</p>
                                    <p className="card-text"> Жанр: {movie.genres.map(el=>el.name).join(', ')}</p>
                                    <p className="card-text"> Производство компании: {movie.production_companies.map(el=>el.name).join(', ')}</p>
                                    <p className="card-text">Дата релиза: {movie.release_date}</p></div>
                            </div>
                        </div>
                    </div>


                )}
            </div>
        </div>
    )
};

export default MoviePages;