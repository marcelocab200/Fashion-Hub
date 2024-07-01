import './ProductCard.css'

export default function ProductCard({name, price}) {
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