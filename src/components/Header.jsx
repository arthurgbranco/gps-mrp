import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { AddItemModal } from "./AddItemModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey, event) => {
          event.preventDefault();

          switch (selectedKey) {
            case "add-item":
              setIsModalOpen(true);
              break;

            default:
              break;
          }
        }}
      >
        <Nav.Item>
          <Nav.Link href="add-item">Adicionar Item</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="view-estimates">Visualizar Previsão</Nav.Link>
        </Nav.Item>
      </Nav>

      <AddItemModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
