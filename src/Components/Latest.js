import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Popularmovies = () => {

    const [Movies, setMovies] = useState([]);
    const getPopularMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/top_rated?api_key=5916c3f8aebf48725786f494decb0db8"
            );
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    let MovieList = "Loading...";
    if (Movies.length > 0) {
        MovieList = Movies.map((m) => (
            <li key={m.id}>
                <Link to={`/latest/details/${m.id}`}>{m.original_title}</Link>
            </li>
        ));
    }
    
    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <div className="d-flex simple">
                        <div id="simpleL"><h1>Top Rated Movies</h1><ul>{MovieList}</ul></div>
                        <Outlet />
                    </div>
                </div>
            </div>
            {/* <div className="slide"></div> */}
        </div>
    )
}

export default Popularmovies