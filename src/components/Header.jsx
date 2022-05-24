import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Nav from "react-bootstrap/Nav";
import { StorageContext } from "../utils/storage";
import { AddItemModal } from "./AddItemModal";
import { ViewEstimatesModal } from "./ViewEstimatesModal";

export const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEstimatesModalOpen, setIsEstimatesModalOpen] = useState(false);

  const { addItem } = useContext(StorageContext);

  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey, event) => {
          event.preventDefault();

          switch (selectedKey) {
            case "add-item":
              setIsAddModalOpen(true);
              break;
            case "view-estimates":
              setIsEstimatesModalOpen(true);
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
        open={isAddModalOpen}
        onSubmit={(event) => {
          const { description, time, stock, type, dependency } =
            event.target.elements;

          addItem({
            id: uuidv4(),
            description: description.value,
            time: parseInt(time.value),
            stock: parseInt(stock.value),
            dependency: dependency.value,
            type: type.value,
          });

          setIsAddModalOpen(false);
        }}
        onClose={() => setIsAddModalOpen(false)}
      />
      <ViewEstimatesModal
        open={isEstimatesModalOpen}
        onClose={() => setIsEstimatesModalOpen(false)}
      />
    </>
  );
};
