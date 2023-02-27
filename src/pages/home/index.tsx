import AllArticles from "../../components/articles/allArticles";
import HighLightsArticles from "../../components/articles/highLightsArticles";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <div className="mt-32">
            <Navbar />
            <h1 className="text-center text-3xl text-gray-500 mt-5 mb-5 font-bold">Artigos e as melhores dicas para você!</h1>
            <HighLightsArticles id1={24} id2={19} id3={25} id4={27} />
            <AllArticles id1={24} id2={19} id3={25} id4={27} />
            <Footer />
        </div>
    )
}