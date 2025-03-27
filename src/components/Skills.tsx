import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Database, Terminal } from 'lucide-react';


const skills = [
  {
    icon: <Code className="w-8 h-8 mb-4" />,
    skill: 'languages', 
    list: [
      'python',
      'JavaScript',
      'java'
    ]
  },
  {
    icon: <Database className="w-8 h-8 mb-4" />,
    skill: 'frameworks', 
    list: [
      'react',
      'FastApi',
    ]
  },
  {
    icon: <Terminal className="w-8 h-8 mb-4" />,
    skill: 'tools', 
    list: [
      'git',
      'obsidian',
    ]
  }
]


export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section className="mb-20">
      <h3 className="text-3xl font-bold mb-6">{t('skills')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {
          skills.map((skill) => {
            return(
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                {skill.icon}
                <h4 className="text-xl font-bold mb-4">{t(skill.skill)}</h4>
                <ul className="space-y-2">
                  {skill.list.map((text) => <li>{t(text)}</li>)}
                </ul>
              </div>
            )}
          )
        }
      </div>
    </motion.section>
  );
};