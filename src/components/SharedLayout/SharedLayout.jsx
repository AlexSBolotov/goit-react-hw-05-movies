import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/movies/:movieId">MovieDetails</Link> */}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
