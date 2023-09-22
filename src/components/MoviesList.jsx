import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ linkToPage, movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${linkToPage}${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
