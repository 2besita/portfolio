import Header from "../components/head/Header";
import Vortex from "../components/vortex/Vortex";
import Emiria from "../assets/emiria.png";
import Flag from "../assets/transgender.gif";

export default function Intro() {
    return (
        <>
        <Header />
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
                    Hi, I'm <span className="softHighlight">Ellen</span>, a
                    Brazilian software developer focused on <span
                    className="softHighlight">low-level programming</span> and
                    complex problem-solving. I'm also into both <span
                    className="softHighlight"> web design</span> and <span
                    className="softHighlight">web development</span>, and have
                    taken courses in the field of <span
                    className="softHighlight">computer design</span>, building
                    a reasonably solid experience in the aspects surrounding it
                    over the time.
                    <br/>
                    <br/>

                    Besides coding, I enjoy reading, listening to music, playing
                    games and tabletop RPG.
                    <br/>
                    <br/>

                    I'm about to graduate with a degree in <span
                    className="softHighlight">Systems Analysis and
                    Development</span>, but most of my programming experience
                    comes from personal projects and a genuine passion for
                    learning new technologies. Curiosity and attention to
                    detail come naturally to me, regardless of the workflow or
                    project I'm working on.
                    <br/>
                    <br/>

                    As a self-taught programmer, I value free and <span
                    className="softHighlight">open-source</span> learning
                    resources. Much of what I've learned has been possible due
                    to the wealth of high-quality educational content freely
                    available online. Thanks, internet...
                </p>
            </div>
        </body>
        </>
    )
}
