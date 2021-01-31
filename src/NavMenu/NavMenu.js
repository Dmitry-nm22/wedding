import React from 'react';
import styles from './NavMenu.module.css';
import logo from '../img/newLogo2.png';
import { Link } from "react-scroll";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import SimpleSelect from "../selectLanguage/SelectLanguage";
import {useSelector} from 'react-redux'
import {Header} from '../TranslatedText/TranslatedText'




function NavMenu() {
    const lang = useSelector((state) => state.Translate.setLanguage)


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
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    
                    <div className={styles.vl}/>

                    <a className={styles.header__prod} href="https://voronkofilmsprod.web.app/" target="_blank">
                        ABCD PROD FILMS <br />
                        <span className={styles.header__prod__span}>
                            video production company
                        </span>
                    </a>

                    <div className={styles.vl}/>

                    <div className={styles.nav}>
                        <Link
                            className={styles.nav__link}
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
                            className={styles.nav__link}
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
                            className={styles.nav__link}
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
                            className={styles.nav__link}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            {contact}
                            </Link>
                    </div>
                    <SimpleSelect/>
                </div>
            </div>
            <div className={styles.mobile}>
                <NavMenuMobile />
                <SimpleSelect/>
            </div>
        </header>
    );
}

export default NavMenu;
