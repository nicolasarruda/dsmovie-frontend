import Button from 'components/Button';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <h1>MovieFlix</h1>
        <Button name="sair" />
      </div>
    </nav>
  );
};

export default Navbar;
