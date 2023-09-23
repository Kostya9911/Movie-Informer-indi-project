import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';

import { fetchSearchMovies } from '../../services/api';

const Movies = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: evt.target.elements.query.value.trim() });
    evt.target.reset();
  };

  useEffect(() => {
    if (!movieName) return;
    setStatus('pending');
    async function getSearchMovies() {
      try {
        const response = await fetchSearchMovies(movieName);
        setSearchedMovies(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getSearchMovies();
  }, [movieName]);

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>Something went wrong: {error}</h2>}
      <h2>Movies</h2>
      <SearchBox onSubmit={handleSubmit} />
      {status === 'resolved' && (
        <div>
          <MoviesList movies={searchedMovies} />
        </div>
      )}
    </>
  );
};

export default Movies;
