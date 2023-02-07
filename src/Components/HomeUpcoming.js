import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

register();

const HomeUpcoming = () => {

    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    const getUpcomingMovies = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming?api_key=5916c3f8aebf48725786f494decb0db8&language=en-US&page=1"
            );
            setUpcomingMovies(data.results);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    return (
        <>
        
            <h1 id='swipertitle'>Upcoming Movies</h1>
            {UpcomingMovies.length ? <swiper-container slides-per-view="5" space-between='20'>{UpcomingMovies.map((m, idx) => { return (<swiper-slide key={m.id}><img src="" alt="" />{m.id}</swiper-slide>) })}</swiper-container> :<div id="holder"></div>}
        </>
    )
}

export default HomeUpcoming