import React from 'react';
import s from './Main.module.css'
import video from '../video/video.mp4'
import videoMobile from '../video/abcd.mp4'
import { Link } from "react-scroll";
import styles from "../NavMenu/NavMenu.module.css";
import { useSelector } from 'react-redux'
import {MainPage} from '../TranslatedText/TranslatedText'





function Main() {
    const lang = useSelector((state) => state.Translate.setLanguage)

    let desc = (lang === 'ru') ? MainPage.ru[0] :
        (lang === 'eng') ?  MainPage.eng[0] :
            (lang === 'cz') ?  MainPage.cz[0] :
                '';


    let name = (lang === 'ru') ? MainPage.ru[1] :
        (lang === 'eng') ?  MainPage.eng[1] :
            (lang === 'cz') ?  MainPage.cz[1] :
                '';

    let btn = (lang === 'ru') ? MainPage.ru[2] :
        (lang === 'eng') ?  MainPage.eng[2] :
            (lang === 'cz') ?  MainPage.cz[2] :
                '';

    return (
        <div>
            <div className={s.intro}>
                <div className={s.video}>
                    <video className={s.video__media} src={video} autoPlay={true} muted={true} loop={true} />
                </div>
                <div className={s.MobileVideo}>
                    <video className={s.video__media} src={videoMobile} autoPlay={true} muted={true} loop={true} />
                </div>
                <div className={s.intro__content}>
                    <div className={s.container}>
                        <h1 className={s.intro__title}>
                            {desc}
                        </h1>
                        <h2 className={s.intro__titleTwo}>{name} </h2>
                        <Link
                            className={styles.nav__link}
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <button className={s.button}> {btn} </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Main;
