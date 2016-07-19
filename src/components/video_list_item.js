import React from 'react'

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title
  //passing a property in arguments obj is same as saying:
  //const video = props.video
  return  (
      <li className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={imageUrl} />
          </div>

          <div className='media-body'>
            <div className='media-heading'>{title}</div>
          </div>
        </div>
      </li>
  );
}

export default VideoListItem
