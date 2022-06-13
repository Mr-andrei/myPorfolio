import style from "./aboutme.module.css"



const AboutMe = () => {
    return(
        <div className={style.main_wrapper}>
            <div className={style.container}>

                <div className={style.container_title}>
                    <h2 className={style.title}>
                        About me

                    </h2>
                </div>
                <div className={style.container_text_about_me}>
                    <p className={style.text_about_me}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos eum excepturi incidunt nulla optio repudiandae soluta, veritatis vero vitae voluptatem?
                        Deleniti ex nostrum provident quam sint? Aliquam eligendi laboriosam modi!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe