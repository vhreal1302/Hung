//Author: Nguyen Van Hung
//Tested on Firefox 44.0.1
//Today is sunday
//Now I know how to use Egit
package cucumbertest;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin = {"html:target/cucumber-html-report",
		"json:target/cucumber-json-report.json"},
		//features = "features",
		features = "features\\AlertPopUp.feature",
		glue = {"definition"}	
)

public class TestRunner {
	
}
