import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import HomeSlider from './HomeSlider'
import shitt from './particles.json'

const Home = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id="main">
            <div id='slide1' className="slide">
                <div id="maincontent">
                    <div id="title">
                        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={shitt} height={240}/>
                        {/* <h1>muh mw loe</h1> */}
                    </div>
                    <HomeSlider />
                </div>
            </div>
            {/* <div className="slide"></div> */}
        </div>
    )
}


export default Home