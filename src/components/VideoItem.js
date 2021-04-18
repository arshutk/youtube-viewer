import './VideoItem.css';

import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.high.url} 
                alt={video.snippet.title} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;
