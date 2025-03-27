import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section className="text-center mb-20">
      <h2 className="text-6xl font-bold mb-4">{t('greeting')} John Doe</h2>
      <p className="text-2xl text-gray-600 dark:text-gray-400">{t('role')}</p>
    </motion.section>
  );
};