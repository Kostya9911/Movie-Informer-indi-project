import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchReviews } from 'api';

const Reviews = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
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
  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry! Something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    if (reviews.length === 0) {
      return <div>Don't have any rewiew</div>;
    }
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p> {review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
