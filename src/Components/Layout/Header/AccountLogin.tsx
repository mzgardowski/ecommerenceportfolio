import { useState } from 'react';
import { Person } from 'react-bootstrap-icons';

const AccountLogin = () => {
  const [account, setAccount] = useState<boolean>(false);

  const onToggleAccount = () => {
    setAccount((prev) => !prev);
  };

  return (
    <>
      <div className='col-3 justify-content-end'>
        <Person onClick={() => onToggleAccount()} size={30} className='m-2' />
        {account && (
          <div className='position-fixed bg-light col-12'>
            <h3>asd</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountLogin;
