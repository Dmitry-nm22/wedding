import React, { useState } from 'react';
import s from './Portfolio.module.css';
import VideoPortfolio from "./Video";
import { Portfolio1 } from '../TranslatedText/TranslatedText'
import { useSelector } from 'react-redux'



//id video
const idVelo = 390076769
const idSlavyanka = 383864808
const idSlavyankaautum = 383459667
const idIstore = 383459311
const idInglot = 383459232
const idBelshina = 383458065
const idAlfaBank = 381616125
const idUnderArmor = 381616165
const idMaxKorzh = 315635687
// const idTraipl = 'RGJjXeq6Azg'


function Portfolio() {

    const [isOpen, changeView] = useState(false)
    const lang = useSelector((state) => state.Translate.setLanguage)
    const toggle = () => changeView(!isOpen);

    let title = (lang === 'ru') ? Portfolio1.title[0] :
        (lang === 'eng') ? Portfolio1.title[1] :
            (lang === 'cz') ? Portfolio1.title[2] :
                '';

    let desc = (lang === 'ru') ? Portfolio1.desc[0] :
        (lang === 'eng') ? Portfolio1.desc[1] :
            (lang === 'cz') ? Portfolio1.desc[2] :
                '';

    let btn = (lang === 'ru') ? Portfolio1.btn[0] :
        (lang === 'eng') ? Portfolio1.btn[1] :
            (lang ==='cz') ? Portfolio1.btn[2] :
                '';

    return (
        <div className={s.wraper} id="portfolio">
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className={s.inner}>
                <VideoPortfolio id={idVelo} />
                <VideoPortfolio id={idSlavyanka} />
            </div>
            <div className={s.inner}>
                <VideoPortfolio id={idSlavyankaautum} />
                <VideoPortfolio id={idIstore} />
            </div>
            { isOpen &&
                <div>
                    <div className={s.inner}>
                        <VideoPortfolio id={idInglot} />
                        <VideoPortfolio id={idBelshina} />
                    </div>
                    <div className={s.inner}>
                        <VideoPortfolio id={idAlfaBank} />
                        <VideoPortfolio id={idUnderArmor} />
                    </div>
                    <div className={s.inner}>
                        <VideoPortfolio id={idMaxKorzh} />
                        {/* <VideoPortfolio id={idTraipl}/> */}
                    </div>
                </div>
            }
            <button className={s.button} onClick={toggle}>{btn}</button>
        </div>
    );

}

export default Portfolio;