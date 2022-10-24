import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import './LoginModal.scss';

const LoginModal = ({
  showModal,
  toggleShowModal,
}: {
  showModal: boolean;
  toggleShowModal: () => void;
}) => {
  const [loginRegister, setLoginRegister] = useState<boolean>(false);
  const onChangeLoginRegister = () => {
    setLoginRegister((prev) => !prev);
  };
  return (
    <Modal show={showModal} onHide={toggleShowModal}>
      <Modal.Header style={{ border: 'none' }} closeButton>
        {loginRegister ? 'Register' : 'Login'}
      </Modal.Header>
      <Modal.Body>
        {loginRegister ? (
          <form className='loginRegisterForm'>
            <div className='formInput'>
              <input type='text' placeholder='Login' />
            </div>
            <div className='formInput'>
              <input type='password' placeholder='Password' />
            </div>
          </form>
        ) : (
          <form className='loginRegisterForm'>
            <div className='formInput'>
              <input type='text' placeholder='Login' />
            </div>
            <div className='formInput'>
              <input type='text' placeholder='Email' />
            </div>
            <div className='formInput'>
              <input type='text' placeholder='First Name' />
            </div>
            <div className='formInput'>
              <input type='text' placeholder='Last Name' />
            </div>
            <div className='formInput'>
              <input type='password' placeholder='Passowrd' />
            </div>
            <div className='formInput'>
              <input type='password' placeholder='Repeat password' />
            </div>
          </form>
        )}

        <div className='d-flex flex-column loginOrRegister'>
          <p>or</p>
          <button type='button' onClick={() => onChangeLoginRegister()}>
            {loginRegister ? 'register' : 'login'}
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <CustomButton
          type='button'
          btnType='cancelBtn'
          onClick={() => toggleShowModal()}
        >
          Close
        </CustomButton>
        <CustomButton type='button' btnType='submitBtn'>
          {loginRegister ? 'Login' : 'Register'}
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
