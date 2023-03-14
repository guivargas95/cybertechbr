import AllArticles from "../../components/articles/allArticles";
import HighLightsArticles from "../../components/articles/highLightsArticles";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import posthog from 'posthog-js'
import AdsTerraComponent from "../../components/adsTerra/adsTerraComponent";

export default function Home() {




    return (
        <div className="mt-48">
            <Navbar />
            <AdsTerraComponent />
            <h1 className="text-center text-3xl text-gray-500 mt-5 mb-5 font-bold">As melhores dicas e artigos para você!</h1>
            <HighLightsArticles id1={41} id2={42} id3={40} id4={39} />
            <AdsTerraComponent />
            <AllArticles id1={41} id2={42} id3={40} id4={39} />
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiePolicyBanner />}
            <AdsTerraComponent />
            <Footer />
        </div>
    )
}

