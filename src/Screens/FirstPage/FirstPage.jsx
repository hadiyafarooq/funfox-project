import "./FirstPage.css";
import IntroImage from "../../images/IntroImage.png"
import Logo from "../../images/Logo.png"
import Week1 from "../../images/Week1.png"
import Clouds from "../../images/Clouds.png"
import Rectangle from "../../images/Rectangle.png"
import GroupLeft from "../../images/GroupLeft.png"
import GroupRight from "../../images/GroupRight.png"
import Contact from "../../images/Contact.png"
import Info from "../../images/Info.png"
import LeftButton from "../../images/LeftButton.png"
import RightButton from "../../images/RightButton.png"
import Page1 from "../../images/Page1.png"

import { useNavigate} from 'react-router-dom'

export default function FirstPage(){
    let navigate = useNavigate()

    return(
        <>
        <div className="WholeScreenFirstPage" >
            {/* <div className="WholeScreenImages"> */}
                <img className="Logo" src = {Logo} alt="Logo"></img> 
                <img className="Week1" src = {Week1} alt="Week1"></img> 
                <img className="GroupLeft" src = {GroupLeft} alt="GroupLeft"></img> 
                <img className="GroupRight" src = {GroupRight} alt="GroupRight"></img> 
            {/* </div> */}
            <div className="MainContentScreen">
                <div className="MainContentHeading">
                    <div className="Heading">
                        Elements Of Story Writing
                    </div>
                </div>
                    <div className="WelcomeContent">
                        Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting.
                    </div>
                    
                    <div className="MainContentIntro">
                        <div className="IntroContent">
                        There are <b>five</b> elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                        </div>
                        <div className="IntroImage">
                            <img className="IntoImage" src = {IntroImage} alt="Intro"></img>
                        </div>    
                    </div>

                <div className="parent-image-container">
                    <div class="image-container">
                        <img src={Clouds} alt="Setting"></img>
                        <div class="text-overlay">SETTING</div>
                    </div>

                    <div class="image-container">
                        <img src={Clouds} alt="Characters"></img>
                        <div class="text-overlay">CHARACTERS</div>
                    </div>

                    <div class="image-container">
                        <img src={Clouds} alt="Plot"></img>
                        <div class="text-overlay">PLOT</div>
                    </div>

                    <div class="image-container">
                        <img src={Clouds} alt="Problem or Confilct"></img>
                        <div class="text-overlay">PROBLEM OR 
                        CONFLICT</div>
                    </div>

                    <div class="image-container">
                        <img src={Clouds} alt="Reolution Cloud"></img>
                        <div class="text-overlay">RESOLUTION</div>
                    </div>

                </div>

                <div className="WelcomeContent">
                You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
                </div>

                <div class="rectangle-container">
                    <img className="rectangle-image" src={Rectangle} alt="Reolution Cloud"></img>
                    <p className="rectangle-text">For today's lesson, we will try to understand and practice writing the setting for our stories.<br/>The setting is an important element of every fiction story.</p>
                </div>
            </div>
                <div className="Footer">
                    <img className="Contact" src = {Contact} alt="Contact"></img>
                    <div className="midbuttons">
                    <img className="LeftButton"  onClick={(e) => navigate("/")} src = {LeftButton} alt="LeftButton"></img>
                    <img className="Page1" src = {Page1} alt="Page1"></img>
                    <img className="RightButton"  onClick={(e) => navigate("/SecondPage")} src = {RightButton} alt="RightButton"></img>
                    </div>
                    <img className="Info" src = {Info} alt="Info"></img>
                </div>
            </div>
        </>
    );
}