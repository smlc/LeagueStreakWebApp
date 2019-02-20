import React from "react"
import { auto } from "eol";

export default () => (
    <main style={{ position: `relative`, justifyContent: `center`, alignItems: `center` }}>
    <div >
        <label for="summonerName">Summoner Name </label> 
        <input type="text" id="summonerName" name="summonerName" required/>
    </div>
    </main>
)