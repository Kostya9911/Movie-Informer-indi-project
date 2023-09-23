import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List } from './Cast.styled';

import { fetchCast } from 'services/api';

const Cast = () => {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
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

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>Something went wrong: {error}</h2>}
      {status === 'resolved' && cast.length === 0 && <p>Don't have any cast</p>}
      {status === 'resolved' && (
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${POSTER_PATH}${profile_path}`
                    : 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png'
                }
                alt="actor pic"
                height="180px"
                width="125px"
              />
              <p>
                <b>{original_name}</b>
              </p>
              <p>{character}</p>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
