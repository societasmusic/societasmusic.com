import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="bg-body-tertiary">
                <div className="container text-center py-3">
                    <h3 className="fw-xbold text-uppercase fs-1">Follow Us</h3>
                    <div className="d-flex gap-3 justify-content-center align-items-center fs-2">
                        <Link href={"https://instagram.com/societasmusic"} target="_blank" className="text-body hover-primary"><i className="bi bi-instagram"></i></Link>
                        <Link href={"https://x.com/societasmusic"} target="_blank" className="text-body hover-primary"><i className="bi bi-twitter-x"></i></Link>
                        <Link href={"https://linkedin.com/company/societasmusic"} target="_blank" className="text-body hover-primary"><i className="bi bi-linkedin"></i></Link>
                        <Link href={"https://open.spotify.com/user/31tbzpi4uidgnolun6lckjd3gqvu?si=6ded6d783cc5460f"} target="_blank" className="text-body hover-primary"><i className="bi bi-spotify"></i></Link>
                        <Link href={"https://youtube.com/@societasmusic"} target="_blank" className="text-body hover-primary"><i className="bi bi-youtube"></i></Link>
                    </div>
                </div>
            </div>
            <div className="bg-blue text-white">
                <div className="container text-center">
                    <div className="py-3">
                        <Link href={"/"}>
                            <Image src="/img/logotype-white.png" width={384} height={48} alt="Societas Music Group square logo"></Image>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-center">
                <div className="container py-3">
                    <p className="m-0 text-white fw-medium">Copyright 2025 Societas Music Group Corporation. All Rights Reserved.</p>
                    <p className="m-0 text-secondary fw-medium">
                        <Link href={"/privacy-policy"} className="text-secondary">Privacy Policy</Link>
                        <span>&nbsp;|&nbsp;</span>
                        <Link href={"/terms-of-service"} className="text-secondary">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}