import style from "./style.module.css";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {postDataAPI} from "../../utills/axiosSendMessage";
import {useState} from "react";

const Contacts = () => {

     const  [name, setName] = useState("")
     const  [mail, setMail] = useState("")
     const  [message, setMessage] = useState("")


    const clickHandler = () => {
        postDataAPI.sendMessage(name,mail,message)
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
        <div
            id="contact"
            className={style.container}>
            <Slide top>
                <h3>Contacts</h3>
            </Slide>
            <Slide right>
                <div className={style.liner}></div>
            </Slide>
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
                            <label htmlFor="name" className={style.form__label}>Name</label>
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
                            <label htmlFor="Email" className={style.form__label}>Email</label>
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
                            <label htmlFor="Your message" className={style.form__label_message}>Your message</label>
                        </div>
                    </Fade>

            </div>

            <Flip bottom>
                <div className={style.svg_wrapper} onClick={clickHandler}>
                    <svg height="60" width="300" xmlns="http://www.w3.org/2000/svg">
                        <rect className={style.shape1} height="60" width="300"/>
                        <rect className={style.shape2} height="60" width="300"/>
                    </svg>
                    <div className={style.text}>Send me message</div>

                </div>
            </Flip>
        </div>
    )
}

export default Contacts