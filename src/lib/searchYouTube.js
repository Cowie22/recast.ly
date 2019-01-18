var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    type: 'video',
    key: options.key,
    videoEmbeddable: 'true'
  },
  (data) => (callback(data.items)), 'json');
};

export default searchYouTube;

// $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//   })