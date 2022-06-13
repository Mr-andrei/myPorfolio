import style from './workBox.module.css'


export const WorkIcon = (props) => {
    return (

        <div className={style.container_work} id="work">
            <div className={style.wrapper}>
                <div className={style.work_box_image} style={props.images}>
                </div>
            </div>
            <div className={style.box_info_work}>
                <span className={style.name}> {props.name}</span>
                <div className={style.box_text}>
                        <span className={style.text_usetech}>
                            Used technologies:
                        </span>
                    <p className={style.text_about_tech}> {props.text}</p>
                </div>
                <div className={style.box_links}>
                    <a className={style.link} href={props.linkGit}>GitHub</a>
                    {props.link && <a className={style.link} href={props.link}> Show</a>}
                </div>
            </div>

        </div>

    )
}