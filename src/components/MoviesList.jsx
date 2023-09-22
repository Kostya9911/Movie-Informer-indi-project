import { Link } from 'react-router-dom';

export const MoviesList = ({ linkToPage, movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${linkToPage}${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
