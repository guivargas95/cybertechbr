import posthog from "posthog-js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CookiePolicyBanner() {

    const [showBanner, setShowBanner] = useState(true)

    const acceptCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false)
    }

    const declineCookies = () => {
        posthog.opt_out_capturing();
        setShowBanner(false);
    }

    return (
        <div className="">
            {showBanner == true && (
                <div className="bg-gray-500 p-2 mt-0 fixed w-full bottom-0 mb-3 text-left md:text-center md:h-62">
                    <div className="md:w-2/3 flex flex-col justify-center mr-auto ml-auto">
                        <h3 className="font-bold mt-3 mb-3 text-2xl">Aviso</h3>
                        <p className="text-lg">A Cyber Tech Brasil utiliza os cookies do navegador para aprimorar a sua experiência ao consumir os conteúdos desta página, personalizando os tipos de anúncio exibidos conforme especificado em nossa <Link className="underline hover:font-bold" to="/Privacy">Política de Cookies</Link>. Sinta-se livre para aceitar ou recusar a política a qualquer momento. </p>
                        <p className="text-lg">Clique no botão “Aceitar” para aceitar a política de Cookies ou clique no botão “Recusar” para recusar.</p>
                    </div>
                    <div className="text-center mt-5">
                        <button className="bg-green-300 rounded-2xl w-44 h-10" onClick={acceptCookies}>Aceitar</button>
                        <button className="bg-red-500 rounded-2xl w-44 h-10" onClick={declineCookies}>Recusar</button>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <Link to="/Privacy"><button className="bg-black text-white rounded-2xl w-80 h-10">Políticas de Cookies</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}
