import { hullPath, mastPath } from './common-components'

export const Bolina = {
  name: "Bolina",
  description: "Navigazione di bolina, vele semi-cazzate",
  tension: 0.8,
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
            path: "m 12.188534,8.3722177 c 1.92524,3.2513063 2.652041,8.0931853 2.198184,13.9685363",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 1.2,
            opacity: 0.85
        },
        jib: {
            path: "M 12.266001,0.00292326 C 13.597383,2.7536124 14.247776,4.9103109 14.122135,7.5571614",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 1.2,
            opacity: 0.85
        },
        wind: {
            path: ""
        },
        wake: {
            path: ""
        }
    },
}