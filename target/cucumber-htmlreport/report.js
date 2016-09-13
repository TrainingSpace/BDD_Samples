$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchByKeyword.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Sample feature file for Behavior-Driven Testing and Development training"
    },
    {
      "line": 2,
      "value": "#Author: Fernanda Menks - fernanda.menks@accenture.com"
    },
    {
      "line": 3,
      "value": "#Creation date: September 13, 2016"
    }
  ],
  "line": 5,
  "name": "Search for definitions",
  "description": "In order to understand a word that I don\u0027t know\r\nAs a user\r\nI want to be able to look up the meaning of the word",
  "id": "search-for-definitions",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Search"
    }
  ]
});
formatter.scenario({
  "line": 11,
  "name": "Make a Google search",
  "description": "",
  "id": "search-for-definitions;make-a-google-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@GoogleSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user is on the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user performs a search for \u0027Cucumber BDD\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "they should see that the search was performed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.theUserIsOnTheGoogleHomePage()"
});
formatter.result({
  "duration": 4477191314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber BDD",
      "offset": 32
    }
  ],
  "location": "SearchByKeywordStepDefinitions.theUserPerformsASearchByKeyword(String)"
});
formatter.result({
  "duration": 276523846,
  "status": "passed"
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.theyShouldSeeThatTheSearchWasPerformed()"
});
formatter.result({
  "duration": 34968982,
  "status": "passed"
});
});