import React from 'react';
import s from './SocialNetworks.module.css'





function SocialNetwork(props) {
    return (
            <div className={s.inner} onMouseOver={props.onMouseOver} >
                <a href={props.href}><i className={props.className}></i></a>
            </div>

    );
}

export default SocialNetwork;
