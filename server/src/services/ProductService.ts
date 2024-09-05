import db from "../db";

import { ProductProps } from "../controllers/ProductController";

async function getProductCatalog() {
    return new Promise<ProductProps[]>((resolve, reject) => {
        db.query('SELECT id, name, price, category, imgUrl, color, sizes FROM products', (error, results) => {
            if (error) reject(error);
            resolve(results);
        })
    })
}

async function getProduct(name: string) {
    return new Promise<ProductProps[]>((resolve, reject) => {
        db.query('SELECT id, name, price, category, imgUrl, color, description, sizes FROM products WHERE name = ?', [name], (error, results) => {
            if (error) reject(error);
            resolve(results);
        })
    })
}

const ProductService = {
    getProductCatalog,
    getProduct
}

export default ProductService;