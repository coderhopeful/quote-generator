import "./homepage.css"
import Navbar from "./Navbar"
import { skipToken } from "@reduxjs/toolkit/query";
import { useState, useEffect } from "react"
import {
    useGetRandomQuery
} from "../store/features/api/apiSlice"




const Homepage = () => {



    const {
        data: quotes,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetRandomQuery()


    function handleRefetch() {

        refetch()
    }



    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {

        content =
            <div className="quote-box">
                <div className="quote">
                    <p className="quote-text">{quotes.content}</p>
                    <p className="author">-{quotes.author}</p>
                    <i className="fas fa-bookmark fa-2x ms-5"></i>

                </div>
                <button className="nxt-quote" onClick={handleRefetch} >Next Quote</button>

            </div>

    } else if (isError) {
        content = <p>{error}</p>
    }








    return (
        <>
            <Navbar />
            {content}
        </>
    )
}

export default Homepage