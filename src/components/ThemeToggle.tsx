import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {isDark ? (
        <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
      )}
    </motion.button>
  );
};