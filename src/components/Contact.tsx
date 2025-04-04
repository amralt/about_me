import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section className="text-center">
      <h3 className="text-3xl font-bold mb-6">{t('contact')}</h3>
      <div className="flex justify-center gap-6 pb-5">
        <motion.a
          href="https://github.com/amralt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        
        <motion.a
          href="mailto:Amir.altov@yandex.ru"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.section>
  );
};