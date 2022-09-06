import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { Review } from '../../types/review';
import { requestBackEnd } from 'utils/requests';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackEnd(config).then((response) => {
      setValue('text', '');
      console.log('SUCESSO AO SALVAR', response);
      onInsertReview(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-input bg-secondary">
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          type="text"
          placeholder="Deixe sua avaliação aqui"
        />
        {errors.text?.message}
        <Button name="Salvar Avaliação" />
      </div>
    </form>
  );
};

export default ReviewForm;