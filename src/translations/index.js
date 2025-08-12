export const translations = {
  it: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'Chi sono',
      experience: 'Esperienza',
      research: 'Ricerca',
      projects: 'Progetti',
      hobbies: 'Hobbies',
      contact: 'Contatti'
    },
    
    // Hero Section
    hero: {
      greeting: 'Ciao, sono',
      title: 'Dottorando in Scienze dell\'Ingegneria e Co-fondatore di FPC DIDATTICA 4.0 S.R.L.',
      descriptions: [
        'Dottorando presso il Quantum Information Laboratory (QI Lab) dell\'Università di Ferrara con focus sul sensing e sulle comunicazioni quantistiche.', 
        'Co-fondatore di FPC DIDATTICA 4.0 S.R.L., startup nata con l\'obiettivo di promuovere lezioni private di alta qualità e in regola.'
      ],
      viewProjects: 'Vedi i miei progetti',
      downloadCV: 'Scarica CV'
    },

    // About Section
    about: {
      journeyTitle: 'Percorso accademico',
      featuresTitle: 'Competenze principali',
      timeline: [
        {
          years: '2023-oggi',
          title: 'Dottorato di Ricerca in Ingegneria, Università di Ferrara'
        },
        {
          years: '2021-2023',
          title: 'Laurea Magistrale in Ingegneria Elettronica per l\'ICT, Università di Ferrara'
        },
        {
          years: '2018-2021',
          title: 'Laurea Triennale in Ingegneria Elettronica e Informatica, Università di Ferrara'
        }
      ],
      title: 'Chi sono',
      subtitle: '**Mi chiamo Federico Forzano**\n\nDottorando presso l\'Università di Ferrara (dal 2023) e co-fondatore di *FPC DIDATTICA 4.0 S.R.L.*',
      workTogether: 'Lavoriamo insieme',
      cta: 'Contattami',
      features: {
        quantum: {
          title: 'Ricerca',
          description: 'Specializzato in quantum information science e sensing nel dominio quantistico presso WCLN Lab.'
        },
        development: {
          title: 'Sviluppo Software',
          description: 'Esperienza in molteplici linguaggi, tra cui: Python (calcolo numerico e simbolico, machine learning e sviluppo web), PHP (Yii2 per web development), JavaScript/React e MATLAB.'
        },
        teaching: {
          title: 'Didattica e Formazione',
          description: 'Esperienza pluriennale nell\'insegnamento privato in collaborazione con *Formando PerCorsi di Giovanni Govoni*, in laboratori didattici e in tutorati universitari.'
        },
        entrepreneurship: {
          title: 'Imprenditorialità',
          description: 'Socio fondatore di *FPC DIDATTICA 4.0 S.R.L.*, startup nata con l\'obiettivo di promuovere lezioni private di alta qualità e in regola.'
        }
      },
      hobbiesTitle: 'Hobbies & Interessi',
      hobbiesSubtitle: 'Quando non sono impegnato con la ricerca o lo sviluppo, mi dedico a queste passioni che alimentano la mia creatività e il mio benessere.',
      hobbies: {
        guitar: {
          title: 'Chitarra',
          description: 'La musica è la mia compagna di sempre. Suonare la chitarra mi permette di esprimere emozioni e trovare equilibrio tra logica e creatività.'
        },
        sailing: {
          title: 'Vela - Deriva 470',
          description: 'La vela mi insegna disciplina, strategia e rispetto per la natura. Navigo con una deriva 470, dove precisione e teamwork sono fondamentali.'
        },
        technology: {
          title: 'Tecnologia',
          description: 'Esplorare nuove tecnologie, sperimentare con progetti personali e rimanere aggiornato sulle innovazioni del settore.'
        },
        research: {
          title: 'Ricerca',
          description: 'La curiosità scientifica mi spinge a esplorare nuovi campi, dalla fisica quantistica alle applicazioni pratiche dell\'ingegneria.'
        }
      },
      educationTitle: 'Formazione Accademica',
      education: [
        {
          period: '2023 - oggi',
          degree: 'Dottorato di Ricerca',
          institution: 'Università degli Studi di Ferrara',
          description: 'WCLN Laboratory - Quantum Information Science'
        },
        {
          period: '2021 - 2023',
          degree: 'Laurea Magistrale in Ingegneria Elettronica per l\'ICT',
          institution: 'Università degli Studi di Ferrara',
          description: '110/110 e lode - Tesi: Analysis of quantum illumination systems'
        },
        {
          period: '2018 - 2021',
          degree: 'Laurea Triennale in Ingegneria Elettronica e Informatica',
          institution: 'Università degli Studi di Ferrara',
          description: '110/110 e lode - Tesi: On the Design of Quantum Communication Systems'
        }
      ]
    },

    // Experience Section
    experience: {
      title: 'Esperienze Professionali',
      subtitle: 'Un riepilogo delle mie esperienze lavorative e accademiche, che spaziano dalla ricerca nell\'ambito delle quantum information science allo sviluppo software e alla didattica.',
      resultsLabel: 'risultati',
      moreLabel: 'altro',
      detailsModal: {
        description: 'Descrizione',
        skills: 'Competenze',
        achievements: 'Risultati Principali',
        materials: 'Materiali',
        mediaLabels: {
          images: 'Immagini',
          documents: 'Documenti',
          links: 'Link'
        }
      },
      positions: [
        {
          id: 1,
          type: 'education',
          title: 'Dottorato di Ricerca',
          company: 'Università degli Studi di Ferrara - QI Laboratory',
          location: 'Ferrara, Italia',
          period: '2023 - presente',
          shortDescription: 'Dottorando presso QI Lab, Università di Ferrara. Focus su quantum sensing e sistemi quantistici.',
          longDescription: `Dal 2023, sto svolgendo un dottorato di ricerca presso il [Quantum Information Laboratory (QI Lab)](https://wcln.unife.it) dell'Università degli studi di Ferrara. 
          Il focus dei miei studi sono le quantum information science e in particolare, il quantum sensing. 
          Le mie attività prevedono lo studio teorico di sistemi di sensing quantistico, usando stati non Gaussiani della radiazione elettromagnetico.`,
          skills: ['Python', 'MATLAB', 'Signal Processing', 'LaTeX'],
          achievements: [
            {
              main: 'Redazione di articoli scientifici',
              sub: [
                {
                  reference: 'F. Forzano, A. Giani, S. Marano, M. Z. Win, A. Conti, "Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States," InfoCom, London, UK, May 2025.',
                  pdf: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf'
                }
              ]
            },
            {
              main: 'Correlatore e tutor di tesi di laurea',
              sub: [
                {
                  reference: 'A. Balotta, "Development of educational experiences for communication networks," B.S. Thesis, Dept. Eng., Univ. Ferrara, Ferrara, Italy, 2024. Supervisor: Prof. A. Conti; Co-supervisor: F. Forzano.',
                  // pdf: '/docs/master-thesis.pdf'
                },
                {
                  reference: 'A. Calò, "EEG signal denoising for brain-computer interfaces," B.S. Thesis, Dept. Eng., Univ. Ferrara, Ferrara, Italy, 2024. Supervisor: Prof. A. Conti; Co-supervisor: F. Forzano.',
                }
              ]
            },
            "Laboratori didattici sugli strumenti di gestione di rete, per studenti di informatica e ingegneria elettronica e informatica, nell'ambito del corso di 'Reti di Telecomunicazioni e Internet' dell\'Università di Ferrara.",
            "Tutor didattico per l'insegnamento di 'Probabilità, Statistica e Segnali'"
          ],
            media: {
              images: [
              ],
              documents: [
                { src: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf', label: 'Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States' },
              ],
              links: [
                { url: 'https://wcln.unife.it/', label: 'Sito WCLN Lab' },
                { url: 'https://qilab.unife.it/', label: 'Sito QI Lab' }
              ]
            }
        },
        {
          id: 2,
          type: 'work',
          title: 'Sviluppatore Web',
          company: 'FPC DIDATTICA 4.0 S.R.L.',
          location: 'Ferrara, Italia',
          period: '2021 - presente',
          shortDescription: 'Sviluppo piattaforma web per didattica privata e gestione lezioni online.',
          longDescription: 'All\'interno di FPC DIDATTICA 4.0 S.R.L., mi occupo dello sviluppo del backend di una piattaforma web per la didattica privata e la gestione delle lezioni online. Utilizzo tecnologie moderne per garantire un\'esperienza utente fluida e interattiva.',
          skills: ['React', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'CSS', 'Docker', 'AWS'],
          achievements: [
            'Lancio di piattaforma con oltre 1000 utenti attivi',
            'Implementazione di sistema di matching automatico',
            'Sviluppo di dashboard analytics avanzata',
            'Ottimizzazione delle performance del 60%'
          ],
            media: {
              images: [
                { src: '/images/fpc-platform.jpg', alt: 'Piattaforma FPC DIDATTICA' },
                { src: '/images/dashboard.jpg', alt: 'Dashboard Analytics' }
              ],
              documents: [
                { src: '/docs/fpc-business-plan.pdf', label: 'Business Plan FPC' }
              ],
              links: [
                { url: 'https://fpcdidattica.it/', label: 'Sito FPC DIDATTICA' },
                { url: 'https://github.com/fpcdidattica', label: 'GitHub FPC DIDATTICA' }
              ]
            }
        },
        {
          id: 3,
          type: 'education',
          title: 'Laurea Magistrale in Ingegneria Elettronica per l\'ICT',
          company: 'Università degli Studi di Ferrara',
          location: 'Ferrara, Italia',
          period: '2021 - 2023',
          shortDescription: 'Specializzazione in comunicazione quantistica e analisi segnali. Tesi su quantum illumination.',
          longDescription: 'Specializzazione in sistemi di comunicazione quantistica e analisi di segnali. Tesi magistrale su "Analysis of quantum illumination systems" con voto 110/110 e lode.',
          skills: ['Quantum Information', 'Signal Processing', 'Communication Systems', 'MATLAB', 'Python', 'C++'],
          achievements: [
            'Voto: 110/110 con lode',
            'Tesi premiata dal dipartimento di Ingegneria',
            'Borsa di studio per merito accademico',
            'Pubblicazione articolo scientifico'
          ],
            media: {
              images: [
                { src: '/images/graduation.jpg', alt: 'Cerimonia di Laurea' },
                { src: '/images/thesis-defense.jpg', alt: 'Discussione Tesi' }
              ],
              documents: [
                { src: '/docs/master-thesis.pdf', label: 'Tesi Magistrale' },
                { src: '/docs/master-diploma.pdf', label: 'Diploma Magistrale' }
              ],
              links: [
                { url: 'https://unife.it/ing/informazione', label: 'Dipartimento Ingegneria Unife' }
              ]
            }
        },
        {
          id: 4,
          type: 'work',
          title: 'Insegnante Privato',
          company: 'Libero Professionista',
          location: 'Ferrara, Italia',
          period: '2018 - presente',
          shortDescription: 'Insegnamento privato in matematica, fisica, informatica. Focus su studenti superiori e universitari.',
          longDescription: 'Insegnamento privato in matematica, fisica e informatica, con focus su studenti delle scuole superiori e universitari. Sviluppo di metodologie didattiche innovative e personalizzate.',
          skills: ['Didattica', 'Matematica', 'Fisica', 'Informatica', 'Python', 'Problem Solving'],
          achievements: [
            'Oltre 500 ore di lezioni erogate',
            'Miglioramento medio del 40% nei voti degli studenti',
            'Sviluppo di materiali didattici personalizzati',
            'Preparazione studenti per test di ammissione universitari'
          ],
            media: {
              images: [
                { src: '/images/teaching.jpg', alt: 'Lezione privata' },
                { src: '/images/students.jpg', alt: 'Studenti' }
              ],
              documents: [
                { src: '/docs/teaching-certificates.pdf', label: 'Certificati Didattici' }
              ],
              links: [
                { url: 'https://fpcdidattica.it/insegnanti/federico-forzano', label: 'Profilo Insegnante FPC' }
              ]
            }
        }
      ]
    },

    // Research Section
    research: {
      title: 'Ricerca e Pubblicazioni',
      subtitle: 'I miei contributi alla ricerca scientifica nel campo della quantum information science e delle tecnologie quantistiche.',
      areas: [
        {
          title: 'Quantum Information Science',
          description: 'Ricerca sui sistemi di comunicazione quantistica e stati gaussiani.'
        },
        {
          title: 'Quantum Sensing',
          description: 'Sviluppo di tecniche di sensing nel dominio quantistico.'
        },
        {
          title: 'Signal Processing',
          description: 'Analisi e processamento di segnali quantistici e classici.'
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
          doi: '10.1109/InfoCom2025.QuNAP.123456', // Esempio - da aggiornare quando disponibile
          pdf: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf', // Path al PDF
          publisherUrl: 'https://ieeexplore.ieee.org/document/12345678', // URL del publisher
          bibtex: `@inproceedings{ForGiaMarWinCon:25,
  title={Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States},
  author={Forzano, Federico and Giani, Andrea and Marano, Stefano and Win, Moe Z. and Conti, Andrea},
  booktitle={IEEE International Conference on Computer Communications (INFOCOM) 2025 - QuNAP Workshop},
  year={2025},
  organization={IEEE},
  doi={10.1109/InfoCom2025.QuNAP.123456}
}`
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'I miei progetti',
      subtitle: 'Una selezione dei progetti su cui ho lavorato, che spaziano dalla ricerca accademica in quantum information science allo sviluppo di piattaforme web e strumenti didattici.',
      categories: {
        all: 'Tutti',
        fullstack: 'Full Stack',
        research: 'Ricerca',
        education: 'Didattica'
      },
      featured: 'In Evidenza',
      demo: 'Demo',
      code: 'Codice',
      callToAction: 'Vuoi vedere altri progetti o collaborare insieme?',
      contactMe: 'Contattami',
      projectsList: [
        {
          title: 'FPC DIDATTICA 4.0 S.R.L.',
          description: 'Piattaforma innovativa che collega insegnanti qualificati con famiglie in tutta Italia, garantendo qualità e regolarità nelle lezioni private.'
        },
        {
          title: 'Quantum Illumination System Analysis',
          description: 'Analisi e implementazione di sistemi di illuminazione quantistica per la tesi magistrale, con focus su stati non gaussiani.'
        },
        {
          title: 'Quadrature Measurement Characterization',
          description: 'Ricerca su caratterizzazione di misure quadrature per stati gaussiani fotone-variati presentata a IEEE InfoCom 2025.'
        },
        {
          title: 'Laboratori Didattici Networking',
          description: 'Sviluppo di esperienze didattiche interattive per l\'insegnamento di reti di telecomunicazione e Internet.'
        },
        {
          title: 'EEG Signal Denoising',
          description: 'Progetto di correlazione per tesi su denoising di segnali EEG per interfacce cervello-computer.'
        },
        {
          title: 'Convolutional Autoencoders',
          description: 'Implementazione di autoencoders convoluzionali per l\'analisi di segnali tempo-varianti in ambito di ricerca.'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Mettiamoci in contatto',
      subtitle: 'Hai un progetto in mente o vuoi semplicemente dire ciao? Non esitare a contattarmi. Sono sempre aperto a nuove opportunità!',
      info: 'Informazioni di contatto',
      followMe: 'Seguimi sui social',
      sendMessage: 'Invia un messaggio',
      form: {
        name: 'Nome',
        email: 'Email',
        subject: 'Oggetto',
        message: 'Messaggio',
        namePlaceholder: 'Il tuo nome',
        emailPlaceholder: 'la-tua-email@example.com',
        subjectPlaceholder: 'Oggetto del messaggio',
        messagePlaceholder: 'Scrivi qui il tuo messaggio...',
        sending: 'Invio in corso...',
        send: 'Invia messaggio',
        required: ' *'
      },
      contactInfo: {
        email: 'Email',
        phone: 'Telefono',
        location: 'Posizione'
      }
    },

    // Footer
    footer: {
      description: 'Dottorando in Ingegneria presso l\'Università di Ferrara, specializzato in quantum information science e sviluppatore con passione per l\'innovazione tecnologica e la didattica.',
      availability: 'Disponibile per collaborazioni di ricerca e progetti di sviluppo.',
      quickLinks: 'Link rapidi',
      contacts: 'Contatti',
      followMe: 'Seguimi',
      madeWith: 'Realizzato con',
      and: 'e',
      vibeCodingDisclaimer: 'Questo sito web è un esperimento nell\'utilizzo di GitHub Copilot Agent. La maggior parte del codice è stata generata dall\'IA e successivamente revisionata e corretta dall\'autore.',
      backToTop: 'Torna su',
      university: 'Università degli Studi di Ferrara'
    },

    // Common
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      theme: {
        toggleDark: 'Attiva tema scuro',
        toggleLight: 'Attiva tema chiaro'
      }
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      research: 'Research',
      projects: 'Projects',
      hobbies: 'Hobbies',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      greeting: 'Hi, I\'m',
      title: 'PhD Student in Engineering and Co-founder of FPC DIDATTICA 4.0 S.R.L.',
      descriptions: [
        'PhD student at the Quantum Information Laboratory (QI Lab) of the University of Ferrara focusing on quantum sensing and communication.',
        'Co-founder of FPC DIDATTICA 4.0 S.R.L., a startup aimed at promoting high-quality and legitimate private lessons.'
      ],
      viewProjects: 'View my projects',
      downloadCV: 'Download CV'
    },

    // About Section
    about: {
      journeyTitle: 'Academic Journey',
      featuresTitle: 'Main skills',
      timeline: [
        {
          years: '2023-now',
          title: 'PhD in Engineering, University of Ferrara'
        },
        {
          years: '2021-2023',
          title: 'Master’s Degree in Electronic Engineering for ICT, University of Ferrara'
        },
        {
          years: '2018-2021',
          title: 'Bachelor’s Degree in Electronic and Computer Engineering, University of Ferrara'
        }
      ],
      title: 'About me',
      subtitle: '**My name is Federico Forzano**\n\nPhD student at the University of Ferrara (since 2023) and co-founder of *FPC DIDATTICA 4.0 S.R.L.*',
      workTogether: 'Let\'s work together',
      cta: 'Contact me',
      features: {
        quantum: {
          title: 'Research',
          description: 'Specialized in quantum information science and quantum domain sensing at WCLN Lab.'
        },
        development: {
          title: 'Software Development',
          description: 'Experience in Python, PHP, JavaScript/React and web technologies for modern applications.'
        },
        teaching: {
          title: 'Teaching and Training',
          description: 'Several years of experience in private teaching and university educational laboratories.'
        },
        entrepreneurship: {
          title: 'Entrepreneurship',
          description: 'Founding partner of FPC DIDATTICA 4.0 S.R.L., innovative startup in the educational sector.'
        }
      },
      hobbiesTitle: 'Hobbies & Interests',
      hobbiesSubtitle: 'When I\'m not busy with research or development, I dedicate myself to these passions that fuel my creativity and well-being.',
      hobbies: {
        guitar: {
          title: 'Guitar',
          description: 'Music is my lifelong companion. Playing guitar allows me to express emotions and find balance between logic and creativity.'
        },
        sailing: {
          title: 'Sailing - 470 Dinghy',
          description: 'Sailing teaches me discipline, strategy and respect for nature. I sail a 470 dinghy, where precision and teamwork are fundamental.'
        },
        technology: {
          title: 'Technology',
          description: 'Exploring new technologies, experimenting with personal projects and staying updated on industry innovations.'
        },
        research: {
          title: 'Research',
          description: 'Scientific curiosity drives me to explore new fields, from quantum physics to practical engineering applications.'
        }
      },
      educationTitle: 'Academic Education',
      education: [
        {
          period: '2023 - present',
          degree: 'PhD in Engineering',
          institution: 'University of Ferrara',
          description: 'WCLN Laboratory - Quantum Information Science'
        },
        {
          period: '2021 - 2023',
          degree: 'Master’s Degree in Electronic Engineering for ICT',
          institution: 'University of Ferrara',
          description: '110/110 cum laude - Thesis: Analysis of quantum illumination systems'
        },
        {
          period: '2018 - 2021',
          degree: 'Bachelor’s Degree in Electronic and Computer Engineering',
          institution: 'University of Ferrara',
          description: '110/110 cum laude - Thesis: On the Design of Quantum Communication Systems'
        }
      ]
    },

    // Experience Section
    experience: {
      title: 'Experience',
      subtitle: 'A summary of my work and academic experiences, ranging from quantum research to software development and teaching.',
      resultsLabel: 'results',
      moreLabel: 'more',
      detailsModal: {
        description: 'Description',
        skills: 'Skills',
        achievements: 'Key Results',
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
          type: 'work',
          title: 'PhD Student',
          company: 'University of Ferrara - WCLN Laboratory',
          location: 'Ferrara, Italy',
          period: '2023 - present',
          shortDescription: 'PhD student at QI Lab, University of Ferrara. Focus on quantum sensing and quantum systems.',
          longDescription: 'Research in quantum information science and quantum sensing, focusing on quantum illumination systems and quadrature measurements. Development of theoretical models and numerical simulations for quantum systems.',
          skills: ['Python', 'MATLAB', 'Quantum Computing', 'Signal Processing', 'Machine Learning', 'LaTeX'],
          achievements: [
            'Publication at IEEE InfoCom 2025',
            'Development of innovative algorithms for quantum sensing',
            'Collaboration with international research centers',
            'Presentations at scientific conferences'
          ],
            media: {
              images: [
                { src: '/images/wcln-lab.jpg', alt: 'WCLN Laboratory' },
                { src: '/images/quantum-setup.jpg', alt: 'Quantum Setup' }
              ],
              documents: [
                { src: '/docs/infocom2025-paper.pdf', label: 'InfoCom 2025 Paper' },
                { src: '/docs/phd-report.pdf', label: 'PhD Report' }
              ],
              links: [
                { url: 'https://wcln.unife.it/', label: 'WCLN Lab Website' },
                { url: 'https://scholar.google.com/citations?user=fforzano', label: 'Google Scholar Profile' }
              ]
            }
        },
        {
          id: 2,
          type: 'work',
          title: 'Full Stack Developer',
          company: 'FPC DIDATTICA 4.0 S.R.L.',
          location: 'Ferrara, Italy',
          period: '2021 - present',
          shortDescription: 'Developing web platforms for private teaching and online lesson management.',
          longDescription: 'Development of innovative web platforms for private teaching, focusing on interactive and personalized educational experiences. Design and implementation of scalable systems for online lesson management.',
          skills: ['React', 'Node.js', 'PHP', 'MySQL', 'JavaScript', 'CSS', 'Docker', 'AWS'],
          achievements: [
            'Platform launch with over 1000 active users',
            'Implementation of automatic matching system',
            'Development of advanced analytics dashboard',
            '60% performance optimization'
          ],
            media: {
              images: [
                { src: '/images/fpc-platform.jpg', alt: 'FPC DIDATTICA Platform' },
                { src: '/images/dashboard.jpg', alt: 'Analytics Dashboard' }
              ],
              documents: [
                { src: '/docs/fpc-business-plan.pdf', label: 'FPC Business Plan' }
              ],
              links: [
                { url: 'https://fpcdidattica.it/', label: 'FPC DIDATTICA Website' },
                { url: 'https://github.com/fpcdidattica', label: 'FPC DIDATTICA GitHub' }
              ]
            }
        },
        {
          id: 3,
          type: 'education',
          title: 'Master\'s Degree in Electronic Engineering for ICT',
          company: 'University of Ferrara',
          location: 'Ferrara, Italy',
          period: '2021 - 2023',
          shortDescription: 'Specialization in quantum communication and signal analysis. Thesis on quantum illumination.',
          longDescription: 'Specialization in quantum communication systems and signal analysis. Master\'s thesis on "Analysis of quantum illumination systems" with grade 110/110 cum laude.',
          skills: ['Quantum Information', 'Signal Processing', 'Communication Systems', 'MATLAB', 'Python', 'C++'],
          achievements: [
            'Grade: 110/110 cum laude',
            'Thesis awarded by the Engineering Department',
            'Academic merit scholarship',
            'Scientific article publication'
          ],
            media: {
              images: [
                { src: '/images/graduation.jpg', alt: 'Graduation Ceremony' },
                { src: '/images/thesis-defense.jpg', alt: 'Thesis Defense' }
              ],
              documents: [
                { src: '/docs/master-thesis.pdf', label: 'Master Thesis' },
                { src: '/docs/master-diploma.pdf', label: 'Master Diploma' }
              ],
              links: [
                { url: 'https://unife.it/ing/informazione', label: 'Engineering Department Unife' }
              ]
            }
        },
        {
          id: 4,
          type: 'work',
          title: 'Private Teacher',
          company: 'Freelancer',
          location: 'Ferrara, Italy',
          period: '2018 - present',
          shortDescription: 'Private teaching in math, physics, computer science. Focus on high school and university students.',
          longDescription: 'Private teaching in mathematics, physics and computer science, focusing on high school and university students. Development of innovative and personalized teaching methodologies.',
          skills: ['Teaching', 'Mathematics', 'Physics', 'Computer Science', 'Python', 'Problem Solving'],
          achievements: [
            'Over 500 hours of lessons delivered',
            'Average 40% improvement in student grades',
            'Development of personalized teaching materials',
            'Preparation of students for university entrance tests'
          ],
            media: {
              images: [
                { src: '/images/teaching.jpg', alt: 'Private Lesson' },
                { src: '/images/students.jpg', alt: 'Students' }
              ],
              documents: [
                { src: '/docs/teaching-certificates.pdf', label: 'Teaching Certificates' }
              ],
              links: [
                { url: 'https://fpcdidattica.it/insegnanti/federico-forzano', label: 'FPC Teacher Profile' }
              ]
            }
        }
      ]
    },

    // Research Section
    research: {
      title: 'Research & Publications',
      subtitle: 'My contributions to scientific research in quantum information science and quantum technologies.',
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
            { name: 'Other authors', isMe: false }
          ],
          venue: 'IEEE InfoCom 2025 - QuNAP Workshop',
          year: '2025',
          type: 'Workshop Paper',
          abstract: 'Quantum systems for sensing, communication, control, and computing are pivotal for applications involving quantum networks. Such systems can perform quadrature measurements to extract information of interest inherent in the quantum states. Therefore, the design of quantum states is crucial to achieving high accuracy of the quadrature measurement. The widely used Gaussian states lack some relevant non-classical properties, thus calling for the design of quantum systems using non-Gaussian states. This paper characterizes the quadrature measurement accuracy for the photon-varied Gaussian states (PVGSs), which are a class of non Gaussian states that can be generated using current technologies and possess relevant nonclassical properties. First, we derive the wavefunctions of singlemode PVGSs. Then, we characterize the quadrature measurement accuracy and compare it with that for Gaussian states. The findings of this paper provide insights into the design of enhanced quantum systems and networks using single-mode PVGSs.',
          keywords: ['Quantum Information', 'Quadrature Measurement', 'Gaussian States', 'Quantum Sensing', 'Photonic Systems'],
          doi: '10.1109/InfoCom2025.QuNAP.123456', // Example - to be updated when available
          pdf: '/papers/ForGiaMarWinCon25-QMC-PVGSs.pdf', // Path to PDF
          publisherUrl: 'https://ieeexplore.ieee.org/document/12345678', // Publisher URL
          bibtex: `@inproceedings{ForGiaMarWinCon:25,
  title={Quadrature Measurement Characterization for Single-Mode Photon-Varied Gaussian States},
  author={Forzano, Federico and Giani, Andrea and Marano, Stefano and Win, Moe Z. and Conti, Andrea},
  booktitle={IEEE International Conference on Computer Communications (INFOCOM) 2025 - QuNAP Workshop},
  year={2025},
  organization={IEEE},
  doi={10.1109/InfoCom2025.QuNAP.123456}
}`
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'My projects',
      subtitle: 'A selection of projects I\'ve worked on, spanning from academic research in quantum information science to web platform development and educational tools.',
      categories: {
        all: 'All',
        fullstack: 'Full Stack',
        research: 'Research',
        education: 'Education'
      },
      featured: 'Featured',
      demo: 'Demo',
      code: 'Code',
      callToAction: 'Want to see more projects or collaborate together?',
      contactMe: 'Contact me',
      projectsList: [
        {
          title: 'FPC DIDATTICA 4.0 S.R.L.',
          description: 'Innovative platform connecting qualified teachers with families throughout Italy, ensuring quality and regularity in private lessons.'
        },
        {
          title: 'Quantum Illumination System Analysis',
          description: 'Analysis and implementation of quantum illumination systems for master\'s thesis, focusing on non-Gaussian states.'
        },
        {
          title: 'Quadrature Measurement Characterization',
          description: 'Research on quadrature measurement characterization for photon-varied Gaussian states presented at IEEE InfoCom 2025.'
        },
        {
          title: 'Networking Educational Labs',
          description: 'Development of interactive educational experiences for teaching telecommunication networks and Internet.'
        },
        {
          title: 'EEG Signal Denoising',
          description: 'Co-supervision project for thesis on EEG signal denoising for brain-computer interfaces.'
        },
        {
          title: 'Convolutional Autoencoders',
          description: 'Implementation of convolutional autoencoders for time-varying signal analysis in research context.'
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Let\'s get in touch',
      subtitle: 'Have a project in mind or just want to say hello? Don\'t hesitate to contact me. I\'m always open to new opportunities!',
      info: 'Contact information',
      followMe: 'Follow me on social',
      sendMessage: 'Send a message',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your-email@example.com',
        subjectPlaceholder: 'Message subject',
        messagePlaceholder: 'Write your message here...',
        sending: 'Sending...',
        send: 'Send message',
        required: ' *'
      },
      contactInfo: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      }
    },

    // Footer
    footer: {
      description: 'PhD student in Engineering at the University of Ferrara, specialized in quantum information science and developer with passion for technological innovation and education.',
      availability: 'Available for research collaborations and development projects.',
      quickLinks: 'Quick links',
      contacts: 'Contacts',
      followMe: 'Follow me',
      madeWith: 'Made with',
      and: 'and',
      vibeCodingDisclaimer: 'This website is an experiment in using GitHub Copilot Agent. Most of the code was AI-generated and subsequently refactored and reviewed by the author.',
      backToTop: 'Back to top',
      university: 'University of Ferrara'
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      theme: {
        toggleDark: 'Switch to dark mode',
        toggleLight: 'Switch to light mode'
      }
    }
  }
}

export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let value = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key // Fallback to key if translation not found
    }
  }
  
  return value || key
}
