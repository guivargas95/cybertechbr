import AdsTerra from "../../components/adsSerra";
import AllArticles from "../../components/articles/allArticles";
import HighLightsArticles from "../../components/articles/highLightsArticles";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import posthog from 'posthog-js'

export default function Home() {




    return (
        <div className="mt-48">
            <Navbar />
            <AdsTerra keyAd={'8b60dd6d58076a1bb31d3ef53b33b8eb'} width={320} height={50} />
            <h1 className="text-center text-3xl text-gray-500 mt-5 mb-5 font-bold">Artigos e as melhores dicas para você!</h1>
            <HighLightsArticles id1={35} id2={32} id3={31} id4={34} />
            <AdsTerra keyAd={'63d2ae3470ce030358178c5721040be3'} width={300} height={250} />
            <AllArticles id1={35} id2={32} id3={31} id4={34} />
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiePolicyBanner />}
            <Footer />
        </div>
    )
}

