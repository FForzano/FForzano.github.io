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
        path: "m 12.188534,8.3722177 c 3.893079,0.4401088 7.728734,3.1818573 9.58998,7.2878073",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    jib: {
        path: "M 12.266001,0.00292326 C 10.10819,0.02509685 8.6007349,0.83480418 7.2679323,3.0517067",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        opacity: 0.7
    },
    spinnaker: {
        path: "M 12.162565,7.8300129 C 9.7807584,7.2248627 6.5090203,4.7789102 6.2507811,2.4473959 9.1051428,-0.83299125 15.622045,-0.72069555 18.851562,2.8111979 18.368267,5.0699641 14.613677,7.6713382 12.162565,7.8300129 Z",
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
