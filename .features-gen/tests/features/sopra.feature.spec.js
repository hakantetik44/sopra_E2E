// Generated from: tests/features/sopra.feature
import { test } from "playwright-bdd";

test.describe('Tests du site Sopra Steria et API', () => {

  test('Vérifier la page d\'accueil de Sopra Steria', { tag: ['@ui'] }, async ({ Given, When, Then, page }) => { 
    await Given('Je navigue sur la page d\'accueil de Sopra Steria', null, { page }); 
    await Then('le logo doit être visible'); 
    await When('je recherche "Transformation Digitale"'); 
    await Then('les résultats de recherche doivent être pertinents', null, { page }); 
  });

  test('Vérifier le point de terminaison de l\'API', { tag: ['@api'] }, async ({ Given, Then, And }) => { 
    await Given('j\'envoie une requête GET à "https://jsonplaceholder.typicode.com/posts/1"'); 
    await Then('le statut de la réponse doit être 200'); 
    await And('la réponse doit contenir "userId"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/sopra.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Je navigue sur la page d'accueil de Sopra Steria","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then le logo doit être visible","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When je recherche \"Transformation Digitale\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Transformation Digitale\"","children":[{"start":14,"value":"Transformation Digitale","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then les résultats de recherche doivent être pertinents","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@api"],"steps":[{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given j'envoie une requête GET à \"https://jsonplaceholder.typicode.com/posts/1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"https://jsonplaceholder.typicode.com/posts/1\"","children":[{"start":28,"value":"https://jsonplaceholder.typicode.com/posts/1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then le statut de la réponse doit être 200","stepMatchArguments":[{"group":{"start":34,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And la réponse doit contenir \"userId\"","stepMatchArguments":[{"group":{"start":25,"value":"\"userId\"","children":[{"start":26,"value":"userId","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end