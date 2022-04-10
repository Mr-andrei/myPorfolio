import style from './style.module.css'
import cardsProject from './../../photos/Prokect_card.png'
import {WorkIcon} from "./WorkIcon";
import Slide from 'react-reveal/Slide';


const MyWorks = () => {

    const cardImg = {
        backgroundImage: `url(${cardsProject})`
    }

    return (
        <div
            id="work"
            className={style.container}>
            <div className={style.title_work}>
                <Slide top>
                    <h3> My Works</h3>
                </Slide>
            </div>
            <Slide right>
                <div className={style.liner}></div>
            </Slide>


            <div className={style.container_works}>
                <Slide bottom>
                    <WorkIcon images={cardImg} link={"https://Mr-andrei.github.io/mFridayProject"}/>
                </Slide>
                <Slide bottom>
                    <WorkIcon images={cardImg} link={"https://Mr-andrei.github.io/mFridayProject"}/>
                </Slide>
            </div>

        </div>
    )
}

export default MyWorks