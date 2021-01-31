import React from 'react';
import s from './About.module.css'
import img from '../img/Mee.jpg'
import {AboutMe} from '../TranslatedText/TranslatedText'
import { useSelector } from 'react-redux'


function About() {
    const lang = useSelector((state) => state.Translate.setLanguage)

    let about = (lang == 'ru') ? AboutMe.ru[0] :
    (lang == 'eng') ?  AboutMe.eng[0] :
        (lang == 'cz') ?  AboutMe.cz[0] :
            '';

    let name = (lang == 'ru') ? AboutMe.ru[1] :
    (lang == 'eng') ?  AboutMe.eng[1] :
        (lang == 'cz') ?  AboutMe.cz[1] :
            '';
    let prof = (lang == 'ru') ? AboutMe.ru[2] :
    (lang == 'eng') ?  AboutMe.eng[2] :
        (lang == 'cz') ?  AboutMe.cz[2] :
                    '';

    let desc1 = (lang == 'ru') ? AboutMe.ru[3] :
    (lang == 'eng') ?  AboutMe.eng[3] :
        (lang == 'cz') ?  AboutMe.cz[3] :
                    '';

    let desc2 = (lang == 'ru') ? AboutMe.ru[4] :
    (lang == 'eng') ?  AboutMe.eng[4] :
        (lang == 'cz') ?  AboutMe.cz[4] :
                    '';

    let desc3 = (lang == 'ru') ? AboutMe.ru[5] :
    (lang == 'eng') ?  AboutMe.eng[5] :
        (lang == 'cz') ?  AboutMe.cz[5] :
                    '';

    let desc4 = (lang == 'ru') ? AboutMe.ru[6] :
    (lang == 'eng') ?  AboutMe.eng[6] :
        (lang == 'cz') ?  AboutMe.cz[6] :
                                    '';
                


    return (
        <div className={s.wraper} id={'About'}>
            <div className={s.title}>
                <div className={s.line}></div>
                    <h2>{about}</h2>
            </div>
            <div className={s.img}>
                <img src={img} alt=""/>
                <h5 className={s.imgDescription}>
                    {name}
                </h5>
                <h6 className={s.imgDescription}>
                     {prof}
                </h6>
            </div>
            <div>
                <div className={s.decription}> {desc1} <br/> </div>
                <div className={s.decription}> {desc2} <br/> </div>
                <div className={s.decription}> {desc3} <br/> </div>
                <div className={s.decription}> {desc4}       </div>
            </div>
        </div>
    );
}

export default About;
