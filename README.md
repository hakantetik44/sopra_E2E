# <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sopra_Steria_logo.svg" width="250"/> 

# Sopra_E2E Automatisation QA

![Playwright](https://img.shields.io/badge/Playwright-v1.58.0-31C653?style=flat&logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-v12.6.0-23D96C?style=flat&logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-v3.4.5-yellow?style=flat&logo=allure&logoColor=black)

---

## 📖 Introduction
Ce framework est dédié à l'automatisation des tests pour **Sopra Steria Real Estate Software**. Il est conçu pour être performant, maintenable et facile à intégrer dans un cycle de développement agile.

---

## 🛠️ Caractéristiques du Framework

- **Architecture Page Object Model (POM)** : Une structure claire pour une maintenance simplifiée.
- **Tests Bout-en-Bout (E2E)** : Couverture des interfaces web et des API.
- **Preuves de Test** : 
  - 🎥 **Vidéos** de chaque exécution UI.
  - 📸 **Captures d'écran** automatiques en cas d'échec.
- **BDD avec Cucumber** : Scénarios rédigés en français pour une meilleure lisibilité métier.
- **Reporting Allure** : Rapports détaillés et visuels pour une analyse rapide.

---

## 📂 Organisation du Projet

```text
├── base/                # Classes de base (Actions communes)
├── locators/            # Centralisation des sélecteurs
├── pages/               # Page Objects (Logique métier)
├── tests/
│   ├── features/        # Scénarios Gherkin (FR)
│   └── steps/           # Définitions des étapes
├── hooks/               # Cycle de vie des tests & Vidéos
└── allure-results/      # Résultats bruts de test
```

---

## 🚀 Installation & Exécution

### Installation
```bash
npm install
npx playwright install chromium
```

### Exécuter tous les tests (Console)
Pour lancer les tests UI et API directement dans le terminal :
```bash
npm run test
```

### Lancer l'interface UI Interactive
Pour un mode interactif avec Time Travel et débogage visuel (UI Mode) :
```bash
npm run ui
# Ou directement via Playwright :
npx playwright test --ui
```

### Lancer la Démo Complète (Rapport Allure)
```bash
npm run demo
```

---

## 💡 Stack Technologique

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" height="40" alt="TypeScript" />
  <img src="https://playwright.dev/img/playwright-logo.svg" width="40" height="40" alt="Playwright" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cucumber/cucumber-plain.svg" width="40" height="40" alt="Cucumber" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node.js" />
</p>

---

## 📊 Reporting Allure
Le rapport Allure fournit une visibilité complète sur la qualité du produit, avec l'historique des exécutions et les preuves visuelles intégrées directement dans les étapes de test.

---
> Sopra Steria - Excellence Opérationnelle
