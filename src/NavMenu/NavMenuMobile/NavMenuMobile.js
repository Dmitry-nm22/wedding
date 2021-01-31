import React, {useState} from 'react';
import s from './NavMenuMobile.module.css'
import st from '../NavMenuMobile.module.css'
import {Link} from "react-scroll";
import {Header} from "../../TranslatedText/TranslatedText";
import {useSelector} from "react-redux";




function NavMenuMobile() {
    const lang = useSelector((state) => state.Translate.setLanguage)

    const ss = ()=>{
        document.getElementById("mySidenav").style.width = "250px";
    }
    const sss = ()=>{
        document.getElementById("mySidenav").style.width = "0px";
    }
    let portfolio = (lang === 'ru') ? Header.ru[0] :
        (lang === 'eng') ?  Header.eng[0] :
            (lang === 'cz') ?  Header.cz[0] :
                '';


    let about = (lang === 'ru') ? Header.ru[1] :
        (lang === 'eng') ?  Header.eng[1] :
            (lang === 'cz') ?  Header.cz[1] :
                '';

    let service = (lang === 'ru') ? Header.ru[2] :
        (lang === 'eng') ?  Header.eng[2] :
            (lang === 'cz') ?  Header.cz[2] :
                '';

    let contact = (lang === 'ru') ? Header.ru[3] :
        (lang === 'eng') ?  Header.eng[3] :
            (lang === 'cz') ?  Header.cz[3] :
                '';

    return (
        <div className={s.wraper}>

            <div id="mySidenav" className={s.sidenav}>
                <a href="javascript:void(0)" className={s.closebtn} onClick={sss}>&times;</a>
                <div className={st.section}>
                    <div className={st.menu_block}>
                        <nav>
                            <Link
                                className={st.nav__link}
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                {portfolio}
                            </Link>
                            <Link
                                className={st.nav__link}
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                {about}
                            </Link>
                            <Link
                                className={st.nav__link}
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                {service}
                            </Link>
                            <Link
                                className={st.nav__link}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                {contact}
                            </Link>

                        </nav>
                    </div>
                </div>

            </div>

            <div>
                <span className={s.span} onClick={ss}>&#9776;</span>
            </div>
        </div>
    );
}

export default NavMenuMobile;
