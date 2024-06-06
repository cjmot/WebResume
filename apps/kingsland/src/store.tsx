import { createContext, useContext } from 'react';
import useCart from './hooks/cartItems';
import { CartItem } from './typings'

const GlobalContext = createContext({});
const Provider = GlobalContext.Provider;

export const StoreProvider = ({ children }: any) => {
    const cartItems = useCart();

    const store = {
        cartItems
    };
    return <Provider value={store}>{children}</Provider>;
};

export const useStore = () => {
    const store: {
        cartItems?: { cart: CartItem[]; getCart: () => void };
    } = useContext(GlobalContext);
    return store;
};
