import Data from "../data.json"

export default function AllArticles() {

    const data = Data.results
    const imgPath = "/img/articleImg/"

    return (
        <section className="mt-10">
            <div className="w-11/12 flex flex-col items-center content-center mr-auto ml-auto justify-center md:grid md:grid-cols-2 md:w-140 lg:grid-cols-3 lg:w-auto">
                {data.map(response => {
                    if (response.id != 1 && response.id != 2 && response.id != 3 && response.id != 4 )
                    return (
                        <div className="w-80 md:w-96 mt-3 mb-3 md:mt-1 md:mb-1 md:mr-auto md:ml-auto md:h-112" key={response.id}>
                            <h2 className="text-xl text-center font-bold md:h-16">{response.title}</h2>
                            <img className="w-full h-40" src={`${imgPath}/${response.img1}`} alt="" />
                            <h3 className="text-blue-700 mt-2 mb-2">{response.category}</h3>
                            <p className="text-left">{`${response.p1.substring(0, 300)}...`}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}