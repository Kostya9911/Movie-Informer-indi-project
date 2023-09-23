import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '597f2644d0be3c5b2ab09a53bdbbc182';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTopMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
};

fetchSearchMovies.propTypes = {
  query: PropTypes.string,
};
fetchReviews.propTypes = {
  id: PropTypes.string,
};
fetchCast.propTypes = {
  id: PropTypes.string,
};
fetchMovieDetails.propTypes = {
  id: PropTypes.string,
};
