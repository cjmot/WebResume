import { useEffect, useState } from 'react';
import { cartApi } from '../services/cartApi.ts';
import { CartItem } from '../modules';

const useCart = () => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const getCart = () => {
        let timeout = 100;
        setTimeout(() => {
            cartApi.getCartItems((data) => {
                setCart(data);
            });
        }, timeout);
    };

    useEffect(() => {
        getCart();
    }, []);

    return {
        cart,
        getCart
    };
};

export default useCart;
