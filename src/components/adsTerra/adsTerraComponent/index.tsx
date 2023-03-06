import AdsTerra from ".."

export default function AdsTerraComponent() {
    return (
        <div>
            {self.innerWidth >= 800 && (
                <div className="flex justify-center">
                    <AdsTerra keyAd={'63d2ae3470ce030358178c5721040be3'} width={300} height={250} />
                    <AdsTerra keyAd={'63d2ae3470ce030358178c5721040be3'} width={300} height={250} />
                </div>
            )}
            {self.innerWidth < 800 && (
                <AdsTerra keyAd={'63d2ae3470ce030358178c5721040be3'} width={300} height={250} />
            )}
        </div>
    )
}