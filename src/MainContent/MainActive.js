import './Mainstyle.css';
import React, { useState, useEffect } from 'react';

// 각 부서에 대한 메시지
const messages = {
  창업: '창업에 대한 내용',
  게임: '게임에 대한 내용',
  로봇: '로봇에 대한 내용',
  웹: '웹에 대한 내용',
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

      <div className="department">
        {Object.keys(messages).map((department) => (
          <div key={department} className={activeButton === department ? 'department' : 'department none'}>
            {activeButton === department && (
              <>
                <h3>{department}</h3>
                <p className="msg">{messages[department]}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Active;
