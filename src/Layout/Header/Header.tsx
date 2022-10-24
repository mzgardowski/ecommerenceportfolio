import AccountLogin from 'src/Components/Layout/Header/AccountLogin';
import Navigation from 'src/Components/Layout/Header/Navigation';
import useHeader from 'src/Components/Layout/Header/utils/useHeader';
import LoginModal from 'src/Components/LoginModal/LoginModal';
import './Header.scss';

const Header = () => {
  const { openLinks, onLinksHandler, openLoginModal, onLoginModalHandler } =
    useHeader();
  return (
    <>
      <header className='app-header'>
        <nav className='row bg-light app-nav-header'>
          <Navigation openLinks={openLinks} onLinksHandler={onLinksHandler} />
          <div className='col-6'>
            <h4 className='text-center mt-2'>DEVRESER</h4>
          </div>
          <AccountLogin
            openLoginModal={openLoginModal}
            onLoginModalHandler={onLoginModalHandler}
          />
        </nav>
      </header>
      <LoginModal
        showModal={openLoginModal}
        toggleShowModal={onLoginModalHandler}
      />
    </>
  );
};

export default Header;
