import { Review } from '../../types/review';
import StarImage from '../../assets/images/star.png';

type Props = {
  review: Review;
};

const ReviewList = ({ review }: Props) => {
  return (
    <div className="container-post bg-secondary">
      <div className="individual-container-post">
        <img src={StarImage} alt="estrela" />
        <h1>{review.user.name}</h1>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewList;

// return reviews.map((review) => {
//   return (
//     <div key={review.id} className="container-post bg-secondary">
//       <div className="individual-container-post">
//         <img src={StarImage} alt="estrela" />
//         <h1>{review.user.name}</h1>
//         <p>{review.text}</p>
//       </div>
//     </div>
//   );
// });
