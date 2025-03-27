import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed w-full p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Portfolio
        </motion.h1>
        <div className="flex gap-4">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};