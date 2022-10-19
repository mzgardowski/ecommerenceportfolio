import Navigation from 'src/Components/Layout/Header/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <header className='row bg-light app-header'>
      <Navigation />
      <div className='col-md-6'>
        <h2 className='mt-3 text-center'>ecommerence DEMO</h2>
      </div>
      <div className='col-md-3'>
        <i className='bi-alarm' color='black'></i>
      </div>
    </header>
  );
};

export default Header;
