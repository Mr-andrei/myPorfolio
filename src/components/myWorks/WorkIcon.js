import style from './style.module.css'


export const WorkIcon = (props) => {
    return (
        <div className={style.container_blocks} id="work">
            <div className={style.wrapper}>
                <div className={style.work_box} style={props.images}>

                </div>
                { props.link && <a className={style.linkToWeb} href={props.link}> Show</a>}


            </div>
            <div className={style.box_info_work}>
               <span className={style.name}> {props.name}</span>
                {props.text}
                <a className={style.linkGit} href={props.linkGit}> On GitHub</a>
            </div>

        </div>
    )
}