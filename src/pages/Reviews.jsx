import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchReviews } from 'api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchReviews(id);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [id]);

  // console.log(reviews);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          {review.author}
          <p> {review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
