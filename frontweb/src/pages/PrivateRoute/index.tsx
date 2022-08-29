import { Link } from 'react-router-dom';
import './styles.css';

const PrivateRoute = () => {
  return (
    <div className="list-movies-container">
      <h1>Tela listagem de filmes</h1>
      <Link to="movies/1" className="text-link">
        <p>Acessar /movies/1</p>
      </Link>
      <Link to="movies/2" className="text-link">
        <p>Acessar /movies/2</p>
      </Link>
    </div>
  );
};

export default PrivateRoute;
