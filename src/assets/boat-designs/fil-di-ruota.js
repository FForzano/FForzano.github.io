import { hullPath, mastPath } from './common-components.js';

export const FilDiRuota = {
  name: "Fil di ruota",
  description: "Navigazione con vento in poppa, vele completamente lascate",
  tension: 0.2,
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
        path: "m 12.188534,8.3722177 c 2.606844,-0.027613 8.313386,1.8020783 10.595582,4.2943883",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    jib: {
        path: "m 12.188534,8.3722177 c 2.606844,-0.027613 8.313386,1.8020783 10.595582,4.2943883",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    spinnaker: {
        path: "M 12.195638,7.5158202 C 9.8138313,6.91067 6.0134133,5.2568055 5.7551741,2.9252912 8.6095358,-0.35509596 15.622045,-0.72069555 18.851562,2.8111979 18.251337,5.2336667 14.576592,6.9595821 12.195638,7.5158202 Z",
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
    }  },
}
