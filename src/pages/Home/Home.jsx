import { useEffect, useState } from 'react';

import { MoviesList } from '../../components/MoviesList/MoviesList';

import { fetchTopMovies } from '../../services/api';

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

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>Sorry! Something went wrong: {error}</h2>}
      {status === 'resolved' && (
        <>
          <h2>Trending Today</h2>
          <MoviesList movies={topMovies} />
        </>
      )}
    </>
  );
};

export default Home;
