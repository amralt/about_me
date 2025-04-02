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
          "greeting": "Hi, I'm Amir Altin",
          "role": "study programming",
          "about": "About Me",
          "aboutText": "Passionate about creating beautiful and functional web applications. In the future I plan to start studying mathematics and neural networks.",
          "skills": "Skills",
          "contact": "Contact",
          "languages": "Languages",
          "frameworks": "Frameworks",
          "tools": "Tools",
          "projects": "Projects",
          "viewProject": "View Project",
          "projectTitles": {
            "project1": "FastMark",
            "project2": "codeforces_bot",
            "project3": ""
          },
          "projectDescriptions": {
            "project1": "FastMark - A web application on react for automating the filling of certificates and other documents using a template and tables.",
            "project2": "Telegram bot for daily solving codeforce's problems",
            "project3": ""
          }
        }
      },
      ru: {
        translation: {
          "greeting": "Привет, я Амир Альтин",
          "role": "учусь программировать",
          "about": "Обо мне",
          "aboutText": "Увлечен созданием красивых сайтов, это расслабляет. В ближайшем будущем планирую начать изучать математику и нейронные сети.",
          "skills": "Навыки",
          "contact": "Контакты",
          "languages": "Языки",
          "frameworks": "Фреймворки",
          "tools": "Инструменты",
          "projects": "Проекты",
          "viewProject": "Посмотреть проект",
          "projectTitles": {
            "project1": "FastMark",
            "project2": "codeforces_bot",
            "project3": ""
          },
          "projectDescriptions": {
            "project1": "Веб-приложение на react для автоматизации заполнения грамот и иных документов при помощи шаблона и таблиц.",
            "project2": "Телеграмм-бот для ежедневных задач из codeforces",
            "project3": ""
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