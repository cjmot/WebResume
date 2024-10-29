import { createContext, useContext } from 'react';
import useCart from './hooks/cartItems.ts';
import useUser from './hooks/user.ts'
import { CartItem } from './modules'
import usePageHeader from './hooks/pageHeader.ts';
import { User } from './typings'
import useAxiosHeader from './hooks/axiosHeader.ts';
import useIsDesktop from './hooks/isDesktop.ts';

const GlobalContext = createContext({});
const Provider = GlobalContext.Provider;

export const StoreProvider = ({ children }: any) => {
    const axiosData = useAxiosHeader();
    const cartItems = useCart();
    const { user, getUser } = useUser();
    const pageHeader = usePageHeader();
    const appLoaded = !!user?.userName;
    const triedToGetUser = !!user;
    const isDesktop = useIsDesktop();

    const store = {
        appLoaded,
        triedToGetUser,
        axiosData,
        pageHeader,
        cartItems,
        user,
        getUser,
        isDesktop
    };
    return <Provider value={store}>{children}</Provider>;
};

export const useStore = () => {
    const store: {
        cartItems?: { cart: CartItem[]; getCart: () => void };
        triedToGetUser?: boolean;
        user?: { user: User };
        getUser?: () => null;
        axiosData?: {
            axiosHeader: string;
            setAxiosHeader: (header: string) => void;
        };
        pageHeader?: {
            pageHeader: string;
            backLink: string;
            setHeader?: (header: string, backLink: string) => null;
            favicon: string;
            setFavicon: (favicon: string) => null;
        }
    } = useContext(GlobalContext);
    return store;
};
