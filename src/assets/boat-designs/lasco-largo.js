export const LascoLargo = {
  name: "Lasco largo",
  description: "Navigazione di lasco largo, vele lascate",
  tension: 0.4,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L22 11 L22 11 Z",
    jib: "M12 4 L12 12 L4 8 L4 6 Z",
    wind: "M12 2 L17 7 M15 5 L17 7 L15 9",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  animations: {
    // Animazione della scia - più intensa per andature veloci
    wake: {
      opacity: {
        idle: [0.05, 0.15, 0.05],
        active: [0.1, 0.3, 0.1]
      },
      scale: {
        idle: 1,
        active: [1, 1.15, 1]
      },
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione vela principale - sventola di più con vele lascate
    mainSail: {
      opacity: {
        base: 0.5,
        variation: 0.3
      },
      scale: {
        idle: 1,
        active: [1, 1.08, 1]
      },
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione fiocco - movimento più marcato
    jib: {
      opacity: {
        base: 0.4,
        variation: 0.25
      },
      scale: {
        idle: 1,
        active: [1, 1.1, 1]
      },
      duration: 3.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione indicatore vento - più attivo
    wind: {
      opacity: {
        idle: [0.4, 0.8, 0.4],
        active: [0.5, 0.9, 0.5]
      },
      scale: {
        idle: 1,
        active: [1, 1.25, 1]
      },
      duration: 2.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dello scafo - leggero movimento
    hull: {
      scale: {
        idle: 1,
        active: [1, 1.02, 1]
      },
      opacity: {
        base: 0.95,
        variation: 0.02
      },
      duration: 4.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dell'albero - stabile
    mast: {
      opacity: {
        base: 0.9,
        variation: 0.05
      },
      scale: {
        idle: 1,
        active: [1, 1.008, 1]
      },
      duration: 5.0,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
