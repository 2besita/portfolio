import { Link } from 'react-router-dom';
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.pageHeader}>
            <nav className={styles.navBar}>
                <ul className={styles.pageList}>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/">Introduction</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </nav>
        </header>
    );
}
