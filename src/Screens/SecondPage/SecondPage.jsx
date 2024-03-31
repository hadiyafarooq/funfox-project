import "./SecondPage.css";
import IntroImage from "../../images/IntroImage.png";
import Logo from "../../images/Logo.png";
import SquareQMark from "../../images/SquareQMark.png";
import Clouds from "../../images/Clouds.png";
import Rectangle from "../../images/Rectangle.png";
import GroupLeft from "../../images/GroupLeft.png";
import GroupRight from "../../images/GroupRight.png";
import Contact from "../../images/Contact.png";
import Info from "../../images/Info.png";
import LeftButton from "../../images/LeftButton.png";
import RightButton from "../../images/RightButton.png";
import Page2 from "../../images/Page2.png";
import SunnyBeach from "../../images/SunnyBeach.png";
import RainyNight from "../../images/RainyNight.png";
import Time from "../../images/Time.png"
import Place from "../../images/Place.png"
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
  let navigate = useNavigate();

  return (
    <>
      <div className="WholeScreenFirstPage">
        <img className="Logo" src={Logo} alt="Logo"></img>
        <img className="SquareQMark" src={SquareQMark} alt="SquareQMark"></img>
        <img className="GroupLeft" src={GroupLeft} alt="GroupLeft"></img>
        <img className="GroupRight" src={GroupRight} alt="GroupRight"></img>
        <div className="MainContentScreen">
          <div className="ContentMainHeading">
            Can you figure out the definition of setting from the following
            examples?
          </div>
          <div className="ContentSubHeading">
            (take a minute to think about this)
          </div>
          <div className="MainContentIntroSecondPage">
            <div className="pic-container">
              <img
                className="MidPictures"
                src={SunnyBeach}
                alt="SunnyBeach"
              ></img>
              <div className="SunnyBeach">Sunny day at a beach</div>
            </div>
            <div className="pic-container">
              <img
                className="MidPictures"
                src={RainyNight}
                alt="RainyNight"
              ></img>
              <div className="RainyNight">
                A cold rainy night in a haunted house in October
              </div>
            </div>

          </div>
                        <div className="ContentDefinition">
                        So, what do you think the definition of setting is?
                    </div>
          <div className="WholeGuess">
            <div className="AnyGuesses">
            Any guesses?
            <input className="TextBoxAnyGuesses"/>
            </div>
            <div className="HintImageDiv">
            <div className="Hint">
                        Hint
            </div>
            <img
              className="Time"
              src={Time}
              alt="Time"
            ></img>
            <img
              className="Place"
              src={Place}
              alt="RightButton"
            ></img>
            </div>
          </div>
          <div className="MainContentIntro">
                        <div className="IntroContent">
                        Setting is the time <img  className="TimeInText"
              src={Time}
              alt="Time"></img>     and place             <img
              className="PlaceInText"
              src={Place}
              alt="RightButton"
            ></img>    of a story. It often answers the questions: when? and where?
        </div>
        </div>
        <div className="ContentDefinition">
        The time of the story could be in the past, future, day, night, summer or winter.
        A story may take place in a school, a mall, a desert, an airplane or in a variety
        of other places.
        </div>
        </div>
        <div className="Footer">
          <img className="Contact" src={Contact} alt="Contact"></img>
          <div className="midbuttons">
            <img
              className="LeftButton"
              onClick={(e) => navigate("/")}
              src={LeftButton}
              alt="LeftButton"
            ></img>
            <img className="Page2" src={Page2} alt="Page2"></img>
            <img
              className="RightButton"
              onClick={(e) => navigate("/SecondPage")}
              src={RightButton}
              alt="RightButton"
            ></img>
          </div>

          <img className="Info" src={Info} alt="Info"></img>
        </div>
      </div>
    </>
  );
}
