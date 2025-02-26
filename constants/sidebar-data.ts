import { BookOpen, Command, LifeBuoy, Send } from "lucide-react";

export const sidebarData = {
    navMain: [
      {
        title: "Models",
        url: "#",
        icon: Command,
        isActive: true,
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: false,
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
    models: [
      {
        href: "/brain-lobs",
        name: "Brain Lobs",
        modelType: "brainLobs",
        desc: "Explore the main lobes of the brain and their functions.",
      },
      {
        href: "/limbic-system", 
        name: "Limbic System",
        modelType: "limbicSystem",
        desc: "Discover the emotional and memory center of the brain.",
      },
      {
        href: "/neuron",
        name: "Neuron", 
        modelType: "neuron",
        desc: "Learn about the basic unit of the nervous system.",
      },
      {
        href: "/visual-pathway",
        name: "Visual Pathway",
        modelType: "visualPathway",
        desc: "Understand how visual information travels through the brain.",
      },
      {
        href: "/brodmann-areas",
        name: "Broadmann Areas",
        modelType: "brodmannAreas", 
        desc: "Explore the functional areas of the cerebral cortex.",
      },
      {
        href: "/ventricular-system",
        name: "Ventricular System",
        modelType: "ventricularSystem",
        desc: "Learn about the fluid-filled cavities in the brain.",
      },
      {
        href: "/cerebral-arteries",
        name: "Cerebral Arteries",
        modelType: "cerebralArteries",
        desc: "Discover the blood supply system of the brain.",
      },
      {
        href: "/nerve-cross-section",
        name: "Nerve Cross Section",
        modelType: "nerveCrossSection",
        desc: "Examine the internal structure of a nerve.",
      },
      {
        href: "/cranial-nerve-nuclei",
        name: "Cranial Nerve Nuclei",
        modelType: "cranialNerveNuclei",
        desc: "Learn about the origins of cranial nerves.",
      },
      {
        href: "/phineas-gage",
        name: "Skull of Phineas Gage",
        modelType: "phineasGage",
        desc: "Study the famous case that changed neuroscience.",
      },
    ],
  };