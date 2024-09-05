import React from 'react';

import styles from './index.module.scss';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Button from 'src/components/Button';

import Router from 'next/router'

import Api from 'src/services/api';

export async function getServerSideProps({ params } : {params: {name: string}}) {
    try {
        const response = await Api.get("product/" + params.name);
        const data = response.data.result;

        return {
          props: {
            product: data[0],
          },
        };
      } catch (err) {
        console.error("Erro ao carregar os produtos:", err);
        return {
          props: {
            product: {},
          },
        };
      }
  }

export default function ProductDetails(
    {product}
) {
    return (
        <div className={styles["Product-Details"]}>
            <Header />
            <main>
                <div className={styles["Image-section"]}>
                    <img id={styles["Main-img"]} style={{backgroundImage: `url(${product.imgUrl})`}}/>
                    <div className={styles["Gallery"]}>
                        <img style={{backgroundImage: `url(${product.imgUrl})`}}/>
                        <img style={{backgroundImage: `url(${product.imgUrl})`}}/>
                        <img style={{backgroundImage: `url(${product.imgUrl})`}}/>
                    </div>
                </div>
                <div className={styles["Order-section"]}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div>
                    </div>
                    <p>Tamanhos disponíveis</p>
                    <div className={styles["Available-sizes"]}>
                        {product.sizes.split(',').map(size => <Button>{size}</Button>)}
                        </div>
                    <Button>Adicionar ao carrinho</Button>
                    <p onClick={() => Router.push('/ProductCatalog')} >Voltar ao catálogo</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}