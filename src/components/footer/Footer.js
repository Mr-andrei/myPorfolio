import style from "./style.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer className={style.footer_main}>
            <div className={style.footer_container}>
                <div>

                    <div className={style.block_icon}>
                        <a href="https://t.me/klin000"><FontAwesomeIcon icon={faTelegram} className={style.icon}/></a>
                        <a href="https://www.linkedin.com/in/andrei-chaus-967b6922a/"> <FontAwesomeIcon
                            icon={faLinkedin} className={style.icon}/></a>
                        <a href="https://github.com/Mr-andrei"><FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
                    </div>

                    <span className={style.footer_text}>
                        © 2022 beingeorge, All Rights Reserved.
                   </span>

                </div>
            </div>

        </footer>
    )
}

export default Footer