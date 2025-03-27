import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "greeting": "Hi, I'm",
          "role": "Full Stack Developer",
          "about": "About Me",
          "aboutText": "Passionate about creating beautiful and functional web applications. With expertise in modern web technologies and a keen eye for design.",
          "skills": "Skills",
          "contact": "Contact",
          "languages": "Languages",
          "frameworks": "Frameworks",
          "tools": "Tools",
          "projects": "Projects",
          "viewProject": "View Project",
          "projectTitles": {
            "project1": "E-Commerce Platform",
            "project2": "Task Management App",
            "project3": "Social Media Dashboard"
          },
          "projectDescriptions": {
            "project1": "A modern e-commerce platform built with React and Node.js, featuring real-time inventory updates and secure payment processing.",
            "project2": "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
            "project3": "A comprehensive social media dashboard for analytics and content management across multiple platforms."
          }
        }
      },
      ru: {
        translation: {
          "greeting": "Привет, я",
          "role": "Full Stack Разработчик",
          "about": "Обо мне",
          "aboutText": "Увлечен созданием красивых и функциональных веб-приложений. Обладаю экспертизой в современных веб-технологиях и чутким взглядом на дизайн.",
          "skills": "Навыки",
          "contact": "Контакты",
          "languages": "Языки",
          "frameworks": "Фреймворки",
          "tools": "Инструменты",
          "projects": "Проекты",
          "viewProject": "Посмотреть проект",
          "projectTitles": {
            "project1": "E-Commerce Платформа",
            "project2": "Приложение для управления задачами",
            "project3": "Панель управления соцсетями"
          },
          "projectDescriptions": {
            "project1": "Современная платформа электронной коммерции, построенная на React и Node.js, с функциями обновления инвентаря в реальном времени и безопасной обработкой платежей.",
            "project2": "Приложение для совместного управления задачами с обновлениями в реальном времени, интерфейсом drag-and-drop и функциями командного взаимодействия.",
            "project3": "Комплексная панель управления социальными сетями для аналитики и управления контентом на нескольких платформах."
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;