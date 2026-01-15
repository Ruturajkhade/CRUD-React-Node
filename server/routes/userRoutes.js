import express from 'express';
import { create, deleteUser, getAll, getOne, update } from '../controller/userController.js';

const route = express.Router();

route.post("/user", create);
route.get("/users", getAll);
route.get("/user/:id", getOne);
route.put("/user/:id", update);
route.delete("/user/:id", deleteUser);

export default route;