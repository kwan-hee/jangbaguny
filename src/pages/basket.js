import React from 'react';
import { Cart } from '../components/cart/cart';

const Basket = ({ cart, setCart, convertPrice, checkLists, setCheckLists }) => {
    return (
        <div>
            <Cart
                cart={cart}
                setCart={setCart}
                convertPrice={convertPrice}
                checkLists={checkLists}
                setCheckLists={setCheckLists}
            />
        </div>
    );
};

export default Basket;
