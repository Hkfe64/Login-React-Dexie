import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../../server/db";

const Dashboard = () => {
  const usuarios = useLiveQuery(() => db.usuarios.toArray());
  return (
    <div>
      Dashboard
      <ul>
        {usuarios?.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
