import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { login, signin } from "../../server/db";

const Login = () => {
  // Hooks
  const { setUser } = useAuthContext();
  const [usuario, setUsuario] = useState({});

  //   Functions
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    login(usuario.email, usuario.senha);
  };

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsuario((oldVal) => {
      return { ...oldVal, [name]: value };
    });
  };
  //   Render
  return (
    <div className="grid items-center">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Senha</label>
          <input
            type="password"
            name="pass"
            id="pass"
            required
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col">
          <button
            className="h-10 bg-emerald-900 rounded text-white"
            type="submit"
          >
            Entrar
          </button>
          <button
            className="h-10 bg-rose-900 rounded text-white"
            type="button"
            onClick={() =>
              signin({ usuario: "hugo", senha: "12345", nome: "Hugo" })
            }
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
