import { useEffect, useState } from 'react';

import { MoviesList } from '../components/MoviesList';
import { SearchBox } from 'components/SearchBox';

import { fetchSearchMovies } from '../api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(evt.target.elements.query.value.trim());
    setQuery(evt.target.elements.query.value.trim());
    evt.target.reset();
  };

  useEffect(() => {
    async function getSearchMovies() {
      try {
        const response = await fetchSearchMovies(query);
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
  }, [query]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchBox onSubmit={handleSubmit} />
      <MoviesList linkToPage={''} movies={searchedMovies} />
    </div>
  );
};

export default Movies;
