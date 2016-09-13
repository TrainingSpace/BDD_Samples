package net.training_bdd;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Fernanda on 9/13/2016.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "json:target/cucumber-report.json", "html:target/cucumber-htmlreport"},
        features = {"src/test/resources/features"}
)

public class RunnerTest {
}
