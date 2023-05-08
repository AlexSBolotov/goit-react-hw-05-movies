import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'helpers/movieApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieId &&
      getReviewsById(movieId)
        .then(res => {
          // console.log(res.results);
          setReviews([]);
          setReviews(prev => [...prev, ...res.results]);
        })
        .catch(err => console.log(err));
  }, [movieId]);
  const reviewsMarkup = () => {
    return reviews.map((review, idx) => (
      <li key={idx}>
        <h3>{review?.author}</h3>
        <p>{review?.content}</p>
      </li>
    ));
  };
  return (
    <ul>
      {reviews || reviews.length !== 0 ? (
        reviewsMarkup()
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
