import { useState } from 'react';

const useAxiosHeader = () => {
    const [axiosHeader, setAxiosHeader] = useState<string>('');

    return {
        axiosHeader,
        setAxiosHeader,
    };
};

export default useAxiosHeader;