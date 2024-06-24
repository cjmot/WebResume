import { useEffect, useState } from 'react';

const usePageHeader = () => {
    const [pageHeader, setPageHeader] = useState<string>('');
    const [backLink, setBackLink] = useState<string>('');
    const [favicon, setFavicon] = useState<string>('');

    const setHeader = (header: string, backLink = '') => {
        setPageHeader(header);
        setBackLink(backLink);
    };

    useEffect(() => {
        if (favicon) {
            const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
            if (link) {
                link.href = favicon;
            } else {
                const newLink = document.createElement('link');
                newLink.rel = 'icon';
                newLink.href = favicon;
                document.head.appendChild(newLink);
            }
        }
    }, [favicon]);

    return {
        pageHeader,
        backLink,
        setHeader,
        favicon,
        setFavicon
    };
};

export default usePageHeader;