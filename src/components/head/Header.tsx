import { Link } from 'react-router-dom';
import styles from "./header.module.css";

export default function Header() {
    return (
        <header>
            <div className="pageHeader">
                <nav className="navBar">
                    <ul className="pageList">
                        <li><Link to="/">Introduction</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
