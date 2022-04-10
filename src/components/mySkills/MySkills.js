import style from './style.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from "@fortawesome/free-regular-svg-icons";
import Slide from 'react-reveal/Slide';


const MySkills = () => {
    return (
        <div
            id="skills"
            className={style.mainWrapper}>
            <div className={style.container}>
                <div className={style.title}>
                    <Slide top>
                        <h3> My Skills</h3>
                    </Slide>
                </div>
                <Slide right>
                    <div className={style.liner}></div>
                </Slide>
                <div className={style.blocks_skills}>
                    <Slide left>
                        <div className={style.block_info_skill}>
                            <div className={style.block_skill}>
                                <FontAwesomeIcon icon={faJs} style={{transform: 'rotate(-45deg)'}}/>
                            </div>
                            <div className={style.text_about_skills}>
                                <span className={style.sub_title}>Java Script</span>
                                <p className={style.block_about_skill}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Eligendi impedit in optio quo ratione saepe sequi temporibus vitae? Enim,
                                    numquam.</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide top>
                        <div className={style.block_info_skill}>
                            <div className={style.block_skill}>
                                <FontAwesomeIcon icon={faReact} style={{transform: 'rotate(-45deg)'}}/>
                            </div>
                            <div className={style.text_about_skills}>
                                <span className={style.sub_title}>React</span>
                                <p className={style.block_about_skill}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Eligendi impedit in optio quo ratione saepe sequi temporibus vitae? Enim,
                                    numquam.</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className={style.block_info_skill}>
                            <div className={style.block_skill}>
                                <FontAwesomeIcon icon={faFileCode} style={{transform: 'rotate(-45deg)'}}/>
                            </div>
                            <div className={style.text_about_skills}>
                                <span className={style.sub_title}>Type Script</span>
                                <p className={style.block_about_skill}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Eligendi impedit in optio quo ratione saepe sequi temporibus vitae? Enim,
                                    numquam.</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide left>
                        <div className={style.block_info_skill}>
                            <div className={style.block_skill}>
                                <FontAwesomeIcon icon={faHtml5} style={{transform: 'rotate(-45deg)'}}/>
                            </div>
                            <div className={style.text_about_skills}>
                                <span className={style.sub_title}>HTML</span>
                                <p className={style.block_about_skill}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Eligendi impedit in optio quo ratione saepe sequi temporibus vitae? Enim,
                                    numquam.</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className={style.block_info_skill}>
                            <div className={style.block_skill}>
                                <FontAwesomeIcon icon={faCss3Alt} style={{transform: 'rotate(-45deg)'}}/>
                            </div>
                            <div className={style.text_about_skills}>
                                <span className={style.sub_title}>CSS</span>
                                <p className={style.block_about_skill}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Eligendi impedit in optio quo ratione saepe sequi temporibus vitae? Enim,
                                    numquam.</p>
                            </div>
                        </div>
                    </Slide>
                </div>

            </div>
        </div>
    )
}

export default MySkills