package definition;

import java.util.concurrent.TimeUnit;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.Alert;
import org.junit.Assert;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;



public class AlertPopUp {
	public static WebDriver driver;
	
	public AlertPopUp() {
		driver = CommonDriver.driver;
	}
	
	//Farme.feature has @important. It's the last executed so we need to quit the driver
	//after this feature
	@After("@important")
	public static void afterTest() {
		driver.quit();
	}
		
	//@Given("the page \"http://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt\" is visited")
	@Given("^the page \"([^\"]*)\" is visited$")
	public void the_page_is_visited(String websiteUrl) throws Throwable {
		driver.manage().timeouts().implicitlyWait(CommonDriver.numOfSeconds, TimeUnit.SECONDS);
	    driver.get(websiteUrl);
	}

	@Given("^go inside the \"([^\"]*)\" frame$")
	public void go_inside_the_frame(String frameId) throws Throwable {
		//Switch to iframe
		driver.switchTo().frame(driver.findElement(MyBy.myFindElement(frameId)));
	}

	@Given("^input \"([^\"]*)\" on prompt dialog box \"([^\"]*)\"$")
	public void input_on_prompt_dialog_box(String inputText, String cssContent) throws Throwable { 
		//Click the button
		driver.findElement(MyBy.myFindElement(cssContent)).click();
		//Wait until alert is displayed
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.alertIsPresent()); 
		//Switch to alert
		Alert alert = driver.switchTo().alert(); 
		alert.sendKeys(inputText);
		alert.accept();	    
	}
	
	@Then("^assert that the text \"([^\"]*)\" element is \"([^\"]*)\"$")
	public void assert_that_the_text_element_is_Ok(String idContent, String tagContent) throws Throwable {
		Assert.assertEquals(driver.findElement(MyBy.myFindElement(idContent)).getText(), tagContent);
	}

	@Given("^choose CANCEL on confirm dialog box \"([^\"]*)\"$")
	public void choose_CANCEL_on_confirm_dialog_box(String cssContent) throws Throwable {
		//Click the button
		driver.findElement(MyBy.myFindElement(cssContent)).click();
		//Wait until alert is displayed
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.alertIsPresent());
		//Switch to alert
		Alert alert = driver.switchTo().alert();
		//Click cancel
		alert.dismiss();
	}
	
	@Given("^choose OK on confirm dialog box \"([^\"]*)\"$")
	public void choose_OK_on_confirm_dialog_box(String cssContent) throws Throwable {
		//Click the button
		driver.findElement(MyBy.myFindElement(cssContent)).click();
		//Wait until alert is displayed
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.alertIsPresent());
		//Switch to alert
		Alert alert = driver.switchTo().alert();
		alert.accept();   
	}

	@Then("^assert that text on \"([^\"]*)\" popup box is \"([^\"]*)\"$")
	public void assert_that_text_on_popup_box_is(String cssContent, String popUpContent) throws Throwable {
		//Click the button
		driver.findElement(MyBy.myFindElement(cssContent)).click();
		//Wait until alert is displayed
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.alertIsPresent());
		//Switch to alert
		Alert alert = driver.switchTo().alert();
		try {
			Assert.assertEquals(popUpContent, alert.getText());
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			alert.accept();
			driver.switchTo().defaultContent();
		}
	}

}
