

import {gsap} from "gsap";


// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const hauntedTL = gsap.timeline({ease: "circ.out"});

export function hauntedAnimation(){


hauntedTL.from("#A-1", {duration: 3, x: -50, y: -140, transformOrigin: "center"}, "play")
        .from("#H-1", {duration: 3.5, x: 50, y: -180, transformOrigin: "center"}, "play")
        .from("#A-2", {duration: 3.25, x: 20, y: -190, scale: -2, transformOrigin: "center"}, "play")
        .from("#U-1", {duration: 4, x: -70, y: -200, transformOrigin: "center"}, "play")
        .from("#N-1", {duration: 3.75, x: 10, y: -180, transformOrigin: "center"}, "play")
        .from("#T-1", {duration: 4.25, x: -30, y: -140, transformOrigin: "center"}, "play")
        .from("#E-1", {duration: 2.5, x: 10, y: -170, scale: 1.5, transformOrigin: "center"}, "play")
        .from("#D-1", {duration: 3, x: 40, y: -210, transformOrigin: "center"}, "play")


        .from("#H-2", {duration: 3, x: 40, y: 350, transformOrigin: "center"}, "play")
        .from("#O-1", {duration: 3.5, x: 10, y: 340, scale: 1.5, transformOrigin: "center"}, "play")
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




        .to("#A-1, #U-1, #O-1, #N-1, #D-1, #E-1", {
            duration: 3,
            opacity: 0.5,
            transformOrigin: "center"
        }, "play2")

        .to("#H-1, #T-1, #H-2, #U-2", {
            duration: 3,
            opacity: 0.25,
            transformOrigin: "center"
        }, "play2")

        .to("#R-1, #G-1, #I-2, #A-3, #W-1, #L-1", {
            duration: 3,
            opacity: 0.5,
            transformOrigin: "center"
        }, "play3 -=2")

        .to("#V-1, #I-1, #N-2, #I-3, #O-2", {
            duration: 3,
            opacity: 0.25,
            transformOrigin: "center"
        }, "play3 -=2")




        // .to("#A-1", {duration: 2, x: 235, y: 120, transformOrigin: "center"}, "play4")
        // .to("#H-1", {duration: 2.5, x: 100, y: 130, transformOrigin: "center"}, "play4")
        // .to("#A-2", {duration: 2, x: 90, y: 100, transformOrigin: "center"}, "play4")
        // .to("#U-1", {duration: 2, x: -30, y: 120, transformOrigin: "center"}, "play4")
        // .to("#N-1", {duration: 2.75, x: 10, y: 100, scale:1, transformOrigin: "center"}, "play4")
        // .to("#T-1", {duration: 2.25, x: -30, y: 80, transformOrigin: "center"}, "play4")
        // .to("#E-1", {duration: 2.5, x: -30, y: 170, transformOrigin: "center"}, "play4")
        // .to("#D-1", {duration: 2, x: -80, y: 140, transformOrigin: "center"}, "play4")


        // .to("#H-2", {duration: 2, x: 120, y: 30, transformOrigin: "center"}, "play4")
        // .to("#O-1", {duration: 2.5, x: 10, y: 40, scale:1, transformOrigin: "center"}, "play4")
        // .to("#U-2", {duration: 2.25, x: -50, y: -30, transformOrigin: "center"}, "play4")
        // .to("#S-1", {duration: 2, x: -60, y: -110, transformOrigin: "center"}, "play4")
        // .to("#E-2", {duration: 2.75, x: 50, y: -20, transformOrigin: "center"}, "play4")


        // .to("#V-1", {duration: 2.25, x: -30, y: -80, transformOrigin: "center"}, "play4")
        // .to("#I-1", {duration: 2.5, x: 65, y: -50, transformOrigin: "center"}, "play4")
        // .to("#R-1", {duration: 2, x: -35, y: -60, transformOrigin: "center"}, "play4")
        // .to("#G-1", {duration: 2.8, x: 25, y: -45, transformOrigin: "center"}, "play4")
        // .to("#I-2", {duration: 2.65, x: 10, y: -80, transformOrigin: "center"}, "play4")
        // .to("#N-2", {duration: 2.25, x: -20, y: -60, transformOrigin: "center"}, "play4")
        // .to("#I-3", {duration: 2.5, x: 20, y: -60, transformOrigin: "center"}, "play4")
        // .to("#A-3", {duration: 2.15, x: -10, y: -130, transformOrigin: "center"}, "play4")

        // .to("#W-1", {duration: 2, x: -45, y: -50, transformOrigin: "center"}, "play4")
        // .to("#O-2", {duration: 2.5, x: -65, y: -55, transformOrigin: "center"}, "play4")
        // .to("#L-1", {duration: 2.75, x: -35, y: -30, transformOrigin: "center"}, "play4")
        // .to("#F-1", {duration: 2.25, x: -250, y: -140, transformOrigin: "center"}, "play4")






        .to("#A-1", {duration: 1, x: 535, y: 120, transformOrigin: "center"}, "play5")
        .to("#H-1", {duration: 1.5, x: 400, y: 130, transformOrigin: "center"}, "play5")
        .to("#A-2", {duration: 1, x: 190, y: 100, transformOrigin: "center"}, "play5")
        .to("#U-1", {duration: 1, x: 180, y: 120, transformOrigin: "center"}, "play5")
        .to("#N-1", {duration: 1.75, x: -150, y: 100, transformOrigin: "center"}, "play5")
        .to("#T-1", {duration: 1.25, x: -180, y: 80, transformOrigin: "center"}, "play5")
        .to("#E-1", {duration: 1.5, x: -100, y: 170, transformOrigin: "center"}, "play5")
        .to("#D-1", {duration: 1, x: -180, y: 140,  transformOrigin: "center"}, "play5")


        .to("#H-2", {duration: 1, x: 420, y: 30, transformOrigin: "center"}, "play5")
        .to("#O-1", {duration: 1.5, x: 200, y: 40, transformOrigin: "center"}, "play5")
        .to("#U-2", {duration: 1.25, x: 250, y: -30, transformOrigin: "center"}, "play5")
        .to("#S-1", {duration: 1, x: -90, y: -110, transformOrigin: "center"}, "play5")
        .to("#E-2", {duration: 1.75, x: 150, y: -20, transformOrigin: "center"}, "play5")


        .to("#V-1", {duration: 1.25, x: -230, y: -80, transformOrigin: "center"}, "play5")
        .to("#I-1", {duration: 1.5, x: -165, y: -50, transformOrigin: "center"}, "play5")
        .to("#R-1", {duration: 1, x: -135, y: -60, transformOrigin: "center"}, "play5")
        .to("#G-1", {duration: 1.8, x: 125, y: -45, transformOrigin: "center"}, "play5")
        .to("#I-2", {duration: 1.65, x: 110, y: -80, transformOrigin: "center"}, "play5")
        .to("#N-2", {duration: 1.25, x: -120, y: -60, transformOrigin: "center"}, "play5")
        .to("#I-3", {duration: 1.5, x: 120, y: -60, transformOrigin: "center"}, "play5")
        .to("#A-3", {duration: 1.15, x: -110, y: -130, transformOrigin: "center"}, "play5")

        .to("#W-1", {duration: 1, x: -145, y: -50, transformOrigin: "center"}, "play5")
        .to("#O-2", {duration: 1.5, x: -165, y: -55, transformOrigin: "center"}, "play5")
        .to("#L-1", {duration: 1.75, x: -135, y: -30, transformOrigin: "center"}, "play5")
        .to("#F-1", {duration: 1.25, x: -350, y: -140, transformOrigin: "center"}, "play5")




        .to("#A-1", {duration: 1.5, x: 235, y: 120, transformOrigin: "center"}, "play6 -=.5")
        .to("#H-1", {duration: 1.75, x: 200, y: 130, transformOrigin: "center"}, "play6 -=.5")
        .to("#A-2", {duration: 1.5, x: 90, y: 100, transformOrigin: "center"}, "play6 -=.5")
        .to("#U-1", {duration: 1.5, x: 80, y: 120, transformOrigin: "center"}, "play6 -=.5")
        .to("#N-1", {duration: 1.75, x: -50, y: 100, transformOrigin: "center"}, "play6 -=.5")
        .to("#T-1", {duration: 1, x: -80, y: 80, transformOrigin: "center"}, "play6 -=.5")
        .to("#E-1", {duration: 1.75, x: -20, y: 170, transformOrigin: "center"}, "play6 -=.5")
        .to("#D-1", {duration: 1.5, x: -80, y: 140,  transformOrigin: "center"}, "play6 -=.5")


        .to("#H-2", {duration: 1.5, x: 120, y: 30, transformOrigin: "center"}, "play6 -=.5")
        .to("#O-1", {duration: 1, x: 50, y: 40, transformOrigin: "center"}, "play6 -=.5")
        .to("#U-2", {duration: 1.25, x: 50, y: -30, transformOrigin: "center"}, "play6 -=.5")
        .to("#S-1", {duration: 1.5, x: -190, y: -110, transformOrigin: "center"}, "play6 -=.5")
        .to("#E-2", {duration: 1.75, x: 50, y: -20, transformOrigin: "center"}, "play6 -=.5")


        .to("#V-1", {duration: 1, x: -30, y: -80, transformOrigin: "center"}, "play6 -=.5")
        .to("#I-1", {duration: 1.25, x: -65, y: -50, transformOrigin: "center"}, "play6 -=.5")
        .to("#R-1", {duration: 1.5, x: -35, y: -60, transformOrigin: "center"}, "play6 -=.5")
        .to("#G-1", {duration: 1.8, x: 25, y: -45, transformOrigin: "center"}, "play6 -=.5")
        .to("#I-2", {duration: 1.65, x: 10, y: -80, transformOrigin: "center"}, "play6 -=.5")
        .to("#N-2", {duration: 1, x: -20, y: -60, transformOrigin: "center"}, "play6 -=.5")
        .to("#I-3", {duration: 1.85, x: 20, y: -60, transformOrigin: "center"}, "play6 -=.5")
        .to("#A-3", {duration: 1, x: -10, y: -130, transformOrigin: "center"}, "play6 -=.5")

        .to("#W-1", {duration: 1.5, x: -45, y: -50, transformOrigin: "center"}, "play6 -=.5")
        .to("#O-2", {duration: 1.25, x: -65, y: -55, transformOrigin: "center"}, "play6 -=.5")
        .to("#L-1", {duration: 1.75, x: -35, y: -30, transformOrigin: "center"}, "play6 -=.5")
        .to("#F-1", {duration: 1, x: -150, y: -140, transformOrigin: "center"}, "play6 -=.5")




        .to("#A-1", {duration: 1, x: 135, y: 120, transformOrigin: "center"}, "play7 -=.5")
        .to("#H-1", {duration: 1.5, x: 200, y: 130, transformOrigin: "center"}, "play7 -=.5")
        .to("#A-2", {duration: 1, x: 290, y: 100, transformOrigin: "center"}, "play7 -=.5")
        .to("#U-1", {duration: 1, x: -80, y: 120, transformOrigin: "center"}, "play7 -=.5")
        .to("#N-1", {duration: 1.75, x: -200, y: 100, transformOrigin: "center"}, "play7 -=.5")
        .to("#T-1", {duration: 1.25, x: -280, y: 80, transformOrigin: "center"}, "play7 -=.5")
        .to("#E-1", {duration: 1.5, x: -220, y: 170, transformOrigin: "center"}, "play7 -=.5")
        .to("#D-1", {duration: 1, x: -280, y: 140,  transformOrigin: "center"}, "play7 -=.5")


        .to("#H-2", {duration: 1, x: 320, y: 30, transformOrigin: "center"}, "play7 -=.5")
        .to("#O-1", {duration: 1.5, x: 250, y: 40, transformOrigin: "center"}, "play7 -=.5")
        .to("#U-2", {duration: 1.25, x: -100, y: -30, transformOrigin: "center"}, "play7 -=.5")
        .to("#S-1", {duration: 1, x: 90, y: -110, transformOrigin: "center"}, "play7 -=.5")
        .to("#E-2", {duration: 1.75, x: -50, y: -20, transformOrigin: "center"}, "play7 -=.5")


        .to("#V-1", {duration: 1.25, x: -230, y: -80, transformOrigin: "center"}, "play7 -=.5")
        .to("#I-1", {duration: 1.5, x: -265, y: -50, transformOrigin: "center"}, "play7 -=.5")
        .to("#R-1", {duration: 1, x: -235, y: -60, transformOrigin: "center"}, "play7 -=.5")
        .to("#G-1", {duration: 1.8, x: -125, y: -45, transformOrigin: "center"}, "play7 -=.5")
        .to("#I-2", {duration: 1.65, x: -110, y: -80, transformOrigin: "center"}, "play7 -=.5")
        .to("#N-2", {duration: 1.25, x: -220, y: -60, transformOrigin: "center"}, "play7 -=.5")
        .to("#I-3", {duration: 1.5, x: -20, y: -60, transformOrigin: "center"}, "play7 -=.5")
        .to("#A-3", {duration: 1.15, x: -210, y: -130, transformOrigin: "center"}, "play7 -=.5")

        .to("#W-1", {duration: 1, x: -245, y: -50, transformOrigin: "center"}, "play7 -=.5")
        .to("#O-2", {duration: 1.5, x: -265, y: -55, transformOrigin: "center"}, "play7 -=.5")
        .to("#L-1", {duration: 1.75, x: -235, y: -30, transformOrigin: "center"}, "play7 -=.5")
        .to("#F-1", {duration: 1.25, x: -350, y: -140, transformOrigin: "center"}, "play7 -=.5")




        .to("#A-1", {duration: 1.5, x: 235, y: 120, transformOrigin: "center"}, "play8 -=.5")
        .to("#H-1", {duration: 1.75, x: 200, y: 130, transformOrigin: "center"}, "play8 -=.5")
        .to("#A-2", {duration: 1.5, x: 90, y: 100, transformOrigin: "center"}, "play8 -=.5")
        .to("#U-1", {duration: 1.5, x: 80, y: 120, transformOrigin: "center"}, "play8 -=.5")
        .to("#N-1", {duration: 1.75, x: -50, y: 100, transformOrigin: "center"}, "play8 -=.5")
        .to("#T-1", {duration: 1, x: -80, y: 80, transformOrigin: "center"}, "play8 -=.5")
        .to("#E-1", {duration: 1.75, x: -20, y: 170, transformOrigin: "center"}, "play8 -=.5")
        .to("#D-1", {duration: 1.5, x: -80, y: 140,  transformOrigin: "center"}, "play8 -=.5")


        .to("#H-2", {duration: 1.5, x: 120, y: 30, transformOrigin: "center"}, "play8 -=.5")
        .to("#O-1", {duration: 1, x: 50, y: 40, transformOrigin: "center"}, "play8 -=.5")
        .to("#U-2", {duration: 1.25, x: 50, y: -30, transformOrigin: "center"}, "play8 -=.5")
        .to("#S-1", {duration: 1.5, x: -190, y: -110, transformOrigin: "center"}, "play8 -=.5")
        .to("#E-2", {duration: 1.75, x: 50, y: -20, transformOrigin: "center"}, "play8 -=.5")


        .to("#V-1", {duration: 1, x: -30, y: -80, transformOrigin: "center"}, "play8 -=.5")
        .to("#I-1", {duration: 1.25, x: -65, y: -50, transformOrigin: "center"}, "play8 -=.5")
        .to("#R-1", {duration: 1.5, x: -35, y: -60, transformOrigin: "center"}, "play8 -=.5")
        .to("#G-1", {duration: 1.8, x: 25, y: -45, transformOrigin: "center"}, "play8 -=.5")
        .to("#I-2", {duration: 1.65, x: 10, y: -80, transformOrigin: "center"}, "play8 -=.5")
        .to("#N-2", {duration: 1, x: -20, y: -60, transformOrigin: "center"}, "play8 -=.5")
        .to("#I-3", {duration: 1.85, x: 20, y: -60, transformOrigin: "center"}, "play8 -=.5")
        .to("#A-3", {duration: 1, x: -10, y: -130, transformOrigin: "center"}, "play8 -=.5")

        .to("#W-1", {duration: 1.5, x: -45, y: -50, transformOrigin: "center"}, "play8 -=.5")
        .to("#O-2", {duration: 1.25, x: -65, y: -55, transformOrigin: "center"}, "play8 -=.5")
        .to("#L-1", {duration: 1.75, x: -35, y: -30, transformOrigin: "center"}, "play8 -=.5")
        .to("#F-1", {duration: 1, x: -150, y: -140, transformOrigin: "center"}, "play8 -=.5")


        .to("#wholething", {duration: 1.25, scale:0, transformOrigin: "center"}, "play9 -=.35")

        // .to("#V-W", {duration: 1.25, scale:0, transformOrigin: "center"}, "play9 -=.35")
        // .to("#Title", {duration: 1.25, scale:0, transformOrigin: "center"}, "play9 -=.35")


    return hauntedTL;
}
