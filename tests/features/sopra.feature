Feature: Tests du site Sopra Steria et API

  @ui
  Scenario: Vérifier la page d'accueil de Sopra Steria
    Given Je navigue sur la page d'accueil de Sopra Steria
    Then le logo doit être visible
    When je recherche "Transformation Digitale"
    Then les résultats de recherche doivent être pertinents

  @api
  Scenario: Vérifier le point de terminaison de l'API
    Given j'envoie une requête GET à "https://jsonplaceholder.typicode.com/posts/1"
    Then le statut de la réponse doit être 200
    And la réponse doit contenir "userId"
