import express from 'express'
import {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
} from "../controllers/usersControllers.js";

const router = express.Router()

router.post("/crear",createUser);
router.get("/traer",getAllUsers);
router.patch("/actualizar",updateUser);
router.delete("/eliminar", deleteUser);

export default router