import React from 'react';
import s from './Footer.module.css'
import logo from '../img/newLogo2.png'



function Footer(props) {
    return (
            <div className={s.inner} >
                <img src={logo} alt="LOGO"/>
            </div>
    );
}
export default Footer;
