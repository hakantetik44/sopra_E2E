pipeline {
    agent any

    tools {
        nodejs 'Node' // Mis à jour pour correspondre au nom par défaut souvent utilisé dans Jenkins
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
                script {
                    // Cette étape génère le rapport Allure à partir des résultats stockés dans 'allure-results'
                    // Assurez-vous que le plugin 'Allure' est installé dans Jenkins
                    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
