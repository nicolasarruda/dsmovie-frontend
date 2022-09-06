import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestBackEnd } from 'utils/requests';
import './styles.css';
import { Review } from 'types/review';
import ReviewForm from 'components/ReviewForm';
import { hasAnyRoles } from '../../../utils/auth';
import ReviewList from 'components/ReviewList';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackEnd(config)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="container-details">
      <div className="container-title">
        <h1>Tela detalhes do filme id: {movieId}</h1>
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        )}
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default MovieDetails;

// <ReviewList reviews={review} />
