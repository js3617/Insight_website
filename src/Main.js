import  './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from "react";  
import logo from './img/insight로고.png';
import Card from './MainContent/MainCard';
import Active from './MainContent/MainActive';
import Footer from './MainContent/MainFooter';
import Start from './MainContent/MainStart';
import Deu from './MainContent/Maindeu';
import Insight from './MainContent/MainInsight';
// import Dots from './technology/Dots';

function Main() {
  const outerDivRef = useRef();

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 현재 스크롤 위치
      const pageHeight = window.innerHeight; // 화면의 세로 길이, 100vh와 같습니다.
      let nextPage;
    
      if (deltaY > 0) {
        // 마우스 휠을 아래로 돌릴 때
        nextPage = Math.min(Math.ceil(scrollTop / pageHeight) + 1, 9); // 다음 페이지
      } else {
        // 마우스 휠을 위로 돌릴 때
        nextPage = Math.max(Math.floor(scrollTop / pageHeight) - 1, 0); // 이전 페이지
      }
    
      const targetElement = document.getElementById(`page${nextPage}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
      <>
      <Navi/>
    <div ref={outerDivRef} className="App">
      <div id="page1" className="inner"><Start/></div>
      <div className="divider"></div>
      <div id="page2" className="inner"><Deu/></div>
      <div className="divider"></div>
      <div id="page3" className="inner"><Insight/></div>
      <div className="divider"></div>
      <div id="page4" className="inner"></div>
      <div className="divider"></div>
      <div id="page5" className="inner">Page 5 Content</div>
      <div className="divider"></div>
      <div id="page6" className="inner">Page 6 Content</div>
      <div className="divider"></div>
      <div id="page7" className="inner"><Card/></div>
      <div className="divider"></div>
      <div id="page8" className="inner"><Active/></div>
      <div className="divider"></div>
      <div id="page9" className="inner"><Footer/></div>
    </div>
    </>
  );
}


function Navi() {
  const activeStyle = {
    color: 'purple',
  };
  
  return(
    <div className='navibar'>
        <a href='/' className='navibar px-5'>
          <img src={logo} alt="logo"/>Insight</a>
        <ul className="nav">
          <li className="nav-item">
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/'>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/About'>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/Activity'>
              Activity
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/JoinUs'>
              Join Us
            </NavLink>
          </li>
        </ul>
    </div>
  )
}
export default Main;