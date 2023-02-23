import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/"><img className="w-44 mt-3 mb-3 mr-auto ml-auto" src="/img/cybertechbrasil.png" alt="Logo da CyberTech Brasil" /></Link>
            <nav>
                <ul className="flex justify-around mt-10 mb-10">
                    <Link to="/"><li>Início</li></Link>
                    
                </ul>
            </nav>
        </div>
    )
}