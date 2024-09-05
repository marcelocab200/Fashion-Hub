import ProductService from "../services/ProductService";
import { Request, Response } from "express";

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    category: string;
    imgUrl: string;
    color: string;
}

async function getProductCatalog(req: Request, res: Response) {

    let products = await ProductService.getProductCatalog();
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

async function getProduct(req: Request, res: Response) {
    let name = req.params.name.replace(/-/g, ' ');

    let product = await ProductService.getProduct(name);
    let json = {error: '', result: product}

    res.json(json);
};

const ProductController = {
    getProductCatalog,
    getProduct
};

export default ProductController;