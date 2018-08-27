import React from 'react';

const VideoListItem = (props) => {
    return (
        <div className="item pointer" onClick={() => props.onVideoClick(props.video)}>
            <div className="ui tiny image">
                <img src={props.video.snippet.thumbnails.high.url} alt="youtube" />
            </div>
            <div className="middle aligned content">
                {props.video.snippet.title}
            </div>
        </div>
    );
}

export default VideoListItem;
