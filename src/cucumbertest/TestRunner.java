//Author: Nguyen Van Hung
//Tested on Firefox 44.0.1
package cucumbertest;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin = {"html:target/cucumber-html-report",
		"json:target/cucumber-json-report.json"},
		features = "features",
		//features = "Feature\\Frame.feature",
		glue = {"definition"}	
)

public class TestRunner {
	
}
