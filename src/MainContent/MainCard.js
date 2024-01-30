import './Mainstyle.css';
import active from '../img/coding.jpg';

function Card(){
    return(
        <>
            <h2 class="toptitle">우리 insight의 활동</h2>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <img src={active} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">Study</h2>
                        <div class="info">
                        <p class="card-text">C 언어 계열 및 Python, 프론트 개발을 위한 베이직 스터디</p>
                        <button>자세히 보러가기</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={active} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">Activity</h2>
                        <div class="info">
                        <p class="card-text">교내 경진 대회 및 교외 경진 대회도 팀을 짜서 여러 분야에 참여</p>
                        <button>자세히 보러가기</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={active} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2 class="card-title">Project</h2>
                        <div class="info">
                        <p class="card-text">로봇팔 제작, 웹사이트 제작, 게임 및 드론 등 다양한 분야의 부서활동을 진행하고 있습니다.</p>
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