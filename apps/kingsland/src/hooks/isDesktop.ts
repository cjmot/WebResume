import { useEffect, useState } from 'react';

const useIsDesktop = (): boolean => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    const getIsDesktop = () => {
        const { innerWidth: width } = window;

        return width >= 1024;
    }

    useEffect(() => {
        getIsDesktop();

        function handleResize() {
            setIsDesktop(getIsDesktop());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isDesktop;
};

export default useIsDesktop;