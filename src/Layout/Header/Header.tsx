import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='row bg-light app-header'>
      <nav className='col-md-3'>
        <ul>
          <li className='p-3'>
            <Link to='/'>HomePage</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
        </ul>
      </nav>
      <div className='col-md-6'>
        <h2 className='mt-3 text-center'>ecommerence DEMO</h2>
      </div>
      <div className='col-md-3'>asdasd</div>
    </header>
  );
};

export default Header;
