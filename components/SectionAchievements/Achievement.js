import { useState } from 'react';
import Modal from '../Modal';
import PropTypes from 'prop-types';

export default function Achievement({ images }) {
  const [modalVisible, setModalVisible] = useState(false);

  const modalContent = () => (
    <div className="modal-body">
      {images.map((image) => (
        <p key={image}>{image}</p>
      ))}
    </div>
  );

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <button onClick={() => setModalVisible(true)}>
      <p>{images[0]}</p>
      <Modal
        onClose={closeModal}
        renderContent={modalContent}
        show={modalVisible}
      />
    </button>
  );
}

Achievement.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
