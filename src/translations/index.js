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
      hobbiesSubtitle: 'Le passioni al di fuori del lavoro impattano la mia vita tanto quanto il lavoro stesso.',
      hobbies: [
        {
          title: 'Chitarra e Musica',
          description: 'Suono la chitarra da quando ero bambino, ho fatto diversi anni di lezione di classica e jazz e ho suonato in piccoli gruppi tra amici, dal rock al blues. ' + 
          'Negli anni ho sperimentato anche aspetti diversi inerenti alla musica. Durante le scuole superiori, ho frequentato un corso di mixing e registrazione in studio e tecnico luci live. In seguito ho partecipato ad alcuni piccoli eventi come aiuto fonico. ' +
          'Recentemente ho seguito qualche lezione di liuteria, con l\'idea di costruire una chitarra tipo Saint Vincent per un regalo a sorpresa.',
          icon: 'Music',
          media: {
            images: [
              { src: '/images/guitar1.jpg', alt: 'Chitarra acustica' },
              { src: '/images/guitar2.jpg', alt: 'Performance live' }
            ],
            documents: [],
            links: []
          }
        },
        {
          title: 'Vela',
          description: 'La vela mi ha insegnato pazienza, lettura delle condizioni meteo e lavoro di squadra. Navigo principalmente in Adriatico con uscite regolari.',
          icon: 'Waves',
          media: {
            images: [
              { src: '/images/sailing1.jpg', alt: 'Barca a vela' }
            ],
            documents: [],
            links: []
          }
        },
        {
          title: 'Cucina',
          description: 'Amo sperimentare in cucina, provando nuove ricette e tecniche culinarie. La cucina è un\'altra forma di creatività per me.',
          icon: 'ChefHat',
          media: {
            images: [
              { src: '/images/cooking1.jpg', alt: 'Preparazione di un piatto' },
              { src: '/images/cooking2.jpg', alt: 'Cucina gourmet' }
            ],
            documents: [],
            links: []
          }
        },
        {
          title: 'Fotografia',
          description: 'La fotografia è una mia grande passione. Mi piace catturare momenti e paesaggi, esplorando la bellezza del mondo attraverso l\'obiettivo.',
          icon: 'Camera',
          media: {
            images: [
              { src: '/images/photography1.jpg', alt: 'Paesaggio montano' },
              { src: '/images/photography2.jpg', alt: 'Ritratto' }
            ],
            documents: [],
            links: []
          }
        }
      ],
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
          logo: 'images/qilab-logo.png',
          title: 'Dottorato di Ricerca',
          company: 'Quantum Information Laboratory',
          location: 'Ferrara, Italia',
          period: '2023 - presente',
          shortDescription: 'Dottorando presso QI Lab, Università di Ferrara. Focus su quantum sensing e sistemi quantistici.',
          longDescription: `Dal 2023, sto svolgendo un dottorato di ricerca presso il [Quantum Information Laboratory (QI Lab)](https://wcln.unife.it) dell'Università degli studi di Ferrara. 
          Il focus dei miei studi sono le quantum information science e in particolare, il quantum sensing. 
          Le mie attività prevedono lo studio teorico di sistemi di sensing quantistico, usando stati non Gaussiani della radiazione elettromagnetico.`,
          skills: ['Quantum Mechanics', 'Python', 'MATLAB', 'Signal Processing', 'LaTeX'],
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
          logo: '/images/fpc-logo.png',
          title: 'Socio Fondatore e Membro del C.d.A.',
          company: 'FPC DIDATTICA 4.0 S.R.L.',
          location: 'Ferrara, Italia',
          period: '2021 - presente',
          shortDescription: 'Socio fondatore e membro del C.d.A. di FPC DIDATTICA 4.0 S.R.L., startup per la didattica privata di qualità e in regola.',
          longDescription: 'Nel 2021, ho co-fondato *FPC DIDATTICA 4.0 S.R.L.*, una startup nel settore della didattica privata avente come obiettivo lo sviluppo di una piattaforma web per promuovere didattica privata con insegnanti qualificati e in regola.\n\n' +
          'In tale contesto, sono parte del C.d.A., socio co-fondatore, mi occupo attivamente dello sviluppo del backend della piattaforma, della gestione dell\'infrastruttura cloud e della definizione degli obiettivi tecnici inerenti allo sviluppo.\n\n' +
          'Dal punto di vista tecnico, mi occupo della progettazione e implementazione di un backend REST, utilizzando il framework PHP-Yii2 e integrando API terze per i pagamenti, la fatturazione elettronica automatica e la localizzazione.',
          skills: [
            'PHP - Yii2', 'SQL', 'Docker', 'Git', 'Github'
          ],
          achievements: [
            'Design e sviluppo della piattaforma *Formando PerCorsi*',
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
          title: 'Laurea Magistrale in Ingegneria Elettronica per l\'ICT',
          company: 'Università degli Studi di Ferrara',
          location: 'Ferrara, Italia',
          period: '2021 - 2023',
          shortDescription: 'Laurea magistrale in ingegneria elettronica per l\'ICT con tesi "Analysis of quantum illumination systems"',
          longDescription: 'Nel 2023, ho conseguito la laurea magistrale (summa cum laude) in ingegneria elettronica per l\'ICT presso l\'Università degli Studi di Ferrara, con una tesi dal titolo "Analysis of quantum illumination systems".\n\n' +
          'Alcune competenze significative acquisite includono:\n\n' +
          '- Utilizzo delle teorie dell\'informazione, della stima e del test delle ipotesi per applicazioni di telecomunicazioni e di machine learning;\n' +
          '- Implementazione di reti neurali;\n' +
          '- Progettazione di sistemi analogici di alimentazione e per le comunicazioni;\n' +
          '- Implementazione di programmi di scambio dati peer-to-peer (GNutella, Kazaa, Napster e Torrent).\n\n' +
          'Durante l\'intero percorso inoltre, ho continuato ad approfondire aspetti legati alle Quantum Information Science all\'interno del [QI Lab](https://qilab.unife.it), approfondendo le tempatiche iniziate a studiare per la tesi di laurea triennale.',
          skills: ['Python', 'Matlab', 'Information Theory', 'Decision and Estimation Theory', 'Deep Learning', 'VHDL', 'C++ and System C'],
          achievements: [
          ],
            media: {
              images: [
              ],
              documents: [
                { src: '/thesis/AnalysisOfQuantumIlluminationSystems-FedericoForzano-MasterThesis.pdf', label: 'Tesi Magistrale' },
                { src: '/thesis/OnTheDesignOfQuantumCommunicationSystemsWithNonGaussianStates-FedericoForzano-BachelorThesis.pdf', label: 'Tesi Triennale' }
              ],
              links: [
                { url: 'https://github.com/FForzano/libp2p', label: 'Progetti Reti P2P' },
                { url: 'https://github.com/FForzano/DEDST-projects', label: 'Progetti TDSSD' },
                { url: 'https://github.com/FForzano/CPM-modem', label: 'Progetto modulatore e demodulatore CPM' }
              ]
            }
        },
        {
          id: 4,
          type: 'work',
          title: 'Insegnante Privato',
          logo: 'images/fpc-logo.png',
          company: 'Libero Professionista con Formando PerCorsi di Giovanni Govoni',
          location: 'Ferrara, Italia',
          period: '2019 - 2023',
          shortDescription: 'Insegnante privato di matematica, fisica, informatica per studenti di superiori e università.',
          longDescription: 'Insegnamento privato in matematica, fisica e informatica, con focus su studenti delle scuole superiori e universitari. Sviluppo di metodologie didattiche innovative e personalizzate.',
          longDescription: 'In parallelo agli studi Universitari, ho avuto modo di acquisire esperienza lavorativa come insegnante privato per studenti delle scuole superiori e universitari, in collaborazione con [*Formando PerCorsi di Giovanni Govoni*](https://formandopercorsi.com).\n\n' + 
          'Materie insegnate:\n\n' + 
          '- Matematica (scuole superiori);\n' +
          '- Fisica (scuole superiori);\n' +
          '- Informatica (C, C++, Java, Python);\n' +
          '- Analisi matematica 1 e 2;\n' +
          '- Teoria dei segnali e comunicazioni wireless.\n\n' + 
          'Quest\'attività, mi ha permesso di sviluppare competenze nella didattica, personalizzando i percorsi e l\'approccio usato da studente a studente. Inoltre, ho migliorato le mie capacità di gestione del tempo disponibile e dello stress.',
          skills: ['Didattica', 'Organizzazione di percorsi di studio', 'Gestione del tempo'],
          achievements: [
            'Oltre 50 studenti',
            'Più di 10 ore di lezione a settimana, in parallelo agli studi universitari',
            'Sviluppo di materiali didattici personalizzati',
            'Diversi studenti hanno intrapreso un percorso universitario STEM dopo il diploma',
            'La quasi totalità degli studenti ha completato con successo gli studi superiori'
          ],
            media: {
              images: [
              ],
              documents: [
              ],
              links: [
                { url: 'https://formandopercorsi.com', label: 'Formando PerCorsi di Giovanni Govoni' }
              ]
            }
        }
      ]
    },

    // Pubblicazioni e Progetti (unificata)
    publicationsAndProjects: {
      title: 'Pubblicazioni e Progetti',
      subtitle: 'Una panoramica delle mie pubblicazioni scientifiche e dei progetti sviluppati, dalla ricerca accademica alle applicazioni pratiche.',
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
      ],
      projectsList: [
        {
          title: 'Formando PerCorsi',
          description: 'Piattaforma innovativa che collega insegnanti qualificati con famiglie in tutta Italia, garantendo qualità e regolarità nelle lezioni private.'
        }      ]
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
      hobbies: [
        {
          title: 'Guitar & Music',
          description: 'I have been playing guitar for over 10 years, from rock to blues to fingerpicking. Music is my greatest passion and helps me express creativity.',
          icon: 'Music',
          media: {
            images: [
              { src: '/images/guitar1.jpg', alt: 'Acoustic guitar' },
              { src: '/images/guitar2.jpg', alt: 'Live performance' }
            ],
            documents: [],
            links: []
          }
        },
        {
          title: 'Sailing',
          description: 'Sailing has taught me patience, reading weather conditions, and teamwork. I mainly sail in the Adriatic with regular outings.',
          icon: 'Waves',
          media: {
            images: [
              { src: '/images/sailing1.jpg', alt: 'Sailboat' }
            ],
            documents: [],
            links: []
          }
        },
        {
          title: 'Cooking',
          description: 'I love experimenting in the kitchen, trying new recipes and culinary techniques. Cooking is another form of creativity for me.',
          icon: 'ChefHat',
          media: {
            images: [
              { src: '/images/cooking1.jpg', alt: 'Preparing a dish' }
            ],
            documents: [],
            links: []
          }
        }
      ],
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
      subtitle: 'A summary of my work and academic experiences, ranging from research in quantum information science to software development and teaching.',
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
          longDescription: `Since 2023, I have been pursuing a PhD at the [Quantum Information Laboratory (QI Lab)](https://wcln.unife.it) of the University of Ferrara.\nThe focus of my studies is quantum information science, particularly quantum sensing.\nMy activities include the theoretical study of quantum sensing systems, using non-Gaussian states of electromagnetic radiation.`,
          skills: ['Quantum Mechanics', 'Python', 'MATLAB', 'Signal Processing', 'LaTeX'],
          achievements: [
            {
              main: 'Scientific paper writing',
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
            "Didactic labs on network management tools for computer science and electronic engineering students, as part of the 'Telecommunication Networks and Internet' course at the University of Ferrara.",
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
          shortDescription: 'Co-founder and board member of FPC DIDATTICA 4.0 S.R.L., a startup for high-quality and legitimate private teaching.',
          longDescription: 'In 2021, I co-founded *FPC DIDATTICA 4.0 S.R.L.*, a startup in the private education sector aimed at developing a web platform to promote private teaching with qualified and legitimate teachers.\n\nIn this context, I am part of the board of directors, co-founder, and actively involved in backend development, cloud infrastructure management, and defining technical objectives.\n\nFrom a technical perspective, I design and implement a REST backend using the PHP-Yii2 framework, integrating third-party APIs for payments, automatic electronic invoicing, and localization.',
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
          title: 'Master\'s Degree in Electronic Engineering for ICT',
          company: 'University of Ferrara',
          location: 'Ferrara, Italy',
          period: '2021 - 2023',
          shortDescription: 'Master\'s degree in electronic engineering for ICT with thesis "Analysis of quantum illumination systems"',
          longDescription: 'In 2023, I obtained my master\'s degree (summa cum laude) in electronic engineering for ICT at the University of Ferrara, with a thesis entitled "Analysis of quantum illumination systems".\n\nSome significant skills acquired include:\n\n- Use of information, estimation, and hypothesis testing theories for telecommunications and machine learning applications;\n- Implementation of neural networks;\n- Design of analog power and communication systems;\n- Implementation of peer-to-peer data exchange programs (GNutella, Kazaa, Napster, and Torrent).\n\nThroughout the course, I also continued to deepen aspects related to Quantum Information Science within the [QI Lab](https://qilab.unife.it), expanding on topics started during my bachelor’s thesis.',
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
                { url: 'https://github.com/FForzano/DEDST-projects', label: 'DEDST Projects' },
                { url: 'https://github.com/FForzano/CPM-modem', label: 'CPM modulator and demodulator implementation' }
              ]
            }
        },
        {
          id: 4,
          type: 'work',
          title: 'Private Teacher',
          logo: 'images/fpc-logo.png',
          company: 'Freelancer with Formando PerCorsi di Giovanni Govoni',
          location: 'Ferrara, Italy',
          period: '2019 - 2023',
          shortDescription: 'Private teacher of mathematics, physics, computer science for high school and university students.',
          longDescription: 'Alongside my university studies, I gained work experience as a private teacher for high school and university students, in collaboration with [*Formando PerCorsi di Giovanni Govoni*](https://formandopercorsi.com).\n\nSubjects taught:\n\n- Mathematics (high school);\n- Physics (high school);\n- Computer science (C, C++, Java, Python);\n- Calculus 1 and 2;\n- Signal theory and wireless communications.\n\nThis activity allowed me to develop teaching skills, personalizing the learning path and approach for each student. I also improved my time and stress management skills.',
          skills: ['Teaching', 'Study path organization', 'Time management'],
          achievements: [
            'Over 50 students',
            'More than 10 hours of lessons per week, alongside university studies',
            'Development of personalized teaching materials',
            'Several students have chosen a STEM university path after graduation',
            'Almost all students have successfully completed high school'
          ],
            media: {
              images: [
              ],
              documents: [
              ],
              links: [
                { url: 'https://formandopercorsi.com', label: 'Formando PerCorsi di Giovanni Govoni' }
              ]
            }
        }
      ]
    },

    // Pubblicazioni e Progetti (unificata)
    publicationsAndProjects: {
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
      ],
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
