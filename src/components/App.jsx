import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Card from "./Card"
import DataFetching from "../components/DataFetching"

function App() {

    return (
        <div>
            <NavBar />
            <DataFetching />
        </div>

    )
}

export default App