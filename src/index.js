import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';
//Create a new component
//Component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

//Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
