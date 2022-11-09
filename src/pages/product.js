import React from 'react';
import { Detail } from '../components/product_detail/detail';

const Product = ({ convertPrice, cart, setCart }) => {
    return (
        <div>
            <Detail convertPrice={convertPrice} cart={cart} setCart={setCart} />
        </div>
    );
};

export default Product;
