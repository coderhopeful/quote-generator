import React from 'react'
import "./bookmark.css"

const Bookmark = () => {
    const quotes=JSON.parse(localStorage.getItem("quotes"))
    console.log(quotes)
let content;

content= 

quotes?(quotes.map(quote=>{
    return(
       

<div className="quote-box">
<div className="quote">

    <p className="quote-text">{quote.content}</p>
    <p className="author">-{quote.author}</p>
</div>
</div>
)
})):"Loading..."


    return (
        <>
     {content}
            {/* <div className="quote-box">
                <div className="quote">
                {quotes?((quotes.map(quote=>{
                    <>
                    <p className="quote-text">{quote.content}</p>
                    <p className="author">-{quote.author}</p>
                    </>
                }))):"Loading..."}
                </div>
            </div> */}
          
            
        </>
    )
}

export default Bookmark