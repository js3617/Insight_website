import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from "react";  
import logo from './img/insight로고.png';
import Card from './MainContent/MainCard';
import Active from './MainContent/MainActive';
import Footer from './MainContent/MainFooter';
// import Dots from './technology/Dots';

function Main() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 현재 스크롤 위치
      const pageHeight = window.innerHeight; // 화면의 세로 길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 마우스 휠을 아래로 돌릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(4);
        } else {
          // 현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 마우스 휠을 위로 돌릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(2);
        } else {
          // 현재 4페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          //setCurrentPage(3);
        }
      }
    };

  const outerDivRefCurrent = outerDivRef.current;
  outerDivRefCurrent.addEventListener("wheel", wheelHandler);

  return () => {
    outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  };
}, []);

  return (
    <div ref={outerDivRef} className="App">
      <Navi/>
      {/* <Dots currentPage={currentPage} /> */}
      <div className="inner"></div>
      <div className="divider"></div>
      <div className="inner"><Card/></div>
      <div className="divider"></div>
      <div className="inner"><Active/></div>
      <div className="divider"></div>
      <div className="inner"><Footer/></div>
    </div>
  );
}

function Navi() {
  return(
    <navi id="navbar-all" class="navibar px-3">
      <a class="navibar-brand" href="#!"><img src={logo} alt="logo"/>insight</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Activity</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Join US</a>
        </li>
      </ul>
    </navi>
  )
}
export default Main;