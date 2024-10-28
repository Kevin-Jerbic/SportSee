import '../styles/Header.css';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="SportSee Logo" />
                <span>SportSee</span>
            </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/profil">Profil</a>
                    </li>
                    <li>
                        <a href="/reglage">Réglage</a>
                    </li>
                    <li>
                        <a href="/communaute">Communauté</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
