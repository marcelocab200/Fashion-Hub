import express from "express";
import ProductController from "./controllers/ProductController";

const router = express.Router();

router.get('/products', ProductController.getProducts);

export default router;