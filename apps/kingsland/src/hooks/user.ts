import { useEffect, useState } from 'react';
import { userApi } from '../services/userApi.ts';

const useUser = () => {
    const [user, setUser] = useState<any>();

    const getUser = (callback = () => {}) => {
        setTimeout(() => {
            userApi.getUser((res) => {
                if (res && res.data && Object.keys(res.data).length > 0) {
                    setUser(res.data);
                    callback();
                } else {
                    setUser({ loaded: 'failed' });
                }
            });
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return {
        user,
        getUser
    };
};

export default useUser;