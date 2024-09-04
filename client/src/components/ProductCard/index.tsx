import styles from './index.module.scss'

import ProductCardProps from '../../types/ProductCardProps'
import Button from '../Button'

export default function ProductCard({name, price, category, imgUrl, color}: ProductCardProps) {

    return (
        <div className={styles["Product-card"]}>
            <div className={styles["Product-box"]}>
            <div className={styles["Product-image"]} style={{backgroundImage: `url(${imgUrl})`}}/>
            <p>{name}</p>
            <p>R${price}</p>
            <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}