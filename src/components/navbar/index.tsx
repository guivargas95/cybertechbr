import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-blue-500 p-2 mt-0 fixed w-full z-10 top-0 md:h-32">
                <div className="md:flex md:justify-around">
                    <div className="text-white font-extrabold">
                        <Link to="/"><img className="w-40 h-16 mr-auto ml-auto" src="/img/cybertechbrasil.png" alt="Logo da CyberTech Brasil" /></Link>
                    </div>
                    <div className="">
                        <ul className="text-center mt-3 mb-3">
                            <li className="font-titles font-bold text-lg hover:text-gray-700"><Link to="/">Início</Link></li>
                        </ul>
                    </div>
                </div>
                <ul className=" text-white rounded-lg flex justify-center mt-5 text-lg font-titles">
                    <li className="bg-black rounded-lg ml-2 mr-2 hover:text-blue-800"><Link to="/category/Tecnologia">Tecnologia</Link></li>
                    <li className="bg-black rounded-lg ml-2 mr-2 hover:text-blue-800"><Link to="/category/Saúde">Saúde</Link></li>
                    <li className="bg-black rounded-lg ml-2 mr-2 hover:text-blue-800"><Link to="/category/Meio%20Ambiente">Meio Ambiente</Link></li>
                </ul>
            </nav>

        </div>
    )
}