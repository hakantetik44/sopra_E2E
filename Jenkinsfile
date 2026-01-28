pipeline {
    agent any

    tools {
        nodejs 'node' // Assurez-vous que Node.js est configuré dans Manage Jenkins -> Global Tool Configuration
    }

    environment {
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install chromium'
            }
        }

        stage('Execute Tests') {
            steps {
                // On utilise || true pour éviter que le build échoue si des tests échouent, 
                // Allure gérera l'affichage de l'état des tests.
                sh 'npm run test || true'
            }
            post {
                always {
                    // Sauvegarde des vidéos et captures d'écran comme artefacts Jenkins (optionnel)
                    archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
                }
            }
        }

        stage('Generate Report') {
            steps {
                // Nécessite l'installation du plugin Allure dans Jenkins
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
