// import exampleVideoData from "../data/exampleVideoData.js";
import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => {
  var rows = [];
  for (let i = 0; i < props.videos.length; i++) {
    var video = props.videos[i];
    rows.push( 
      <VideoListEntry click={props.click} video={video}/>
    );
  }

  return (
    <div className="video-list"> 
      {rows}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
