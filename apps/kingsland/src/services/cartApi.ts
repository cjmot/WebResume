import axios from 'axios';
import { CartItem } from '../typings';

export const cartApi = {
    getCartItems(callBack: (data: any) => any) {
        const localData = JSON.parse(localStorage.getItem('cartItems') || '');
        if (localData) {
            callBack(localData);
        }

        axios({
            method: 'get',
            url: '/kingsland/cart',
            baseURL: 'http://localhost:3031'
        })
            .then((res) => {
                localStorage.setItem('cart', JSON.stringify(res.data));
                callBack(res.data);
            })
            .catch((e) => {
                console.error('Failed to get Events', e);
            });
    },

    upsertCartItem(data: Partial<CartItem>, callBack: () => any) {
        axios({
            method: 'post',
            url: '/kingsland/cart',
            baseURL: 'http://localhost:3031',
            data
        })
            .then(() => {
                callBack();
            })
            .catch((e) => {
                console.error('Failed to add/update event from drop', e);
            });
    },

    deleteCartItem(itemId: string, callBack: () => any) {
        if (itemId) {
            axios({
                method: 'delete',
                url: `/kingsland/cart/${itemId}`,
                baseURL: 'http://localhost:3031'
            })
                .then(() => {
                    callBack();
                })
                .catch((e) => {
                    console.error('Failed to delete event', e);
                });
        }
    }
};
