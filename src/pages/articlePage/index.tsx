import { Component } from "react";
import { useLocation, useParams } from "react-router-dom"
import AmazonIframe from "../../components/amazonIframe";
import AllArticles from "../../components/articles/allArticles";
import Data from "../../components/articles/data.json"
import Navbar from "../../components/navbar";

export default function ArticlePage() {

    const data = Data.results
    const { id } = useParams();
    const imgPath = "/img/articleImg/"

    return (
        <div>
            <Navbar />
            <section>
                {data.map(response => {
                    if (response.id == parseInt(id || "")) {
                        if (response.type === "article") {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400">
                                    <h1 className="text-center mt-5 mb-5 text-2xl font-titles">{response.title}</h1>
                                    <div className="flex justify-center mt-16">
                                        <AmazonIframe ad1={response.ad1} ad2={response.ad2} ad3={response.ad3} />
                                    </div>
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div className="text-left font-texts font-bold">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p1}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p2}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p3}</p>
                                    </div>

                                    <img className="lg:h-128 lg:w-150 mt-10 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img2}`} alt={response.alt2} />
                                    <div className="flex justify-center mt-16 mb-16">
                                        <AmazonIframe ad1={response.ad4} ad2={response.ad5} ad3={response.ad6} />
                                    </div>
                                    <div className="text-left font-texts font-bold">
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p4}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p5}</p>
                                        <p className="mt-2 mb-2 text-left font-texts font-bold">{response.p6}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="w-10/12 md:w-6/12 mr-auto ml-auto border-t border-b border-gray-400">
                                    <h1 className="text-center mt-5 mb-5 text-2xl font-titles">{response.title}</h1>
                                    <div className="flex justify-center mt-16">
                                        <AmazonIframe ad1={response.ad1} ad2={response.ad2} ad3={response.ad3} />
                                    </div>
                                    <div className="mt-5 text-left font-texts font-bold">
                                        <p className="">{response.p1}</p>
                                    </div>
                                    <h2 className="mt-10 text-sm text-gray-400">Publicado em {response.date}</h2>
                                    <img className="lg:h-128 lg:w-150 mb-10 md:mr-auto md:ml-auto" src={`${imgPath}/${response.img1}`} alt={response.alt1} />
                                    <div>
                                        <div className="text-left font-texts font-bold">
                                            <p className="">{response.p2}</p>
                                        </div>
                                        <ul className="text-left font-texts font-bold">
                                            <li className="mt-2 mb-2">{response.tip1}</li>
                                            <li className="mt-2 mb-2">{response.tip2}</li>
                                            <li className="mt-2 mb-2">{response.tip3}</li>
                                            <div className="flex justify-center mt-16 mb-16">
                                                <AmazonIframe ad1={response.ad4} ad2={response.ad5} ad3={response.ad6} />
                                            </div>
                                            <li className="mt-2 mb-2">{response.tip4}</li>
                                            <li className="mt-2 mb-2">{response.tip5}</li>
                                            <li className="mt-2 mb-2">{response.tip6}</li>
                                            <li className="mt-2 mb-2">{response.tip7}</li>
                                            <li className="mt-2 mb-2">{response.tip8}</li>
                                            <li className="mt-2 mb-2">{response.tip9}</li>
                                            <li className="mt-2 mb-2">{response.tip10}</li>
                                        </ul>
                                        <div className="mt-10 mb-10 text-left font-texts font-bold">
                                            <p className="">{response.p3}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                })}
            </section>
            <section>
                <div className="flex justify-center mt-16">
                    <AmazonIframe
                        ad1={"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09VCW5X56&asins=B09VCW5X56&linkId=0a9d9bb438ac8dc42fbc9c5394e86117&show_border=true&link_opens_in_new_window=true"}
                        ad2={"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B094Z7HFM5&asins=B094Z7HFM5&linkId=16cedcc22473611093b2e4962e7f107a&show_border=true&link_opens_in_new_window=true"}
                        ad3={"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B08ZJWB8YV&asins=B08ZJWB8YV&linkId=a3a5353a583f5bfd36cbc4c3432cf4c5&show_border=true&link_opens_in_new_window=true"}
                    />
                </div>
                <h2 className="text-center mt-20 mb-16 font-texts font-bold text-3xl">Veja também!</h2>
                <AllArticles id1={parseInt(id || "")} id2={0} id3={0} id4={0} />
            </section>
        </div>
    )
}
