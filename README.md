# 🚀 Sopra Steria - Framework d'Automatisation QA E2E

![Sopra Steria](https://www.soprasteria.fr/ResourcePackages/SopraSteria/assets/dist/images/logo-sopra-steria.svg)

Ce projet est un framework de tests automatisés de pointe conçu pour **Sopra Steria Real Estate Software**. Il permet de garantir la qualité et l'excellence opérationnelle des solutions logicielles immobilières qui gèrent plus de 140 millions de m² et 3,5 millions de logements.

## 🌟 Points Forts

- **Technologie de pointe** : Basé sur **Playwright** et **Cucumber (BDD)**.
- **Architecture Robuste** : Utilisation stricte du **Page Object Model (POM)** avec séparation des locateurs.
- **Support Multi-Couches** : Tests combinés **UI** et **API (REST/GraphQL)**.
- **Reporting Premium** : Rapports **Allure** dynamiques avec captures d'écran et enregistrements vidéo.
- **Shift-Left** : Conçu pour s'intégrer tôt dans le cycle de développement.

---

## 🏗️ Architecture du Projet

Le framework est structuré pour une maintenabilité maximale :

```text
├── base/                # Classes de base (BasePage) pour les actions communes
├── locators/            # Centralisation des sélecteurs (CSS, Shadow DOM)
├── pages/               # Page Objects contenant la logique métier
├── tests/
│   ├── features/        # Scénarios de test en Gherkin (Français)
│   └── steps/           # Définitions des étapes (Step Definitions)
├── hooks/               # Cycle de vie des tests (Setup/Teardown, Vidéos)
└── allure-results/      # Résultats bruts pour le reporting
```

---

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd sopra_E2E
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Installer les navigateurs Playwright**
   ```bash
   npx playwright install chromium
   ```

---

## 🚀 Exécution des Tests

### Lancer la Démo Complète
Cette commande exécute tous les tests (UI & API), nettoie les anciens rapports et ouvre le nouveau rapport Allure :
```bash
npm run demo
```

### Commandes Individuelles
- **Exécuter les tests uniquement** : `npm run test`
- **Générer le rapport Allure** : `npm run report:generate`
- **Ouvrir le rapport Allure** : `npm run report:open`

---

## 📊 Reporting & Visibilité

- **Dashboards Allure** : Une vue claire de la santé du projet (Tendances, Graphiques).
- **Enregistrements Vidéo** : Chaque scénario `@ui` est enregistré pour une analyse facile des régressions.
- **Captures d'écran** : En cas d'échec, une capture d'écran est automatiquement jointe à l'étape correspondante.
- **Mode Visuel** : La démo s'exécute en mode "Headed" (navigateur visible) avec un ralenti (`slowMo`) pour une démonstration fluide.

---

## 💡 Stack Technologique

| Outil | Usage |
| :--- | :--- |
| **Playwright** | Moteur d'automatisation navigateur & API |
| **Cucumber** | Framework BDD pour une lecture fonctionnelle |
| **TypeScript** | Langage pour un code typé et sécurisé |
| **Allure** | Reporting visuel et interactif |
| **Node.js** | Environnement d'exécution |

---

> "Accompagner nos clients dans leurs transformations et les aider à relever leurs enjeux environnementaux, humains et technologiques." — **Sopra Steria**
