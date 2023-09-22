import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'api';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState('start');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    async function getMoviesDetails() {
      try {
        const response = await fetchMovieDetails(id);
        setMovieDetails(response);
        setStatus('resolved');
        setGenres(response.genres);
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getMoviesDetails();
  }, [id]);

  // console.log(movieDetails);
  const {
    poster_path = 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png',
    vote_average,
    title,
    overview,
  } = movieDetails;

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry! Something went wrong: {error}</h2>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <Link to={backLinkHref}>Back to products</Link>
        <div>
          {poster_path ? (
            <img
              src={`${POSTER_PATH}${poster_path}`}
              alt="movies poster"
              height="200px"
            />
          ) : (
            <img
              src="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
              alt="movies poster"
              height="200px"
            />
          )}

          <div>
            <h3>{title}</h3>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>
              {[...genres].map(genre => {
                return `${genre.name} `;
                // key={genre.id}>{genre.name}
              })}
            </p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

export default MovieDetails;
