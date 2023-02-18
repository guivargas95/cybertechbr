import Data from "./data.json"

export default function AllArticles() {

    const data = Data.results
    const imgPath = "/img/articleImg/"

    return (
        <section>
            <div className="w-11/12 flex-col items-center content-center mr-auto ml-auto justify-center">
                {data?.map(response => {

                    if (response.id === 1 || response.id === 2 || response.id === 3)
                        return (
                            <div className="mt-16 mb-16 shadow-sm shadow-black" key={response.id}>
                                <h2 className="text-xl text-center font-bold">{response.title}</h2>
                                <img src={`${imgPath}/${response.img1}`} alt="" />
                                <h3 className="text-blue-700 mt-2 mb-2">{response.category}</h3>
                                <p className="text-left">{response.p1}</p>
                            </div>
                        )
                })}
            </div>
        </section>
    )
}