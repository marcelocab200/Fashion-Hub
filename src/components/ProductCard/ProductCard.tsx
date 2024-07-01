import './ProductCard.css'

interface ProductCardProps {
    name: string;
    price: number;
}

export default function ProductCard({name, price}: ProductCardProps) {

    return (
        <div className="Product-card">
            <div className="Product-box">
            <div className="Product-image"/>
            <p>{name}</p>
            <p>R${price}</p>
            <button type="button">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}