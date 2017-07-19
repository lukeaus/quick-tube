import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSerch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Logo from './components/logo';
import secrets from './secrets';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  }

  videoSearch(term) {
    YTSerch({key: secrets.API_KEY_YOUTUBE, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <div className="search">
          <Logo />
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="tagline">Quick Tube... 3x faster than Youtube</div>
        </div>
        <VideoDetail video={this.state.selectedVideo} videos={this.state.videos} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
