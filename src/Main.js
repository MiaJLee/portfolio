import React from "react";
import Design from "./Design";
import "./Main.scss";

export default class Main extends React.Component {
  state = {
    activeTab: -1,
    darkMode: false,
    hoverOn: false,
  };

  clickHandler = (idx) => {
    this.setState({
      activeTab: this.state.activeTab === idx ? -1 : idx,
    });
  };

  darkMode = () => {
    const { darkMode } = this.state;
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#141414";
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  render() {
    const { activeTab, darkMode, hoverOn } = this.state;
    return (
      <main className={`Main ${darkMode ? "darkMode" : ""}`}>
        <div className="mainLeft">
          <div className="profileContainer">
            <h1>
              <span>이지형</span> Lee Jihyung
            </h1>
            <p>
              <a href="mailto: leejihyung@kakao.com">leejihyung@kakao.com</a>
              <br />
              Seoul, Korea
            </p>
            <div
              className="detail"
              onMouseEnter={() => this.setState({ hoverOn: true })}
              onMouseLeave={() => this.setState({ hoverOn: false })}
            >
              <p
                className="detailInfo"
                style={{ display: hoverOn ? "none" : "block" }}
              >
                재사용가능한 UI를 디자인하는 것에 관심이 많은 <br />
                인터페이스 디자이너 & 프론트엔드 엔지니어. <br />
                다양한 사용자를 위한 디지털 서비스를 디자인하다 <br />
                개발에 관심이 생겨 관심이 생겨 개발자로서의 커리어를 <br />
                시작했습니다. <br />
                <br />
                새로운 사람들과의 커뮤니케이션을 즐기고, <br />
                사용자에게 즐거움을 선사하는 서비스를 기획할 때 <br />
                행복합니다. 여행과 맥주, 살아있는 것들에 대한 <br />
                이야기를 사랑합니다.
              </p>
              <p
                className="detailInfo"
                style={{ display: hoverOn ? "block" : "none" }}
              >
                Hi, I'm Jihyung, an interface designer & front-end developer.
                I've designed digital products to a variety of users over 3+
                years. When I plan a service that makes people’s life easier and
                more efficient, I feel accomplishment. Eventually, I decided to
                take this new career path as a web developer. <br />
                <br />
                I'm a sociable individual who enjoys interacting and
                communicating with new people. Feel free to contact me by any
                means of communication.
              </p>
            </div>
            <a
              className="socialLink"
              href="https://github.com/MiaJLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="socialLink"
              href="https://velog.io/@hyounglee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              className="socialLink"
              href="https://www.instagram.com/thisisyourhyung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <ul className="tabs">
            {TAB_ARR.map((el, idx) => {
              return (
                <li key={el} onClick={() => this.clickHandler(idx)}>
                  {el}
                </li>
              );
            })}
          </ul>
          <div className="desc">
            <p>{DESCRIPTION[activeTab]}</p>
          </div>
        </div>
        <span className="darkMode" onClick={this.darkMode}>
          {darkMode ? "☀" : "☾"}
        </span>
      </main>
    );
  }
}

const TAB_ARR = [
  "Skills",
  "Work Experience",
  "Education",
  "Contact",
  "Design Works",
];
const DESCRIPTION = {
  0: (
    <>
      HTML/CSS, JavaScript
      <br />
      SCSS/Sass, ES6+ <br />
      React, Redux <br />
      Sketch, Adobe Xd <br />
      Protopie, InVision
      <br />
      Wireframing, Personas <br />
      Stakeholder mapping <br />
      Usability Testing, FGI <br />
      User Journey Map <br />
      Information Architecture
    </>
  ),
  1: (
    <>
      UXUI Designer & Researcher
      <br />
      at HAII Inc. 2019
    </>
  ),
  2: (
    <>
      Completion of{" "}
      <a className="wecode" href="https://wecode.co.kr/">
        Wecode Bootcamp
      </a>
      <br />
      (Web Front-end Developer Course). <br />
      2020
      <br />
      <br />
      BFA, Visual Communication
      <br />
      Design, Hongik University.
      <br />
      2014 - 2020
      <br />
      <br />
      Completion of D.REAM
      <br />
      Academy Yonsei University
      <br />
      HCI Lab. & The HCI Society
      <br />
      Korea. 2019
    </>
  ),
  3: (
    <>
      leejihyung@kakao.com
      <br />
      +82 010.2017.8811
    </>
  ),
  4: <Design />,
};
