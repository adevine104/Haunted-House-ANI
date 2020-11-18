

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
    y: 350,
    transformOrigin: "center"
}, "play");

drawInTL.from("#O-1", {
    duration: 3.5,
    x: 10,
    y: 340,
    scale: 1.5,
    transformOrigin: "center"
}, "play");

drawInTL.from("#U-2", {
    duration: 4.25,
    x: -30,
    y: 340,
    transformOrigin: "center"
}, "play");

drawInTL.from("#S-1", {
    duration: 3,
    x: 40,
    y: 310,
    scale: .5,
    transformOrigin: "center"
}, "play");

drawInTL.from("#E-2", {
    duration: 3.75,
    x: 10,
    y: 380,
    transformOrigin: "center"
}, "play");



drawInTL.from("#V-1", {
    duration: 3.25,
    x: -30,
    y: 330,
    transformOrigin: "center"
}, "play");

drawInTL.from("#I-1", {
    duration: 3.5,
    x: 50,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#R-1", {
    duration: 3,
    x: -35,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#G-1", {
    duration: 2.8,
    x: 25,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#I-2", {
    duration: 3.65,
    x: 10,
    y: 320,
    scale: 3,
    transformOrigin: "center"
}, "play");

drawInTL.from("#N-2", {
    duration: 3.25,
    x: -20,
    y: 300,
    transformOrigin: "center"
}, "play");

drawInTL.from("#I-3", {
    duration: 3.5,
    x: 20,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#A-3", {
    duration: 3.15,
    x: -10,
    y: 330,
    scale: 2,
    transformOrigin: "center"
}, "play");

drawInTL.from("#W-1", {
    duration: 3,
    x: 45,
    y: 320,
    scale: .2,
    transformOrigin: "center"
}, "play");

drawInTL.from("#O-2", {
    duration: 3.5,
    x: 65,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#L-1", {
    duration: 3.75,
    x: 15,
    y: 320,
    transformOrigin: "center"
}, "play");

drawInTL.from("#F-1", {
    duration: 3.25,
    x: -65,
    y: 320,
    transformOrigin: "center"
}, "play");


drawInTL.from("#F-1", {
    duration: 1,
    transformOrigin: "center"
}, "playPause");

// drawInTL.delay(2).play




drawInTL.to("#A-1", {
    duration: 3,
    x: -35,
    y: 80,
    rotate: 30,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#H-1", {
    duration: 3.5,
    x: -30,
    y: -40,
    rotate: -40,
    scale: .5,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#A-2", {
    duration: 3,
    x: 90,
    y: 100,
    rotate: 20,
    scale: .75,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#U-1", {
    duration: 4,
    x: -60,
    y: -40,
    rotate: -20,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#N-1", {
    duration: 3.75,
    x: 10,
    y: -70,
    rotate: -30,
    scale: 1.5,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#T-1", {
    duration: 4.25,
    x: 30,
    y: -40,
    rotate: -70,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#E-1", {
    duration: 2.5,
    x: 10,
    y: -70,
    rotate: 70,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#D-1", {
    duration: 3,
    x: -50,
    y: 110,
    rotate: 50,
    transformOrigin: "center"
}, "play2");



drawInTL.to("#H-2", {
    duration: 3,
    x: 10,
    y: 180,
    rotate: 30,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#O-1", {
    duration: 3.5,
    x: -30,
    y: 140,
    rotate: -40,
    scale: 1.5,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#U-2", {
    duration: 4.25,
    x: -100,
    y: 10,
    rotate: 10,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#S-1", {
    duration: 3,
    x: -60,
    y: -110,
    rotate: -20,
    transformOrigin: "center"
}, "play2");

drawInTL.to("#E-2", {
    duration: 3.75,
    x: 50,
    y: -20,
    rotate: 10,
    transformOrigin: "center"
}, "play2");



drawInTL.to("#V-1", {
duration: 3.25,
x: -30,
y: 80,
transformOrigin: "center"
}, "play2");

drawInTL.to("#I-1", {
duration: 3.5,
x: 65,
y: -10,
transformOrigin: "center"
}, "play2");

drawInTL.to("#R-1", {
duration: 3,
x: -35,
y: 60,
transformOrigin: "center"
}, "play2");

drawInTL.to("#G-1", {
duration: 2.8,
x: 25,
y: 45,
scale: 2,
transformOrigin: "center"
}, "play2");

drawInTL.to("#I-2", {
duration: 3.65,
x: 10,
y: 80,
transformOrigin: "center"
}, "play2");

drawInTL.to("#N-2", {
duration: 3.25,
x: -20,
y: -20,
transformOrigin: "center"
}, "play2");

drawInTL.to("#I-3", {
duration: 3.5,
x: 20,
y: 60,
transformOrigin: "center"
}, "play2");

drawInTL.to("#A-3", {
duration: 3.15,
x: -10,
y: 130,
scale: 2,
transformOrigin: "center"
}, "play2");

drawInTL.to("#W-1", {
duration: 3,
x: 45,
y: 20,
scale: .5,
transformOrigin: "center"
}, "play2");

drawInTL.to("#O-2", {
duration: 3.5,
x: 65,
y: -55,
transformOrigin: "center"
}, "play2");

drawInTL.to("#L-1", {
duration: 3.75,
x: 15,
y: 30,
transformOrigin: "center"
}, "play2");

drawInTL.to("#F-1", {
duration: 3.25,
x: -250,
y: -140,
scale:1.75,
transformOrigin: "center"
}, "play2");




drawInTL.to("#S-1, #A-2, #F-1, #E-2", {
    duration: 2,
    fill: "#BA0000",
    transformOrigin: "center"
}, "play3");


drawInTL.to("#S-1, #A-2, #F-1, #E-2", {
    duration: 5,
    scale:12,
    transformOrigin: "center"
}, "play4");


drawInTL.to("#Mask", {
    duration: 5,
    fill: "#BA0000",
    transformOrigin: "center"
}, "play4");


drawInTL.to("#H-2, #U-2, #O-1, #N-1, #T-1, #D-1, #E-1, #V-1, #I-1, #R-1, #G-1, #I-2, #N-2, #I-3, #A-3, #W-1, #O-2, #L-1, #F-1", {
    duration: 5,
    opacity: 0,
    transformOrigin: "center"
}, "play4");



export function lineAnimation(){
    return drawInTL;
}
