import React from 'react'
import ReactDOM from 'react-dom'
//Create a new component
//Component should produce html
const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
