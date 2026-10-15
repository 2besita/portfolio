import { useState } from 'react'
import Vortex from "./components/vortex/Vortex";
import Banner from "./assets/banner.jpg";

import './Ochitsudayo.css'

function App() {
    return (
        <>
            <div className="mainContainer">
                <div className="bannerContainer">
                    <img src={Banner} className="Banner"/>
                    {/* <div className="bannerText">ellen / @ochitsudayo</div> */}
                </div>


                <div className="titleContainer">
                    <div className="title">
                        <Vortex text="@ochitsudayo" />
                    </div>
                    <div className="subtitle">
                        <Vortex text="落ち着 — developer / artist" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default App
