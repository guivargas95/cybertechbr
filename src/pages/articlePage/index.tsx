import { Link, useLocation, useParams } from "react-router-dom"
import AllArticles from "../../components/articles/allArticles";
import Data from "../../components/articles/data.json"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import posthog from "posthog-js";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";
import AdsTerraComponent from "../../components/adsTerra/adsTerraComponent";

export default function ArticlePage() {

    const data = Data.results
    const { id } = useParams();
    const imgPath = "/img/articleImg/"

    return (
        <div>
            <Navbar />
            <section className="mt-48">
                {data.map(response => {
                    if (response.id == parseInt(id || "")) {
                        if (response.type === "article") {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400" key={response.id}>
                                    <h1 className="text-center mt-5 mb-5 text-3xl font-titles">{response.title}</h1>
                                    <AdsTerraComponent />
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div className="text-left font-texts font-bold text-lg">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p1}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p2}</p>
                                        <AdsTerraComponent />
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p3}</p>
                                    </div>

                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img2}`} alt={response.alt2} />
                                    <AdsTerraComponent />
                                    <div className="text-left font-texts font-bold text-lg">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p4}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p5}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p6}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400" key={response.id}>
                                    <h1 className="text-center mt-5 mb-5 text-3xl font-titles">{response.title}</h1>
                                    <AdsTerraComponent />
                                    <div className="mt-5 text-left font-texts font-bold text-lg">
                                        <p className="">{response.p1}</p>
                                    </div>
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div>
                                        <div className="text-left font-texts font-bold text-lg">
                                            <p className="">{response.p2}</p>
                                        </div>
                                        <ul className="text-left font-texts font-bold text-lg">
                                            <li className="mt-2 mb-2">{response.tip1}</li>
                                            <li className="mt-2 mb-2">{response.tip2}</li>
                                            <li className="mt-2 mb-2">{response.tip3}</li>
                                            <AdsTerraComponent />
                                            <li className="mt-2 mb-2">{response.tip4}</li>
                                            <li className="mt-2 mb-2">{response.tip5}</li>
                                            <li className="mt-2 mb-2">{response.tip6}</li>
                                            <li className="mt-2 mb-2">{response.tip7}</li>
                                            <li className="mt-2 mb-2">{response.tip8}</li>
                                            <li className="mt-2 mb-2">{response.tip9}</li>
                                            <li className="mt-2 mb-2">{response.tip10}</li>
                                        </ul>
                                        <div className="mt-10 mb-10 text-left font-texts font-bold text-lg">
                                            <p className="">{response.p3}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                })}
            </section>
            <AdsTerraComponent />
            <section>
                <h2 className="text-center mt-20 mb-16 font-texts font-bold text-3xl">Veja também!</h2>
                <AllArticles id1={parseInt(id || "")} id2={0} id3={0} id4={0} />
            </section>
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiePolicyBanner />}
            <AdsTerraComponent />
            <Footer />
        </div>
    )
}
