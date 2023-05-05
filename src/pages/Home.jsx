// import MovieList from 'components/MovieList/MovieList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Trending Today</h1>
      <ul>
        <Link key={1} to={'movies/12'}>
          <li>Movie title</li>
        </Link>
      </ul>
      {/* <MovieList /> */}
    </main>
  );
};

export default Home;
