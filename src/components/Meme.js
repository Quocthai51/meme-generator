import React from "react"
import memesDatas from "../memesData.js";

function Meme() {

    let url;

    function getMemeImage() {
        const memesArray = memesDatas.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <form className="form">
            <p>{url}</p>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

export default Meme;