import React, { ReactNode, createContext, useContext, useState } from 'react';

import ProductCardProps from '../types/ProductCardProps';
import FilterProps from '../types/FilterProps';

interface ProductContextProps {
    products: ProductCardProps[] | null;
    setProducts: React.Dispatch<React.SetStateAction<ProductCardProps[] | null>>;
    filteredProducts: ProductCardProps[] | null;
    setFilteredProducts: React.Dispatch<React.SetStateAction<ProductCardProps[] | null>>;
}

const Context = createContext<ProductContextProps | null>(null);

interface ProductProviderProps {
    children: ReactNode;
}

export function Provider({children} : ProductProviderProps) {
    const [products, setProducts] = useState<ProductCardProps[] | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[] | null>(null);

    return (
        <Context.Provider value={{products, setProducts, filteredProducts, setFilteredProducts}}>
            {children}
        </Context.Provider>
    )
}

export const useProducts = () => {
    const useProductsContext = useContext(Context);

    if (!useProductsContext) {
        throw new Error(
            "useProducts precisa ser utilizado dentro de <Context.Provider>"
          );
    }

    return useProductsContext;
};