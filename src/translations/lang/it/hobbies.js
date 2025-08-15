const hobbies = {
    title: 'Hobbies & Interessi',
    subtitle: 'Le passioni al di fuori del lavoro impattano la mia vita tanto quanto il lavoro stesso.',
    hobbies: [
        {
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
}

export default hobbies;
