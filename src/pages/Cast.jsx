import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List } from './Cast.styled';

import { fetchCast } from 'api';

const Cast = () => {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    async function getCast() {
      try {
        const response = await fetchCast(id);
        setCast(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getCast();
  }, [id]);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    if (cast.length === 0) {
      return <p>Don't have any cast</p>;
    }
    return (
      <List>
        {cast.map(oneCast => (
          <li key={oneCast.id}>
            {oneCast.profile_path ? (
              <img
                src={`${POSTER_PATH}${oneCast.profile_path}`}
                alt="actor pic"
                height="180px"
              />
            ) : (
              <img
                src="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
                alt="actor pic"
                height="180px"
                width="125px"
              />
            )}

            <p>
              <b>{oneCast.original_name}</b>
            </p>
            <p>
              <b>Character:</b> {oneCast.character}
            </p>
          </li>
        ))}
      </List>
    );
  }
};

export default Cast;
