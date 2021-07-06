import React from 'react'

import Result from './Result' 

//to open pop-up 
function Results ({ results, openPopup }) {
    return (
        //to set this equal to section results as well map through results 
        // to get a key which is equal to result
        <section className="results"> 
            {results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results