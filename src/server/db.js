import Dexie from "dexie";
import { setCookie } from "../utils/CookieJar";

export const db = new Dexie("Auth");
db.version(1).stores({
  usuarios: "++id, usuario, senha, nome",
});

export const login = async (email, senha) => {
  const u = await db.usuarios.where("[email+senha]").equals([email, senha]);
  setCookie("user", u);
  console.log("Logado");
};

export const signin = async (usuario) => {
  const id = db.usuarios.add({
    usuario: usuario.usuario,
    senha: usuario.senha,
    nome: usuario.nome,
  });
  return { ...usuario, id };
};
