import { BookOpen, Command, LifeBuoy, Send } from "lucide-react";
import { useTranslations } from 'next-intl';

export const getSidebarData = () => {
  const t = useTranslations('sidebar.models');

  return {
    navMain: [
      {
        title: "Models",
        url: "#",
        icon: Command,
        isActive: true,
      },
/*       {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: false,
      }, */
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
        name: t('brainLobs.name'),
        modelType: "brainLobs",
        desc: t('brainLobs.desc'),
      },
      {
        href: "/limbic-system",
        name: t('limbicSystem.name'),
        modelType: "limbicSystem",
        desc: t('limbicSystem.desc'),
      },
      {
        href: "/neuron",
        name: t('neuron.name'),
        modelType: "neuron",
        desc: t('neuron.desc'),
      },
      {
        href: "/visual-pathway",
        name: t('visualPathway.name'),
        modelType: "visualPathway",
        desc: t('visualPathway.desc'),
      },
      {
        href: "/cerebral-arteries",
        name: t('cerebralArteries.name'),
        modelType: "cerebralArteries",
        desc: t('cerebralArteries.desc'),
      },
      {
        href: "/ventricular-system",
        name: t('ventricularSystem.name'),
        modelType: "ventricularSystem",
        desc: t('ventricularSystem.desc'),
      },
      {
        href: "/nerve-cross-section",
        name: t('nerveCrossSection.name'),
        modelType: "nerveCrossSection",
        desc: t('nerveCrossSection.desc'),
      },
      {
        href: "/brodmann-areas",
        name: t('brodmannAreasAndPathologies.name'),
        modelType: "brodmannAreasAndPathologies",
        desc: t('brodmannAreasAndPathologies.desc'),
      },
      {
        href: "/phineas-gage",
        name: t('phineasGage.name'),
        modelType: "phineasGage",
        desc: t('phineasGage.desc'),
      },
    ],
  };
};