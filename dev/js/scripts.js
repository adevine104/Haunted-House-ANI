

import { gsap } from "gsap";

import {hauntedAnimation} from "./demo.js";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(hauntedAnimation());

GSDevTools.create();