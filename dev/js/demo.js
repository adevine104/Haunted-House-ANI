

import {gsap} from "gsap";


// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const drawInTL = gsap.timeline();


drawInTL.from("#A-1", {
        duration: 1.5,
        scale:3,
        transformOrigin: "center"
    }, "play");


export function lineAnimation(){
    return drawInTL;
}
