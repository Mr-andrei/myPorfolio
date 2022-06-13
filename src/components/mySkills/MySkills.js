import style from './style.module.css'
import webStorm from "./../../photos/skills/webstorm-svgrepo-com.svg"
import git from "./../../photos/skills/git.svg"
import jS from "./../../photos/skills/js-svgrepo-com.svg"
import tS from "./../../photos/skills/typescript-svgrepo-com.svg"
import hTML from "./../../photos/skills/html5-svgrepo-com.svg"
import cSS from "./../../photos/skills/css3-svgrepo-com.svg"
import redux from "./../../photos/skills/redux-svgrepo-com.svg"
import restApi from "./../../photos/skills/api.svg"
import figma from "./../../photos/skills/figma.7ec53a4a5c6c13b7d459f072fc73adf1.svg"
import materialUI from "./../../photos/skills/material-ui.ca66f0a99617ff6494c3.png"
import Fade from 'react-reveal/Fade';

const arrIcons = [
    {icon: jS, name: "JS"},
    {icon: tS, name: "TS"},
    {icon: redux, name: "Redux"},
    {icon: hTML, name: "HTML"},
    {icon: cSS, name: "CSS"},
    {icon: restApi, name: "Rest API"},
    {icon: git, name: "Git-hub"},
    {icon: webStorm, name: "WebStorm"},
    {icon: figma, name: "Figma"},
    {icon: materialUI, name: "MaterialUI"}

]
// const arrIconsSecond = [
//     {icon: restApi, name: "Rest API"},
//     {icon: git, name: "Git-hub"},
//     {icon: webStorm, name: "WebStorm"},
//     {icon: figma, name: "Figma"},
//     {icon: materialUI, name: "MaterialUI"}
// ]
const MySkills = () => {
    return (
        <div
            id="skills"
            className={style.mainWrapper}>
            <div className={style.container}>
                <div className={style.container_title}>
                    <h3 className={style.title}>My Skills</h3>
                </div>

                <div className={style.container_skills_one}>
                    {arrIcons.map((elem, index) => {
                        return (
                            <Fade top>
                                <div
                                    className={style.skill_box}
                                    key={index}>
                                    <img
                                        className={style.image_icon}
                                        src={elem.icon} alt={elem.name}/>
                                    <span className={style.skill_text}>{elem.name}</span>
                                </div>
                            </Fade>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default MySkills
