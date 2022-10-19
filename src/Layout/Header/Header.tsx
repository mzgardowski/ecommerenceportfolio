import Navigation from 'src/Components/Layout/Header/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <header className='row bg-light app-header'>
      <Navigation />
      <div className='col-6'>
        <h4 className='text-center mt-3'>Clothes Shop</h4>
      </div>
      <div className='col-3'>
        <i className='bi-alarm' color='black'></i>
      </div>
    </header>
  );
};

export default Header;
