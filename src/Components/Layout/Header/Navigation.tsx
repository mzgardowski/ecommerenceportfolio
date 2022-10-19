import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
