import axios, { AxiosResponse } from 'axios';

const attempting: boolean[] = [];

export const userApi = {
    getUser(callBack: (res?: AxiosResponse<any, any>) => any) {
        attempting.push(true);
        const attemptNumber = attempting.length;
        axios({
            method: 'get',
            url: '/kingsland/auth/login',
            baseURL: 'http://localhost:3031',
            data: {
                userName: 'test'
            }
        })
            .then((res) => {
                attempting[attemptNumber - 1] = false;
                const unm = res?.data?.userName || '';
                const lUnm = localStorage.getItem('unm');
                if (lUnm && lUnm !== unm) {
                    localStorage.clear();
                }
                localStorage.setItem('uid', unm);
                callBack(res);
            })
            .catch((e) => {
                callBack();
                setTimeout(() => {
                    if (attempting.length === attemptNumber) {
                        console.error('Failed to get User', e);
                        if (!window.location.href.includes('/login')) {
                            window.location.href = '/kingsland/login';
                        }
                    }
                }, 1000);
            })
    },
}
