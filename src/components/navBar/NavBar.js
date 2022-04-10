import style from './style.module.css'
import Slide from 'react-reveal/Slide';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.container}>
                <Slide right cascade>
                <nav className={style.nav_block}>
                    <span className={style.text_linc}>
                          <Link
                              activeClass={style.active}
                              to="aboutMe"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                          > About me </Link>
                    </span>
                    <span className={style.text_linc}>
                         <Link
                             activeClass={style.active}
                             to="skills"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={500}
                         > My skills </Link>
                    </span>
                    <span className={style.text_linc}>
                        <Link
                            activeClass={style.active}
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        > My works </Link></span>
                    <span className={style.text_linc}>
                        <Link
                            activeClass={style.active}
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        > Contacts </Link></span>
                </nav>
                </Slide>
            </div>
        </div>
    )
}

export default NavBar