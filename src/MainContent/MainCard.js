import './Mainstyle.css';
import active from '../img/activityimg.jpg';
import study from '../img/studyimg.jpg';
import project from '../img/project.png';

function Card(){
    return(
        <>
            <h2 className="toptitle">우리 insight의 활동</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                    <img src={study} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Study</h2>
                        <div className="info">
                        <p className="card-text">C 언어 계열 및 Python, 프론트 개발을 위한 베이직 스터디</p>
                        <button>자세히 보러가기</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={active} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Activity</h2>
                        <div className="info">
                        <p className="card-text">교내 경진 대회 및 교외 경진 대회도 팀을 짜서 여러 분야에 참여</p>
                        <button>자세히 보러가기</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={project} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Project</h2>
                        <div className="info">
                        <p className="card-text">로봇팔 제작, 웹사이트 제작, 게임 및 드론 등 다양한 분야의 부서활동을 진행하고 있습니다.</p>
                        <button>자세히 보러가기</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card;