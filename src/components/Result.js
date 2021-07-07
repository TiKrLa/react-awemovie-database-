import React from 'react'

//displaying images 
function Result ({ result, openPopup  }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} alt="Pictures of movies" />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result