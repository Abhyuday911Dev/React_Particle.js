import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Searchresults = () => {

    const { dets } = useParams();
    console.log(dets);
    useEffect(() => {
        (async function (){
            try {
                const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5916c3f8aebf48725786f494decb0db8&query=spider&page=1`)
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        })();
        
    }, [dets])


    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <h1>search result: {dets}</h1>
                    <hr />
                    <i className="ri-check-double-fill checkmark"></i>
                </div>
            </div>
            {/* <div className="slide"></div> */}
        </div>
    )
}

export default Searchresults