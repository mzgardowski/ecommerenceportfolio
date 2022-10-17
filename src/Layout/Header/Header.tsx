import { Link } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>HomePage</Link>
        <Link to='/product'>Product</Link>
      </nav>
    </header>
  );
};

export default Header;
