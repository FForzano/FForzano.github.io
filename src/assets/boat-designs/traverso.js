import { hullPath, mastPath } from './common-components.js';

export const Traverso = {
  name: "Traverso",
  description: "Navigazione al traverso, vele semi-lascate",
  tension: 0.6,
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
        path: "M 12.188534,8.3722177 C 13.8988,10.995139 16.411539,15.522825 16.420702,21.679296",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    jib: {
        path: "M 12.266001,0.00292326 C 14.275377,1.7118156 15.182246,3.6460021 15.436943,7.1527484",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
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
