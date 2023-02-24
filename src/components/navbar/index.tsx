import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-blue-500 p-2 mt-0 fixed w-full z-10 top-0 md:h-20">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center  text-white font-extrabold">
                        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                            <img className="w-40 h-16 mr-auto ml-auto" src="/img/cybertechbrasil.png" alt="Logo da CyberTech Brasil" />
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-center flex-1 md:flex-none items-center md:justify-between md:mr-36">
                            <li className="font-titles font-bold text-lg hover:text-gray-700"><Link to="/">Início</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}