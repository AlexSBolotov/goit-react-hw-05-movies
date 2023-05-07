// import MovieList from 'components/MovieList/MovieList';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingMovie } from 'helpers/movieApi';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const homeMarkup = () => {
    return (
      <>
        <h1>Trending Today</h1>
        <ul>
          {movies.map(({ title, id }) => (
            <Link
              className={s.link}
              key={id}
              state={{ from: location }}
              to={`movies/${id}`}
            >
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </>
    );
  };
  useEffect(() => {
    getTrandingMovie()
      .then(response => {
        setMovies([]);
        setMovies(prev => [...prev, ...response.results]);
      })
      .catch()
      .finally();
  }, []);
  //   console.log(movies);
  return homeMarkup();
};

export default Home;
