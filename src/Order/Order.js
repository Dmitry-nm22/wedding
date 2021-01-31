import React from 'react';
import s from './Order.module.css'
import { Link } from "react-scroll";
import styles from "../NavMenu/NavMenu.module.css";
import { Order1 } from '../TranslatedText/TranslatedText'
import { useSelector } from 'react-redux'





function Order() {
    const lang = useSelector((state) => state.Translate.setLanguage)

    let about = (lang === 'ru') ? Order1.desc[0] :
        (lang === 'eng') ? Order1.desc[1] :
            (lang === 'cz') ? Order1.desc[2] :
                '';

    let btn = (lang === 'ru') ? Order1.btn[0] :
        (lang === 'eng') ? Order1.btn[1] :
            (lang === 'cz') ? Order1.btn[2] :
                '';

    return (
        <div className={s.wraper}>
            <h1>{about}</h1>
            <Link
                className={styles.nav__link}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <button>{btn}</button>
            </Link>

        </div>
    )

}

export default Order;
