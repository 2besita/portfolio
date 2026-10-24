import Vortex from "../components/vortex/Vortex";
import Emiria from "../assets/emiria.png";
import Flag from "../assets/transgender.gif";
import './Intro.css'

export default function Intro() {
    return (
        <div className="PageContainer">
            <div className="Introduction">
                <div className="HeaderContainer">
                    <div className="TitleContainer">
                        <div className="Title">
                            <Vortex text="@2besita" />
                        </div>
                        <div className="Subtitle">
                            <Vortex text="developer / artist" />
                        </div>
                    </div>
                    <div className="HeaderImage">
                        <img src={Emiria} className="Emiria"/>
                    </div>
                </div>

                <div className="FlagContainer">
                    <img src={Flag} className="TransFlag"/>
                </div>

                <div className="IntroductionContent">
                    <p>
                        Hi, I'm <span className="SoftHighlight">Ellen</span>, a
                        Brazilian software developer focused on <span
                        className="SoftHighlight">low-level programming</span> and
                        complex problem-solving. I'm also into both <span
                        className="SoftHighlight"> web design</span> and <span
                        className="SoftHighlight">web development</span>, and have
                        taken courses in the field of <span
                        className="SoftHighlight">computer design</span>, building
                        a reasonably solid experience in the aspects surrounding it
                        over the time.
                        <br/>
                        <br/>

                        Besides coding, I enjoy reading, listening to music, playing
                        games and tabletop RPG.
                        <br/>
                        <br/>

                        I'm about to graduate with a degree in <span
                        className="SoftHighlight">Systems Analysis and
                        Development</span>, but most of my programming experience
                        comes from personal projects and a genuine passion for
                        learning new technologies. Curiosity and attention to
                        detail come naturally to me, regardless of the workflow or
                        project I'm working on.
                        <br/>
                        <br/>

                        As a self-taught programmer, I value free and <span
                        className="SoftHighlight">open-source</span> learning
                        resources. Much of what I've learned has been possible due
                        to the wealth of high-quality educational content freely
                        available online. Thanks, internet...
                    </p>
                </div>
            </div>
        </div>
    )
}
