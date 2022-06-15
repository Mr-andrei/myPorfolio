import style from './style.module.css'
import MySkills from "./components/mySkills/MySkills";
import MyWorks from "./components/myWorks/MyWorks";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import MeInfo from "./components/MeInfo/MeInfo";



function App() {
    return (
        <div className={style.app_container}>
            <NavBar/>
            <MeInfo/>
            {/*<AboutMe/>*/}
            <MySkills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
