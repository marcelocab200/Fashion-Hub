import express from "express";
import ProductController from "./controllers/ProductController";

const router = express.Router();

router.get('/productCatalog', ProductController.getProductCatalog);
router.get('/product/:name', ProductController.getProduct);

export default router;