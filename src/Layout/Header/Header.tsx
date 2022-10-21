import AccountLogin from 'src/Components/Layout/Header/AccountLogin';
import Navigation from 'src/Components/Layout/Header/Navigation';
import useHeader from 'src/Components/Layout/Header/utils/useHeader';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const { openAccount, openLinks, onAccountHandler, onLinksHandler } =
    useHeader();
  return (
    <header>
      <nav className='row bg-light app-header'>
        <Navigation openLinks={openLinks} onLinksHandler={onLinksHandler} />
        <div className='col-6'>
          <h4 className='text-center mt-2'>Clothes Shop</h4>
        </div>
        <AccountLogin
          openAccount={openAccount}
          onAccountHandler={onAccountHandler}
        />
      </nav>
    </header>
  );
};

export default Header;
