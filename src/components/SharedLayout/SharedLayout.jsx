import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav>
          <Link className={s.link} to="/">
            <span>Home</span>
          </Link>
          <Link className={s.link} to="/movies">
            <span>Movies</span>
          </Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
