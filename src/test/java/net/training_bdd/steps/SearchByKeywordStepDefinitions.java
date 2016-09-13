package net.training_bdd.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import java.io.*;
import java.util.Properties;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by Fernanda on 9/13/2016.
 */
public class SearchByKeywordStepDefinitions {

    WebDriver driver;

    @Given("the user is on the Google home page")
    public void theUserIsOnTheGoogleHomePage() throws IOException {

        String targetURL;

        driver = new FirefoxDriver();
        driver.manage().window().maximize();

        /* If the target URL will never change you can embed it in the code, like the example below: */
        //targetURL = "http://www.google.com";

        /* If you need to pass the target URL using an argument, you could do it using an environment variable */
        //targetURL = System.getenv("target_url");

        /* Alternatively you can pass the target URL using a properties file */
        targetURL = (new SearchByKeywordGetPropertyValues().getProperties().getProperty("target_url"));

        driver.get(targetURL);

    }

    @When("the user performs a search for '(.*)'")
    public void theUserPerformsASearchByKeyword(String keywords) {

        driver.findElement(By.name("q")).sendKeys(keywords, Keys.ENTER);

    }

    @Then("they should see that the search was performed")
    public void theyShouldSeeThatTheSearchWasPerformed() {

        assertThat(driver.getTitle().contains("Google Search"));
        driver.close();

    }

    public class SearchByKeywordGetPropertyValues {

        InputStream inputStream;
        public Properties getProperties() throws IOException {

            Properties prop = new Properties();
            String propFileName = "SearchByKeyword.properties";

            try {
                inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);

                if (inputStream != null) {

                    prop.load(inputStream);

                } else {

                    throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");

                }


                // get the property value and print it out
                String targetURL = prop.getProperty("target_url");


                System.out.println("\ntarget URL set as " + targetURL);
            } catch (Exception e) {

                System.out.println("Exception: " + e);

            } finally {

                inputStream.close();

            }

            return prop;
        }

    }

}
