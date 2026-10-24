import { Link } from 'react-router-dom';
import Vortex from "../../components/vortex/Vortex";
import Background from "../../assets/projects_bg.jpg";
import YumGif from "../../assets/screenshots_yum.gif";
import styles from "./projects.module.css";

export default function projects() {
    return (
        <>
            <div className="PageContainer">
                <div className="Projects">
                    <div className="TitleContainer">
                        <div className="Title">
                            <Vortex text="Projects" />
                        </div>
                        <div className="Subtitle">
                            <Vortex text="developer / artist" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
