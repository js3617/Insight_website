import './Mainstyle.css';
import React, { useState, useEffect } from 'react';

// 각 부서에 대한 메시지
const messages = {
  창업: '창업을 위한 교육부터 실제 창업에 대한 멘토링뿐만 아니라 다양한 지원을 받으며 활동하는 부서입니다.',
  게임: 'Unity 엔진을 기반으로 2D, 3D, VR 등 여러 환경에서 게임 개발을 하는 부서입니다.',
  로봇: '3D 프린터를 활용하여 하드웨어 부품 제작부터 인공지능 로봇 개발 까지의 프로젝트를 진행하는 부서입니다.',
  웹: 'Java, JavaScript, React 등의 툴을 활용하여 웹의 기획부터 개발까지를 직접 제작하는 부서입니다.',
};

function Active() {
  const [activeButton, setActiveButton] = useState(localStorage.getItem('activeButton') || '창업'); // 로컬 스토리지에서 저장된 값 또는 기본값으로 '창업'을 사용

  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  const handleButtonClick = (department) => {
    setActiveButton(department);
  };

  return (
    <>
      <h2 className="toptitle">Insight의 부서</h2>
      <div id="department">
        {Object.keys(messages).map((department) => (
          <button
            key={department}
            className="department-button"
            style={{ color: activeButton === department ? 'purple' : 'white' }}
            onClick={() => handleButtonClick(department)}
          >
            {department}
          </button>
        ))}
      </div>

      {Object.keys(messages).map((department) => (
        <div key={department} className={activeButton === department ? 'department-content' : 'department-content none'}>
          {activeButton === department && (
            <>
              <h3 className='topmsg'>{department}</h3>
              <p className="msg">{messages[department]}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Active;
