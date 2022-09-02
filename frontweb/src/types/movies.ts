import { Review } from './reviews';

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  synopsis: string;
  year: number;
  reviews: Review[];
};

// for (var letter of 'Brasil') {
//   console.log(letter);
// }
