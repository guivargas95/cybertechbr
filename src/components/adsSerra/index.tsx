import { useEffect, useRef } from 'react'
export default function AdsSerra(): JSX.Element {

    const adsTerra = useRef<HTMLDivElement>(null)
    const atOptions = {
        key: '63d2ae3470ce030358178c5721040be3',
        format: 'iframe',
        height: 250,
        width: 300,
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
        <div ref={adsTerra}></div>
    )
}