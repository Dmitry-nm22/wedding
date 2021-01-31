import React from 'react';
import s from './Servic.module.css';
import {Link} from "react-scroll";
import styles from "../NavMenu/NavMenu.module.css";





function Servic(props) {
    return (
        <div className={s.wraper} >
            <div className={s.img}>
                <img src={props.img} alt="logo"/>
            </div>

            <div className={s.inner} >
                <h1>{props.title}</h1>
                <div>{props.text}</div>
                <Link
                    className={styles.nav__link}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >

                </Link>
            </div>
        </div>
    );
}

export default Servic;