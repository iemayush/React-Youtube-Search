import React from 'react';

const VideoDetail = (props) => {
    if(!props.video) return <div>Loading...</div>
    const videoId = props.video.id.videoId;
    const title = props.video.snippet.title;
    const description = props.video.snippet.description;
    const URL = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div>
            <div className="ui embed">
                <iframe src={URL} title={title}></iframe>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;