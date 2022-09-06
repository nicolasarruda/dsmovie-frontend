import StarImage from '../../assets/images/star.png';
import { Review } from '../../types/review';

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  const name = reviews.map((review) => review.user.name);
  const text = reviews.map((review) => review.text);

  return (
    <div className="container-post bg-secondary">
      <div className="individual-container-post">
        <img src={StarImage} alt="estrela" />
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewList;
