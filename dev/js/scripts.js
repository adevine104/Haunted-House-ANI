

import { gsap } from "gsap";

import {hauntedAnimation} from "./demo.js";
import {hauntedTwoAnimation} from "./demo.js";
import {hauntedThreeAnimation} from "./demo.js";
import {hauntedFourAnimation} from "./demo.js";
// import {hauntedFiveAnimation} from "./demo.js";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(hauntedAnimation());
mainTl.add(hauntedTwoAnimation());
mainTl.add(hauntedThreeAnimation());
mainTl.add(hauntedFourAnimation());
// mainTl.add(hauntedFiveAnimation());

GSDevTools.create();