package definition;


//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.junit.Assert;
import cucumber.api.java.en.Then;

public class Attribute {
	public static WebDriver driver;
	
	public Attribute() {
		driver = CommonDriver.driver;
	}
	
	
	@Then("^assert that the \"([^\"]*)\" attribute of \"([^\"]*)\" is \"([^\"]*)\"$")
	public void assert_that_the_attribute_of_is(String attribute, String xpathContent, String expAttributeValue) throws Throwable {
		String actAttributeValue = driver.findElement(MyBy.myFindElement(xpathContent)).getAttribute(attribute);
		
		//compare the actual with the expected
		Assert.assertEquals(expAttributeValue, actAttributeValue);
	}

	@Then("^assert that the \"([^\"]*)\" attribute of \"([^\"]*)\" has \"([^\"]*)\"$")
	public void assert_that_the_attribute_of_has(String attribute, String xpathContent, String containedValue) throws Throwable {
		//get actual value of attribute
		String actAttributeValue = driver.findElement(MyBy.myFindElement(xpathContent)).getAttribute(attribute);
	    //return true if the actual contains containedValue
		Assert.assertTrue(actAttributeValue.contains(containedValue));
	}

	@Then("^assert that the \"([^\"]*)\" attribute of \"([^\"]*)\" does not have \"([^\"]*)\"$")
	public void assert_that_the_attribute_of_does_not_have(String attribute, String xpathContent, String containedValue) throws Throwable {
		//get actual value of attribute
		String actAttributeValue = driver.findElement(MyBy.myFindElement(xpathContent)).getAttribute(attribute);
		//return true if the actual does not contain containedValue
		Assert.assertFalse(actAttributeValue.contains(containedValue));
	    
	}

	@Then("^assert that the \"([^\"]*)\" attribute of \"([^\"]*)\" is not \"([^\"]*)\"$")
	public void assert_that_the_attribute_of_is_not(String attribute, String xpathContent, String wrongValue) throws Throwable {
		//get actual value of attribute
		String actAttributeValue = driver.findElement(MyBy.myFindElement(xpathContent)).getAttribute(attribute);
		//Assert not equal
		Assert.assertNotEquals(wrongValue, actAttributeValue);
	    
	}
}
