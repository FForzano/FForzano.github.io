const experience = {
  title: 'Professional Experiences',
  subtitle: "A summary of my work and academic experiences, ranging from research in quantum information science to software development and teaching.",
  resultsLabel: 'results',
  moreLabel: 'more',
  detailsModal: {
    description: 'Description',
    skills: 'Skills',
    achievements: 'Main Results',
    materials: 'Materials',
    mediaLabels: {
      images: 'Images',
      documents: 'Documents',
      links: 'Links'
    }
  },
  positions: [
    {
      id: 1,
      type: 'education',
      logo: 'images/qilab-logo.png',
      title: 'PhD Student',
      company: 'Quantum Information Laboratory',
      location: 'Ferrara, Italy',
      period: '2023 - present',
      shortDescription: 'PhD student at QI Lab, University of Ferrara. Focus on quantum sensing and quantum systems.',
      longDescription: `Since 2023, I have been pursuing a PhD at the [Quantum Information Laboratory (QI Lab)](https://wcln.unife.it) at the University of Ferrara.\nThe focus of my studies is quantum information science, particularly quantum sensing.\nMy activities include the theoretical study of quantum sensing systems, using non-Gaussian states of electromagnetic radiation.`,
      skills: ['Quantum Mechanics', 'Python', 'MATLAB', 'Signal Processing', 'LaTeX'],
      achievements: [
        {
          main: 'Writing scientific papers',
          sub: [
            {
              reference: 'F. Forzano, A. Giani, S. Marano, M. Z. Win, A. Conti, "Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States," InfoCom, London, UK, May 2025.',
              pdf: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf'
            }
          ]
        },
        {
          main: 'Thesis co-supervisor and tutor',
          sub: [
            {
              reference: 'A. Balotta, "Development of educational experiences for communication networks," B.S. Thesis, Dept. Eng., Univ. Ferrara, Ferrara, Italy, 2024. Supervisor: Prof. A. Conti; Co-supervisor: F. Forzano.'
            },
            {
              reference: 'A. Calò, "EEG signal denoising for brain-computer interfaces," B.S. Thesis, Dept. Eng., Univ. Ferrara, Ferrara, Italy, 2024. Supervisor: Prof. A. Conti; Co-supervisor: F. Forzano.'
            }
          ]
        },
        "Teaching labs on network management tools for computer science and electronic engineering students, as part of the 'Telecommunications and Internet Networks' course at the University of Ferrara.",
        "Teaching assistant for the course 'Probability, Statistics and Signals'"
      ],
      media: {
        images: [
        ],
        documents: [
          { src: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf', label: 'Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States' },
        ],
        links: [
          { url: 'https://wcln.unife.it/', label: 'WCLN Lab Website' },
          { url: 'https://qilab.unife.it/', label: 'QI Lab Website' }
        ]
      }
    },
    {
      id: 2,
      type: 'work',
      logo: '/images/fpc-logo.png',
      title: 'Co-founder and Board Member',
      company: 'FPC DIDATTICA 4.0 S.R.L.',
      location: 'Ferrara, Italy',
      period: '2021 - present',
      shortDescription: 'Co-founder and board member of FPC DIDATTICA 4.0 S.R.L., a startup for high-quality and compliant private teaching.',
      longDescription: 'In 2021, I co-founded *FPC DIDATTICA 4.0 S.R.L.*, a startup in the private teaching sector aiming to develop a web platform to promote private teaching with qualified and compliant teachers.\n\nIn this context, I am part of the board, co-founder, and actively involved in backend development, cloud infrastructure management, and defining technical objectives for development.\n\nFrom a technical perspective, I design and implement a REST backend using the PHP-Yii2 framework, integrating third-party APIs for payments, automatic electronic invoicing, and localization.',
      skills: [
        'PHP - Yii2', 'SQL', 'Docker', 'Git', 'Github'
      ],
      achievements: [
        'Design and development of the *Formando PerCorsi* platform',
      ],
      media: {
        images: [
        ],
        documents: [
        ],
        links: [
          { url: 'https://dev.formandopercorsi.com/', label: 'Formando PerCorsi' },
          { url: 'https://www.linkedin.com/company/formando-percorsi/', label: 'LinkedIn' }
        ]
      }
    },
    {
      id: 3,
      type: 'education',
      logo: 'images/unife-logo.jpeg',
      title: 'Master’s Degree in Electronic Engineering for ICT',
      company: 'University of Ferrara',
      location: 'Ferrara, Italy',
      period: '2021 - 2023',
      shortDescription: 'Master’s degree in electronic engineering for ICT with thesis "Analysis of quantum illumination systems"',
      longDescription: 'In 2023, I obtained my master’s degree (summa cum laude) in electronic engineering for ICT at the University of Ferrara, with a thesis entitled "Analysis of quantum illumination systems".\n\nSome significant skills acquired include:\n\n- Use of information, estimation, and hypothesis testing theories for telecommunications and machine learning applications;\n- Implementation of neural networks;\n- Design of analog power and communication systems;\n- Implementation of peer-to-peer data exchange programs (GNutella, Kazaa, Napster, and Torrent).\n\nThroughout the course, I also continued to deepen aspects related to Quantum Information Science within the [QI Lab](https://qilab.unife.it), exploring topics started during my bachelor’s thesis.',
      skills: ['Python', 'Matlab', 'Information Theory', 'Decision and Estimation Theory', 'Deep Learning', 'VHDL', 'C++ and System C'],
      achievements: [
      ],
      media: {
        images: [
        ],
        documents: [
          { src: '/thesis/AnalysisOfQuantumIlluminationSystems-FedericoForzano-MasterThesis.pdf', label: 'Master’s Thesis' },
          { src: '/thesis/OnTheDesignOfQuantumCommunicationSystemsWithNonGaussianStates-FedericoForzano-BachelorThesis.pdf', label: 'Bachelor’s Thesis' }
        ],
        links: [
          { url: 'https://github.com/FForzano/libp2p', label: 'P2P Networks Projects' },
          { url: 'https://github.com/FForzano/DEDST-projects', label: 'TDSSD Projects' },
          { url: 'https://github.com/FForzano/CPM-modem', label: 'CPM Modulator and Demodulator Project' }
        ]
      }
    },
    {
      id: 4,
      type: 'work',
      title: 'Private Teacher',
      logo: 'images/fpc-logo.png',
      company: 'Freelancer with Formando PerCorsi by Giovanni Govoni',
      location: 'Ferrara, Italy',
      period: '2019 - 2023',
      shortDescription: 'Private teacher of mathematics, physics, and computer science for high school and university students.',
      longDescription: 'Alongside my university studies, I gained work experience as a private teacher for high school and university students, in collaboration with [*Formando PerCorsi by Giovanni Govoni*](https://formandopercorsi.com).\n\nSubjects taught:\n\n- Mathematics (high school);\n- Physics (high school);\n- Computer science (C, C++, Java, Python);\n- Mathematical analysis 1 and 2;\n- Signal theory and wireless communications.\n\nThis activity allowed me to develop teaching skills, personalizing the paths and approach used from student to student. I also improved my time management and stress management skills.',
      skills: ['Teaching', 'Study path organization', 'Time management'],
      achievements: [
        'Over 50 students',
        'More than 10 hours of lessons per week, alongside university studies',
        'Development of personalized teaching materials',
        'Several students have undertaken a STEM university path after graduation',
        'Almost all students successfully completed high school'
      ],
      media: {
        images: [
        ],
        documents: [
        ],
        links: [
          { url: 'https://formandopercorsi.com', label: 'Formando PerCorsi by Giovanni Govoni' }
        ]
      }
    }
  ]
};

export default experience;
