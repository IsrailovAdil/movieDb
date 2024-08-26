import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import  './Movie.page.scss'
import {handleGenerateApi, imageW500} from "../../servises/servis";
import {Link} from "react-router-dom";

// https://api.themoviedb.org/3/tv/top_rated?api_key=${Mov_Key}&language=ru-RU
// https://api.themoviedb.org/3/movie/209867?api_key=e517fdd963d18169b695e97d2c1e3ff2&language=ru-RU
const MoviePages = () => {
    const {id}=useParams()
    const [movie, setMovie] = useState();
    const [trailerKey, setTrailerKey] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        axios
            .get(handleGenerateApi(`movie/${id}`))
            .then(({ data }) => setMovie(data))


        axios
            .get(handleGenerateApi(`movie/${id}/videos`))
            .then(({ data }) => {
                const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            });

        axios
            .get(handleGenerateApi(`movie/${id}/credits`))
            .then(({ data }) => {
                setCast(data.cast);
            });
    }, [id]);


    return (
        <>
            <div className="containerP">
                {movie && (
                    <div className="page-card  ">
                        <div className="row-page-card ">
                            <div className="col-md-5">
                                <img
                                    src={imageW500 + movie.poster_path}
                                    className="img-fluid rounded-start"
                                    alt={movie.title}
                                />
                            </div>
                            <div className="card-img-overlay">
                                <p className={'rating-vote'}> {movie.vote_average}</p>
                            </div>

                            <div className="col-md-7">
                                <h5 className="title-c">{movie.title}</h5>
                                <div className="card-body">
                                    <p className="card-text">Дата выхода: {movie.release_date}</p>
                                    <p className={'card-text'}>Страна: {movie.production_countries.map(el => el.name)} </p>
                                    <p className="card-text"> Жанр: {movie.genres.map(el => el.name).join(', ')}</p>
                                    <p className="card-text"> Производство
                                        компании: {movie.production_companies.map(el => el.name).join(', ')}</p>
                                    <p className="card-text"> Выручка: {movie.revenue} $</p>


                                </div>
                            </div>


                        </div>

                        {cast.length > 0 && (
                            <div className="cast">
                                <h5>В главных ролях:</h5>
                                <ul >
                                    {cast.slice(0, 6).map((actor) => (
                                    <Link className={'box-actor'} to={`/actor/${actor.id}`}>
                                        <li className={'card-actor'} key={actor.cast_id}>
                                            <img alt={'df'} className={'actor-img'} src={
                                                imageW500+actor.profile_path}/>
                                            {actor.name}
                                        </li>
                                    </Link>
                                    ))}
                                </ul>
                            </div>
                        )}


                        <div >
                            <p className="description">Описание:<br/>
                                {movie.overview}</p>
                        </div>




                        {trailerKey && (
                            <div className="trailer">
                                <h5>Трейлер:</h5>
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={`https://www.youtube.com/embed/${trailerKey}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}
                    </div>


                )}
            </div>
        </>
    )
};

export default MoviePages;