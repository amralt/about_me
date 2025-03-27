import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectImages = [
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <motion.section className="mb-20">
      <h3 className="text-3xl font-bold mb-6">{t('projects')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((projectNum) => (
          <motion.div
            key={projectNum}
            className="group relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={projectImages[projectNum - 1]}
                alt={t(`projectTitles.project${projectNum}`)}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h4 className="text-xl font-bold mb-2">
                    {t(`projectTitles.project${projectNum}`)}
                  </h4>
                  <p className="text-sm mb-4">
                    {t(`projectDescriptions.project${projectNum}`)}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {t('viewProject')}
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};