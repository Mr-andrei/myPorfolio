import style from "./style.module.css";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {postDataAPI} from "../../utills/axiosSendMessage";
import {useState} from "react";

const Contacts = () => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")


    const clickHandler = () => {
        postDataAPI.sendMessage(name, mail, message)
    }
    const changeEventName = (e) => {
        setName(e.currentTarget.value)
    }
    const changeEventMail = (e) => {
        setMail(e.currentTarget.value)
    }
    const changeEventMessage = (e) => {
        setMessage(e.currentTarget.value)
    }


    return (
        <div className={style.main_wrapper}>
            <div
                id="contact"
                className={style.container}>
                <Slide top>
                    <h2 className={style.title}>Contacts</h2>
                </Slide>
                <div className={style.block_form}>
                    <div className={style.input_block}>

                        <Fade bottom>
                            <div className={style.form__group}>
                                <input onChange={changeEventName}
                                       value={name}
                                       type="input"
                                       className={style.form__field}
                                       placeholder="Name"
                                       name="name"
                                       id='name'
                                       required/>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={style.form__group}>
                                <input onChange={changeEventMail}
                                       value={mail}
                                       type="input"
                                       className={style.form__field}
                                       placeholder="Email"
                                       name="email"
                                       id='email'
                                       required/>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={style.box_message}>
                    <textarea onChange={changeEventMessage}
                              value={message}
                              className={style.form__field_message}
                              placeholder="Your message"
                              name="Your message"
                              id='Your message' required/>
                            </div>
                        </Fade>

                    </div>

                    <Flip bottom>
                        <div className={style.container_btn}>
                            <button className={style.button} onClick={clickHandler}>
                                Send me message
                            </button>
                        </div>
                    </Flip>
                </div>
            </div>
        </div>
    )
}

export default Contacts