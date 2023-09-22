import { useEffect, useState } from 'react';

import { MoviesList } from '../components/MoviesList';

import { fetchTopMovies } from '../api';

const Home = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    setStatus('pending');
    async function getTopMovies() {
      try {
        const response = await fetchTopMovies();
        setTopMovies(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getTopMovies();
  }, []);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry! Something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <h2>Trending Today</h2>
        <MoviesList linkToPage={'movies/'} movies={topMovies} />
      </div>
    );
  }
};

export default Home;
