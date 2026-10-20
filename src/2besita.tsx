import { useState } from 'react'
import Vortex from "./components/vortex/Vortex";
import Emiria from "./assets/emiria.png";
import Flag from "./assets/transgender.gif";
import './2besita.css'
/* teste comentário */
    function App() {
    return (
        <>
        <header>
            <div className="pageHeader">
                <nav className="navBar">
                    <ul className="pageList">
                        <li>Introduction</li>
                        <li>Projects</li>
                        <li>About me</li>
                    </ul>
                </nav>
            </div>
        </header>
        <body>
            <div className="headerContainer">
                <div className="titleContainer">
                    <div className="title">
                        <Vortex text="@2besita" />
                    </div>
                    <div className="subtitle">
                        <Vortex text="developer / artist" />
                    </div>
                    <div className="kanji">
                        <Vortex text="落ち着く" />
                    </div>
                </div>

                <div className="headerImage">
                    <img src={Emiria} className="emiria"/>
                </div>
            </div>

            <div className="flagContainer">
                <img src={Flag} className="transFlag"/>
            </div>

            <div className="introText">
                <p>
                    Hi, I'm <span className="softHighlight">Ellen</span>, a Brazilian software developer focused on low-level
                    programming and complex problem-solving. I'm also into both
                    web design and web development, and have taken courses in
                    the field of computer design, building a reasonably solid
                    experience in the aspects surrounding it over the time.
                    <br/>
                    <br/>

                    Besides coding, I enjoy reading, listening to music, playing
                    games and tabletop RPG.
                    <br/>
                    <br/>

                    I'm about to graduate with a degree in Systems Analysis and Development, but
                    most of my programming experience comes from personal projects and a genuine
                    passion for learning new technologies. Curiosity and attention to detail come
                    naturally to me, regardless of the workflow or project I'm working on.
                    <br/>
                    <br/>

                    As a self-taught programmer, I value free and open-source learning resources.
                    Much of what I've learned has been possible due to the wealth of
                    high-quality educational content freely available online. Thanks, internet...
                </p>
            </div>
        </body>
        </>
    )
}
export default App
