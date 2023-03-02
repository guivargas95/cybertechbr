import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdsTerra from "../../adsSerra";
import Data from "../data.json"

export default function CategoryArticles() {

    const { category } = useParams()
    const data = Data.results
    const [countArticles, setCountArticles] = useState(99);
    let countNumber = 0
    const imgPath = "/img/articleImg/"

    function loadMoreContent() {
        setCountArticles(countArticles + 99)
    }

    return (
        <section className="mt-48">
            <h1 className="text-center text-3xl font-titles fomnt-bold mb-6 mt-6">{category}</h1>
            <AdsTerra className="mt-48" keyAd={'8b60dd6d58076a1bb31d3ef53b33b8eb'} width={320} height={50} />
            <article className="w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-150">
                {data.slice(0).reverse().map((response) => {
                    if (response.category == category) {
                        countNumber += 1;
                        return (
                            <div className="w-80 md:w-96 mt-3 mb-3 md:mt-6 md:mb-6 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                                <Link to={`/article/${response.id}`} aria-label={`Veja mais informações sobre este artigo: ${response.title}`}><h2 className="text-xl text-left font-bold md:h-16 font-titles">{response.title}</h2></Link>
                                <Link to={`/article/${response.id}`} aria-label={`Veja mais informações sobre este artigo: ${response.title}`}><img className="w-full h-56" src={`${imgPath}/${response.img1}`} alt={response.alt1} /></Link>
                                <h3 className="text-blue-800 mt-2 mb-2 font-bold">{response.category}</h3>
                                <p className="text-left font-texts font-bold text-sm">{`${response.p1.substring(0, 300)}...`}</p>
                            </div>
                        )
                    }
                })}

            </article>

            {data.length >= countArticles && (
                <div className="flex justify-center mt-5 mb-16  mr-auto ml-auto">
                    <button className="bg-black text-white font-bold w-60 h-12 hover:bg-white hover:text-gray-500 hover:border hover:border-black" onClick={loadMoreContent}>VER MAIS</button>
                </div>
            )}




        </section>
    )

}