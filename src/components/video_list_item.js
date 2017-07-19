import _ from 'lodash';
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {_.trunc(video.snippet.title, { length: 40 })}
          </div>
          <div className="media-description">
            {_.trunc(video.snippet.description, { length: 40 })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
