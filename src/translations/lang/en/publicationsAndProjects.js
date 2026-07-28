const publicationsAndProjects = {
  title: 'Publications & Projects',
  subtitle: 'An overview of my scientific publications and developed projects, from academic research to practical applications.',
  areas: [
    {
      title: 'Quantum Information Science',
      description: 'Research on quantum communication systems and Gaussian states.'
    },
    {
      title: 'Quantum Sensing',
      description: 'Development of sensing techniques in the quantum domain.'
    },
    {
      title: 'Signal Processing',
      description: 'Analysis and processing of quantum and classical signals.'
    }
  ],
  publications: [
    {
      id: 1,
      title: 'Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States',
      authors: [
        { name: 'Federico Forzano', isMe: true },
        { name: 'Andrea Giani', isMe: false },
        { name: 'Stefano Marano', isMe: false },
        { name: 'Moe Z. Win', isMe: false },
        { name: 'Andrea Conti', isMe: false }
      ],
      venue: 'IEEE InfoCom 2025 - QuNAP Workshop',
      year: '2025',
      type: 'Workshop Paper',
      abstract: 'Quantum systems for sensing, communication, control, and computing are pivotal for applications involving quantum networks. Such systems can perform quadrature measurements to extract information of interest inherent in the quantum states. Therefore, the design of quantum states is crucial to achieving high accuracy of the quadrature measurement. The widely used Gaussian states lack some relevant non-classical properties, thus calling for the design of quantum systems using non-Gaussian states. This paper characterizes the quadrature measurement accuracy for the photon-varied Gaussian states (PVGSs), which are a class of non Gaussian states that can be generated using current technologies and possess relevant nonclassical properties. First, we derive the wavefunctions of singlemode PVGSs. Then, we characterize the quadrature measurement accuracy and compare it with that for Gaussian states. The findings of this paper provide insights into the design of enhanced quantum systems and networks using single-mode PVGSs.',
      keywords: ['Quantum Information', 'Quadrature Measurement', 'Gaussian States', 'Quantum Sensing', 'Photonic Systems'],
      doi: '10.1109/InfoCom2025.QuNAP.123456',
      pdf: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf',
      publisherUrl: 'https://ieeexplore.ieee.org/document/12345678',
      bibtex: `@inproceedings{ForGiaMarWinCon:25,\ntitle={Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States},\nauthor={Forzano, Federico and Giani, Andrea and Marano, Stefano and Win, Moe Z. and Conti, Andrea},\nbooktitle={IEEE International Conference on Computer Communications (INFOCOM) 2025 - QuNAP Workshop},\nyear={2025},\norganization={IEEE},\ndoi={10.1109/InfoCom2025.QuNAP.123456}\n}`
    }
  ],
  projectsList: [
    {
      title: 'Formando PerCorsi',
      description: "Formando PerCorsi is a private-tutoring startup I co-founded in 2021, connecting qualified, vetted teachers with families across Italy for compliant, high-quality private lessons. As co-founder and board member, I designed and built the platform's backend, a REST API on PHP/Yii2, and integrated payment processing, automated e-invoicing, and localization, while also managing the cloud infrastructure.",
      logo: '/images/fpc-logo.png',
      tech: ['PHP - Yii2', 'SQL', 'Docker'],
      links: [
        { label: 'Site', url: 'https://formandopercorsi.com' }
      ]
    },
    {
      id: 'xgsail',
      title: 'XGSail',
      description: 'XGSail turns raw GPS and wind sensor data from a sailing dinghy into actionable session analysis (VMG, maneuver detection, polar diagrams) through a self-hosted FastAPI + React platform I designed and built from scratch. It pairs with XGSail-E1, a companion ESP32-based hardware tracker, over an open, hardware-agnostic device protocol, so any sensor can plug in without forking the software.',
      logo: '/images/xgsail-logo.png',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'ESP32'],
      links: [
        { label: 'Site', url: 'https://xgsail.com' },
        { label: 'Software', url: 'https://github.com/FForzano/xgsail' },
        { label: 'Firmware', url: 'https://github.com/FForzano/xgsail-e1' }
      ]
    },
    {
      id: 'sailing-guide-470',
      title: '470 Sailing Guide (ITA)',
      description: "A complete Italian translation of Arthur Gurevitch's guide to the 470 dinghy, covering tuning, rigging, and racing technique for the class. Published and versioned openly on GitHub as an editable, community-contributable resource, with a free downloadable PDF.",
      links: [
        { label: 'PDF', url: 'https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf' },
        { label: 'Repository', url: 'https://github.com/FForzano/Manuale-470-ITA' },
        { label: 'Original (ENG)', url: 'https://github.com/FForzano/Manuale-470-ITA/blob/master/470-Manual-ENG.pdf' }
      ]
    }
  ]
};

export default publicationsAndProjects;
