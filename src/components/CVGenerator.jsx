import React from 'react'
import { jsPDF } from 'jspdf'
import { useTranslation } from '../hooks/useTranslation'

const CVGenerator = () => {
  const { t, language } = useTranslation()

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20

    // Configurazione font
    doc.setFont('helvetica')
    
    // Header
    doc.setFontSize(24)
    doc.setTextColor(59, 130, 246) // Primary blue
    doc.text('Federico Forzano', margin, 30)
    
    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.text(t('hero.title'), margin, 40)
    
    // Linea separatrice
    doc.setDrawColor(59, 130, 246)
    doc.line(margin, 45, pageWidth - margin, 45)
    
    let yPosition = 60

    // Informazioni di contatto
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text(t('contact.info'), margin, yPosition)
    yPosition += 10
    
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('📧 f.forzano99@gmail.com', margin, yPosition)
    yPosition += 6
    doc.text('📱 +39 328 177 2074', margin, yPosition)
    yPosition += 6
    doc.text('📍 Ferrara, Italia', margin, yPosition)
    yPosition += 6
    doc.text('🌐 LinkedIn: linkedin.com/in/federico-forzano', margin, yPosition)
    yPosition += 15

    // Formazione
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text(t('about.educationTitle'), margin, yPosition)
    yPosition += 10

    const education = [
      {
        period: '2023 - presente',
        degree: language === 'it' ? 'Dottorato di Ricerca' : 'PhD in Engineering',
        institution: 'Università degli Studi di Ferrara',
        description: 'WCLN Laboratory - Quantum Information Science'
      },
      {
        period: '2021 - 2023',
        degree: language === 'it' ? 'Laurea Magistrale in Ingegneria Elettronica per l\'ICT' : 'Master\'s Degree in Electronic Engineering for ICT',
        institution: 'Università degli Studi di Ferrara',
        description: '110/110 cum laude - Thesis: Analysis of quantum illumination systems'
      },
      {
        period: '2018 - 2021',
        degree: language === 'it' ? 'Laurea Triennale in Ingegneria Elettronica e Informatica' : 'Bachelor\'s Degree in Electronic and Computer Engineering',
        institution: 'Università degli Studi di Ferrara',
        description: '110/110 cum laude - Thesis: On the Design of Quantum Communication Systems'
      }
    ]

    education.forEach((edu) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 30
      }
      
      doc.setFontSize(12)
      doc.setTextColor(59, 130, 246)
      doc.text(edu.period, margin, yPosition)
      yPosition += 6
      
      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text(edu.degree, margin, yPosition)
      yPosition += 5
      
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(edu.institution, margin, yPosition)
      yPosition += 4
      doc.text(edu.description, margin, yPosition)
      yPosition += 12
    })

    // Competenze
    if (yPosition > 200) {
      doc.addPage()
      yPosition = 30
    }
    
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text(t('skills.title'), margin, yPosition)
    yPosition += 10

    const skills = {
      [t('skills.categories.programming')]: ['Python', 'JavaScript/React', 'PHP', 'Matlab', 'C/C++'],
      [t('skills.categories.web')]: ['React', 'Tailwind CSS', 'Node.js', 'Vite', 'Docker'],
      [t('skills.categories.systems')]: ['Linux', 'Git', 'Docker', 'Apache', 'MySQL']
    }

    Object.entries(skills).forEach(([category, techs]) => {
      doc.setFontSize(12)
      doc.setTextColor(59, 130, 246)
      doc.text(category, margin, yPosition)
      yPosition += 6
      
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(techs.join(', '), margin, yPosition)
      yPosition += 10
    })

    // Progetti principali
    if (yPosition > 200) {
      doc.addPage()
      yPosition = 30
    }
    
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text(t('projects.title'), margin, yPosition)
    yPosition += 10

    const projects = [
      {
        title: 'FPC DIDATTICA 4.0 S.R.L.',
        description: language === 'it' 
          ? 'Piattaforma innovativa per lezioni private' 
          : 'Innovative platform for private lessons'
      },
      {
        title: 'Quantum Illumination System Analysis',
        description: language === 'it' 
          ? 'Ricerca su sistemi di illuminazione quantistica' 
          : 'Research on quantum illumination systems'
      },
      {
        title: 'Quadrature Measurement Characterization',
        description: language === 'it' 
          ? 'Caratterizzazione misure quadrature - IEEE InfoCom 2025' 
          : 'Quadrature measurement characterization - IEEE InfoCom 2025'
      }
    ]

    projects.forEach((project) => {
      if (yPosition > 260) {
        doc.addPage()
        yPosition = 30
      }
      
      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text(project.title, margin, yPosition)
      yPosition += 5
      
      doc.setFontSize(9)
      doc.setTextColor(100, 100, 100)
      const lines = doc.splitTextToSize(project.description, pageWidth - 2 * margin)
      doc.text(lines, margin, yPosition)
      yPosition += lines.length * 4 + 5
    })

    // Footer
    const totalPages = doc.internal.getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text(
        `Federico Forzano - CV ${language.toUpperCase()} - ${new Date().toLocaleDateString()} - Pagina ${i}/${totalPages}`,
        margin,
        doc.internal.pageSize.getHeight() - 10
      )
    }

    // Salva il file
    const fileName = `Federico_Forzano_CV_${language.toUpperCase()}_${new Date().getFullYear()}.pdf`
    doc.save(fileName)
  }

  return { generatePDF }
}

export default CVGenerator
