import React from 'react';
import { Link } from 'react-router-dom';
import './search.css'

const CardMovie = ({ movies }) => {
    return (
        <div className={'container'}>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3">
                        <div className="card bg-dark text-white mb-4">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className="card-img-top"
                                alt={movie.title}
                            />

                            <div className="card-body">
                                <Link className={'movie-title'} to={`/movie/${movie.id}`}>
                                    {movie.title?movie.title:movie.name}
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardMovie;
