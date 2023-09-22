import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from '../components/MoviesList';
import { SearchBox } from 'components/SearchBox';

import { fetchSearchMovies } from '../api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.query.value.trim() });
    evt.target.reset();
  };

  useEffect(() => {
    async function getSearchMovies() {
      try {
        const response = await fetchSearchMovies(movieName);
        setSearchedMovies(response);
      } catch (error) {
        console.log(error);
        // toast.error('ERROR');
        // setError(true);
      }
      // console.log(topMovies);
      // finally {        setLoading(false);      }
    }
    getSearchMovies();
  }, [movieName]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchBox onSubmit={handleSubmit} />
      <MoviesList linkToPage={''} movies={searchedMovies} />
    </div>
  );
};

export default Movies;
