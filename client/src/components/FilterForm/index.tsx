import { useState } from 'react';
import { useProducts } from '../../context/Products';
import styles from './styles.module.scss'

import FilterProps from '../../types/FilterProps';

import { Slider } from '@mui/material';

export default function FilterForm() {
    const { products, filteredProducts, setFilteredProducts } = useProducts();
    const [rangeValue, setRangeValue] = useState([50, 600])

    function handleFilterData(filter: FilterProps) {
        // console.log(filter.price);
        console.log(products)
        if (products !== null) {
            if (filter.category.length > 0 || filter.color.length > 0) {
                setFilteredProducts(products.filter((product) => 
                    (filter.price[0] < product.price && filter.price[1] > product.price) && // Aplica o filtro sobre os itens dentro da faixa de preço
                    (
                      (filter.category.includes(product.category) && filter.color.length === 0) || // Filto para apenas as categorias selecionadas
                      (filter.category.length === 0 && filter.color.includes(product.color)) || // Filtro para apenas as cores selecionadas
                      (filter.category.includes(product.category) && filter.color.includes(product.color)) // Filtro para ambas as categorias e cores selecionadas
                    )
                  ));
            } else { // Caso nenhum filto esteja selecionado, aplica apenas sobre a faixa de preço
                setFilteredProducts(products.filter((product) => 
                    (filter.price[0] < product.price && filter.price[1] > product.price)
                ));
            }
        } 
    }

    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const payload: FilterProps = {
            category: formData.getAll('category') as string[],
            color: formData.getAll('color') as string[],
            price: rangeValue
        }
        
        console.log(Object.fromEntries(formData.entries()));
        handleFilterData(payload);
    }

    function handleResetForm() {
        setFilteredProducts(null);
    }

    function handleRangeChange(e: Event, newValue: number | number[]) {
        setRangeValue(newValue as number[]);
    };

    return (
        <div className={styles["Filter-options"]}>
          <h2>Filtrar</h2>
          <form onSubmit={handleSubmitForm}>
            <div className={styles["Categories"]}>
              <p>Categorias</p>
              <div className={styles["Check-input"]}>
                <input
                  type="checkbox"
                  id="category1"
                  name="category"
                  value="Masculino"
                />
                <label>Masculino</label>
              </div>
              <div className={styles["Check-input"]}>
                <input
                  type="checkbox"
                  id="category2"
                  name="category"
                  value="Feminino"
                />
                <label>Feminino</label>
              </div>
              <div className={styles["Check-input"]}>
                <input
                  type="checkbox"
                  id="category3"
                  name="category"
                  value="Infantil"
                />
                <label>Infantil</label>
              </div>
            </div>
            <div className={styles["Sizes"]}>
              <p>Tamanhos</p>
              <div className={styles["Check-input"]}>
              <input type="checkbox" id="size1" name="size" value="PP" />
              <label>PP</label>
              </div>
              <div className={styles["Check-input"]}>
              <input type="checkbox" id="size2" name="size" value="P" />
              <label>P</label>
              </div>
              <div className={styles["Check-input"]}>
              <input type="checkbox" id="size3" name="size" value="M" />
              <label>M</label>
              </div>
              <div className={styles["Check-input"]}>
              <input type="checkbox" id="size4" name="size" value="G" />
              <label>G</label>
              </div>
              <div className={styles["Check-input"]}>
              <input type="checkbox" id="size5" name="size" value="GG" />
              <label>GG</label>
              </div>
            </div>
            <div className={styles["Colors"]}>
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
                        <div key={index} className={styles["Check-input"]}>
                          <input
                            type="checkbox"
                            id={`color${index}`}
                            name={"color"}
                            value={color}
                          />
                          <label>{color}</label>
                          <br />
                        </div>
                      )
                    })
                    
                }
            </div>
            <div className={styles["Price-range"]}>
              <p>Faixa de preço</p>
              <div>
                <p>R$0</p>
                <p>R$1000</p>
              </div>
              <Slider
                value={rangeValue}
                onChange={handleRangeChange}
                size="small"
                max={1000}
                defaultValue={600}
                // aria-label="Default"
                valueLabelDisplay="auto"
                name="price"
                slotProps={{rail: {style: {backgroundColor: "#8C8C8C"}}}}
                style={{color: "#A016F4"}}
                />
            </div>
            <button type="submit" value="Submit">Aplicar</button>
            {filteredProducts !== null && <button type="reset" onClick={handleResetForm}>Limpar</button>}
          </form>
        </div>
    )
}