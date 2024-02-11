import './Mainstyle.css';
import Main from '../img/메인 이미지.png';
import deu from '../img/동의대 로고.png'


function MainStart() {
    return(
        <>
        <div>
            <img src={Main} alt='Main' className='Mainimg'/>
        </div>
        <div>
            <img src={deu} alt='deu'/>
        </div>
        </>
    )
}

export default MainStart;