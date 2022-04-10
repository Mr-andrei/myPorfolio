import style from './style.module.css'
import photoMy from "./../../photos/phonoMy.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';


const AboutMeInfo = () => {
    return (
        <div
            id="aboutMe"
            className={style.main_wrapper}>
            <div className={style.container}>

                <div className={style.block_info}>
                    <Fade top>
                        <div
                            className={style.text_me}>
                            <h2>
                                I`m Andrei Chaus
                            </h2>
                            <span>
                                  <ReactTypingEffect
                                      text={["Frontend developer."]}/>

                        </span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div
                            className={style.images}
                            style={{backgroundImage: `url(${photoMy})`}}>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMeInfo