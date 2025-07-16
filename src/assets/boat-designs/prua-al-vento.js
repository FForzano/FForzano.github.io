import { hullPath, mastPath } from './common-components';

export const PruaAlVento = {
  name: "Prua al vento",
  description: "Navigazione di bolina, vele cazzate contro vento",
  tension: 0.9,
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
      path: "m 12.183293,8.3731347 c 0.974133,2.1559293 1.071048,4.4309853 0.01758,6.9395413 -1.056161,2.315132 -0.767103,4.630265 0.01957,6.945397",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1,
      opacity: 0.7
    },
    jib: {
      path: "m 12.266001,0.01753956 c -0.716768,1.12574594 -0.804932,1.73640524 -0.008,3.38988464 0.857873,1.5968615 0.888193,2.6312398 -0.106896,3.7868352",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1,
      opacity: 0.7
    },
    wind: "",
    wake: "" 
  }
}
