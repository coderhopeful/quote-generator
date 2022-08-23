import "./homepage.css"
import Navbar from "./Navbar"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuotes } from "../store/features/quotesSlice"

const Homepage = () => {

    const { quotes, loading } = useSelector((state) => state.quotes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuotes());
    }, [])

    console.log(quotes)

    return (
        <>
            <Navbar />
            <div className="quote-box">
                <div className="quote">
                    <p className="quote-text">{quotes.content}</p>
                    <p className="author">-{quotes.author}</p>
                    <i class="fas fa-bookmark fa-2x ms-5"></i>
                    
                </div>
                <button className="nxt-quote" onClick={()=>dispatch(getQuotes())}>Next Quote</button>

            </div>
        </>
    )
}

export default Homepage