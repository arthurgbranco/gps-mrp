import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StorageContext } from "../utils/storage";
import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { mrp } from "../utils/mrp";

export const ViewEstimatesModal = ({ open, onSubmit, onClose }) => {
  const { items } = useContext(StorageContext);

  const [stock, setStock] = useState(null);
  const [lotSize, setLotSize] = useState(null);
  const [necessity, setNecessity] = useState(null);

  const onChangeProduct = (event) => {
    const { value } = event.target;
    const item = items.find((item) => item.id === value);

    setStock(item.stock);
  };

  const onChangeLotSize = (event) => {
    setLotSize(parseInt(event.target.value));
  };

  const onChangeNecessity = (event) => {
    setNecessity(parseInt(event.target.value));
  };

  const mrpEntries =
    stock && lotSize && necessity
      ? mrp(stock, new Array(10).fill(necessity), lotSize)
      : null;

  return (
    <Modal show={open}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
        }}
      >
        <Modal.Header>
          <Modal.Title>Visualizar MRP</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Produto</Form.Label>
            <Form.Select defaultValue="default" onChange={onChangeProduct}>
              <option value="default" disabled>
                Escolha uma opção
              </option>
              {items.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.description}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="necessity">
            <Form.Label>Necessidade</Form.Label>
            <Form.Control type="number" onChange={onChangeNecessity} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Tamanho do lote</Form.Label>
            <Form.Control type="number" onChange={onChangeLotSize} />
          </Form.Group>

          {stock && lotSize && necessity ? (
            <Table bordered>
              <thead>
                <tr>
                  <th>Períodos</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Necessidades brutas</td>
                  {mrpEntries.map((entry, index) => (
                    <td key={index}>{entry.necessity}</td>
                  ))}
                </tr>
                <tr>
                  <td>Recebimentos programados</td>
                  {mrpEntries.map((_, index) => (
                    <td key={index}>0</td>
                  ))}
                </tr>
                <tr>
                  <td>Estoque projetado</td>
                  {mrpEntries.map((entry, index) => (
                    <td key={index}>{entry.stock}</td>
                  ))}
                </tr>
                <tr>
                  <td>Recebimento de ordens planejadas</td>
                  {mrpEntries.map((entry, index) => (
                    <td key={index}>{entry.planned}</td>
                  ))}
                </tr>
                <tr>
                  <td>Liberação de ordens planejadas</td>
                  {mrpEntries.map((entry, index) => (
                    <td key={index}>{entry.received}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
