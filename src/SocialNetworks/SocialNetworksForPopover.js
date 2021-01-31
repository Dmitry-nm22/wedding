import React from 'react';
import s from './SocialNetworksForPopover.module.css'
import SocialNetwork from "./SocialNetwork";





function SocialNetworks() {
    return (
        <div className={s.wraper}>
            <SocialNetwork className={'fab fa-facebook-f'}/>
            <SocialNetwork className={'fab fa-telegram-plane'} />
            <SocialNetwork className={'fab fa-whatsapp'} />
        </div>
    );
}

export default SocialNetworks;
