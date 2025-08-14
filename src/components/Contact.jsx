import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useNoFlickerAnimation } from '../hooks/useOptimizedAnimation'

const Contact = () => {
  const { t } = useTranslation()
  // Hook per prevenire il flickering
  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
  const response = await fetch('https://formsubmit.co/f5df7af27d69dd2f915edf7f486033f5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Messaggio inviato con successo!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccessMessage(''), 6000);
      } else {
        setSuccessMessage("Errore nell'invio. Riprova più tardi.");
        setTimeout(() => setSuccessMessage(''), 6000);
      }
    } catch (error) {
      setSuccessMessage("Errore di rete. Riprova più tardi.");
      setTimeout(() => setSuccessMessage(''), 6000);
    }
    setIsSubmitting(false);
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.contactInfo.email'),
      value: 'f.forzano99@gmail.com',
      href: 'mailto:f.forzano99@gmail.com'
    },
    {
      icon: Phone,
      title: t('contact.contactInfo.phone'),
      value: '+39 328 177 2074',
      href: 'tel:+393281772074'
    },
    {
      icon: MapPin,
      title: t('contact.contactInfo.location'),
      value: 'Ferrara, Italia',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/FForzano',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/federico-forzano',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/federico_forzano',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 min-h-screen py-20 section-container relative quantum-pattern contact-container">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 font-display">
              {t('contact.info')}
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="card card-hover flex items-center space-x-4 p-6 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 dark:group-hover:from-primary-800/50 dark:group-hover:to-secondary-800/50 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-gradient" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-lg">{item.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 font-display">
                {t('contact.followMe')}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 card rounded-full shadow-soft hover:shadow-medium transition-all duration-300 text-neutral-600 dark:text-neutral-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8 font-display">
              {t('contact.sendMessage')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('contact.form.name')}{t('contact.form.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('contact.form.email')}{t('contact.form.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.subject')}{t('contact.form.required')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t('contact.form.message')}{t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-vertical backdrop-blur-sm"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="rounded-xl bg-green-100 dark:bg-green-900/60 text-green-800 dark:text-green-200 px-4 py-3 text-center mb-2 shadow"
                >
                  {successMessage}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full btn-primary flex items-center justify-center gap-3 text-lg ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} className={isSubmitting ? 'animate-spin' : ''} />
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
