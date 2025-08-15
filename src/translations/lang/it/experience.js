// Experience Section
const experience = {
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
};

export default experience;
