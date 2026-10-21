import { Link } from 'react-router-dom';
import styles from "./header.module.css";

export default function Header() {
    return (
        <header>
            <div className="pageHeader">
                <nav className="navBar">
                    <ul className="pageList">
                        <li><Link to="/Intro">Introduction</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
