import AdsTerra from "../../components/adsSerra";
import AllArticles from "../../components/articles/allArticles";
import HighLightsArticles from "../../components/articles/highLightsArticles";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import posthog from 'posthog-js'

export default function Home() {




    return (
        <div className="mt-32">
            <Navbar />
            <h1 className="text-center text-3xl text-gray-500 mt-5 mb-5 font-bold">Artigos e as melhores dicas para você!</h1>
            <AdsTerra keyAd={'24107d1def2ec2c40f0692c35b9df416'} width={468} height={60} />
            <HighLightsArticles id1={29} id2={32} id3={31} id4={30} />
            <AllArticles id1={29} id2={32} id3={31} id4={30} />
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null: <CookiePolicyBanner />}
            <Footer />
        </div>
    )
}

