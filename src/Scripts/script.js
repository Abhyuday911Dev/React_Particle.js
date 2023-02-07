import axios from "axios";
import mycparticle from "../assets/particles.json"

axios.get("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js").then(data => {
    // particlesJS.load('particles-js', { mycparticle }, function () {
    //     console.log('callback - particles.js config loaded')
    // });
    console.log(data.data);
})