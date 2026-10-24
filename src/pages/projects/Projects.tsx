import { Link } from 'react-router-dom';
import Vortex from "../../components/vortex/Vortex";
import Yum_1 from "../../assets/yum/yum_1.png";
import Yum_2 from "../../assets/yum/yum_2.png";
import Yum_3 from "../../assets/yum/yum_3.png";
import YumGif from "../../assets/screenshots_yum.gif";
import styles from "./projects.module.css";

export default function projects() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.Projects}>
                <div className={styles.TitleContainer}>
                    <div className={styles.Title}>
                        <Vortex text="Projects" />
                    </div>
                    <div className={styles.Subtitle}>
                        <h2>
                            yum - nock - abrasci - dotfiles
                        </h2>
                    </div>
                    <div className={styles.Separator}></div>
                    <h4>scroll down ;)</h4>
                </div>
                <div className={styles.ProjectBlock}>
                    <h1>yum — terminal editor</h1>
                    <div className={styles.YumShowcase}>
                        <img src={YumGif} className={styles.YumPreview}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
