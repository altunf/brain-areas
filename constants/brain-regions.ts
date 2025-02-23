export const buttonPositions = {
  1: [0.04, 0.16, 0.5],
  2: [0.54, 0.1, 0.4],
  3: [0.37, 0.4, 0.61],
  4: [0.25, 0.21, 0.53],
  5: [0.26, 0.06, 0.53],
} as const;

export const cameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.6 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
} as const;


export const regionDescriptions = 
        {
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