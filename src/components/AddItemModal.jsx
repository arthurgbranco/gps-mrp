import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AddItemModal = ({ open, onClose }) => {
  return (
    <Modal show={open} onBackdropClick={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
