import { Link } from "react-router-dom"

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="bg-black h-24 mt-10 flex flex-col text-center justify-center  text-white">
            <p className="">© Copyright Cyber Tech Brasil | {year}</p>
            <p className="mt-2 mb-2"><Link to="privacy">Política de Privacidade</Link></p>
        </footer>
    )
}