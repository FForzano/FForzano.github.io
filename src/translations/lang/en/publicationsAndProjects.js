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
      description: 'Innovative platform that connects qualified teachers with families throughout Italy, ensuring quality and compliance in private lessons.'
    }
  ]
};

export default publicationsAndProjects;
