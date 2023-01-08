import './index.scss'
import './scripts/lottie.min.js' 



// src="/assets/images/who-am-i-photo.png" 

const who_am_i_animation = lottie.loadAnimation({
    container: document.getElementById('who-am-i__animation-container'),
    path: "/assets/animations/programmer.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: 'who-am-i__animation'}
)

const about_me_animation = lottie.loadAnimation({
    container: document.getElementById('about-me__animation-container'),
    path: "/assets/animations/programmer_dzen.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: 'who-am-i__animation'}
)