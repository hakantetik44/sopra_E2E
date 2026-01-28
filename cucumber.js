module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: ['tests/steps/*.ts', 'hooks/hooks.ts'],
        format: [
            'summary',
            'progress-bar',
            'allure-cucumberjs/reporter'
        ],
        formatOptions: {
            resultsDir: 'allure-results'
        },
        paths: ['tests/features/sopra.feature'],
        parallel: 1
    }
}
