import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section className="mb-20">
      <h3 className="text-3xl font-bold mb-6">{t('about')}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        {t('aboutText')}
      </p>
    </motion.section>
  );
};