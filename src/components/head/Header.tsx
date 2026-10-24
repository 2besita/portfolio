import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <header className="pageHeader">
            <nav className="navBar">
                <ul className="pageList">
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/">Introduction</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}
