import BackgroundVideo from "@/components/BackgroundVideo";

export default function About() {
    return (
        <> 
            <div className="container d-flex align-items-center vh-100">
                <h1 className="fw-xbold fs-big text-uppercase text-white blend-exclusion m-0 mt-3">About</h1>
                <BackgroundVideo/>
            </div>
            <div className="bg-body">
                <div className="container py-5">
                    <p>Societas Music Group, also commonly known as “SMG”, is a Chicago-based and internationally owned entertainment and creative company. The company was founded on February 14th, 2023, by Aiden O’Neal and Iven Langohr. </p>
                    <p>SMG itself is a modern commercial music recording, publishing, distribution, and entertainment company devoted to empowering artists to maintain/reclaim creative control of their art. It serves as a parent company for numerous independent record labels and various other organizations within the art and music industries. At its most basic functions, SMG provides operational and logistical support to its artists and sub-labels from business critical infrastructure, such as distribution, communications, and licensing, to general day-to-day marketing and creative support.</p>
                    <p>The vision for SMG was initially developed after O’Neal had been managing his own personal label since the summer of 2021, known as DIGITALDAYDREAM Recordings. After the release of the album, Iridescent, Vol. 2, Langohr and O’Neal, who are both featured performing artists on the compilation, began ideation of a much larger project — now known as Societas Music Group. DIGITALDAYDREAM still exists under its umbrella as an imprint for indie electronic music.</p>
                </div>
            </div>
        </>
    )
}