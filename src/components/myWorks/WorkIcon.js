import style from './style.module.css'


export const WorkIcon = (props) => {
    return (
        <div className={style.container_blocks} id="work">
            <div className={style.wrapper}>
                <div className={style.work_box} style={props.images}>

                </div>
                <a className={style.linkToWeb} href={props.link}> Show</a>

            </div>
            <div className={style.box_info_work}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus et ex excepturi fugiat,
                illo in maxime repellat similique soluta.
            </div>

        </div>
    )
}