import { Link } from 'react-router-dom';
import Header from "../components/head/Header";
import Vortex from "../components/vortex/Vortex";
import Background from "../assets/projects_bg.jpg";
import './Projects.css'

import YumGif from "../assets/screenshots_yum.gif";
export default function projects() {
    return (
        <>
            <body>
                <div className="ProjectsContainer">
                    <div className="ProjectsHeaderContainer">
                        <div className="ProjectsHeader">
                            <div className="ProjectsHeaderBackground"></div>
                            <div className="ProjectsTitleContainer">
                                <div className="ProjectsHeaderTitle">
                                    <Vortex text="projects" />
                                </div>
                                <div className="ProjectsHeaderSubtitle">
                                    <Vortex text="by @2besita" />
                                </div>
                            </div>
                            <div className="ProjectHeaderGradient"></div>
                        </div>
                    </div>
                    <div className="ProjectBlock">
                        <div className="headerImage">
                            <img src={YumGif} className="ProjectGif"/>
                        </div>
                        <div className="ProjectBlockText">
                            <div className="YumBlockTitle">
                                <Vortex text="yum" />
                            </div>
                            <div className="ProjectInfo">
                                <p>
                                    Yum is a text editor built for the terminal. Still
                                    on early development, it was firstly built with
                                    C in mind, but will eventually receive support for
                                    syntax highlight in various languages.
                                    <br/>
                                    <br/>

                                    Curretly supports basic C syntax highlight,
                                    opening files and has a basic built-in search
                                    inside files.
                                    <br/>
                                    <br/>
                                </p>
                            </div>
                            <div className="ProjectLink">
                                  <Link to="https://github.com/2besita/yum.git">Yum on github</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
