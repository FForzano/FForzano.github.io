import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      skills: [
        { name: 'Python', level: 95 },
        { name: 'PHP', level: 85 },
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'C', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'Matlab', level: 90 }
      ]
    },
    {
      title: t('skills.categories.web'),
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Yii2 Framework', level: 85 },
        { name: 'SQL', level: 75 },
        { name: 'Apache/Nginx', level: 80 }
      ]
    },
    {
      title: t('skills.categories.systems'),
      skills: [
        { name: 'Linux', level: 95 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'KVM/QEMU', level: 85 },
        { name: 'Bash', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 min-h-screen py-20 section-container relative music-strings tech-grid">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 music-notes opacity-25 floating-element" style={{left: '8%', top: '15%'}}></div>
        <div className="absolute bottom-20 right-16 sail-pattern w-20 h-20 opacity-20 floating-element" style={{right: '12%', bottom: '20%'}}></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-secondary-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent-400 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            {t('skills.title')}
          </h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card card-hover p-8 border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-800"
            >
              <h3 className="text-2xl font-bold text-gradient mb-8 text-center font-display">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {t('skills.otherTech')}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'LaTeX', 'TikZ', 'VHDL', 'Wireshark', 'IPTables', 
              'FRR', 'Jira', 'macOS', 'Windows', 'QEMU'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
