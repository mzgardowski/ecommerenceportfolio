import { useState } from 'react';
import { Person } from 'react-bootstrap-icons';
import useHeader from './utils/useHeader';

const AccountLogin = ({
  openLoginModal,
  onLoginModalHandler,
}: {
  openLoginModal: boolean;
  onLoginModalHandler: () => void;
}) => {
  return (
    <>
      <div className='d-flex col-3 justify-content-end'>
        <Person
          cursor='pointer'
          onClick={() => onLoginModalHandler()}
          size={30}
          className='m-2'
        />
      </div>
    </>
  );
};

export default AccountLogin;
