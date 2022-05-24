import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StorageContext } from "../utils/storage";
import { useContext } from "react";

export const AddItemModal = ({ open, onSubmit, onClose }) => {
  const { items } = useContext(StorageContext);

  return (
    <Modal show={open}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
        }}
      >
        <Modal.Header>
          <Modal.Title>Adicionar item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="time">
            <Form.Label>Lead time</Form.Label>
            <Form.Control type="number" placeholder="Em semanas" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Tipo de insumo</Form.Label>
            <Form.Select defaultValue="default">
              <option value="default" disabled>
                Escolha uma opção
              </option>
              <option value="comprado">Comprado</option>
              <option value="produzido">Produzido</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Estoque inicial</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="dependency">
            <Form.Label>Dependência</Form.Label>
            <Form.Select defaultValue="">
              <option value="" disabled>
                Escolha uma opção
              </option>
              {items.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
          <Button type="submit" variant="primary">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
