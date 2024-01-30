// import './Mainstyle.css';
// import React, { useState } from 'react';

// const Active = () => {
//   // State를 사용하여 선택된 부서의 인덱스 추적
//   const [selectedDepartmentIndex, setSelectedDepartmentIndex] = useState(0);

//   // 각 부서의 클릭 이벤트 핸들러
//   const handleDepartmentClick = (index) => {
//     setSelectedDepartmentIndex(index);
//   };

  // 각 부서에 대한 메시지
  const messages = {
    startup: '창업에 대한 내용',
    game: '게임에 대한 내용',
    robot: '로봇에 대한 내용',
    web: '웹에 대한 내용',
  };

  // 부서 버튼의 색상 반환 함수
  const getDepartmentColor = (index) => {
    const colors = ['#73538E', '#644B9F', '#513F9B', '#371F77'];
    return colors[index];
  };

//   return (
//     <>
//       <h2 className="toptitle">우리 insight의 부서</h2>
//       <div className="department">
//         <button
//           id="startup"
//           className={`department-button ${selectedDepartmentIndex === 0 ? 'selected' : ''}`}
//           style={{ backgroundColor: getDepartmentColor(0) }}
//           onClick={() => handleDepartmentClick(0)}
//         >
//           Start UP
//         </button>
//         <button
//           id="game"
//           className={`department-button ${selectedDepartmentIndex === 1 ? 'selected' : ''}`}
//           style={{ backgroundColor: getDepartmentColor(1) }}
//           onClick={() => handleDepartmentClick(1)}
//         >
//           Game
//         </button>
//         <button
//           id="robot"
//           className={`department-button ${selectedDepartmentIndex === 2 ? 'selected' : ''}`}
//           style={{ backgroundColor: getDepartmentColor(2) }}
//           onClick={() => handleDepartmentClick(2)}
//         >
//           Robot
//         </button>
//         <button
//           id="web"
//           className={`department-button ${selectedDepartmentIndex === 3 ? 'selected' : ''}`}
//           style={{ backgroundColor: getDepartmentColor(3) }}
//           onClick={() => handleDepartmentClick(3)}
//         >
//           Web
//         </button>

//         <div className={`startup ${selectedDepartmentIndex === 0 ? 'selected' : ''}`}>
//           <h3>창업</h3>
//           <div className="keyword-group">
//             <div id="education" className="keyword">
//               창업 교육
//             </div>
//             <div id="mentoring" className="keyword">
//               멘토링
//             </div>
//             <div id="experience" className="keyword">
//               경험
//             </div>
//           </div>
//           <p className="msg">{messages.startup}</p>
//         </div>

//         <div className={`game ${selectedDepartmentIndex === 1 ? 'selected' : ''}`}>
//           <h3>게임</h3>
//           <div className="keyword-group">
//             <div id="unity" className="keyword">
//               Unity
//             </div>
//             <div id="C" className="keyword">
//               C#
//             </div>
//             <div id="VR" className="keyword">
//               VR
//             </div>
//           </div>
//           <p className="msg">{messages.game}</p>
//         </div>

//         <div className={`robot ${selectedDepartmentIndex === 2 ? 'selected' : ''}`}>
//           <h3>로봇</h3>
//           <div className="keyword-group">
//             <div id="AI" className="keyword">
//               Ros
//             </div>
//             <div id="printing" className="keyword">
//               3D 프린팅
//             </div>
//             <div id="robotarm" className="keyword">
//               로봇 팔
//             </div>
//             <div id="autonomous" className="keyword">
//               자율주행
//             </div>
//           </div>
//           <p className="msg">{messages.robot}</p>
//         </div>

//         <div className={`web ${selectedDepartmentIndex === 3 ? 'selected' : ''}`}>
//           <h3>웹</h3>
//           <div className="keyword-group">
//             <div id="UXUI" className="keyword">
//               UX/UI
//             </div>
//             <div id="back-end" className="keyword">
//               Back-end
//             </div>
//             <div id="front-end" className="keyword">
//               Front-end
//             </div>
//           </div>
//           <p className="msg">{messages.web}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Active;




function Active(){
    return(
        <>
        <h2 class="toptitle">우리 insight의 부서</h2>
        <div id="department">
            <button id="startup" class="department-button">Start UP</button>
            <button id="game" class="department-button">Game</button>
            <button id="robot" class="department-button">Robot</button>
            <button id="web" class="department-button">Web</button>
            <div class="department">
            <div class="startup">
                <h3>창업</h3>
                <div class="keyword-group">
                <div id="education" class="keyword">창업 교육</div>
                <div id="mentoring" class="keyword">멘토링</div>
                <div id="experience" class="keyword">경험</div>
                </div>
                <p className="msg">{messages.startup}</p>
            </div>
            <div class="game">
                <h3>게임</h3>
                <div class="keyword-group">
                <div id="unity" class="keyword">Unity</div>
                <div id="C" class="keyword">C#</div>
                <div id="VR" class="keyword">VR</div>
                </div>
                <p className="msg">{messages.game}</p>
            </div>
            <div class="robot">
                <h3>로봇</h3>
                <div class="keyword-group">
                <div id="AI" class="keyword">Ros</div>
                <div id="printing" class="keyword">3D 프린팅</div>
                <div id="robotarm" class="keyword">로봇 팔</div>
                <div id="autonomous" class="keyword">자율주행</div>
                </div>
                <p className="msg">{messages.robot}</p>
            </div>
            <div class="web">
                <h3>웹</h3>
                <div class="keyword-group">
                <div id="UXUI" class="keyword">UX/UI</div>
                <div id="back-end" class="keyword">Back-end</div>
                <div id="front-end" class="keyword">Front-end</div>
                </div>
                <p className="msg">{messages.web}</p>
            </div>
            </div>
        </div>
    </>
    )
}

// document.getElementById('startup').addEventListener('click', function() {
//     this.style.backgroundColor = '#73538E';
//   });
//   document.getElementById('game').addEventListener('click', function() {
//     this.style.backgroundColor = '#644B9F';
//   });
//   document.getElementById('robot').addEventListener('click', function() {
//     this.style.backgroundColor = '#513F9B';
//   });
//   document.getElementById('web').addEventListener('click', function() {
//     this.style.backgroundColor = '#371F77';
// });

// var buttons = document.querySelectorAll('.department-button');
// var divs = document.querySelectorAll('.startup, .game, .robot, .web');

// buttons.forEach(function(button, index) {
// button.addEventListener('click', function() {
//   buttons.forEach(function(otherButton) {
//     if (otherButton !== button) {
//       otherButton.style.backgroundColor = 'transparent';
//     }
//   });

//   this.style.backgroundColor = getComputedStyle(this).getPropertyValue('background-color');
//   divs.forEach(function(div) {
//     div.style.display = 'none';
//   });
//   divs[index].style.display = 'block';
// });
// });

// const startupmsg = "d"
// const gamemsg = "d"
// const robotmsg = "d"
// const webmsg = "d" 

export default Active;