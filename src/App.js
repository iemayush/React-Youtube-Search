import React, {Component} from 'react';
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';
const API_KEY = "AIzaSyBlClqSjNexwpZ0PY8C0u_ii_9lblg9afQ";

class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.searchYoutube("paradise");
    }

    searchYoutube(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                selectedVideo: videos[0], 
                videos: videos 
            });
        });
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <SearchBar onChange={term => this.searchYoutube(term)} />
                    </div>
                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList 
                            videos={this.state.videos} 
                            onVideoClick={selectedVideo => this.setState({selectedVideo})} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;