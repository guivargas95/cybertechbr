import AllArticles from "../../components/articles";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1 className="text-left text-3xl text-gray-500">Artigos de tecnologia</h1>
            <AllArticles />
        </div>
    )
}