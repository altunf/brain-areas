export const limbicSystemButtonPositions = {
  1: [0.04, 0.16, 0.5],
  2: [0.54, 0.1, 0.4],
  3: [0.37, 0.4, 0.61],
  4: [0.25, 0.21, 0.53],
  5: [0.26, 0.06, 0.53],
} as const;

export const limbicSystemCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.6 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
} as const;

export const brainLobsButtonPositions = {
  1: [-0.08772635912950899, 0.38046980419570053, -0.010328890051945924],
  2: [-0.48016055373766475, 0.6111317385968672, -0.23628437698585583],
  3: [0.28694588840014623, 0.5987620724455451, 0.3520079523657583],
  4: [-0.11580572928106031, 0.21557811250796843, 0.4211405228117451],
  5: [0.5645999266579624, 0.2274095188552774, 0.15262691563524286],
  6: [0.04250603068594114, 0.5825952048293618, 0.211717377684545],
  7: [-0.11233133143984139, 0.3733673882205106, 0.2635324213983556],
  8: [0.402667648177616, 0.41484356809060846, 0.08935113586765597],
  9: [-0.07579385612136068, 0.5179031885642456, 0.0006216695840588047],
  10: [-0.08647758233406398, 0.5179031885642456, 0.0006216695840588047],

} as const;

export const brainLobsCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.6 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
  6: { x: 0, y: 0, z: 0.6 },
  7: { x: 0, y: 0, z: 0.6 },
  8: { x: 0, y: 0, z: 0.6 },
  9: { x: 0, y: 0, z: 0.6 },
  10: { x: 0, y: 0, z: 0.6 },
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
