package definition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

public class ElementText {
	public static WebDriver driver;
	
	public ElementText() {
		driver = CommonDriver.driver;
	}
	
	@Then("^assert that the text \"([^\"]*)\" element is not \"([^\"]*)\"$")
	public void assert_that_the_text_element_is_not(String idContent, String wrongTagContent) throws Throwable {
		String actTagContent = driver.findElement(MyBy.myFindElement(idContent)).getText();
		Assert.assertNotEquals(actTagContent, wrongTagContent);
	}

	@Then("^assert that the text \"([^\"]*)\" element has \"([^\"]*)\"$")
	public void assert_that_the_text_element_has(String idContent, String partialContent) throws Throwable {
		String actTagContent = driver.findElement(MyBy.myFindElement(idContent)).getText();
	    Assert.assertTrue(actTagContent.contains(partialContent));
	}

	@Then("^assert that the text \"([^\"]*)\" element does not have \"([^\"]*)\"$")
	public void assert_that_the_text_element_does_not_have(String idContent, String wrongContent) throws Throwable {
	    String actTagContent = driver.findElement(MyBy.myFindElement(idContent)).getText();
	    Assert.assertFalse(actTagContent.contains(wrongContent));
	}
}
