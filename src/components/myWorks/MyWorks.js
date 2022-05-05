import style from './style.module.css'
import cardsProject from './../../photos/Prokect_card.png'
import socialNetwork from './../../photos/socialNetwork.png'
import todo from './../../photos/Todolist.png'
import searchGit from './../../photos/SearchGit.png'
import {WorkIcon} from "./WorkIcon";
import Slide from 'react-reveal/Slide';


const MyWorks = () => {

    const cardImg = {
        backgroundImage: `url(${cardsProject})`
    }
    const socialNetwor = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todolistImage = {
        backgroundImage: `url(${todo})`
    }
    const gitSearchAppImage = {
        backgroundImage: `url(${searchGit})`
    }

    const textAboutTodolist = "React/Redux/React-router-dom v6/" +
        "Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI;" +
        "Todolist app created with react hooks, routing and" +
        "redirects, material UI, REST api request/response flow," +
        "unit-tests and etc."

    const textAboutCards = "Creating learning app in team with using git, work with" +
        "Used technologies:" +
        "React/TypeScript/React-router-dom" +
        "v6/Axios /Material UI/Formik/SCSS/Git, Github" +
        "axios(CRUD)."

    const searchGet = "Creating app for search on git" +
        "Used technologies:" +
        "React/TypeScript/Redux" +
        "v6/Axios /Git, Github" +
        "axios(CRUD)."

    const socialNetworkText = "Social network app with using react hooks, routing, lazy" +
        "loading, working with REST api, login/logout flow," +
        "Used technologies: React/Redux/TypeScript/Reduxthunk/React-router-dom v6/React-hookform/Axios/Jest;"
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
                    <WorkIcon
                        name={"Todolist.  "}
                        images={todolistImage}
                        link={"https://mr-andrei.github.io/TodolistFinaly/"}
                        text={textAboutTodolist}
                        linkGit={"https://github.com/Mr-andrei/TodolistFinaly"}

                    />
                </Slide>
                <Slide bottom>
                    <WorkIcon
                        name={"Learning on cards.  "}
                        images={cardImg}
                        link={"https://Mr-andrei.github.io/mFridayProject"}
                        text={textAboutCards}
                        linkGit={"https://github.com/Mr-andrei/mFridayProject"}

                    />
                </Slide>

                <Slide bottom>
                    <WorkIcon
                        name={"Social network.  "}
                        images={socialNetwor}
                        text={socialNetworkText}
                        linkGit={"https://github.com/Mr-andrei/My_firstreact"}
                    />
                </Slide>

                <Slide bottom>
                    <WorkIcon
                        name={"Search people on GitHub.  "}
                        images={gitSearchAppImage}
                        link={"https://mr-andrei.github.io/SearchGit"}
                        text={searchGet}
                        linkGit={"https://github.com/Mr-andrei/SearchGit"}
                    />
                </Slide>
            </div>

        </div>
    )
}

export default MyWorks