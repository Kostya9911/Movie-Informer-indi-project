import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchReviews } from 'services/api';

const Reviews = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    setStatus('pending');
    async function getReviews() {
      try {
        const response = await fetchReviews(id);
        setReviews(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
        setError(error.message);
      }
    }
    getReviews();
  }, [id]);

  return (
    <>
      {status === 'pending' && <h2>Loading...</h2>}
      {status === 'rejected' && <h2>Sorry! Something went wrong: {error}</h2>}
      {status === 'resolved' && reviews.length === 0 && (
        <p>Don't have any rewiew</p>
      )}

      {status === 'resolved' && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p> {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
