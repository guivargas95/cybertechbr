import { Link } from "react-router-dom"
import Data from "../data.json"

export default function AllArticles() {

    const data = Data.results
    const imgPath = "/img/articleImg/"

    return (
        <section className="mt-10">
            <div className="w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-150">
                {data.slice(0).reverse().map(response => {
                    if (response.id != 15 && response.id != 19 && response.id != 20 && response.id != 21)
                        return (
                            <div className="w-80 md:w-96 mt-3 mb-3 md:mt-1 md:mb-1 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                                <Link to={`/article/${response.id}`}><h2 className="text-xl text-left font-bold md:h-16 font-titles">{response.title}</h2></Link>
                                <Link to={`/article/${response.id}`}><img className="w-full h-40" src={`${imgPath}/${response.img1}`} alt={response.alt1} /></Link>
                                <h3 className="text-blue-400 mt-2 mb-2 font-bold">{response.category}</h3>
                                <p className="text-left font-texts font-bold text-sm">{`${response.p1.substring(0, 300)}...`}</p>
                            </div>
                        )
                })}
            </div>
        </section>
    )
}