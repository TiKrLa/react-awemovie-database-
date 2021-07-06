import React, { useState } from 'react' //useState utility provided by React
import axios from 'axios' // axios is a promise-based HTTP client that works both in the browser and in a Node.js environment

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

//useState accepts the initial value of the state item and returns an array containing the state variable
//the function calling to alter the state 
function App() {
   const [state, setState] = useState({
   s: "", // s is to be search query 
   results: [],
   selected: {} // empty object relating to movie you clicked on to open up the pop-up
  });
  // API key 
   const apiurl ="http://www.omdbapi.com/?apikey=66e0de40";

   const search = (e) => {
     if (e.key === "Enter") {
       //this is how s best parameter stands for search and how to open movie db uses as API
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => { 
          return { ...prevState, results: results }
        })
       });
      }
    }

   //to set equal to e, e is short for event
   //when clicking a click event triggered 
   //search tool
   const handleInput = (e) => {
      let s = e.target.value;

      setState(prevState => {
        return { ...prevState, s: s }
      });
   }

  //open pop-up,it's equal to an arrow function, which is going to bring through ID
  //to make a second request to this API saying API URL
  //going to use ID to get the information
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data; 

      console.log(result);
//previousState set this into a return which is going to return previous 
//going to change the selected value to result and that's all what needed to do in the open pop up 
      setState(prevState => {
        return { ...prevState, selected: result}
      });
    });
  }

//close pop-up, equal to an arrow function 
//set state and in here which is previous state, return previous state 
//equal to an empty object 
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  } 

  //results is equal to results 
  //a return, a ternary operator, typeof state, which is not equal to undefined 
  return (
    <div className="App">
      <header>
        <h1>Awemovie database</h1>
      </header>
      <main>
    
        <Search handleInput={handleInput} search={search} /> 
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App
