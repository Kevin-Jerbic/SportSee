import '../styles/Sidebar.css';
import iconMeditation from '../assets/icon-meditation.png';
import iconSwimming from '../assets/icon-swimming.png';
import iconCycling from '../assets/icon-cycling.png';
import iconWeightlifting from '../assets/icon-weightlifting.png';

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <img src={iconMeditation} alt="Meditation" />
                    </li>
                    <li>
                        <img src={iconSwimming} alt="Swimming" />
                    </li>
                    <li>
                        <img src={iconCycling} alt="Cycling" />
                    </li>
                    <li>
                        <img src={iconWeightlifting} alt="Weightlifting" />
                    </li>
                </ul>
            </nav>
            <p className="sidebar-copyright">Copyright, SportSee 2020</p>
        </aside>
    );
}

export default Sidebar;
