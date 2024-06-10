import posthog from "posthog-js";
import CategoryArticles from "../../components/articles/categoryArticles";
import CookiePolicyBanner from "../../components/cookiePolicyBanner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function CategoryPage() {


    return (
        <div>
            <Navbar />
            <CategoryArticles />
            {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookiePolicyBanner />}
            <Footer />
        </div>
    )

}