import React, { useEffect, useState } from 'react';
import { handleGenerateApi, imageW500 } from "../../servises/servis";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './actorPage.scss'

const ActorPage = () => {
    const { id } = useParams();
    const [actor, setActor] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(handleGenerateApi(`person/${id}`))
            .then(({ data }) => {
                setActor(data);
            });

        axios
            .get(handleGenerateApi(`person/${id}/movie_credits`))
            .then(({ data }) => {
                setMovies(data.cast);
            });
    }, [id]);

    return (
        <div className="containerP">
            {actor && (
                <div className="actor-info">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={imageW500 + actor.profile_path}
                                className="img-fluid rounded-start"
                                alt={actor.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <h2>{actor.name}</h2>
                            <p><strong>Дата рождения:</strong> {actor.birthday}</p>
                            <p><strong>Место рождения:</strong> {actor.place_of_birth}</p>
                            <p><strong>Биография:</strong> {actor.biography}</p>
                        </div>
                    </div>
                </div>
            )}

            {movies.length > 0 && (
                <div className="actor-movies">
                    <h3>Фильмы с участием {actor.name}:</h3>
                    <ul>
                        {movies.slice(0,12).map((movie) => (
                            <li key={movie.credit_id}>
                                <Link className={'movie-title'} to={`/movie/${movie.id}`}>
                                    <div className="card">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            className="card-img-top"
                                            alt={movie.title}
                                        />

                                        <div className="card-body">
                                            <p>{movie.title?movie.title:movie.name}</p>
                                        </div>

                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ActorPage;
