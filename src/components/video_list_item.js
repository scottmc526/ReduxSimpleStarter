import React from 'react'

const VideoListItem = ({video}) => {
  console.log(video);
  //passing a property in arguments obj is same as saying:
  //const video = props.video
  return  (
      <li className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={video.snippet.thumbnails.default.url} />
          </div>

          <div className='media-body'>
            <div className='media-heading'>{video.snippet.description}</div>
          </div>
        </div>
      </li>
  );
}

export default VideoListItem
