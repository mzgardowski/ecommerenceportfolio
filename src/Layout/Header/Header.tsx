import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>HomePage</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
