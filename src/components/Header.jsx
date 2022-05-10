import { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { StorageContext } from "../utils/storage";
import { AddItemModal } from "./AddItemModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addItem } = useContext(StorageContext);

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

      <AddItemModal
        open={isModalOpen}
        onSubmit={(event) => {
          const { description, time, type, dependency } = event.target.elements;

          addItem({
            description: description.value,
            time: +time.value,
            type: type.value,
            dependency: dependency.value !== "" ? dependency.value : null,
          });

          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
