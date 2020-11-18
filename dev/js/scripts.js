

import { gsap } from "gsap";

import {lineAnimation} from "./demo.js";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(lineAnimation());

GSDevTools.create();