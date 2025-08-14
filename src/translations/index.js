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
      hobbiesSubtitle: 'Le passioni al di fuori del lavoro che impattano la mia vita tanto quanto il lavoro stesso.',
      hobbies: [
        {
          title: 'Chitarra e Musica',
          description: 'Suono la chitarra da oltre 10 anni, spaziando dal rock al blues al fingerpicking. La musica è la mia passione più grande e mi aiuta a esprimere creatività.',
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
                { url: 'https://de.unife.it/it', label: 'Dipartimento Ingegneria Unife' }
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
