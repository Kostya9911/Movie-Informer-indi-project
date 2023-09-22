import { useEffect, useState } from 'react';

import { MoviesList } from '../components/MoviesList';

import { fetchTopMovies } from '../api';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function getTopMovies() {
      try {
        const topMovies = await fetchTopMovies();
        setTopMovies(topMovies);
      } catch (error) {
        console.log(error);
        // toast.error('ERROR');
        // setError(true);
      }
      // console.log(topMovies);
      // finally {        setLoading(false);      }
    }
    getTopMovies();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList linkToPage={'movies/'} movies={topMovies} />
    </div>
  );
};

export default Home;
