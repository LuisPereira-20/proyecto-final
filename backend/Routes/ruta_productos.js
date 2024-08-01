import { Router } from "express";
const router = Router();
import { getProductos, getProducto, postProducto, editarProducto, eliminarProducto} from "../Controller/Controlador_producto.js";

router.get("/productos",  getProductos);
router.get("/productos/:id",  getProducto);
router.post("/productos",  postProducto);
router.patch("/productos/:id",  editarProducto);
router.delete("/productos/:id",  eliminarProducto);

export default router;