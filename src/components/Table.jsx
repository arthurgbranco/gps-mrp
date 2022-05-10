import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { StorageContext } from "../utils/storage";

export const BodyTable = () => {
  const { items } = useContext(StorageContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Descrição</th>
          <th>Tempo de obtenção</th>
          <th>Tipo de insumo</th>
          <th>Dependência</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.description}</td>
            <td>{item.time} semanas</td>
            <td>{item.type === "comprado" ? "Comprado" : "Produzido"}</td>
            <td>{item.dependency ?? "Nenhuma"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
