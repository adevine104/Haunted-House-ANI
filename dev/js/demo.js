

import {gsap} from "gsap";


var swapSpeed = .35;
var swapSpeed2 = .5;
var rotateSpeed = 3;
var firstScale = 3;
var secondScale = 6;
// var swapSpeed3 = 2;
// var tl = gsap.timeline({ease: "power2.out"});



const hauntedTL = gsap.timeline({ease: "Linear.easeNone"});
const hauntedTwoTL = gsap.timeline({ease: "Linear.easeNone"}, "-=1");
// const hauntedThreeTL = gsap.timeline({ease: "Linear.easeNone"}, "-=.75");
const hauntedFourTL = gsap.timeline({ease: "circ.out"}, "-=.75");
const hauntedFiveTL = gsap.timeline({ease: "Linear.easeNone"}, "-=.75");


export function hauntedAnimation(){


hauntedTL.from("#A-1", {duration: 3, x: -50, y: -140, transformOrigin: "center"}, "play")
        .from("#H-1", {duration: 3.5, x: 50, y: -180, transformOrigin: "center"}, "play")
        .from("#A-2", {duration: 3.25, x: 20, y: -210, scale: -2, transformOrigin: "center"}, "play")
        .from("#U-1", {duration: 4, x: -70, y: -200, transformOrigin: "center"}, "play")
        .from("#N-1", {duration: 3.75, x: 10, y: -180, transformOrigin: "center"}, "play")
        .from("#T-1", {duration: 4.25, x: -30, y: -160, transformOrigin: "center"}, "play")
        .from("#E-1", {duration: 2.5, x: 10, y: -170, scale: 1.5, transformOrigin: "center"}, "play")
        .from("#D-1", {duration: 3, x: 40, y: -210, transformOrigin: "center"}, "play")


        .from("#H-2", {duration: 3, x: 40, y: 350, transformOrigin: "center"}, "play")
        .from("#O-1", {duration: 3.5, x: 10, y: 390, scale: 1.5, transformOrigin: "center"}, "play")
        .from("#U-2", {duration: 4.25, x: -30, y: 340, transformOrigin: "center"}, "play")
        .from("#S-1", {duration: 3, x: 40, y: 310, scale: .5, transformOrigin: "center"}, "play")
        .from("#E-2", {duration: 3.75, x: 10, y: 380, transformOrigin: "center"}, "play")


        .from("#V-1", {duration: 3.25, x: -30, y: 330, transformOrigin: "center"}, "play")
        .from("#I-1", {duration: 3.5, x: 50, y: 320, transformOrigin: "center"}, "play")
        .from("#R-1", {duration: 3, x: -35, y: 320, transformOrigin: "center"}, "play")
        .from("#G-1", {duration: 2.8, x: 25, y: 320, transformOrigin: "center"}, "play")
        .from("#I-2", {duration: 3.65, x: 10, y: 320, scale: 3, transformOrigin: "center"}, "play")
        .from("#N-2", {duration: 3.25, x: -20, y: 300, transformOrigin: "center"}, "play")
        .from("#I-3", {duration: 3.5, x: 20, y: 320, transformOrigin: "center"}, "play")
        .from("#A-3", {duration: 3.15, x: -10, y: 330, scale: 2, transformOrigin: "center"}, "play")

        .from("#W-1", {duration: 3, x: 45, y: 320, scale: .2, transformOrigin: "center"}, "play")
        .from("#O-2", {duration: 3.5, x: 65, y: 320, transformOrigin: "center"}, "play")
        .from("#L-1", {duration: 3.75, x: 15, y: 320, transformOrigin: "center"}, "play")
        .from("#F-1", {duration: 3.25, x: -65, y: 320, transformOrigin: "center"}, "play")



        .from("#F-1", {duration: 1,transformOrigin: "center"}, "playPause")



        .to("#A-1", {duration: 3, x: -25, y: 80, rotate: 30, transformOrigin: "center"}, "play2")
        .to("#H-1", {duration: 3.5, x: -30, y: -80, rotate: -40, scale: .5, transformOrigin: "center"}, "play2")
        .to("#A-2", {duration: 3, x: 90, y: 100, rotate: 20, scale: .75, transformOrigin: "center"}, "play2")
        .to("#U-1", {duration: 4, x: -60, y: -40, rotate: -20, transformOrigin: "center"}, "play2")
        .to("#N-1", {duration: 3.75, x: 10, y: -70, rotate: -30, scale: 1.5, transformOrigin: "center"}, "play2")
        .to("#T-1", {duration: 4.25, x: 30, y: -40, rotate: -70, transformOrigin: "center"}, "play2")
        .to("#E-1", {duration: 3.5, x: 10, y: -70, rotate: 70, transformOrigin: "center"}, "play2")
        .to("#D-1", {duration: 3, x: -50, y: 110, rotate: 50, transformOrigin: "center"}, "play2")


        .to("#H-2", {duration: 3, x: 10, y: 180, rotate: 30, transformOrigin: "center"}, "play2")
        .to("#O-1", {duration: 3.5, x: -30, y: 140, rotate: -40, scale: 1.5, transformOrigin: "center"}, "play2")
        .to("#U-2", {duration: 4.25, x: -100, y: 10, rotate: 10, transformOrigin: "center"}, "play2")
        .to("#S-1", {duration: 3, x: -60, y: -110, rotate: -20, transformOrigin: "center"}, "play2")
        .to("#E-2", {duration: 2.75, x: 50, y: -20, rotate: 10, transformOrigin: "center"}, "play2")




        .to("#V-1", {duration: 3.25, x: -30, y: 80, rotate: -25, transformOrigin: "center"}, "play3 -=2")
        .to("#I-1", {duration: 3.5, x: 65, y: -10, rotate: 20, transformOrigin: "center"}, "play3 -=2")
        .to("#R-1", {duration: 3, x: -35, y: 60, rotate: -30, transformOrigin: "center"}, "play3 -=2")
        .to("#G-1", {duration: 2.8, x: 25, y: 45, scale: 2, rotate: 15, transformOrigin: "center"}, "play3 -=2")
        .to("#I-2", {duration: 3.65, x: 10, y: 80, rotate: -35, transformOrigin: "center"}, "play3 -=2")
        .to("#N-2", {duration: 3.25, x: -20, y: -20, rotate: -5, transformOrigin: "center"}, "play3 -=2")
        .to("#I-3", {duration: 3.5, x: 20, y: 60, rotate: 30, transformOrigin: "center"}, "play3 -=2")
        .to("#A-3", {duration: 3.15, x: -10, y: 130, scale: 2, rotate: -15, transformOrigin: "center"}, "play3 -=2")

        .to("#W-1", {duration: 3, x: 45, y: 20, scale: .5, rotate: -20, transformOrigin: "center"}, "play3 -=2")
        .to("#O-2", {duration: 3.5, x: 65, y: -55, rotate: 10, transformOrigin: "center"}, "play3 -=2")
        .to("#L-1", {duration: 3.75, x: 15, y: 30, transformOrigin: "center"}, "play3 -=2")
        .to("#F-1", {duration: 3.25, x: -250, y: -140, rotate: -10, scale:1.75, transformOrigin: "center"}, "play3 -=2")




        .to("#A-1, #S-1, #E-2, #U-1, #O-1, #N-1, #D-1, #E-1", {
            duration: 3,
            opacity: 0.5,
            transformOrigin: "center"
        }, "play2")

        .to("#H-1, #A-2, #T-1, #H-2, #U-2", {
            duration: 3,
            opacity: 0.25,
            transformOrigin: "center"
        }, "play2")


        .to("#R-1, #G-1, #I-2, #A-3, #W-1, #L-1", {
            duration: 3,
            opacity: 0.5,
            transformOrigin: "center"
        }, "play3 -=1")

        .to("#V-1, #I-1, #N-2, #I-3, #O-2", {
            duration: 3,
            opacity: 0.25,
            transformOrigin: "center"
        }, "play3 -=1")

        .to("#S-1, #A-2, #E-2", {
            duration: 3,
            opacity: 1,
            transformOrigin: "center"
        }, "play3 -=1")


        .to("#A-1", {duration: rotateSpeed, rotate: 40, transformOrigin: "center"}, "play2-1 -=2.25")

        .to("#H-1", {duration: rotateSpeed, rotate: -50, transformOrigin: "center"}, "play2-1 -=2.6")

        .to("#U-1", {duration: rotateSpeed, rotate: -35, transformOrigin: "center"}, "play2-1 -=2.7")

        .to("#T-1", {duration: rotateSpeed, rotate: -70, transformOrigin: "center"}, "play2-1 -=2.5")

        .to("#D-1", {duration: rotateSpeed, rotate: 30, transformOrigin: "center"}, "play2-1 -=2.1")

        .to("#H-2", {duration: rotateSpeed, rotate: 35, transformOrigin: "center"}, "play2-1 -=2.45")

        .to("#U-2", {duration: rotateSpeed, rotate: -10, transformOrigin: "center"}, "play2-1 -=2.55")


        .to("#V-1", {duration: rotateSpeed, rotate: -65, transformOrigin: "center"}, "play2-1 -=1.85")

        .to("#G-1", {duration: rotateSpeed, rotate: -55, transformOrigin: "center"}, "play2-1 -=1.9")

        .to("#A-3", {duration: rotateSpeed, rotate: 15, transformOrigin: "center"}, "play2-1 -=1.75")

        .to("#L-1", {duration: rotateSpeed, rotate: 35, transformOrigin: "center"}, "play2-1 -=1.8")


    return hauntedTL;
}




export function hauntedTwoAnimation(){


    hauntedTwoTL.to("#A-1", {duration: swapSpeed, x: 210, y: 180, transformOrigin: "center"}, "play5")
            .to("#H-1", {duration: swapSpeed, x: 170, y: 180, transformOrigin: "center"}, "play5")
            .to("#A-2", {duration: swapSpeed, x: 90, y: 200, opacity: 0.25, transformOrigin: "center"}, "play5")
            .to("#U-1", {duration: swapSpeed, x: -160, y: 150, transformOrigin: "center"}, "play5")
            .to("#N-1", {duration: swapSpeed, x: -150, y: 100, transformOrigin: "center"}, "play5")
            .to("#T-1", {duration: swapSpeed, x: -140, y: 140, transformOrigin: "center"}, "play5")
            .to("#E-1", {duration: swapSpeed, x: -140, y: 200, transformOrigin: "center"}, "play5")
            .to("#D-1", {duration: swapSpeed, x: -180, y: 140,  transformOrigin: "center"}, "play5")
    
    
            .to("#H-2", {duration: swapSpeed, x: 220, y: -70, transformOrigin: "center"}, "play5")
            .to("#O-1", {duration: swapSpeed, x: 150, y: 70, transformOrigin: "center"}, "play5")
            .to("#U-2", {duration: swapSpeed, x: 90, y: -30, transformOrigin: "center"}, "play5")
            .to("#S-1", {duration: swapSpeed, x: 30, y: -80, opacity: 0.5, transformOrigin: "center"}, "play5")
            .to("#E-2", {duration: swapSpeed, x: 0, y: -20, opacity: 0.5, transformOrigin: "center"}, "play5")
    
    
            .to("#V-1", {duration: swapSpeed, x: -100, y: -120, transformOrigin: "center"}, "play5")
            .to("#I-1", {duration: swapSpeed, x: -120, y: -100, transformOrigin: "center"}, "play5")
            .to("#R-1", {duration: swapSpeed, x: -135, y: -100, transformOrigin: "center"}, "play5")
            .to("#G-1", {duration: swapSpeed, x: -145, y: -135, transformOrigin: "center"}, "play5")
            .to("#I-2", {duration: swapSpeed, x: -160, y: -80, transformOrigin: "center"}, "play5")
            .to("#N-2", {duration: swapSpeed, x: -120, y: -60, transformOrigin: "center"}, "play5")
            .to("#I-3", {duration: swapSpeed, x: -200, y: -80, transformOrigin: "center"}, "play5")
            .to("#A-3", {duration: swapSpeed, x: -250, y: -130, transformOrigin: "center"}, "play5")
    
            .to("#W-1", {duration: swapSpeed, x: -225, y: -110, transformOrigin: "center"}, "play5")
            .to("#O-2", {duration: swapSpeed, x: -165, y: -55, transformOrigin: "center"}, "play5")
            .to("#L-1", {duration: swapSpeed, x: -265, y: -110, transformOrigin: "center"}, "play5")
            .to("#F-1", {duration: swapSpeed, x: -350, y: -140, opacity: 0.25, transformOrigin: "center"}, "play5")
    
    
        return hauntedTwoTL;
    }    


        export function hauntedFourAnimation(){


            hauntedFourTL.to("#A-1", {duration: swapSpeed2, x: -25, y: 280, scale: 1.75, transformOrigin: "center"}, "play7")
            .to("#H-1", {duration: swapSpeed2, x: 60, y: 155, opacity: .15, transformOrigin: "center"}, "play7")
            .to("#A-2", {duration: swapSpeed2, x: 295, y: 150, transformOrigin: "center"}, "play7")
            .to("#U-1", {duration: swapSpeed2, x: -370, y: -10, scale: 2.25, transformOrigin: "center"}, "play7")
            .to("#N-1", {duration: swapSpeed2, x: -165, y: -105, opacity: .65, scale: 2, transformOrigin: "center"}, "play7")
            .to("#T-1", {duration: swapSpeed2, x: -90, y: 30, transformOrigin: "center"}, "play7")
            .to("#E-1", {duration: swapSpeed2, x: 100, y: 125, scale: 2, opacity: .65, transformOrigin: "center"}, "play7")
            .to("#D-1", {duration: swapSpeed2, x: -70, y: -30,  transformOrigin: "center"}, "play7")
    
    
            .to("#H-2", {duration: swapSpeed2, x: 55, y: -75, opacity: .35, transformOrigin: "center"}, "play7")
            .to("#O-1", {duration: swapSpeed2, x: 30, y: 300, scale: 2.25, opacity: .75, transformOrigin: "center"}, "play7")
            .to("#U-2", {duration: swapSpeed2, x: -35, y: 145, scale: .85,transformOrigin: "center"}, "play7")
            .to("#S-1", {duration: swapSpeed2, x: -80, y: -15, scale: .25, opacity: .25, transformOrigin: "center"}, "play7")
            .to("#E-2", {duration: swapSpeed2, x: 125, y: 130, transformOrigin: "center"}, "play7")
    
    
            .to("#V-1", {duration: swapSpeed2, x: -117, y: 0, transformOrigin: "center"}, "play7")
            .to("#I-1", {duration: swapSpeed2, x: -142, y: -100, transformOrigin: "center"}, "play7")
            .to("#R-1", {duration: swapSpeed2, x: -65, y: -135, transformOrigin: "center"}, "play7")
            .to("#G-1", {duration: swapSpeed2, x: -55, y: -200, transformOrigin: "center"}, "play7")
            .to("#I-2", {duration: swapSpeed2, x: -155, y: -70, transformOrigin: "center"}, "play7")
            .to("#N-2", {duration: swapSpeed2, x: -220, y: -210, scale: 2, transformOrigin: "center"}, "play7")
            .to("#I-3", {duration: swapSpeed2, x: -160, y: 30, scale: 2.5,transformOrigin: "center"}, "play7")
            .to("#A-3", {duration: swapSpeed2, x: -95, y: 5, transformOrigin: "center"}, "play7")
    
            .to("#W-1", {duration: swapSpeed2, x: -225, y: -105, transformOrigin: "center"}, "play7")
            .to("#O-2", {duration: swapSpeed2, x: -182, y: -67, transformOrigin: "center"}, "play7")
            .to("#L-1", {duration: swapSpeed2, x: -247, y: -140, transformOrigin: "center"}, "play7")
            .to("#F-1", {duration: swapSpeed2, x: -175, y: -140, transformOrigin: "center"}, "play7")

            .to("#F-1", {duration: 2.5}, "play7-2")


            .to("#A-1", {duration: rotateSpeed, rotate: 10, transformOrigin: "center"}, "play7-2 -=2.55")

            .to("#H-1", {duration: rotateSpeed, rotate: -30, transformOrigin: "center"}, "play7-2 -=2.7")
    
            .to("#U-1", {duration: rotateSpeed, rotate: -40, transformOrigin: "center"}, "play7-2 -=1.7")
    
            .to("#T-1", {duration: rotateSpeed, rotate: -100, transformOrigin: "center"}, "play7-2 -=2.85")
    
            .to("#D-1", {duration: rotateSpeed, rotate: 50, transformOrigin: "center"}, "play7-2 -=2.1")

            .to("#N-2", {duration: rotateSpeed, rotate: 20, transformOrigin: "center"}, "play7-2 -=2.43")
    
            .to("#H-2", {duration: rotateSpeed, rotate: 25, transformOrigin: "center"}, "play7-2 -=1.65")
    
            .to("#U-2", {duration: rotateSpeed, rotate: 10, transformOrigin: "center"}, "play7-2 -=2.35")

            .to("#E-2", {duration: rotateSpeed, rotate: 30, transformOrigin: "center"}, "play7-2 -=1.85")
    
    
            .to("#V-1", {duration: rotateSpeed, rotate: -35, transformOrigin: "center"}, "play7-2 -=2.85")

            .to("#R-1", {duration: rotateSpeed, rotate: 15, transformOrigin: "center"}, "play7-2 -=2.45")

            .to("#I-2", {duration: rotateSpeed, rotate: -65, transformOrigin: "center"}, "play7-2 -=1.85")
    
            .to("#G-1", {duration: rotateSpeed, rotate: -75, transformOrigin: "center"}, "play7-2 -=2.9")
    
            .to("#A-3", {duration: rotateSpeed, rotate: 45, transformOrigin: "center"}, "play7-2 -=1.75")
    
            .to("#L-1", {duration: rotateSpeed, rotate: 15, transformOrigin: "center"}, "play7-2 -=1.8")


            .to("#A-1", {duration: swapSpeed, x: -665, y: 220, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#H-1", {duration: swapSpeed, x: -400, y: -30, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#A-2", {duration: swapSpeed, x: 690, y: -40, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#U-1", {duration: swapSpeed, x: -580, y: -20, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#N-1", {duration: swapSpeed, x: -250, y: -350, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#T-1", {duration: swapSpeed, x: -80, y: -280, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#E-1", {duration: swapSpeed, x: 400, y: 70, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#D-1", {duration: swapSpeed, x: -80, y: -260,  scale: firstScale, transformOrigin: "center"}, "play7-1")
    
    
            .to("#H-2", {duration: swapSpeed, x: -440, y: -50, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#O-1", {duration: swapSpeed, x: 0, y: 600, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#U-2", {duration: swapSpeed, x: -250, y: 450, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#S-1", {duration: swapSpeed, x: -390, y: 350, scale: firstScale, transformOrigin: "center"}, "play7-1")
            .to("#E-2", {duration: swapSpeed, x: 450, y: 300, scale: firstScale, transformOrigin: "center"}, "play7-1")
    
    
            .to("#V-1", {duration: swapSpeed, x: -170, y: 260, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#I-1", {duration: swapSpeed, x: -395, y: -450, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#R-1", {duration: swapSpeed, x: 130, y: -650, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#G-1", {duration: swapSpeed, x: 225, y: -545, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#I-2", {duration: swapSpeed, x: 10, y: 380, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#N-2", {duration: swapSpeed, x: -360, y: -460, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#I-3", {duration: swapSpeed, x: -70, y: 260, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#A-3", {duration: swapSpeed, x: -110, y: 230, scale: secondScale, transformOrigin: "center"}, "play7-1")
    
            .to("#W-1", {duration: swapSpeed, x: -245, y: -790, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#O-2", {duration: swapSpeed, x: 165, y: 295, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#L-1", {duration: swapSpeed, x: -135, y: -530, scale: secondScale, transformOrigin: "center"}, "play7-1")
            .to("#F-1", {duration: swapSpeed, x: 450, y: -640, scale: secondScale, transformOrigin: "center"}, "play7-1")


            
            .to("#F-1", {duration: 2}, "play7-1")

                return hauntedFourTL;
            }
            


        export function hauntedFiveAnimation(){


            hauntedFiveTL.to("#final-bk", {duration: .25, opacity: 1, transformOrigin: "center"}, "play8")
                        .from("#final-text", {duration: 1.5, x:-30, opacity: 0, transformOrigin: "center"}, "play8-1")
                        .to("#final-bk", {duration: 5}, "play8-1")
            
                return hauntedFiveTL;
            }
            