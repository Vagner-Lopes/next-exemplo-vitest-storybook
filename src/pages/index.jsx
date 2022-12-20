import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Container } from '../styles/pageStyles/Home';

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <h1>ASDASD AdAsd</h1>
      <h1>ASDASD AdAsd</h1>

      {showModal && (
        <Modal toggleShowModal={toggleShowModal} title={'Hire me'}>
          Front-End Developer
        </Modal>
      )}
    </Container>
  );
}
