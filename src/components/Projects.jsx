import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t('projects.projectsList.0.title'),
      description: t('projects.projectsList.0.description'),
      image: '/api/placeholder/400/250',
      technologies: ['PHP', 'Yii2', 'JavaScript', 'MySQL', 'Apache'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: t('projects.projectsList.1.title'),
      description: t('projects.projectsList.1.description'),
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Matlab', 'NumPy', 'SciPy', 'LaTeX'],
      category: 'research',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: t('projects.projectsList.2.title'),
      description: t('projects.projectsList.2.description'),
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Matlab', 'Quantum Computing', 'LaTeX'],
      category: 'research',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: t('projects.projectsList.3.title'),
      description: t('projects.projectsList.3.description'),
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'JavaScript', 'Wireshark', 'Docker'],
      category: 'education',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: t('projects.projectsList.4.title'),
      description: t('projects.projectsList.4.description'),
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'NumPy', 'SciPy', 'Machine Learning'],
      category: 'research',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: t('projects.projectsList.5.title'),
      description: t('projects.projectsList.5.description'),
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
      category: 'research',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: t('projects.categories.all') },
    { id: 'fullstack', name: t('projects.categories.fullstack') },
    { id: 'research', name: t('projects.categories.research') },
    { id: 'education', name: t('projects.categories.education') }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t('projects.subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {project.title}
                  </span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      aria-label={t('projects.demo')}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      aria-label={t('projects.code')}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {t('projects.featured')}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Eye size={16} />
                    {t('projects.demo')}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} />
                    {t('projects.code')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            {t('projects.callToAction')}
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            {t('projects.contactMe')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
