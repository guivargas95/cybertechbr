import Data from "../data.json"
import { Link } from "react-router-dom"

export default function HighLightsArticles(props: any) {
    let id1 = props.id1
    let id2 = props.id2
    let id3 = props.id3
    let id4 = props.id4
    const data = Data.results
    const imgPath = "/img/articleImg/"
    let articleList: { id: number; type: string; title: string; category: string; date: string; p1: string; p2: string; img1: string; p3: string; p4: string; img2: string; p5: string; p6: string; alt1: string }[] = []
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
            <div className="border-t border-b border-gray-400 w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 md:w-140">
                {articleList?.map(response => {
                    return (
                        <div className="w-80 md:w-96 mt-3 mb-3 md:mt-1 md:mb-1 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                            <Link to={`/article/${response.id}`}><h2 className="text-xl text-center font-bold md:h-16 font-titles">{response.title}</h2></Link>
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
