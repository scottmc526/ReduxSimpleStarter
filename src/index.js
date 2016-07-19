import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';

//Create a new component
//Component should produce html
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'walter ray williams jr'}, (videos) => {
      this.setState({ videos }); //this.setState({videos:videos})
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
