import { useEffect, useRef } from 'react';

export default function AdsTerra(props: any) {
    const adsTerra = useRef<HTMLDivElement | null>(null)
    const atOptions = {
        key: props.keyAd,
        format: 'iframe',
        height: props.height,
        width: props.width,
        params: {},
    }

    useEffect(() => {
        if (!adsTerra.current?.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `var atOptions = ${JSON.stringify(atOptions)}`;
            if (adsTerra.current) {
                adsTerra.current.appendChild(conf);
                adsTerra.current.appendChild(script);
            }
        }

    }, []);

    return (
    <div className='flex justify-center mt-10 mb-10 ml-2 mr-2' ref={(node) => (adsTerra.current = node)} />

    );
}