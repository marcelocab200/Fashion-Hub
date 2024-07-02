import './ProductCard.css'

import ProductCardProps from '../../types/ProductCardProps'

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