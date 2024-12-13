export default function BackgroundVideo() {
    return (
        <video autoPlay loop muted className="position-fixed z-bottom">
            {/* <source src="/img/loop.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
        </video>
    )
}