export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="bg-black h-24 mt-10 flex justify-center">
            <p className="text-white mt-auto mb-auto">© Copyright Cyber Tech Brasil | {year}</p>
        </footer>
    )
}