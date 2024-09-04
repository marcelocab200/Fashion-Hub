import React, { useEffect } from 'react';

import Api from '../../services/api';

import styles from "./index.module.scss";

import ProductCard from "src/components/ProductCard";
import FilterForm from 'src/components/FilterForm';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import { useProducts } from '../../context/Products';

import { CircularProgress } from '@mui/material';


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
      <Header/>
      {
        products === null ? <div className={styles["Loading"]}> <CircularProgress style={{color: "#a016f4"}}/> </div>:
        (<main>
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
      </main>)      
      }
      <Footer/>
    </div>
  );
}

export default ProductCatalog;