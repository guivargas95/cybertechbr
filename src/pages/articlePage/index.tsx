import { Component } from "react";
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
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
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
                                        <p className="">{response.p1}</p>
                                    </div>
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div>
                                        <div className="text-left font-texts font-bold">
                                            <p className="">{response.p2}</p>
                                        </div>
                                        <ul className="text-left font-texts font-bold">
                                            <li className="mt-2 mb-2">{response.tip1}</li>
                                            <li className="mt-2 mb-2">{response.tip2}</li>
                                            <li className="mt-2 mb-2">{response.tip3}</li>
                                            <li className="mt-2 mb-2">{response.tip4}</li>
                                            <li className="mt-2 mb-2">{response.tip5}</li>
                                            <li className="mt-2 mb-2">{response.tip6}</li>
                                            <li className="mt-2 mb-2">{response.tip7}</li>
                                            <li className="mt-2 mb-2">{response.tip8}</li>
                                            <li className="mt-2 mb-2">{response.tip9}</li>
                                            <li className="mt-2 mb-2">{response.tip10}</li>
                                        </ul>
                                        <div className="mt-10 mb-10 text-left font-texts font-bold">
                                            <p className="">{response.p3}</p>
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
