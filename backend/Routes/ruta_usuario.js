import  router from 'express';
const User  = router();   

import { getUsuarios, getUsuario, postUsuario, Actualizar_Usuario, Eliminar_Usuario} from "../Controller/Controlador_usuario.js";

User.get("/usuarios",  getUsuarios);
User.get("/usuarios/:id",  getUsuario);
User.post("/usuarios",  postUsuario);
User.patch("/usuarios/:id",  Actualizar_Usuario);
User.delete("/usuarios/:id",  Eliminar_Usuario);

export default User