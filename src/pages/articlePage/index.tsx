import { Link, useLocation, useParams } from "react-router-dom"
import AllArticles from "../../components/articles/allArticles";
import Data from "../../components/articles/data.json"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import posthog from "posthog-js";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";


export default function ArticlePage() {

    const data = Data.results
    const { id } = useParams();
    const imgPath = "/img/articleImg/"

    return (
        <div>
            <Navbar />
            <section className="mt-28">
                {data.map(response => {
                    if (response.id == parseInt(id || "")) {
                        if (response.type === "article") {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400" key={response.id}>
                                    <h1 className="text-center mt-5 mb-5 text-3xl font-titles">{response.title}</h1>
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div className="text-left font-texts font-bold text-lg">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p1}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p2}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p3}</p>
                                    </div>

                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img2}`} alt={response.alt2} />
                                    <div className="text-left font-texts font-bold text-lg">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p4}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p5}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold text-lg">{response.p6}</p>
                                    </div>
                                </div>
                            )
                        }
                        else if (response.type === "top5") {
                            if (response.products) {
                                const produtosArray = Object.values(response.products);

                                return (
                                    <div className="w-10/12 md:w-6/12 mr-auto ml-auto " key={response.id}>
                                        <h2 className="mt-10 text-sm text-gray-400 border-b border-gray-400">Publicado em {response.date}</h2>
                                        <h1 className="text-center mt-5 mb-5 text-3xl font-titles">{response.title}</h1>
                                        <div className="mt-5 text-left text-lg">

                                            {produtosArray.map((prod, index) => (
                                                <div key={prod.title}>
                                                    <h2 className="mt-4 mb-4 text-2xl font-titles">{index + 1} - {prod.title}</h2>
                                                    <div className="flex mr-auto ml-auto justify-center">
                                                        <a href={prod.url1} target="_blank"><img src={prod.img} alt={prod.title} /></a>
                                                    </div>
                                                    <p className="mt-4 mb-4 font-texts">{prod.p1}</p>
                                                    <section>
                                                        <h2 className="mt-3 mb-3 text-2xl font-bold text-green-700 font-titles">Principais vantagens:</h2>
                                                        <ul className="list-disc">
                                                            {prod.benefits.map((vantagem, index) => (
                                                                <li key={index}>{vantagem}</li>
                                                            ))}
                                                        </ul>
                                                        <h2 className="mt-3 mb-3 text-2xl font-bold text-red-700 font-titles">Desvantagens:</h2>
                                                        <ul className="list-disc">
                                                            {prod.disadvantages.map((desvantagem, index) => (
                                                                <li key={index}>{desvantagem}</li>
                                                            ))}
                                                        </ul>
                                                        <div className="flex tex-center justify-center ml-auto mr-auto">
                                                            <a href={prod.url1} target="_blank"><button className="mt-5 mb-5 rounded-lg bg-yellow-200 w-44 h-12">Veja mais!</button></a>
                                                        </div>
                                                    </section>
                                                </div>
                                            ))}


                                        </div>


                                        <div>
                                            <div className="text-left font-texts font-bold text-lg">
                                                <p className="">{response.p2}</p>
                                            </div>
                                            <ul className="text-left font-texts font-bold text-lg">
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
                                            <div className="mt-10 mb-10 text-left font-texts font-bold text-lg">
                                                <p className="">{response.p3}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }




                        }
                        else {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400" key={response.id}>
                                    <h1 className="text-center mt-5 mb-5 text-3xl font-titles">{response.title}</h1>
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

                <h2 className="text-center mt-20 mb-16 font-texts font-bold text-3xl">Veja também!</h2>
                <AllArticles id1={parseInt(id || "")} id2={0} id3={0} id4={0} />
            </section>
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiePolicyBanner />}
            <Footer />
        </div>
    )
}
