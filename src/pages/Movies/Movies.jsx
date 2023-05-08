import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'helpers/movieApi';
import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    if (searchQuery === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchQuery });
    e.currentTarget.elements.query.value = '';
  };
  useEffect(() => {
    query &&
      getMovieByQuery(query)
        .then(response => {
          setMovies([]);
          setMovies(prev => [...prev, ...response.results]);
        })
        .catch(err => console.log(err));
  }, [query]);
  const moviesMarkup = () => {
    return (
      <ul>
        {movies.map(({ title, id }) => (
          <Link
            className={s.link}
            key={id}
            state={{ from: location }}
            to={`${id}`}
          >
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    );
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input type="text" name="query" required></input>
        <button className={s.submit} type="submit">
          Search
        </button>
      </form>
      {movies || movies.length !== 0 ? moviesMarkup() : <p>Movies not found</p>}
    </>
  );
};
export default Movies;
