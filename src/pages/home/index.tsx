import AllArticles from "../../components/articles/allArticles";
import HighLightsArticles from "../../components/articles/highLightsArticles";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl text-gray-500 mt-5 mb-5 font-bold">Artigos de tecnologia</h1>
            <HighLightsArticles id1={15} id2={19} id3={20} id4={21}/>
            <AllArticles id1={15} id2={19} id3={20} id4={21}/>
        </div>
    )
}