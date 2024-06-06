import axios, { AxiosResponse } from 'axios';

const attempting: boolean[] = [];

export const userApi = {
    getUser(callBack: (res?: AxiosResponse<any, any>) => any) {
        attempting.push(true);
        const attemptNumber = attempting.length;
        axios({
            method: 'get',
            url: '/kingsland/user',
            baseURL: 'http://localhost:3031',
        })
            .then((res) => {
                attempting[attemptNumber - 1] = false;
                const uid = res?.data?.userId || '';
                const lUid = localStorage.getItem('uid');
                if (lUid && lUid !== lUid) {
                    localStorage.clear();
                }
                localStorage.setItem('uid', uid);
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
