import './ProductCard.css'

export interface ProductCardProps {
    id?: number;
    name: string;
    price: number;
    category: string;
    imgUrl: string;
    color: string;
}

export default function ProductCard({name, price, category, imgUrl, color}: ProductCardProps) {

    return (
        <div className="Product-card">
            <div className="Product-box">
            <div className="Product-image" style={{backgroundImage: `url(${imgUrl})`}}/>
            <p>{name}</p>
            <p>R${price}</p>
            <button type="button">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}