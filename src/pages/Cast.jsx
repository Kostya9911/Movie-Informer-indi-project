import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchCast } from 'api';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await fetchCast(id);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [id]);

  // console.log(cast);

  return (
    <ul>
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
            />
          )}

          <p>{oneCast.original_name}</p>
          <p>Character: {oneCast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
