import AccountLogin from 'src/Components/Layout/Header/AccountLogin';
import Navigation from 'src/Components/Layout/Header/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className='row bg-light app-header'>
        <Navigation />
        <div className='col-6'>
          <h4 className='text-center mt-2'>Clothes Shop</h4>
        </div>
        <AccountLogin />
      </nav>
    </header>
  );
};

export default Header;
