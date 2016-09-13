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
  "name": "Make a default Google search",
  "description": "",
  "id": "search-for-definitions;make-a-default-google-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@HardCodedSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user navigates to Google home page",
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
  "duration": 4116752211,
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
  "duration": 262561010,
  "status": "passed"
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.theyShouldSeeThatTheSearchWasPerformed()"
});
formatter.result({
  "duration": 33755843,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Make a Google search using environment variables",
  "description": "",
  "id": "search-for-definitions;make-a-google-search-using-environment-variables",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@EnvironmentVariableSearch"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Google home page URL is provided using environment variables",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user performs a search for \u0027Cucumber BDD\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "they should see that the search was performed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.googleHomePageURLIsProvidedUsingEnvironmentVariables()"
});
formatter.result({
  "duration": 3573402997,
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
  "duration": 270773186,
  "status": "passed"
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.theyShouldSeeThatTheSearchWasPerformed()"
});
formatter.result({
  "duration": 13303862,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Make a Google search using a properties file",
  "description": "",
  "id": "search-for-definitions;make-a-google-search-using-a-properties-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@PropertiesFileSearch"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Google home page URL is provided using a properties file",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user performs a search for \u0027Cucumber BDD\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "they should see that the search was performed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.googleHomePageURLIsProvidedUsingAPropertiesFile()"
});
formatter.result({
  "duration": 3511180268,
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
  "duration": 264059965,
  "status": "passed"
});
formatter.match({
  "location": "SearchByKeywordStepDefinitions.theyShouldSeeThatTheSearchWasPerformed()"
});
formatter.result({
  "duration": 13380662,
  "status": "passed"
});
});