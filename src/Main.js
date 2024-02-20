import  './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import logo from './img/insight로고.png';
import Card from './MainContent/MainCard';
import Active from './MainContent/MainActive';
import Footer from './MainContent/MainFooter';
import Start from './MainContent/MainStart';
import Deu from './MainContent/Maindeu';
import Insight from './MainContent/MainInsight';
import ScrollLine1 from './MainContent/MainScroll1';
// import Dots from './technology/Dots';

import { useEffect, useRef } from 'react';

function Slider() {
  let slides = [];
  let btns = [];
  let count = 0;
  let current = 0;
  let touchstart = 0;
  let animationState = false;
  const pagesRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    slides = pagesRef.current?.children;
    count = slides?.length;
    if (slides && count) {
      for(let i = 0; i < count; i++) {
        slides[i].style.bottom = -(i * 100) + '%';
        let btn = document.createElement('li');
        btn.dataset.slide = i;
        btn.addEventListener('click', btnClick)
        btns.push(btn);
        paginationRef.current.appendChild(btn);
      }
      btns[0].classList.add('active');
    }
  }

  const gotoNum = (index) => {
    if((index !== current) && !animationState) {
      animationState = true;
      setTimeout(() => animationState = false, 500);
      btns[current].classList.remove('active');
      current = index;
      btns[current].classList.add('active');
      for(let i = 0; i < count; i++) {
        slides[i].style.bottom = `${(current - i) * 100}%`;
      }
    }
  }

  const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
  const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;

  const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));

  const handleTouchStart = (e) => touchstart = e.touches[0].screenY;
  const handleTouchEnd = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();

  const handleMouseWheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

  return (
    <>
      <div className="pages" ref={pagesRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleMouseWheel}>
        <div className="first page">
            <Start />
          </div>
          <div className="second page">
            <Deu />
          </div>
          <div className="third page">
            <Insight />
          </div>
          <div className="third page">
            <ScrollLine1 />
          </div>
          <div className="four page">
            <Card />
          </div>
          <div className="five page">
            <Active />
          </div>
          <div className="six page">
            <Footer />
          </div>
      </div>
      <ul className="pagination" ref={paginationRef}></ul>
    </>
  );
}

function Main() {
  return (
    <div className="App">
      <Navi />
      <Slider />
    </div>
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