import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Search movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
