import style from './style.module.css'
import photoMy from "./../../photos/Chaus.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';


const MeInfo = () => {
    return (
        <div
            id="aboutMe"
            className={style.main_wrapper}>

            <div className={style.container}>
                <div className={style.block_info}>

                    <div className={style.text_me}>
                        <Fade top>
                            <h2 className={style.title_block}>
                                HI THERE! I'M <span className={style.text_name}> Andrei Chaus </span>
                            </h2>
                            <p className={style.text_about_me}>
                                <span className={style.text_name}> A Front-End Web Developer </span> passionate about
                                creating interactive applications and experiences on the web.
                            </p>
                        </Fade>
                        <div className={style.container_contacts}>
                            <Fade bottom>
                                <div>
                                    <a className={style.link_resume}
                                       href="https://drive.google.com/file/d/1ADba1JWlNwhAeAaABv7EVEoAMZAMEDEH/view">Resume</a>
                                </div>
                                <div className={style.container_icons_link}>
                                    <a className={style.link_icon}
                                       href="https://github.com/Mr-andrei"><i><FontAwesomeIcon
                                        icon={faGithub} style={{
                                        width: "25px",
                                        height: "25px"
                                    }}/></i></a>
                                    <a className={style.link_icon}
                                       href="https://www.linkedin.com/in/andrei-chaus-967b6922a/"><FontAwesomeIcon
                                        icon={faLinkedin} style={{
                                        width: "25px",
                                        height: "25px"
                                    }}/></a>
                                    <a className={style.link_icon} href="https://t.me/klin000"><FontAwesomeIcon
                                        icon={faTelegram} style={{
                                        width: "25px",
                                        height: "25px"
                                    }}/></a>
                                </div>
                            </Fade>
                        </div>

                    </div>
                    <div
                        className={style.images}
                        style={{backgroundImage: `url(${photoMy})`}}>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MeInfo