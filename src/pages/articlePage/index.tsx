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
                    if (response.id == parseInt(id || "")) {
                        if (response.type === "article") {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400">
                                    <h1 className="text-center mt-5 mb-5 text-2xl font-titles">{response.title}</h1>
                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div className="text-left font-texts font-bold">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p1}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p2}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p3}</p>
                                    </div>
                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img2}`} alt={response.alt2} />
                                    <div className="text-left font-texts font-bold">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p4}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p5}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p6}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400">
                                    <h1 className="text-center mt-5 mb-5 text-2xl font-titles">{response.title}</h1>
                                    <div className="text-left font-texts font-bold">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p1}</p>
                                    </div>
                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div>
                                        <ul>
                                            <li>{response.tip1}</li>
                                            <li>{response.tip2}</li>
                                            <li>{response.tip3}</li>
                                            <li>{response.tip4}</li>
                                            <li>{response.tip5}</li>
                                            <li>{response.tip6}</li>
                                            <li>{response.tip7}</li>
                                            <li>{response.tip8}</li>
                                            <li>{response.tip9}</li>
                                            <li>{response.tip10}</li>
                                        </ul>
                                        <div className="text-left font-texts font-bold">
                                            <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p3}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                })}
            </section>
            <section>
                <h2 className="text-center mt-20 mb-16 font-texts font-bold text-3xl">Veja também!</h2>
                <AllArticles />
            </section>
        </div>
    )
}
