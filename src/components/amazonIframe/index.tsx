import { iAmazonAD } from "../../types/amazonAD";

export default function AmazonIframe({ ad1, ad2, ad3 }: iAmazonAD) {

    const alternativeAd1 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07Q437WXK&asins=B07Q437WXK&linkId=b17122fa5c082d9935591f7d3895297e&show_border=true&link_opens_in_new_window=true"
    const alternativeAd2 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B078TPLC2X&asins=B078TPLC2X&linkId=3b02a4758f30fa457a4bc108739a427b&show_border=true&link_opens_in_new_window=true"
    const alternativeAd3 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B075KGTFKM&asins=B075KGTFKM&linkId=000e251f9004877156fe67c1e432cce7&show_border=true&link_opens_in_new_window=true"

    if (ad1 === "") {
        return (
            <div className="flex justify-center">
                <iframe className="w-32 h-60" src={alternativeAd1}></iframe>
                <iframe className="w-32 h-60" src={alternativeAd2}></iframe>
                <iframe className="w-32 h-60" src={alternativeAd3}></iframe>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center">
                <iframe className="w-32 h-60" src={ad1}></iframe>
                <iframe className="w-32 h-60" src={ad2}></iframe>
                <iframe className="w-32 h-60" src={ad3}></iframe>

            </div>
        )
    }
}