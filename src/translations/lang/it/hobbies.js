// Italian translation for hobbies.js
const hobbies = {
    title: 'Hobbies & Interessi',
    subtitle: 'Le passioni al di fuori del lavoro impattano la mia vita tanto quanto il lavoro stesso.',
    hobbies: [
        {
            key: 'guitar-music',
            title: 'Chitarra e Musica',
            description: [
                'Suono la chitarra da quando ero bambino, ho fatto diversi anni di lezione di classica e jazz e ho suonato in piccoli gruppi tra amici, dal rock al blues.', 
                {
                    type: 'carousel',
                    items: [
                        { type: 'image', src: 'images/mbc-photo-1.jpg', alt: 'MBC live 1' },
                        { type: 'image', src: 'images/mbc-photo-2.jpg', alt: 'MBC live 2' },
                        { type: 'image', src: 'images/hotheels-photo-1.jpg', alt: 'Hot Heels live' }
                    ]
                },                
                'Negli anni ho sperimentato anche aspetti diversi inerenti alla musica. Durante le scuole superiori, ho frequentato un corso di mixing e registrazione in studio e tecnico luci live. In seguito ho partecipato ad alcuni piccoli eventi come aiuto fonico. ' +
                'Recentemente ho seguito qualche lezione di liuteria, con l\'idea di costruire una chitarra tipo St. Vincent per un regalo a sorpresa.',
                {
                    type: 'carousel',
                    items: [
                        { type: 'image', src: 'images/stVincent-building.jpg', alt: 'Homemade St. Vincent in-Building' },
                        { type: 'image', src: 'images/cajon.jpg', alt: 'Homemade cajon' },
                    ]
                }, 
            ],
            icon: 'Music',
            media: {
                images: [],
                documents: [],
                links: []
            }
        },
        {
            key: 'sailing',
            title: 'Vela',
            description: [
                'Da qualche anno, ho scoperto il divertimento di navigare in una deriva a vela. Frequento ogni estate un corso su deriva con la **[lega navale italiana (LNI) di Ferrara](https://www.leganavale.it/ferrara).** ' +
                'Durante il 2024, assieme alla mia fidanzata, abbiamo comprato un 470 di seconda mano con cui usciamo regolarmente a Goro.',
                {
                    type: 'carousel',
                    items: [
                        { type: 'image', src: 'images/sail-470-1.jpg', alt: 'Sail 470 - 1' },
                        { type: 'image', src: 'images/sail-group.jpg', alt: 'Sail with LNI Ferrara' },
                        { type: 'image', src: 'images/sail-470-2.jpg', alt: 'Sail 470 - 2' },
                    ]
                },
                'Per imparare alcuni dettagli di questa barca, ho tradotto la *Guida al 470* di Arthur Gurevitch.\n\n' +
                'La versione modificabile e integrabile è disponibile su [![GitHub](https://img.shields.io/badge/GitHub-Manuale--470--ITA-181717?logo=github&style=flat-square)](https://github.com/FForzano/Manuale-470-ITA)\n' +
                '\n**Ogni contributo, correzione o suggerimento è benvenuto!**' +
                '\n\n[![Scarica la Guida 📥](https://img.shields.io/badge/Scarica%20PDF-Guida%20470-blue?logo=adobeacrobatreader&logoColor=white&style=for-the-badge)](https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf)'
            ],
            icon: 'Waves',
            media: {
            images: [],
            documents: [],
            links: [
                { label: 'Guida al 470 ITA', url: 'https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf' },
                { label: 'Guida al 470 ITA (Repository modificabile)', url: 'https://github.com/FForzano/Manuale-470-ITA' },
                { label: 'Guida al 470 Originale (ENG)', url: 'https://github.com/FForzano/Manuale-470-ITA/blob/master/470-Manual-ENG.pdf' }
            ]
            }
        },
        {
            key: 'cooking',
            title: 'Cucina',
            description: [
                'Mi piace cucinare per me e per alcuni amici. Non cerco ricette sofisticate o particolarmente elaborate ma solo il piacere di preparare e mangiare un piatto ben fatto.',
                {
                    type: 'carousel',
                    items: [
                        { type: 'image', src: 'images/pasta-broccoli-arriminati.jpg', alt: 'Pasta coi broccoli arriminati' },
                        { type: 'image', src: 'images/brioches-tuppo.jpg', alt: 'Brioches col tuppo' },
                        { type: 'image', src: 'images/pangoccioli.jpg', alt: 'Pangoccioli' },
                        { type: 'image', src: 'images/panelle.jpg', alt: 'Panelle' }
                    ]
                },
                'Sto raccogliendo le ricette che mi piacciono (mie e non) in un sito Notion. Se vuoi darci un\'occhiata, lo trovi **[qui](https://zenith-cobbler-831.notion.site/24d7be2d9ff580498fafd41f7f96ed5c?v=24d7be2d9ff581ce8d9d000c986b018b/)**.',
            ],
            icon: 'ChefHat',
            media: {
            images: [],
            documents: [],
            links: [
                { label: 'Ricettario Fede & Lele', url: 'https://zenith-cobbler-831.notion.site/24d7be2d9ff580498fafd41f7f96ed5c?v=24d7be2d9ff581ce8d9d000c986b018b/' }
            ]
            }
        },
        // {
        //     title: 'Fotografia',
        //     description: 'La fotografia è una mia grande passione. Mi piace catturare momenti e paesaggi, esplorando la bellezza del mondo attraverso l\'obiettivo.',
        //     icon: 'Camera',
        //     media: {
        //     images: [
        //         { src: '/images/photography1.jpg', alt: 'Paesaggio montano' },
        //         { src: '/images/photography2.jpg', alt: 'Ritratto' }
        //     ],
        //     documents: [],
        //     links: []
        //     }
        // }
    ],
}

export default hobbies;
