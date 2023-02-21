import { useLocation, useParams } from "react-router-dom"
import AllArticles from "../../components/articles/allArticles";
import Data from "../../components/articles/data.json"
import Navbar from "../../components/navbar";

export default function ArticlePage() {

    const data = Data.results
    const { id } = useParams();
    const imgPath = "/img/articleImg/"

    return (
        <div>
            <Navbar />
            <section>
                {data.map(response => {
                    if (response.id == parseInt(id || ""))
                        return (
                            <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400">
                                <h1 className="text-center mt-5 mb-5 text-2xl font-titles">{response.title}</h1>
                                <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                <div className="text-left font-texts font-bold">
                                    <p className="mt-2 mb-2">{response.p1}</p>
                                    <p className="mt-2 mb-2">{response.p2}</p>
                                    <p className="mt-2 mb-2">{response.p3}</p>
                                </div>
                                <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img2}`} alt={response.alt2} />
                                <div>
                                    <p className="mt-2 mb-2">{response.p4}</p>
                                    <p className="mt-2 mb-2">{response.p5}</p>
                                    <p className="mt-2 mb-2">{response.p6}</p>
                                </div>
                            </div>
                        )
                })}
            </section>
            <section>
                <h2 className="text-center mt-20 mb-16 font-texts font-bold text-3xl">Veja também!</h2>
                <AllArticles />
            </section>
        </div>
    )
}
