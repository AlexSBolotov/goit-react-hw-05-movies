import defaultImage from '../images/motivation_00.jpg';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <main>
      <div>
        <img src={defaultImage} alt="" width="300"></img>
        <div>
          <h1>Title</h1>
          <p>User Score</p>
          <h2>Overview</h2>
          <p>{movieId}</p>
          <h3>Genres</h3>
          <p>Some text</p>
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
    </main>
  );
};

export default MovieDetails;
