import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from '../components/MoviesList';
import { SearchBox } from 'components/SearchBox';

import { fetchSearchMovies } from '../api';

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

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry! Something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <h2>Movies</h2>
        <SearchBox onSubmit={handleSubmit} />
        <MoviesList linkToPage={''} movies={searchedMovies} />
      </div>
    );
  }
  return (
    <div>
      <h2>Movies</h2>
      <SearchBox onSubmit={handleSubmit} />
    </div>
  );
};

export default Movies;
