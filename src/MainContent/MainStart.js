import './Mainstyle.css';
import Main from '../img/메인 이미지.png';
// import deu from '../img/동의대 로고.png'


function MainStart() {
    return(
        <div className='maincotent'>
            <div>
                <img src={Main} alt='Main' className='Mainimg'/>
            </div>
            <div className='maintext'>
                <p className='IT'>IT의 미래를 여는 창의적 개발의 시작, 당신의 통찰력이 필요합니다.</p>
                <b className='Need'>Need Your <b className='insighttext'>Insight</b></b>
            </div>
        </div>
    )
}

export default MainStart;