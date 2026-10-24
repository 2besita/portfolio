import { Link } from 'react-router-dom';
import Vortex from "../../components/vortex/Vortex";
import Background from "../../assets/projects_bg.jpg";
import YumGif from "../../assets/screenshots_yum.gif";
import styles from "./projects.module.css";

export default function projects() {
    return (
        <>
            <div className={styles.PageContainer}>
                <div className={styles.Projects}>
                    <div className={styles.TitleContainer}>
                        <div className={styles.Title}>
                            <Vortex text="Projects" />
                        </div>
                        <div className={styles.Subtitle}>
                            <Vortex text="developer / artist" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
