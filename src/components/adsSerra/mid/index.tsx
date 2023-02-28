import { useEffect, useRef } from 'react'
export default function MidAdsTerra(): JSX.Element {

    const adsTerra = useRef<HTMLDivElement>(null)
    const atOptions = {
        key: '8b60dd6d58076a1bb31d3ef53b33b8eb',
        format: 'iframe',
        height: 50,
        width: 320,
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