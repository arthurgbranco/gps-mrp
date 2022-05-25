import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { StorageContext } from "../utils/storage";

export const BodyTable = () => {
  const { items } = useContext(StorageContext);
  console.log(items);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Descrição</th>
          <th>Lead time</th>
          <th>Estoque inicial</th>
          <th>Tipo</th>
          <th>Dependência</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.description}</td>
            <td>{item.time} semanas</td>
            <td>{item.stock}</td>
            <td>{item.type === "comprado" ? "Comprado" : "Produzido"}</td>
            <td>
              {item.dependency
                ? items.find((i) => i.id === item.dependency).description
                : "Nenhuma"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
