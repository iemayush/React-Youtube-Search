import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} onVideoClick={props.onVideoClick}/>
    });
    
    return(
        <div>
            <div className="ui divided items">
               {videoItems}
            </div>
        </div>
    );
}

export default VideoList;
