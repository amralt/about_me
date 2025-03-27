import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      <Languages className="w-6 h-6 text-gray-800 dark:text-white" />
    </motion.button>
  );
};