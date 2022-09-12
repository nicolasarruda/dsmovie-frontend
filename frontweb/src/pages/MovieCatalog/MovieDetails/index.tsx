import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestBackEnd } from 'utils/requests';
import { Review } from 'types/review';
import ReviewForm from 'components/ReviewForm';
import { hasAnyRoles, isAuthenticated } from '../../../utils/auth';
import StarImage from '../../../assets/images/star.png';
import './styles.css';
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
    console.log('ESTOU NO HANDLE INSERT REVIEW');
    console.log(reviews);
    console.log('SÓ UM REVIEW', review);
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

        {reviews.map((review) => {
          return <ReviewList review={review} />;
        })}
      </div>
    </div>
  );
};

export default MovieDetails;

// <ReviewList reviews={review} />

// {/* reviews.map((review) => {
//     return (
//       <div key={review.movieId} className="container-post bg-secondary">
//         <div className="individual-container-post">
//           <img src={StarImage} alt="estrela" />
//           <h1>{review.user.name}</h1>
//           <p>{review.text}</p>
//         </div>
//       </div>
//     );
//   })} */}
