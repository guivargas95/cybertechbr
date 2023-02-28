import { useEffect, useRef } from 'react'
export default function TopAdsTerra(): JSX.Element {

    const adsTerra = useRef<HTMLDivElement>(null)
    const atOptions = {
        key: 'e9670801a8a590e51e3ab8032918fd84',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {},
    }

    useEffect(() => {
        if (!adsTerra.current?.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.effectivecreativeformat.com/${atOptions.key}/invoke.js`
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

            if (adsTerra.current) {
                adsTerra.current.append(conf)
                adsTerra.current.append(script)
            }
        }
    }, [])

    return (
        <div className='flex justify-center mb-10 mt-10' ref={adsTerra}></div>
    )
}