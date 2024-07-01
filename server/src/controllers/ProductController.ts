import ProductService from "../services/ProductService";
import { Request, Response } from "express";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imgUrl: string;
    color: string;
}

async function getProducts(req: Request, res: Response) {

    let products = await ProductService.getProducts();
    let products_list = products.map(product => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            imgUrl: product.imgUrl,
            color: product.color
        }
    });

    let json = {error: '', result: products_list}

    res.json(json);
};

const ProductController = {
    getProducts
};

export default ProductController;