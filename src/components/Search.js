import React from 'react'

//Search tool 
function Search({ handleInput, search }) { 
    return (
       <section className="searchbox-wrap">
           <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={search} //going to run when you press the enter key 
           />
       </section>
    )
}

export default Search