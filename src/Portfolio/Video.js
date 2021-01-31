import React from 'react';
import s from './Video.module.css';



function VideoPortfolio(props) {
    return (
        <div className={s.wraper}>
        <iframe src={`https://player.vimeo.com/video/${props.id}`} width="100%" height="100%"
                frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
        />
        </div>
    );
}

export default VideoPortfolio;

