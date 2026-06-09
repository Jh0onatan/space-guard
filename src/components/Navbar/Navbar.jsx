import "../Navbar/navbar.css"
import Logo from "../../assets/logo.webp"

export default function Navbar(){
    const isOnline = true

    return(
        <nav className="navbar">
            <div className="container navbar__content">
                <div className="navbar__brand">
                    <a href="#">SpaceGuard</a>
                </div>
                <div className="navbar__links">
                    <a href="#home">Home</a>
                    <a href="#mapa">Mapa</a>
                    <a href="#historico">Histórico</a>
                </div>
                <div className={`navbar__status ${isOnline ? "navbar__status--online" : "navbar__status--offline"}`}>
                    <span className={`navbar__status-dot ${isOnline ? "navbar__status-dot--online" : "navbar__status-dot--offline"}`}></span>
                    {isOnline ? "Online" : "Offline"}
                </div>
            </div>
        </nav>
    )
}