// Pubblicazioni e Progetti (unificata)
const publicationsAndProjects = {
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
            description: 'Formando PerCorsi è una startup nel settore delle lezioni private che ho co-fondato nel 2021, per collegare insegnanti qualificati e verificati con famiglie in tutta Italia, garantendo lezioni private di qualità e a norma. Come co-founder e membro del board, ho progettato e sviluppato il backend della piattaforma, una REST API in PHP/Yii2, integrando i pagamenti, la fatturazione elettronica automatica e la localizzazione, oltre a gestire l\'infrastruttura cloud.',
            logo: '/images/fpc-logo.png',
            tech: ['PHP - Yii2', 'SQL', 'Docker'],
            links: [
                { label: 'Sito', url: 'https://formandopercorsi.com' }
            ]
        },
        {
            id: 'xgsail',
            title: 'XGSail',
            description: 'XGSail trasforma i dati grezzi di GPS e sensori del vento raccolti su una deriva in analisi utili della sessione (VMG, rilevamento manovre, diagrammi polari) attraverso una piattaforma self-hosted FastAPI + React che ho progettato e sviluppato da zero. Si abbina a XGSail-E1, un tracker hardware companion basato su ESP32, tramite un protocollo di comunicazione aperto e agnostico rispetto all\'hardware, così qualsiasi sensore può integrarsi senza dover forkare il software.',
            logo: '/images/xgsail-logo.png',
            tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'ESP32'],
            links: [
                { label: 'Sito', url: 'https://xgsail.com' },
                { label: 'Software', url: 'https://github.com/FForzano/xgsail' },
                { label: 'Firmware', url: 'https://github.com/FForzano/xgsail-e1' }
            ]
        },
        {
            id: 'sailing-guide-470',
            title: 'Guida al 470 (ITA)',
            description: 'Traduzione italiana completa della guida alla deriva 470 di Arthur Gurevitch, con indicazioni su regolaggi, attrezzatura e tecnica di regata per la classe. Pubblicata e versionata liberamente su GitHub come risorsa modificabile e contribuibile dalla community, con PDF scaricabile gratuitamente.',
            links: [
                { label: 'PDF', url: 'https://github.com/FForzano/Manuale-470-ITA/releases/download/v1.0/Manuale-al-470-ITA.pdf' },
                { label: 'Repository', url: 'https://github.com/FForzano/Manuale-470-ITA' },
                { label: 'Originale (ENG)', url: 'https://github.com/FForzano/Manuale-470-ITA/blob/master/470-Manual-ENG.pdf' }
            ]
        }
    ]
};

export default publicationsAndProjects;