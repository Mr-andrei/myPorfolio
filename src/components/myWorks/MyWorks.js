import style from './style.module.css'
import cardsProject from './../../photos/Prokect_card.png'
import socialNetwork from './../../photos/socialNetwork.png'
import todo from './../../photos/Todolist.png'
import searchGit from './../../photos/SearchGit.png'
import countryImg from './../../photos/CountryProject.png'
import weatherImg from './../../photos/WeatherProjectpng.png'
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
    const countryAppImage = {
        backgroundImage: `url(${countryImg})`
    }
    const weatherAppImage = {
        backgroundImage: `url(${weatherImg})`
    }

    const textAboutTodolist =" React/Redux/ TypeScript/React-router-dom v6/" +
        "Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI;"


    const textAboutCards = "React/Redux/ TypeScript/React-router-dom" +
        "v6/Axios /Material UI/Formik/"

    const searchGet = "React/Redux/ TypeScript" +
        "v6/Axios/Github"


    const weatherApp ="React/Redux/ TypeScript/" +
        "v6/Axios/ Github."
    const countryApp = "React/Redux/  TypeScript/" +
        "v6/Axios /Github."


    const socialNetworkText =  "React/Redux/ TypeScript/Redux-thunk/React-router-dom v6/React-hook-form/Axios/Jest;"
    return (
        <div className={style.main_wrapper}>
            <div
                id="work"
                className={style.container}>
                <div className={style.container_title_work}>
                    <Slide top>
                        <h2 className={style.title_work}> My Works</h2>
                    </Slide>
                </div>

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
                            name={"Search people on GitHub.  "}
                            images={gitSearchAppImage}
                            link={"https://mr-andrei.github.io/SearchGit"}
                            text={searchGet}
                            linkGit={"https://github.com/Mr-andrei/SearchGit"}
                        />
                    </Slide>

                    <Slide bottom>
                        <WorkIcon
                            name={"Search country.  "}
                            images={countryAppImage}
                            link={"https://mr-andrei.github.io/CountryProject/"}
                            text={countryApp}
                            linkGit={"https://github.com/Mr-andrei/CountryProject"}
                        />
                    </Slide>

                    <Slide bottom>
                        <WorkIcon
                            name={"Search weather.  "}
                            images={weatherAppImage}
                            link={"https://mr-andrei.github.io/WeatherProject/"}
                            text={weatherApp}
                            linkGit={"https://github.com/Mr-andrei/WeatherProject"}
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
                </div>
            </div>
        </div>
    )
}

export default MyWorks