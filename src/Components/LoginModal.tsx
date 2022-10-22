import { Modal } from 'react-bootstrap';

const LoginModal = ({
  showModal,
  toggleShowModal,
}: {
  showModal: boolean;
  toggleShowModal: () => void;
}) => {
  return (
    <Modal show={showModal} onHide={toggleShowModal}>
      <Modal.Header>Login or Register</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
