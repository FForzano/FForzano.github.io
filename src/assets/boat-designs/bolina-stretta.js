export const BolinaStretta = {
  name: "Bolina stretta",
  description: "Navigazione contro vento, vele molto cazzate",
  tension: 0.9,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L16 15 L16 6 Z",
    jib: "M12 4 L12 12 L8 11 L8 6 Z",
    wind: "M12 2 L12 0 M10 1 L12 0 L14 1",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  animations: {
    // Animazione della scia - più leggera per andature lente
    wake: {
      opacity: {
        idle: [0.03, 0.08, 0.03],
        active: [0.05, 0.12, 0.05]
      },
      scale: {
        idle: 1,
        active: [1, 1.05, 1]
      },
      duration: 3.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione vela principale - tesa, movimento minimo
    mainSail: {
      opacity: {
        base: 0.7,
        variation: 0.1
      },
      scale: {
        idle: 1,
        active: [1, 1.02, 1]
      },
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione fiocco - molto teso
    jib: {
      opacity: {
        base: 0.6,
        variation: 0.1
      },
      scale: {
        idle: 1,
        active: [1, 1.03, 1]
      },
      duration: 4.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione indicatore vento - stabile contro vento
    wind: {
      opacity: {
        idle: [0.6, 0.8, 0.6],
        active: [0.7, 0.9, 0.7]
      },
      scale: {
        idle: 1,
        active: [1, 1.1, 1]
      },
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dello scafo - movimento minimo
    hull: {
      scale: {
        idle: 1,
        active: [1, 1.01, 1]
      },
      opacity: {
        base: 0.95,
        variation: 0.02
      },
      duration: 5.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dell'albero - molto stabile
    mast: {
      opacity: {
        base: 0.9,
        variation: 0.02
      },
      scale: {
        idle: 1,
        active: [1, 1.005, 1]
      },
      duration: 6.0,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
