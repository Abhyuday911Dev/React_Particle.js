import React from 'react'
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Latest from "./Components/Latest";
import Home from "./Components/Home";
import Popularmovies from './Components/Popularmovies';
import Navbar from './Components/Navbar';
// import Tester from './Components/Tester';
import "./Stylesheets/mycss.css"
import Searchresults from './Components/Searchresults';

const App = () => {

    useEffect(() => {
        console.log("majak nahi urane ka 😒");
    }, [])


    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/search/:dets' element={<Searchresults />}/>
                <Route path="/latest" element={<Latest />}>
                    <Route path="/latest/details/:id" element={<Details />} />
                </Route>
                <Route path="/popular" element={<Popularmovies />}>
                    <Route path="/popular/details/:id" element={<Details />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
