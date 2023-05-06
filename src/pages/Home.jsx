// import MovieList from 'components/MovieList/MovieList';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingMovie } from 'const/movieApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(({ title, id }) => (
          <Link key={id} state={{ from: location }} to={`movies/${id}`}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
      {/* <MovieList /> */}
    </>
  );
};

export default Home;
