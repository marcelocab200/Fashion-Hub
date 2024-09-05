import styles from './index.module.scss'

import ProductCardProps from '../../types/ProductCardProps'
import Button from '../Button'

import Router from 'next/router'

export default function ProductCard({name, price, category, imgUrl, color}: ProductCardProps) {
    let formattedName = name.split(' ').join('-')

    return (
        <div className={styles["Product-card"]}>
            <div className={styles["Product-box"]}>
            <div className={styles["Product-image"]} style={{backgroundImage: `url(${imgUrl})`}}/>
            <p>{name}</p>
            <p>R${price}</p>
            <Button onClick={() => Router.push(`/produtos/${formattedName}`)}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}