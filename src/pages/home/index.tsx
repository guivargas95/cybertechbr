import HighLightsArticles from "../../components/articles";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl text-gray-500 mt-2 mb-2">Artigos de tecnologia</h1>
            <HighLightsArticles id1={1} id2={2} id3={3} id4={4}/>
        </div>
    )
}