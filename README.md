# Responsive Web Application with Chatbot Integration

This project is a modern, responsive web application built using React, React Router, and Ant Design, with internationalization support via i18next. Additionally, it features a backend-integrated chatbot for dynamic user interactions.

## Features
- **Responsive Design**: Built with a mobile-first approach and adaptable layouts for all screen sizes.
- **Modular Architecture**: The application follows a component-based structure, ensuring scalability and maintainability.
- **Internationalization (i18n)**: Supports multiple languages using `i18next`, making the app accessible globally.
- **Chatbot Integration**: A custom chatbot integrated into the backend for real-time user interaction, enhancing user engagement.
- **Lazy Loading**: Uses React's `lazy` to load components on-demand, improving performance and reducing the initial load time.
- **Ant Design**: Utilizes Ant Design for a sleek and professional UI with ready-to-use components.

## Tech Stack
- **React**: JavaScript library for building dynamic user interfaces.
- **React Router**: For handling navigation and routing within the application.
- **i18next**: Provides internationalization capabilities.
- **Ant Design**: A comprehensive UI component library.
- **Chatbot**: Backend-integrated chatbot for user interaction.
- **Lazy Loading**: Optimizes performance by loading components only when needed.

## Folder Structure
frontend_responsive/ ├── public/ │ └── index.html # Main HTML file for the app ├── src/ │ ├── components/ # Reusable UI components (e.g., Chatbot, ContactForm) │ ├── common/ │ │ └── Container/ # Layout container for wrapping content │ ├── content/ # JSON files containing static content for different sections (Intro, About, etc.) │ ├── router/ # Application routing logic using React Router │ ├── translation/ # i18next configuration for internationalization │ ├── index.tsx # Main entry point for the React app │ └── styles.tsx # Global and component-specific styles └── package.json # Project dependencies and scripts

## Key Components

- **Router**: Manages application navigation.
- **Home**: Main landing page with different content sections (Intro, About, Solution, Product, Contact).
- **Chatbot**: A custom chatbot component that handles basic conversations, powered by backend integration.

### Chatbot
The chatbot is integrated into the backend and offers a seamless user experience by responding to predefined commands. It is accessible across the entire application and enhances engagement.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sanyorat/Frontend_responsive.git
