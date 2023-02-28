import Data from "../data.json"
import { Link } from "react-router-dom"

export default function HighLightsArticles(props: any) {
    let id1 = props.id1
    let id2 = props.id2
    let id3 = props.id3
    let id4 = props.id4
    const data = Data.results
    const imgPath = "/img/articleImg/"
    let articleList: ({ id: number; type: string; title: string; category: string; date: string; p1: string; p2: string; img1: string; alt1: string; p3: string; p4: string; img2: string; alt2: string; p5: string; p6: string; tip1?: undefined; tip2?: undefined; tip3?: undefined; tip4?: undefined; tip5?: undefined; tip6?: undefined; tip7?: undefined; tip8?: undefined; tip9?: undefined; tip10?: undefined } | { id: number; type: string; title: string; category: string; date: string; p1: string; img1: string; alt1: string; tip1: string; tip2: string; tip3: string; tip4: string; tip5: string; tip6: string; tip7: string; tip8: string; tip9: string; tip10: string; p3: string; img2: string; alt2: string; p2?: undefined; p4?: undefined; p5?: undefined; p6?: undefined } | { id: number; type: string; title: string; category: string; date: string; p1: string; p2: string; img1: string; alt1: string; tip1: string; tip2: string; tip3: string; tip4: string; tip5: string; tip6: string; tip7: string; tip8: string; tip9: string; tip10: string; p3: string; img2: string; alt2: string; p4?: undefined; p5?: undefined; p6?: undefined })[] = []
    data?.map(response => {
        if (response.id === id1) { articleList?.push(response) }
    })
    data?.map(response => {
        if (response.id === id2) { articleList?.push(response) }
    })
    data?.map(response => {
        if (response.id === id3) { articleList?.push(response) }
    })
    data?.map(response => {
        if (response.id === id4) { articleList?.push(response) }
    })


    return (
        <section>
            <article className="border-t border-b border-gray-400 w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 md:w-140">
                {articleList?.map(response => {
                    return (
                        <div className="w-80 md:w-96 mt-3 mb-3 md:mt-1 md:mb-1 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                            <Link to={`/article/${response.id}`}><h2 className="text-xl text-center font-bold md:h-16 font-titles">{response.title}</h2></Link>
                            <Link to={`/article/${response.id}`}><img className="w-full h-56" src={`${imgPath}/${response.img1}`} alt={response.alt1} /></Link>
                            <h3 className="text-blue-800 mt-2 mb-2 font-bold">{response.category}</h3>
                            <p className="text-left font-texts font-bold text-sm">{`${response.p1.substring(0, 300)}...`}</p>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
