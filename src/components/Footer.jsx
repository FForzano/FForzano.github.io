import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">Federico Forzano</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.availability')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">{t('footer.contacts')}</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 f.forzano99@gmail.com</p>
              <p>📱 +39 328 177 2074</p>
              <p>📍 Ferrara, Italia</p>
              <p>🎓 {t('footer.university')}</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">{t('footer.followMe')}</h4>
              <div className="flex space-x-3">
                {[
                  { name: 'GitHub', href: 'https://github.com/FForzano' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/federico-forzano' },
                  { name: 'Twitter', href: 'https://twitter.com/federico_forzano' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.name.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>&copy; {currentYear} Federico Forzano. {t('footer.madeWith')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>{t('footer.and')} React</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            aria-label={t('footer.backToTop')}
          >
            <ArrowUp size={16} />
            <span>{t('footer.backToTop')}</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
