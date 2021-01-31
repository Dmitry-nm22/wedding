import React from 'react';
import s from './Services.module.css';
import Servic from "./Servic";
import { ServicesRu, ServicesEng, ServicesCz } from '../TranslatedText/TranslatedText'
import { useSelector } from 'react-redux'

//img
import wedding from "../img/wedding.jpg";
import video from '../img/service1.jpg';
import interview from "../img/interview.jpg";
import ivent from "../img/ivent.jpg";
import clip from "../img/clip.jpg";
import marketing from "../img/marketing.jpg";
import { Link } from "react-scroll";


function Services() {
    const lang = useSelector((state) => state.Translate.setLanguage)
    //title
    let titleOne = (lang === 'ru') ? ServicesRu.title[0] :
        (lang === 'eng') ? ServicesEng.title[0] :
            (lang === 'cz') ? ServicesCz.title[0] :
                '';

    let titleTwo = (lang === 'ru') ? ServicesRu.title[1] :
        (lang === 'eng') ? ServicesEng.title[1] :
            (lang === 'cz') ? ServicesCz.title[1] :
                '';

    let titleThree = (lang === 'ru') ? ServicesRu.title[2] :
        (lang === 'eng') ? ServicesEng.title[2] :
            (lang === 'cz') ? ServicesCz.title[2] :
                '';

    let titleFour = (lang === 'ru') ? ServicesRu.title[3] :
        (lang === 'eng') ? ServicesEng.title[3] :
            (lang === 'cz') ? ServicesCz.title[3] :
                '';

    let titleFive = (lang === 'ru') ? ServicesRu.title[4] :
        (lang === 'eng') ? ServicesEng.title[4] :
            (lang === 'cz') ? ServicesCz.title[4] :
                '';

    let titleSix = (lang === 'ru') ? ServicesRu.title[5] :
        (lang === 'eng') ? ServicesEng.title[5] :
            (lang === 'cz') ? ServicesCz.title[5] :
                '';



    //desc
    let textOne = (lang === 'ru') ? ServicesRu.desc[0] :
        (lang === 'eng') ? ServicesEng.desc[0] :
            (lang === 'cz') ? ServicesCz.desc[0] :
                '';

    let textTwo = (lang === 'ru') ? ServicesRu.desc[1] :
        (lang === 'eng') ? ServicesEng.desc[1] :
            (lang === 'cz') ? ServicesCz.desc[1] :
                '';

    let textThree = (lang === 'ru') ? ServicesRu.desc[2] :
        (lang === 'eng') ? ServicesEng.desc[2] :
            (lang === 'cz') ? ServicesCz.desc[2] :
                '';

    let textFour = (lang === 'ru') ? ServicesRu.desc[3] :
        (lang === 'eng') ? ServicesEng.desc[3] :
            (lang === 'cz') ? ServicesCz.desc[3] :
                '';

    let textFive = (lang === 'ru') ? ServicesRu.desc[4] :
        (lang === 'eng') ? ServicesEng.desc[4] :
            (lang === 'cz') ? ServicesCz.desc[4] :
                '';

    let textSix = (lang === 'ru') ? ServicesRu.desc[5] :
        (lang === 'eng') ? ServicesEng.desc[5] :
            (lang === 'cz') ? ServicesCz.desc[5] :
                '';

    let btn = (lang === 'ru') ? ServicesRu.btn :
        (lang === 'eng') ? ServicesEng.btn :
            (lang === 'cz') ? ServicesCz.btn :
                '';

    let title = (lang === 'ru') ? ServicesRu.title[6] :
        (lang === 'eng') ? ServicesEng.title[6] :
            (lang === 'cz') ? ServicesCz.title[6] :
                '';
    return (
        <div className={s.wraper} id='services'>
            <h1>{title}</h1>
            {/* <p>Вам нужны услуги видеографа ? Я удовлетворить любые ваши потребности</p> */}
            <div className={s.inner}>
                <Servic title={titleOne} text={textOne} img={video} />
                <Servic title={titleTwo} text={textTwo} img={interview} />
                <Servic title={titleThree} text={textThree} img={ivent} />
            </div>
            <div className={s.innerTwo}>
                <Servic title={titleFour} text={textFour} img={clip} />
                <Servic title={titleFive} text={textFive} img={wedding} />
                <Servic title={titleSix} text={textSix} img={marketing} />
            </div>
            <Link

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
    );
}

export default Services;