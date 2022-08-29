import Button from 'components/Button';
import StarImage from '../../../assets/images/star.png';
import './styles.css';

const PrivateRouteDetails = () => {
  return (
    <div className="container-details">
      <div className="container-title">
        <h1>Tela detalhes do filme id: 1</h1>
        <div className="container-input bg-secondary">
          <input type="text" placeholder="Deixe sua avaliação aqui" />
          <Button name="Salvar Avaliação" />
        </div>
      </div>
      <div className="container-post bg-secondary">
        <div className="individual-container-post">
          <img src={StarImage} alt="estrela" />
          <h1>Maria Silva</h1>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="individual-container-post">
          <img src={StarImage} alt="estrela" />
          <h1>Maria Silva</h1>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
        <div className="individual-container-post">
          <img src={StarImage} alt="estrela" />
          <h1>Maria Silva</h1>
          <p>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivateRouteDetails;
