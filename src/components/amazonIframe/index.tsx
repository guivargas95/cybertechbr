import { iAmazonAD } from "../../types/amazonAD";

export default function AmazonIframe({ ad1, ad2, ad3 }: iAmazonAD) {

    const alternativeAd1 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09ZWYB1XP&asins=B09ZWYB1XP&linkId=dfb018808993f42208885991b08ec336&show_border=true&link_opens_in_new_window=true"
    const alternativeAd2 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B08T69G4K6&asins=B08T69G4K6&linkId=c59764ef4696951d17e1f3c94d15615e&show_border=true&link_opens_in_new_window=true"
    const alternativeAd3 = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cybertechbr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0BMB9M6VH&asins=B0BMB9M6VH&linkId=8b1c132a41e41c5513b038a81473e71a&show_border=true&link_opens_in_new_window=true"

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