import React, { useEffect, useState } from 'react';

import Api from './services/api';

import "./App.css";

import facebookIcon from "./images/Icon facebook square.png";
import twitterIcon from "./images/Icon twitter.png";
import instagramIcon from "./images/Icon instagram.png";

import ProductCard from "./components/ProductCard/ProductCard";

import ProductCardProps from './types/ProductCardProps';

import FilterProps from './types/FilterProps';

import { useProducts } from './context/Products';

import { Provider } from './context/Products';
import FilterForm from './components/FilterForm/FilterForm';

function App() {
  // const [products, setProducts] = useState<ProductCardProps[] | null>(null)
  const { products, setProducts, filteredProducts, setFilteredProducts } = useProducts();

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
    <div className="App">
      <header>
        <a href="" className="Logo">
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
        <div className="Products">
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
        <div className="Rights-section">
          <p>Fashion Hub</p>
          <p id="Copyright">@ 2023 Fashion Hub. Todos direitos reservados</p>
        </div>
        <div className="Social-media">
          <p>Siga a gente</p>
          <div>
            <a href="">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;