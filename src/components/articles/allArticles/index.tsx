import { useState } from "react"
import { Link } from "react-router-dom"
import { iArticleId } from "../../../types/articlesIds"
import Data from "../data.json"

export default function AllArticles({ id1, id2, id3, id4 }: iArticleId) {

    const data = Data.results;
    const imgPath = "/img/articleImg/";
    const [countArticles, setCountArticles] = useState(9);
    let countNumber = 0

    function loadMoreContent() {
        setCountArticles(countArticles + 6)
        console.log(data.length)
    }

    return (
        <section className="mt-10">
            <article className="w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-150">
                {data.slice(0).reverse().map((response, index) => {


                    if (response.id != id1 && response.id != id2 && response.id != id3 && response.id != id4 && countNumber < countArticles) {
                        countNumber += 1;
                        return (
                            <div className="w-80 md:w-96 mt-3 mb-3 md:mt-6 md:mb-6 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                                <Link to={`/article/${response.id}`}><h2 className="text-xl text-left font-bold md:h-16 font-titles">{response.title}</h2></Link>
                                <Link to={`/article/${response.id}`}><img className="w-full h-56" src={`${imgPath}/${response.img1}`} alt={response.alt1} /></Link>
                                <h3 className="text-blue-400 mt-2 mb-2 font-bold">{response.category}</h3>
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