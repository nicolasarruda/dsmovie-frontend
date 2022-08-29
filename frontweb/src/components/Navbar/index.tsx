import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo">
          <h1>MovieFlix</h1>
        </Link>
        <Button name="sair" />
      </div>
    </nav>
  );
};

export default Navbar;
