export const FilDiRuota = {
  name: "Fil di ruota",
  description: "Navigazione con vento in poppa, vele completamente lascate",
  tension: 0.2,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L23 8 L23 14 Z",
    jib: "M12 4 L12 12 L1 8 L1 14 Z",
    wind: "M12 2 L12 10 M10 8 L12 10 L14 8",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  animations: {
    // Animazione della scia - molto intensa per andatura veloce
    wake: {
      opacity: {
        idle: [0.1, 0.25, 0.1],
        active: [0.15, 0.35, 0.15]
      },
      scale: {
        idle: 1,
        active: [1, 1.2, 1]
      },
      duration: 2.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione vela principale - sventola molto con vele lascate
    mainSail: {
      opacity: {
        base: 0.3,
        variation: 0.4
      },
      scale: {
        idle: 1,
        active: [1, 1.12, 1]
      },
      duration: 3.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione fiocco - movimento molto marcato
    jib: {
      opacity: {
        base: 0.2,
        variation: 0.35
      },
      scale: {
        idle: 1,
        active: [1, 1.15, 1]
      },
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione indicatore vento - molto attivo
    wind: {
      opacity: {
        idle: [0.3, 0.7, 0.3],
        active: [0.4, 0.8, 0.4]
      },
      scale: {
        idle: 1,
        active: [1, 1.3, 1]
      },
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dello scafo - movimento più pronunciato
    hull: {
      scale: {
        idle: 1,
        active: [1, 1.03, 1]
      },
      opacity: {
        base: 0.95,
        variation: 0.04
      },
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dell'albero - leggermente instabile
    mast: {
      opacity: {
        base: 0.9,
        variation: 0.08
      },
      scale: {
        idle: 1,
        active: [1, 1.012, 1]
      },
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
