export const Traverso = {
  name: "Traverso",
  description: "Navigazione al traverso, vele semi-lascare",
  tension: 0.6,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L20 13 L20 9 Z",
    jib: "M12 4 L12 12 L6 9 L6 6 Z",
    wind: "M12 2 L18 2 M16 1 L18 2 L16 3",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  animations: {
    // Animazione della scia - buona per andatura veloce
    wake: {
      opacity: {
        idle: [0.06, 0.16, 0.06],
        active: [0.08, 0.22, 0.08]
      },
      scale: {
        idle: 1,
        active: [1, 1.1, 1]
      },
      duration: 2.3,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione vela principale - semi-lasca, movimento moderato
    mainSail: {
      opacity: {
        base: 0.5,
        variation: 0.2
      },
      scale: {
        idle: 1,
        active: [1, 1.05, 1]
      },
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione fiocco - movimento bilanciato
    jib: {
      opacity: {
        base: 0.4,
        variation: 0.2
      },
      scale: {
        idle: 1,
        active: [1, 1.06, 1]
      },
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione indicatore vento - attivo lateralmente
    wind: {
      opacity: {
        idle: [0.4, 0.7, 0.4],
        active: [0.5, 0.8, 0.5]
      },
      scale: {
        idle: 1,
        active: [1, 1.2, 1]
      },
      duration: 2.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dello scafo - movimento bilanciato
    hull: {
      scale: {
        idle: 1,
        active: [1, 1.02, 1]
      },
      opacity: {
        base: 0.95,
        variation: 0.03
      },
      duration: 4.0,
      repeat: Infinity,
      ease: "easeInOut"
    },
    // Animazione dell'albero - moderatamente stabile
    mast: {
      opacity: {
        base: 0.9,
        variation: 0.05
      },
      scale: {
        idle: 1,
        active: [1, 1.01, 1]
      },
      duration: 5.0,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
