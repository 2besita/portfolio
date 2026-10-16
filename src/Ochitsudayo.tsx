import { useState } from 'react'
import Vortex from "./components/vortex/Vortex";
import Emiria from "./assets/emiria.png";

import './Ochitsudayo.css'

function App() {
    return (
        <>
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

                <div className="bannerContainer">
                    <img src={Emiria} className="Banner"/>
                </div>
            </div>
            <div className="introText">
                <p>
                    Hi, I'm <span className="softHighlight">Ellen</span>, a Brazilian software developer focused on low-level
                    programming and complex problem-solving. I enjoy reading and writing code in C
                    and Lua. Outside of programming, I listen to a lot of music and enjoy RPGs.
                    <br/>
                    <br/>

                    I'm about to graduate with a degree in Systems Analysis and Development, but
                    most of my programming experience comes from personal projects and a genuine
                    passion for learning new technologies. Curiosity and attention to detail come
                    naturally to me, regardless of the workflow or project I'm working on.
                    <br/>
                    <br/>

                    As a self-taught programmer, I value free and open-source learning resources.
                    Much of what I've learned has been possible thanks to the wealth of
                    high-quality educational content freely available online. Thanks, internet...
                </p>
            </div>
        </>
    )
}
export default App
