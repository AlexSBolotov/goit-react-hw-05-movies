// import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
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
    console.log(query);
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query"></input>
          <button type="submit">Search</button>
        </label>
      </form>
      <ul>
        <Link key={1} state={{ from: location }} to={'12'}>
          <li>Movie title </li>
        </Link>
      </ul>
      {/* <MovieList /> */}
    </>
  );
};
export default Movies;
