

import {gsap} from "gsap";


// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const drawInTL = gsap.timeline();


drawInTL.from("#A-1", {
        duration: 3,
        x: -50,
        y: -140,
        transformOrigin: "center"
    }, "play");

drawInTL.from("#H-1", {
    duration: 3.5,
    x: 50,
    y: -180,
    transformOrigin: "center"
}, "play");

drawInTL.from("#A-2", {
    duration: 3.25,
    x: 20,
    y: -190,
    scale: -2,
    transformOrigin: "center"
}, "play");

drawInTL.from("#U-1", {
    duration: 4,
    x: -70,
    y: -200,
    transformOrigin: "center"
}, "play");

drawInTL.from("#N-1", {
    duration: 3.75,
    x: 10,
    y: -180,
    transformOrigin: "center"
}, "play");

drawInTL.from("#T-1", {
    duration: 4.25,
    x: -30,
    y: -140,
    transformOrigin: "center"
}, "play");

drawInTL.from("#E-1", {
    duration: 2.5,
    x: 10,
    y: -170,
    scale: 1.5,
    transformOrigin: "center"
}, "play");

drawInTL.from("#D-1", {
    duration: 3,
    x: 40,
    y: -210,
    transformOrigin: "center"
}, "play");

drawInTL.from("#H-2", {
    duration: 3,
    x: 40,
    y: 210,
    transformOrigin: "center"
}, "play");

drawInTL.from("#O-1", {
    duration: 3.5,
    x: 10,
    y: 240,
    scale: 1.5,
    transformOrigin: "center"
}, "play");

drawInTL.from("#U-2", {
    duration: 4.25,
    x: -30,
    y: 140,
    transformOrigin: "center"
}, "play");

drawInTL.from("#S-1", {
    duration: 3,
    x: 40,
    y: 210,
    scale: .5,
    transformOrigin: "center"
}, "play");

drawInTL.from("#E-2", {
    duration: 3.75,
    x: 10,
    y: 180,
    transformOrigin: "center"
}, "play");


export function lineAnimation(){
    return drawInTL;
}
