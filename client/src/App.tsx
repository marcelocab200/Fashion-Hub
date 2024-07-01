import React, { useEffect, useState } from 'react';

import Api from './services/api';

import "./App.css";

import facebookIcon from "./images/Icon facebook square.png";
import twitterIcon from "./images/Icon twitter.png";
import instagramIcon from "./images/Icon instagram.png";

import ProductCard from "./components/ProductCard/ProductCard";

import { ProductCardProps } from './components/ProductCard/ProductCard';

interface FilterProps {
  category: string[];
  color: string[];
  priceRange: number[];
}

function App() {
  const [products, setProducts] = useState<ProductCardProps[] | null>(null)

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
        <div className="Filter-options">
          <h2>Filtrar</h2>
          <form>
            <div className="Categories">
              <p>Categorias</p>
              <input
                type="checkbox"
                id="category1"
                name="category1"
                value="Masculino"
              />
              <label>Masculino</label>
              <br />
              <input
                type="checkbox"
                id="category2"
                name="category2"
                value="Feminino"
              />
              <label>Feminino</label>
              <br />
              <input
                type="checkbox"
                id="category3"
                name="category3"
                value="Infantil"
              />
              <label>Infantil</label>
              <br />
            </div>
            <div className="Sizes">
              <p>Tamanhos</p>
              <input type="checkbox" id="size1" name="size1" value="PP" />
              <label>PP</label>
              <br />
              <input type="checkbox" id="size2" name="size2" value="P" />
              <label>P</label>
              <br />
              <input type="checkbox" id="size3" name="size3" value="M" />
              <label>M</label>
              <br />
              <input type="checkbox" id="size4" name="size4" value="G" />
              <label>G</label>
              <br />
              <input type="checkbox" id="size5" name="size5" value="GG" />
              <label>GG</label>
              <br />
            </div>
            <div className="Colors">
              <p>Cores</p>
                { 
                  // Pega a lista de cores únicas dos produtos
                  products?.reduce<string[]>((acc, product) => {
                    if (!acc.includes(product.color)) {
                      acc.push(product.color);
                    }

                    return acc;
                  },[])
                  // Retorna o componente para cada cor
                  .map((color, index) => {
                      return (
                        <div>
                          <input
                            type="checkbox"
                            id={`color${index}`}
                            name={`color${index}`}
                            value={color}
                          />
                          <label>{color}</label>
                          <br />
                        </div>
                      )
                    })
                    
                }
            </div>
            <div className="Price-range">
              <p>Faixa de preço</p>
              <div>
                <p>R$0</p>
                <p>R$1000</p>
              </div>
              <input type="range" min="0" max="1000" value="500" />
            </div>
            <input type="submit" name="Submit" value="Aplicar" />
          </form>
        </div>
        <div className="Products">
          {
            products !== null ? products?.map((product) => {
              let {name, imgUrl, price, category, color} = product;

              return (
              <ProductCard name={name} imgUrl={imgUrl} price={price} category={category} color={color} />
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