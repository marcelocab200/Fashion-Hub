import React, { useEffect } from 'react';

import Api from '../../services/api';

import styles from "./index.module.scss";

import facebookIcon from "../../../public/Icon facebook square.png";
import twitterIcon from "../../../public/Icon twitter.png";
import instagramIcon from "../../../public/Icon instagram.png";

import ProductCard from "../../components/ProductCard";
import FilterForm from '../../components/FilterForm';

import { useProducts } from '../../context/Products';



function ProductCatalog() {
  const { products, setProducts, filteredProducts } = useProducts();

  useEffect(() => {
    // Faz a requisição da lista de produtos no MySQL por meio da API
      (async () => {
        try {
          const response = await Api.get("products");
          setProducts(response.data.result);
        } catch (err: any) {
          console.error("Erro ao carregar os produtos:", err);
        }
      })();
  }, [])

  return (
    <div className={styles["Product-Catalog"]}>
      <header>
        <a href="" className={styles["Logo"]}>
          Fashion Hub
        </a>
        <nav>
          <ul>
            <a href="">Início</a>
            <a href="">Loja</a>
            <a href="">Contatos</a>
          </ul>
        </nav>
      </header>
      <main>
        <FilterForm/>
        <div className={styles["Products"]}>
          {
            filteredProducts !== null ? filteredProducts?.map((product, index) => {
              let {name, imgUrl, price, category, color} = product;

              return (
                <ProductCard 
                  key={index} 
                  name={name} 
                  imgUrl={imgUrl} 
                  price={price} 
                  category={category} 
                  color={color} 
                />
            )}) :
            products !== null ? products?.map((product, index) => {
              let {name, imgUrl, price, category, color} = product;

              return (
                <ProductCard 
                  key={index} 
                  name={name} 
                  imgUrl={imgUrl} 
                  price={price} 
                  category={category} 
                  color={color} 
                />
            )}) : <p>Carregando...</p>
          }
        </div>
      </main>
      <footer>
        <div className={styles["Rights-section"]}>
          <p>Fashion Hub</p>
          <p id="Copyright">@ 2023 Fashion Hub. Todos direitos reservados</p>
        </div>
        <div className={styles["Social-media"]}>
          <p>Siga a gente</p>
          <div>
            <a href="">
              <img src={facebookIcon.src} alt="Facebook" />
            </a>
            <a href="">
              <img src={twitterIcon.src} alt="Twitter" />
            </a>
            <a href="">
              <img src={instagramIcon.src} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductCatalog;