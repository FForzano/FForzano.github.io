import { hullPath, mastPath } from './common-components.js';

export const LascoLargo = {
  name: "Lasco largo",
  description: "Navigazione di lasco largo, vele lascate",
  tension: 0.4,
  elements: {
    hull: { 
      path: hullPath, 
      fill: "rgba(255, 255, 255, 0.6)", // white/60 for light mode
      stroke: "currentColor", 
      strokeWidth: 1.5, 
      opacity: 1,
      darkFill: "rgba(38, 38, 38, 0.6)" // neutral-800/60 for dark mode
    },
    mast: { 
      path: mastPath,
      fill: "currentColor", 
      stroke: "currentColor", 
      strokeWidth: 0, 
      strokeLinecap: "round",
      opacity: 0.9 
    },
    mainSail: {
        path: "m 12.188534,8.3722177 c 3.893079,0.4401088 7.728734,3.1818573 9.58998,7.2878073",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    jib: {
        path: "M 12.266001,0.00292326 C 14.07694,0.05816977 16.902037,1.2647521 18.082776,4.0438942",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    spinnaker: {
        path: "M 12.162565,7.3622912 C 9.9621727,5.999788 7.8139402,2.6856296 7.7721353,0.23151044 12.610872,-0.40304333 15.9655,1.0666188 19.624965,4.4000747 18.330208,6.4620655 14.613677,7.402054 12.162565,7.3622912 Z",
        fill: "rgb(251 146 60)", // secondary-400 - vibrant orange for spinnaker
        stroke: "rgb(194 65 12)", // secondary-700 - darker orange for stroke
        strokeWidth: 0.8,
        opacity: 0.7
    },
    wind: {
        path: ""
    },
    wake: {
        path: ""
    }
  },
}
