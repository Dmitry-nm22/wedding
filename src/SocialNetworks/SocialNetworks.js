import React from 'react';
import s from './SocialNetworks.module.css'
import SocialNetwork from "./SocialNetwork";



const hrefInstagram ='https://www.instagram.com/wedding.prod/';
const hrefVimeo ='https://vimeo.com/voronko';
const hrefYouTube ='https://www.youtube.com/channel/UC04YpbXrOJx-3pLruaxd1-A';
const hrefFacebook ='https://www.facebook.com/stanislav.voronko';

const bcColorInst = {
    backgroundColor: 'gray',
};

const bcColorVimeo = {
    backgroundColor: '#f72630',
};

const bcColorFacebook = {
    backgroundColor:  '#f72630',
};

const changeClass = () =>{
    bcColorFacebook.backgroundColor = '#f72630'
}
function SocialNetworks() {
    return (
        <div className={s.wraper}>
            <SocialNetwork className={'fab fa-facebook-f'} href={hrefFacebook} />
            <SocialNetwork className={'fab fa-vimeo-v'} href={hrefVimeo}/>
            <SocialNetwork className={'fab fa-instagram'} href={hrefInstagram} />
            {/* <SocialNetwork className={'fab fa-youtube'} href={hrefYouTube} /> */}
        </div>
    );
}

export default SocialNetworks;
