import Button from 'components/Button';
import './styles.css';

const CardLogin = () => {
  return (
    <div className="card-login-container bg-secondary">
      <h1>Login</h1>
      <form>
        <div className="form-login btn-login">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <div className="btn-login">
            <Button name="Fazer Login" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardLogin;
