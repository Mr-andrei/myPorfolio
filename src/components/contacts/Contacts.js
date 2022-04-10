import style from "./style.module.css";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Contacts = () => {
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
                        <input type="input" className={style.form__field} placeholder="Name" name="name" id='name'
                               required/>
                        <label htmlFor="name" className={style.form__label}>Name</label>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={style.form__group}>
                        <input type="input" className={style.form__field} placeholder="Email" name="email" id='email'
                               required/>
                        <label htmlFor="Email" className={style.form__label}>Email</label>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={style.box_message}>
                    <textarea className={style.form__field_message} placeholder="Your message" name="Your message"
                              id='Your message' required/>
                        <label htmlFor="Your message" className={style.form__label_message}>Your message</label>
                    </div>
                </Fade>
            </div>
            <Flip bottom>
                <div className={style.svg_wrapper}>
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