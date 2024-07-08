import styles from './styles.module.scss'

import ProductCardProps from '../../types/ProductCardProps'

export default function ProductCard({name, price, category, imgUrl, color}: ProductCardProps) {

    return (
        <div className={styles["Product-card"]}>
            <div className={styles["Product-box"]}>
            <div className={styles["Product-image"]} style={{backgroundImage: `url(${imgUrl})`}}/>
            <p>{name}</p>
            <p>R${price}</p>
            <button type="button">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}