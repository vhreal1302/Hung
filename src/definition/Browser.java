package definition;


import java.util.Set;
import java.util.concurrent.TimeUnit;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.asserts.SoftAssert;
//import org.openqa.selenium.firefox.FirefoxDriver;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Browser {
	public static WebDriver driver;
	public static SoftAssert myAssert;
	private static String currentHandler;
	
	public Browser() {
		driver = CommonDriver.driver;
		//Use soft assert
		myAssert = CommonDriver.myAssert;
	}
	
	@Given("^the home page is visited$")
	public void the_home_page_is_visited() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(CommonDriver.homepage);
	}

	@Given("^the page is refreshed$")
	public void the_page_is_refreshed() throws Throwable {
	    driver.navigate().refresh();
	}

	@Given("^maximize the window$")
	public void maximize_the_window() throws Throwable {
	       driver.manage().window().maximize();
	}

	@Given("^go backward one page$")
	public void go_backward_one_page() throws Throwable {
	    driver.navigate().back();
	}

	@Given("^go forward one page$")
	public void go_forward_one_page() throws Throwable {
	    driver.navigate().forward();
	}

	@Given("^the page \"([^\"]*)\" is opened on another window$")
	public void the_page_is_opened_on_another_window(String websiteUrl) throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.open(arguments[0])", websiteUrl);
		currentHandler = driver.getWindowHandle();
		//Get all window handler
		Set<String> allHandler = driver.getWindowHandles();
	    for (String handler : allHandler) {
	    	if (!handler.equals(currentHandler)) {
	    		driver.switchTo().window(handler);
	    		break;
	    	}
	    }
	}

	@Then("^assert that the \"([^\"]*)\" text is present$")
	public void assert_that_the_text_is_present(String text) throws Throwable {
		//To execute the remaining steps, use myAssert (it uses SoftAssert)
		//but step's result will be always true even it is fail when using Assert
		//myAssert.assertTrue(driver.getPageSource().contains(text));
		
		//Use hard assertion
		Assert.assertTrue(driver.getPageSource().contains(text));
	}

	@Then("^assert that the \"([^\"]*)\" text is not present$")
	public void assert_that_the_text_is_not_present(String text) throws Throwable {
	    Assert.assertFalse(driver.getPageSource().contains(text));
	}

	@Then("^assert that the page title is \"([^\"]*)\"$")
	public void assert_that_the_page_title_is(String expTitle) throws Throwable {
	    Assert.assertEquals(expTitle, driver.getTitle());
	}

	@Then("^assert that the page title is not \"([^\"]*)\"$")
	public void assert_that_the_page_title_is_not(String text) throws Throwable {
	    Assert.assertFalse(driver.getTitle().equals(text));
	}

	@Then("^assert that the page title has \"([^\"]*)\"$")
	public void assert_that_the_page_title_has(String text) throws Throwable {
	    Assert.assertTrue(driver.getTitle().contains(text));
	}

	@Then("^assert that the page title does not have \"([^\"]*)\"$")
	public void assert_that_the_page_title_does_not_have(String text) throws Throwable {
	    Assert.assertFalse(driver.getTitle().contains(text));
	}

	@Then("^assert that the url is \"([^\"]*)\"$")
	public void assert_that_the_url_is(String expUrl) throws Throwable {
	    Assert.assertEquals(expUrl, driver.getCurrentUrl());
	}

	@Then("^assert that the url is not \"([^\"]*)\"$")
	public void assert_that_the_url_is_not(String otherUrl) throws Throwable {
	    Assert.assertFalse(driver.getCurrentUrl().equals(otherUrl));
	}

	@When("^window dimension is changed with size \\((\\d+),(\\d+)\\)$")
	public void window_dimension_is_changed_with_size(int x, int y) throws Throwable {
	    driver.manage().window().setSize(new Dimension(x, y));
	}

	@When("^scroll up or down in screen with value \\((\\d+),(\\d+)\\)$")
	public void scroll_up_or_down_in_screen_with_value(int x, int y) throws Throwable {
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("window.scrollBy(arguments[0], arguments[1])", x, y);
	    js.executeScript("window.scrollBy(arguments[0], arguments[1])", x, y);
	}

	@When("^window is moved to location with coordinates \\((\\d+),(\\d+)\\)$")
	public void window_is_moved_to_location_with_coordinates(int x, int y) throws Throwable {
	   driver.manage().window().setPosition(new Point(x, y));
	}

	@When("^close current window$")
	public void close_current_window() throws Throwable {
	    driver.close();
	}

	@When("^switch back to the original window$")
	public void switch_back_to_the_original_window() throws Throwable {
		driver.switchTo().window(currentHandler);
	}

	@When("^open \"([^\"]*)\" link in new window and switch to it$")
	public void open_link_in_new_window_and_switch_to_it(String linkContent) throws Throwable {
		//Shift click on the link to open link in a new window
		WebElement link = driver.findElement(MyBy.myFindElement(linkContent));
		Actions openLink = new Actions(driver);
		openLink.keyDown(Keys.SHIFT).click(link).keyUp(Keys.SHIFT).build().perform();
		
	    currentHandler = driver.getWindowHandle();
	  //Get all window handler and switch to the new handle
  		Set<String> allHandler = driver.getWindowHandles();
  	    for (String handler : allHandler) {
  	    	if (!handler.equals(currentHandler)) {
  	    		driver.switchTo().window(handler);
  	    		break;
  	    	}
  	    }
	}

	@When("^open \"([^\"]*)\" dialog and switch to it$")
	public void open_dialog_and_switch_to_it(String cssContent) throws Throwable {
		//Shift click on the link to open link in a new window
		WebElement link = driver.findElement(MyBy.myFindElement(cssContent));
		Actions openLink = new Actions(driver);
		openLink.keyDown(Keys.SHIFT).click(link).keyUp(Keys.SHIFT).build().perform();
		
	    currentHandler = driver.getWindowHandle();
	  //Get all window handler
  		Set<String> allHandler = driver.getWindowHandles();
  	    for (String handler : allHandler) {
  	    	if (!handler.equals(currentHandler)) {
  	    		driver.switchTo().window(handler);
  	    		break;
  	    	}
  	    }
	}
}