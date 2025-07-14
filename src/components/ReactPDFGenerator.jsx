import React from 'react'
import { Document, Page, Text, View, StyleSheet, pdf, Font, Link } from '@react-pdf/renderer'
import { useTranslation } from '../hooks/useTranslation'

// Registra font personalizzati (opzionale)
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
// })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#3B82F6',
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 3,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  contactItem: {
    marginRight: 20,
    marginBottom: 3,
    fontSize: 10,
    color: '#6B7280',
  },
  educationItem: {
    marginBottom: 12,
  },
  educationPeriod: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  educationInstitution: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 2,
  },
  educationDescription: {
    fontSize: 10,
    color: '#6B7280',
  },
  skillsContainer: {
    flexDirection: 'column',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 3,
  },
  skillsList: {
    fontSize: 10,
    color: '#6B7280',
  },
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 10,
    color: '#6B7280',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
  },
})

const CVDocument = ({ language, t }) => {
  const currentDate = new Date().toLocaleDateString(language === 'it' ? 'it-IT' : 'en-US')

  const education = [
    {
      period: '2023 - ' + (language === 'it' ? 'presente' : 'present'),
      degree: language === 'it' ? 'Dottorato di Ricerca in Ingegneria' : 'PhD in Engineering',
      institution: 'Università degli Studi di Ferrara',
      description: 'WCLN Laboratory - Quantum Information Science and Sensing'
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

  const experience = [
    {
      period: '2023 - ' + (language === 'it' ? 'presente' : 'present'),
      role: language === 'it' ? 'Dottorando di Ricerca' : 'PhD Researcher',
      company: 'WCLN Laboratory, Università di Ferrara',
      description: language === 'it' 
        ? 'Ricerca in quantum information science e sensing quantistico. Pubblicazioni su conferenze internazionali.' 
        : 'Research in quantum information science and quantum sensing. Publications in international conferences.'
    },
    {
      period: '2022 - ' + (language === 'it' ? 'presente' : 'present'),
      role: language === 'it' ? 'Socio Fondatore' : 'Co-Founder',
      company: 'FPC DIDATTICA 4.0 S.R.L.',
      description: language === 'it' 
        ? 'Startup innovativa nel settore didattico. Sviluppo di piattaforme web per l\'istruzione privata.' 
        : 'Innovative startup in educational sector. Web platform development for private education.'
    }
  ]

  const projects = [
    {
      title: 'FPC DIDATTICA 4.0 Platform',
      description: language === 'it' 
        ? 'Piattaforma web per connettere insegnanti e famiglie. Sviluppata con PHP/Yii2, JavaScript, MySQL.' 
        : 'Web platform connecting teachers and families. Developed with PHP/Yii2, JavaScript, MySQL.'
    },
    {
      title: 'Quantum Illumination Analysis',
      description: language === 'it' 
        ? 'Analisi teorica e simulazione di sistemi di illuminazione quantistica per applicazioni radar.' 
        : 'Theoretical analysis and simulation of quantum illumination systems for radar applications.'
    },
    {
      title: 'Educational Network Labs',
      description: language === 'it' 
        ? 'Sviluppo di laboratori didattici interattivi per l\'insegnamento delle reti di telecomunicazione.' 
        : 'Development of interactive educational labs for telecommunication networks teaching.'
    }
  ]

  const skills = {
    [language === 'it' ? 'Linguaggi di Programmazione' : 'Programming Languages']: 
      ['Python', 'JavaScript/React', 'PHP', 'Matlab', 'C/C++', 'SQL'],
    [language === 'it' ? 'Tecnologie Web' : 'Web Technologies']: 
      ['React', 'Tailwind CSS', 'Node.js', 'Vite', 'Docker', 'Apache'],
    [language === 'it' ? 'Strumenti e Sistemi' : 'Tools and Systems']: 
      ['Git', 'Linux', 'LaTeX', 'Wireshark', 'NumPy/SciPy', 'TensorFlow'],
    [language === 'it' ? 'Competenze di Ricerca' : 'Research Skills']: 
      ['Quantum Information', 'Signal Processing', 'Machine Learning', 'Scientific Writing']
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Federico Forzano</Text>
          <Text style={styles.title}>{t('hero.title')}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>📧 f.forzano99@gmail.com</Text>
            <Text style={styles.contactItem}>📱 +39 328 177 2074</Text>
            <Text style={styles.contactItem}>📍 Ferrara, Italia</Text>
            <Text style={styles.contactItem}>🌐 linkedin.com/in/federico-forzano</Text>
            <Text style={styles.contactItem}>💻 github.com/FForzano</Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'it' ? 'Profilo Professionale' : 'Professional Profile'}
          </Text>
          <Text style={{ fontSize: 10, color: '#6B7280' }}>
            {t('hero.description')}
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.educationTitle')}</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationPeriod}>{edu.period}</Text>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationInstitution}>{edu.institution}</Text>
              <Text style={styles.educationDescription}>{edu.description}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'it' ? 'Esperienza Professionale' : 'Professional Experience'}
          </Text>
          {experience.map((exp, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationPeriod}>{exp.period}</Text>
              <Text style={styles.educationDegree}>{exp.role}</Text>
              <Text style={styles.educationInstitution}>{exp.company}</Text>
              <Text style={styles.educationDescription}>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('skills.title')}</Text>
          <View style={styles.skillsContainer}>
            {Object.entries(skills).map(([category, techs]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillsList}>{techs.join(' • ')}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'it' ? 'Progetti Principali' : 'Key Projects'}
          </Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
            </View>
          ))}
        </View>

        {/* Publications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'it' ? 'Pubblicazioni' : 'Publications'}
          </Text>
          <View style={styles.projectItem}>
            <Text style={styles.projectDescription}>
              {language === 'it' 
                ? 'Characterization of quadrature measurement for photon-varied Gaussian states. IEEE InfoCom 2025 (in corso di pubblicazione).'
                : 'Characterization of quadrature measurement for photon-varied Gaussian states. IEEE InfoCom 2025 (under publication).'
              }
            </Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Federico Forzano - CV {language.toUpperCase()} - {currentDate}
        </Text>
      </Page>
    </Document>
  )
}

const ReactPDFGenerator = () => {
  const { t, language } = useTranslation()

  const generateAdvancedPDF = async () => {
    try {
      const blob = await pdf(<CVDocument language={language} t={t} />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Federico_Forzano_CV_${language.toUpperCase()}_${new Date().getFullYear()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback alla versione semplice
      alert(language === 'it' 
        ? 'Errore nella generazione del PDF. Prova con il download semplice.' 
        : 'Error generating PDF. Try with simple download.'
      )
    }
  }

  return { generateAdvancedPDF }
}

export default ReactPDFGenerator
