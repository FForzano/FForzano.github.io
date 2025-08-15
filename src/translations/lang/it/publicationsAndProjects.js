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
            description: 'Piattaforma innovativa che collega insegnanti qualificati con famiglie in tutta Italia, garantendo qualità e regolarità nelle lezioni private.'
        }
    ]
};

export default publicationsAndProjects;