// import MovieList from 'components/MovieList/MovieList';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <form>
        <label>
          <input type="text"></input>
          <button type="submit">Search</button>
        </label>
      </form>
      <ul>
        <Link key={1} to={'12'}>
          <li>Movie title </li>
        </Link>
      </ul>
      {/* <MovieList /> */}
    </main>
  );
};
export default Movies;
