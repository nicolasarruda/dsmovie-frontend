import { User } from './user';

export type Review = {
  id: number;
  text: string;
  movieId: number;
  user: User;
};

export const hasAnyReview = (review: Review[]): boolean => {
  if (review.length === 0 || review.length === undefined) {
    return false;
  }

  return true;
};
