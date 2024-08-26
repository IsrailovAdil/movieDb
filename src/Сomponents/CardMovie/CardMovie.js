import React from 'react';
import { Link } from 'react-router-dom';
import './CardMovie.scss'

const CardMovie = ({ movies }) => {
    return (
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3">
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
                    </div>

                ))}

            </div>

    );
};

export default CardMovie;
