export const limbicSystemButtonPositions = {
  1: [0.04, 0.16, 0.5],
  2: [0.54, 0.1, 0.4],
  3: [0.37, 0.4, 0.61],
  4: [0.25, 0.21, 0.53],
  5: [0.26, 0.06, 0.53],
} as const;

export const limbicSystemCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 1},
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.6 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
} as const;

export const brainLobsButtonPositions = {
  1: [-0.1, 0.4, 0],
  2: [-0.5, 0.6, 0.2],
  3: [0.3, 0.6, 0.35],
  4: [-0.01, 0.23, 0.42],
  5: [0.54, 0.23, 0.14],
  6: [0.04, 0.573, 0.212],
  7: [-0.11, 0.38, 0.264],
  8: [0.4, 0.42, 0.09],
  9: [-0.1, 0.53, 0],
  10: [-0.08, 0.604, 0],
} as const;

export const brainLobsCameraOffsets = {
  1: { x: -0.8, y: 0, z: -2.1 },
  2: { x: -0.4, y: 0.6, z: 0.3 },
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.8 },
  5: { x: 0.8, y: 0, z: 0.3 },
  6: { x: 0, y: 0.3, z: 0.17 },
  7: { x: -0.4, y: 0.25, z: -0.2 },
  8: { x: 0.5, y: 0.3, z: -0.2 },
  9: { x: 0, y: 0.3, z: -1.5 },
  10: { x: 0, y: 0.6, z: -1.5 },
} as const;

export const neuronButtonPositions = {
  1: [1.28, -0.47, 0.29],
  2: [0.445, -0.2, 0.405],
  3: [-0.28, -0.2, 0.75],
  4: [0.03, -0.22, 0.6],
  5: [-0.47, -0.14, 0.76],
  6: [-0.57, 0.1, 0.8],
  7: [-0.51, 0.39, 0.46],
  8: [-0.63, 0.01, 1],
} as const;

export const neuronCameraOffsets = {
  1: { x: 1.5, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.6, y: -0.5, z: 0.6 },
  4: { x: 0.4, y: -0.5, z: 0.8 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
  6: { x: 0, y: 0.6, z: 1.5 },
  7: { x: 1.5, y: 0, z: 0.6 },
  8: { x: 0, y: 0, z: 0.8 },
} as const;

export const visualPathwayButtonPositions = {
  1: [0.1, 0.2, 1.3],
  2: [0.14, -0.02, 0.4],
  3: [0.1, -0.04, 0.28],
  4: [-0.009, -0.007193999737501087, 0.1],
  5: [-0.055, 0.05, 0.05],
  6: [-0.04, 0.07, -0.068],
  7: [-0.12, 0.04, -0.09],
  8: [-0.1, 0.07, -0.35],
} as const;

export const visualPathwayCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.9 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.2, y: -0.1, z: 0.1 },
  4: { x: 0, y: -0.2, z: 0.1 },
  5: { x: -0.05, y: 0, z: 0.2 },
  6: { x: 0, y: -0.4, z: 0.1 },
  7: { x: -0.5, y: 0.2, z: 0.05 },
  8: { x: -0.5, y: 0.2, z: -0.5 },
} as const;

export const limbicSystemRegionDesc = {
  1: {
    tr: {
      name: "Amigdala",
      description:
        "Korku ve kaygı başta olmak üzere duyguları işler. Duygusal öğrenme ve hafıza oluşumunda çok önemlidir.",
    },
    en: {
      name: "Amygdala",
      description:
        "Processes emotions, particularly fear and anxiety. It's crucial for emotional learning and memory formation.",
    },
  },
  2: {
    tr: {
      name: "Hipokampüs",
      description:
        "Öğrenme ve hafıza oluşumu, özellikle uzun süreli hafıza ve uzamsal navigasyon için gereklidir.",
    },
    en: {
      name: "Hippocampus",
      description:
        "Essential for learning and memory formation, especially long-term memory and spatial navigation.",
    },
  },
  3: {
    tr: {
      name: "Anterior Singulat Korteks",
      description:
        "Duygu düzenleme, karar verme, dürtü kontrolü ve hata tespitinde rol oynar.",
    },
    en: {
      name: "Anterior Cingulate Cortex",
      description:
        "Involved in emotion regulation, decision-making, impulse control, and error detection.",
    },
  },
  4: {
    tr: {
      name: "Hipotalamus",
      description:
        "Açlık, susuzluk, vücut ısısı ve sirkadiyen ritimler dahil temel işlevleri düzenler.",
    },
    en: {
      name: "Hypothalamus",
      description:
        "Regulates basic functions including hunger, thirst, body temperature, and circadian rhythms.",
    },
  },
  5: {
    tr: {
      name: "Hipofiz Bezi",
      description:
        "Büyüme, metabolizma ve stres tepkisini etkileyen hormonları üreten ana endokrin bezdir.",
    },
    en: {
      name: "Pituitary Gland",
      description:
        "The master endocrine gland that produces hormones affecting growth, metabolism, and stress response.",
    },
  },
} as const;

export const regionNames = {
  1: "Amigdala",
  2: "Hippocampus",
  3: "Anterior Cingulate Cortex",
  4: "Hypothalamus",
  5: "Pituitary Gland",
} as const;
