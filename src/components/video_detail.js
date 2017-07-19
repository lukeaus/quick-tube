import _ from 'lodash';
import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.videos.length === 0) {
      return null;
    } else if (!this.props.video) {
      return <div>...Loading...</div>;
    } else {
      const videoId = this.props.video.id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;

      return (
        <div className="video-detail col-md-7">
          <div className="emberd-responsivbe embed-responsive16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
            <div className="title">{this.props.video.snippet.title}</div>
            <div className="description">
              <strong>Description</strong>
              {this.props.video.snippet.description}
            </div>
            <div className="published">
              <strong>Published</strong>
              {_.trunc(this.props.video.snippet.publishedAt, {length: 10, omission: ''})}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default VideoDetail;
