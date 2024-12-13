import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-body position-fixed w-100 z-index-top border-bottom">
            <div className="container py-4 d-flex align-items-center justify-content-between">
                <Link href={"/"}>
                    <Image src="/img/logo-blue.png" width={48} height={48} alt="Societas Music Group square logo"></Image>
                </Link>
                <div className="d-flex align-items-center gap-4">
                    <Link href={"/"} className="text-body text-uppercase underline-none fw-semibold hover-primary">Home</Link>
                    <Link href={"/about"} className="text-body text-uppercase underline-none fw-semibold hover-primary">About</Link>
                    {/* <Link href={"/labels"} className="text-body text-uppercase underline-none fw-semibold hover-primary">Our Labels</Link> */}
                    <Link href={"https://symphonicms.com"} target="_blank" className="text-body text-uppercase underline-none fw-semibold hover-primary">Royalty Portal</Link>
                    <Link href={"https://societasmusic.eventbrite.com"} target="_blank" className="text-body text-uppercase underline-none fw-semibold hover-primary">Events</Link>
                    <Link href={"https://store.societasmusic.com"} target="_blank" className="text-body text-uppercase underline-none fw-semibold hover-primary">Store</Link>
                </div>
            </div>
        </div>
    )
}