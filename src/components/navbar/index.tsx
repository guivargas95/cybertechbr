import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    function changeMenuOption() {
        if (showMenu == true) {
            setShowMenu(false)
        }
        if (showMenu == false) {
            setShowMenu(true)
        }
    }

    function hideMenu() {
        if (self.innerWidth < 800) {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        if (self.innerWidth >= 800) {
            setShowMenu(true)
        }
    }, [self.innerWidth])

    return (
        <div>
            <nav className="bg-blue-500 p-2 mt-0 fixed w-full z-10 top-0 md:h-32">
                <div className="md:flex md:justify-around">
                    <div className="text-white font-extrabold">
                        <Link to="/"><img className="w-40 h-16 mr-auto ml-auto" src="/img/cybertechbrasil.png" alt="Logo da CyberTech Brasil" /></Link>
                    </div>
                    <div className="">
                        <ul className="mt-3 mb-3 flex flex-col">
                            <li className="text-center font-titles font-bold text-lg hover:text-gray-700"><Link to="/">Início</Link></li>
                            <li className="md:hidden"><button onClick={changeMenuOption}><img src="/img/menu.png" alt="abrir menu" /></button></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showMenu == true && (
                <div className="bg-blue-900 font-texts font-bold text-white w-1/2 h-full fixed left-0 top-32 rounded-3xl md:w-full md:h-12">
                    <h3 className="mt-10 text-center text-2xl md:hidden md:mt-0">Categorias</h3>
                    <ul className="mt-10 flex-col flex items-start md:flex-row md:justify-center md:mt-2">
                        <li className="mt-4 ml-2 mr-2 md:ml-10 md:mr-10 md:mt-0 hover:text-blue-800"><Link to="/category/Tecnologia" onClick={hideMenu}>Tecnologia</Link></li>
                        <li className="mt-4 ml-2 mr-2 md:ml-10 md:mr-10 md:mt-0 hover:text-blue-800"><Link to="/category/Saúde" onClick={hideMenu}>Saúde</Link></li>
                        <li className="mt-4 ml-2 mr-2 md:ml-10 md:mr-10 md:mt-0 hover:text-blue-800"><Link to="/category/Meio%20Ambiente" onClick={hideMenu}>Meio Ambiente</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}