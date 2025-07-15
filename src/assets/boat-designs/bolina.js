export const Bolina = {
  name: "Bolina",
  description: "Navigazione di bolina, vele semi-cazzate",
  tension: 0.8,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L18 14 L18 7 Z",
    jib: "M12 4 L12 12 L7 10 L7 6 Z",
    wind: "M12 2 L15 0 M13 1 L15 0 L17 1",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  animations: {
    // Animazione della scia - moderata per andatura media
    wake: {
      opacity: {
        idle: [0.04, 0.12, 0.04],
        active: [0.06, 0.18, 0.06]
      },
      scale: {
        idle: 1,
        active: [1, 1.07, 1]
      },
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione vela principale - semi-tesa
    mainSail: {
      opacity: {
        base: 0.6,
        variation: 0.15
      },
      scale: {
        idle: 1,
        active: [1, 1.04, 1]
      },
      duration: 4.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione fiocco - movimento moderato
    jib: {
      opacity: {
        base: 0.5,
        variation: 0.15
      },
      scale: {
        idle: 1,
        active: [1, 1.05, 1]
      },
      duration: 3.8,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione indicatore vento - moderatamente attivo
    wind: {
      opacity: {
        idle: [0.5, 0.75, 0.5],
        active: [0.6, 0.85, 0.6]
      },
      scale: {
        idle: 1,
        active: [1, 1.15, 1]
      },
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dello scafo - leggero movimento
    hull: {
      scale: {
        idle: 1,
        active: [1, 1.015, 1]
      },
      opacity: {
        base: 0.95,
        variation: 0.025
      },
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dell'albero - stabile
    mast: {
      opacity: {
        base: 0.9,
        variation: 0.03
      },
      scale: {
        idle: 1,
        active: [1, 1.007, 1]
      },
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
