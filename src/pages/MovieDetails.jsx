import defaultImage from '../images/motivation_00.jpg';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef, useState, useEffect } from 'react';
import { getMovieById } from 'const/movieApi';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/movies');

  console.log(movieId);
  useEffect(() => {
    getMovieById(movieId)
      .then(res => {
        console.log(res);
        setMovie({ ...res });
      })
      .catch()
      .finally();
  }, [movieId]);

  console.log(movie);
  return (
    <>
      <Link to={goBackRef.current}>
        <button type="button">Go back</button>
      </Link>
      <div>
        <img
          src={
            `https://image.tmdb.org/t/p/w300${movie.poster_path}` ??
            defaultImage
          }
          alt=""
          width="300"
        ></img>
        <div>
          <h1>{movie.title}</h1>
          <p>User Score {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {/* {movie.genres.map(({ name }) => (
              <span>{name} </span>
            ))} */}
          </p>
        </div>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
