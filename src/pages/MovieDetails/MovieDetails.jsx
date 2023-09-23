import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { fetchMovieDetails } from 'services/api';

import {
  Link,
  Wrapper,
  WrapperIformation,
  LinkBack,
} from './MovieDetails.styled';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setStatus('pending');
    async function getMoviesDetails() {
      try {
        const response = await fetchMovieDetails(id);
        setMovieDetails(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getMoviesDetails();
  }, [id]);

  const {
    poster_path = 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png',
    vote_average,
    title,
    overview,
    release_date,
    genres,
  } = movieDetails;

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>Sorry! Something went wrong: {error}</h2>}
      {status === 'resolved' && (
        <div>
          <LinkBack to={backLinkHref.current}>
            <b>&lsaquo;&lsaquo;&lsaquo;</b> Go Back
          </LinkBack>

          <Wrapper>
            <img
              src={
                poster_path
                  ? `${POSTER_PATH}${poster_path}`
                  : 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png'
              }
              alt="movies poster"
              height="300px"
            />

            <div>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </Wrapper>
          <WrapperIformation>
            <p>Additional information</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </WrapperIformation>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
