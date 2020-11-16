

import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";

import {lineAnimation} from "./demo.js";

// gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(lineAnimation());

// GSDevTools.create();