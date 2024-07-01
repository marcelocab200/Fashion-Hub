import db from "../db";

import { Product } from "../controllers/ProductController";

async function getProducts() {
    return new Promise<Product[]>((resolve, reject) => {
        db.query('SELECT * FROM products', (error, results) => {
            if (error) reject(error);
            resolve(results);
        })
    })
}

const ProductService = {
    getProducts
}

export default ProductService;