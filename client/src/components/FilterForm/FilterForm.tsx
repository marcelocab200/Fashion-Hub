import { useState } from 'react';
import { useProducts } from '../../context/Products';
import './FilterForm.css'

import FilterProps from '../../types/FilterProps';

import { Slider } from '@mui/material';

export default function FilterForm() {
    const { products, setProducts, filteredProducts, setFilteredProducts } = useProducts();
    const [rangeValue, setRangeValue] = useState([50, 600])

    function handleFilterData(filter: FilterProps) {
        console.log(filter.price);
        if (products !== null) {
            if (filter.category.length > 0 || filter.color.length > 0) {
                setFilteredProducts(products.filter((product) => 
                    (filter.price[0] < product.price && filter.price[1] > product.price) && // Aplica o filtro sobre os itens dentro da faixa de preço
                    (filter.category.includes(product.category) || // Aplica o filtro sobre o item caso a categoria seja selecionada
                    filter.category.length === 0 && filter.color.includes(product.color)) // Caso a cor seja selecionada porém a categoria selecionada não pertença ao produto, ele não aparece
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
        
        console.log(payload);
        handleFilterData(payload);
    }

    function handleResetForm() {
        setFilteredProducts(null);
    }

    function handleRangeChange(e: Event, newValue: number | number[]) {
        setRangeValue(newValue as number[]);
    };

    return (
        <div className="Filter-options">
          <h2>Filtrar</h2>
          <form onSubmit={handleSubmitForm}>
            <div className="Categories">
              <p>Categorias</p>
              <input
                type="checkbox"
                id="category1"
                name="category"
                value="Masculino"
              />
              <label>Masculino</label>
              <br />
              <input
                type="checkbox"
                id="category2"
                name="category"
                value="Feminino"
              />
              <label>Feminino</label>
              <br />
              <input
                type="checkbox"
                id="category3"
                name="category"
                value="Infantil"
              />
              <label>Infantil</label>
              <br />
            </div>
            <div className="Sizes">
              <p>Tamanhos</p>
              <input type="checkbox" id="size1" name="size" value="PP" />
              <label>PP</label>
              <br />
              <input type="checkbox" id="size2" name="size" value="P" />
              <label>P</label>
              <br />
              <input type="checkbox" id="size3" name="size" value="M" />
              <label>M</label>
              <br />
              <input type="checkbox" id="size4" name="size" value="G" />
              <label>G</label>
              <br />
              <input type="checkbox" id="size5" name="size" value="GG" />
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
                        <div key={index}>
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
            <div className="Price-range">
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
                aria-label="Default"
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