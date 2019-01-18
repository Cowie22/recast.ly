import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[0],
      currentList: exampleVideoData,
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onVideoClick(video) {
    this.setState({currentVideo: video});  
  }
  onSearch(query) {
    var options = {
      q: query,
      max: 5,
      key: YOUTUBE_API_KEY 
    };
    this.props.searchYouTube(options, (video) => this.setState({currentVideo: video[0], currentList: video}));
  }
  componentDidMount() {
    var options = {
      q: '',
      max: 5,
      key: YOUTUBE_API_KEY 
    };
    this.props.searchYouTube(options, (data) => this.setState({currentVideo: data[0], currentList: data}));
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.onSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.onVideoClick.bind(this)} videos={this.state.currentList}/>
          </div>
        </div>
      </div> 
    );
  }

}

// { <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//           <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//           <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div> }
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;

