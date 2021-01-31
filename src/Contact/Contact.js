import React from 'react';
import s from './Contact.module.css'
import {Contact1} from '../TranslatedText/TranslatedText'
import {useSelector} from 'react-redux'


function Contact() {

    const lang = useSelector((state) => state.Translate.setLanguage)

    let title = (lang === 'ru') ? Contact1.message[0] :
        (lang === 'eng') ? Contact1.message[1] :
            (lang === 'cz') ? Contact1.message[2] :
                '';

    let name = (lang === 'ru') ? Contact1.descMessage.name[0] :
        (lang === 'eng') ? Contact1.descMessage.name[1] :
            (lang === 'cz') ? Contact1.descMessage.name[2] :
                '';

    let tel = (lang === 'ru') ? Contact1.descMessage.tel[0] :
        (lang === 'eng') ? Contact1.descMessage.tel[1] :
            (lang === 'cz') ? Contact1.descMessage.tel[2] :
                '';

    let descmes = (lang === 'ru') ? Contact1.descMessage.desc[0] :
        (lang === 'eng') ? Contact1.descMessage.desc[1] :
            (lang === 'cz') ? Contact1.descMessage.desc[2] :
                '';


    let contactTitle = (lang === 'ru') ? Contact1.contact.name[0] :
        (lang === 'eng') ? Contact1.contact.name[1] :
            (lang === 'cz') ? Contact1.contact.name[2] :
                '';


    let ContactDesc = (lang === 'ru') ? Contact1.contact.desc[0] :
        (lang === 'eng') ? Contact1.contact.desc[1] :
            (lang === 'cz') ? Contact1.contact.desc[2] :
                '';

    let contact = (lang === 'ru') ? Contact1.contact.contact[0] :
        (lang === 'eng') ? Contact1.contact.contact[1] :
            (lang === 'cz') ? Contact1.contact.contact[2] :
                '';
    let btn = (lang === 'ru') ? Contact1.descMessage.btn[0] :
        (lang === 'eng') ? Contact1.descMessage.btn[1] :
            (lang === 'cz') ? Contact1.descMessage.btn[2] :
                '';

    return (
        <div className={s.wraper} id='contact'>
            <form className={s.contactInfo}
                  action="https://formspree.io/xeqrlvpd"
                  method="POST"
            >

                <h4>{title}</h4>
                <input type='text' name={'name'} placeholder={name}/>
                <input type='text' name={'phone'} placeholder={tel}/>
                <textarea className={s.messageArea} name={'message'} placeholder={descmes}/>
                <button type={'submit'}>{btn}</button>
            </form>
            <div className={s.contact}>
                <div className={s.text}>
                    <h4>{contactTitle}</h4>
                    <span className={s.title}>
                        {ContactDesc}
                    </span>
                </div>
                <div className={s.about}>
                    <div className={s.aboutInner}>
                        <h4>{contact}</h4>
                        <span className={s.spone}><i className="fas fa-phone-square-alt"/><a className={s.aone}
                                                                                             href="tel:+420776614365">+420 776 614 365</a>
                        </span>
                        <span className={s.sptwo}><i className="fab fa-telegram"/> <a className={s.atwo}
                                                                                      href="https://t.me/stasvoronko">+420 776 614 365</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;
