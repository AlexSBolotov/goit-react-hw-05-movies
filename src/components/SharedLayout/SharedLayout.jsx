import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
// import clsx from 'clsx';
// import styled from 'styled-components';

import s from './SharedLayout.module.css';

// const StyledNavLink = styled(NavLink)`
//   font-size: 18px;
//   font-weight: 500;
//   text-decoration: none;
//   margin-right: 20px;
//   color: grey;

//   &.active {
//     color: coral;
//   }
// `;
const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink
            to="/"
            // end
            className={s.link}
            // {isActive => {
            //   return clsx(isActive ? s.active : s.link);
            // }}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/movies"
            // end
            className={s.link}
            // {isActive => {
            //   return clsx(isActive ? s.active : s.link);
            // }}
          >
            <span>Movies</span>
          </NavLink>
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
