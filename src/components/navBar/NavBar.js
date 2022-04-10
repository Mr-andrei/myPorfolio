import style from './style.module.css'
import Slide from 'react-reveal/Slide';
import {Link, animateScroll as scroll} from "react-scroll";
import {useState} from "react";

const NavBar = () => {

    const [openMenu,  setOpenMenu] = useState(false)

    return (
        <div className={style.mainWrapper}>
             <span className={style.hamburger} onClick={()=> setOpenMenu (!openMenu)}>
                        <hr className={style.line1}></hr>
                        <hr className={style.line2}></hr>
                        <hr className={style.line3}></hr>
               </span>
            <div className={openMenu ?   style.containerOpen : style.container}>
                <span
                    className={style.close}
                    onClick={()=> setOpenMenu (false)}
                ></span>
                <Slide right cascade>
                    <nav className={style.nav_block}>
                    <span className={style.text_linc} >
                          <Link
                              onClick={()=> setOpenMenu (false)}
                              activeClass={style.active}
                              to="aboutMe"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                          > About me </Link>
                    </span>
                        <span className={style.text_linc} >
                         <Link
                             onClick={()=> setOpenMenu (false)}
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
                            onClick={()=> setOpenMenu (false)}
                            activeClass={style.active}
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        > My works </Link></span>
                        <span className={style.text_linc}>
                        <Link
                            onClick={()=> setOpenMenu (false)}
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