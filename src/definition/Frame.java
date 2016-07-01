package definition;

import java.io.File;
import java.io.IOException;
import org.openqa.selenium.TakesScreenshot;
import java.util.NoSuchElementException;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;
import org.apache.commons.io.FileUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Frame {
	
	public static WebDriver driver;
	
	public Frame() {
		driver = CommonDriver.driver;
	}
	
	@Then("^assert that the \"([^\"]*)\" element is enabled$")
	public void assert_that_the_element_is_enabled(String attributeContent) throws Throwable {
		//Find element and assert
		Assert.assertTrue(driver.findElement(MyBy.myFindElement(attributeContent)).isEnabled());	    
	}

	@Then("^assert that the \"([^\"]*)\" element is disabled$")
	public void assert_that_the_element_is_disabled(String attributeContent) throws Throwable {
		//Get attribute and its value from attributeContent
		String[] att = attributeContent.split("=");
		//Build xpath
		String tempXpath = "//*[@" + att[0] + "='" + att[1] + "']";
		//Find element and assert
		Assert.assertFalse(driver.findElement(By.xpath(tempXpath)).isEnabled());
	}

	@Then("^assert that the \"([^\"]*)\" element is present$")
	public void assert_that_the_element_is_present(String xpathContent) throws Throwable {
		//Find element and assert
		Assert.assertTrue(driver.findElement(MyBy.myFindElement(xpathContent)).getSize() != null);
	}

	@Then("^assert that the \"([^\"]*)\" element is absent$")
	public void assert_that_the_element_is_absent(String xpathContent) {
		try {
			MyBy.myFindElement(xpathContent);
		}
		catch(NoSuchElementException e){
			Assert.assertTrue(true);
		}
	}

	@Then("^assert that the \"([^\"]*)\" element is hidden$")
	public void assert_that_the_element_is_hidden(String idContent) throws Throwable {
	    Assert.assertFalse(driver.findElement(MyBy.myFindElement(idContent)).isDisplayed());
	}

	@When("^change \"([^\"]*)\" attribute of \"([^\"]*)\" into \"([^\"]*)\"$")
	public void change_attribute_of_into(String attribute, String idContent, String newValue) throws Throwable {
	    // Use Javascript to change the value of the attribute
		WebElement element = driver.findElement(MyBy.myFindElement(idContent));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", element, attribute, newValue);
	}

	@Then("^assert that the \"([^\"]*)\" element is visible$")
	public void assert_that_the_element_is_visible(String idContent) throws Throwable {
		Assert.assertTrue(driver.findElement(MyBy.myFindElement(idContent)).isDisplayed());
	}

	@When("^highlight \"([^\"]*)\" element$")
	public void highlight_element(String idContent) throws Throwable {
		// Use Javascript to change the value of the attribute
		WebElement element = driver.findElement(MyBy.myFindElement(idContent));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    //Highlight element by set background color to yellow	    
	    js.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", (WebElement) element, "style", "background-color: yellow;");
	}

	@When("^set bound for \"([^\"]*)\" element$")
	public void set_bound_for_element(String idContent) throws Throwable {
		// Use Javascript to change the value of the attribute
		WebElement element = driver.findElement(MyBy.myFindElement(idContent));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    //set bound by defining its borders
	    js.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", element, "style", "border: solid 2px red");
	}

	@When("^capture image of \"([^\"]*)\" element and save as \"([^\"]*)\"$")
	public void capture_image_of_element_and_save_as(String idContent, String filename) throws IOException {
		//Find the element
		WebElement element = driver.findElement(MyBy.myFindElement(idContent));
		
		//Take screenshot of that element
		captureElementScreenshot(element, filename);
	}
	
	public void captureElementScreenshot(WebElement element, String filename) throws IOException {
		//Take full screenshot
		driver.manage().window().maximize();
		File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		
		//Get element width, height
		int eWidth = element.getSize().width;
		int eHeight = element.getSize().height;
		
		//Get element coordinates with respect to the frame containing it
		Point point = element.getLocation();
		int x = point.getX();
		int y = point.getY();
		
		driver.switchTo().defaultContent();
		WebElement resultFrame = driver.findElement(By.xpath("/html/body/div[@id='container']/div[@id='iframecontainer']//iframe[@id='iframeResult']"));

		//Get iframeResult coordinates
		Point pointFrame = resultFrame.getLocation();
		int xFrame = pointFrame.getX();
		int yFrame = pointFrame.getY();
		
		//The element real coordinates are X = x + xFrame, Y = y + yFrame
		int realX = x + xFrame;
		int realY = y + yFrame;
		
		//Read full screenshot
		BufferedImage img = ImageIO.read(screenshot);
		//Cut full image using realX, realY, width, height of the element
		BufferedImage smallImg = img.getSubimage(realX, realY, eWidth, eHeight);
		ImageIO.write(smallImg, "png", screenshot);
		
		//Save the small image
		FileUtils.copyFile(screenshot, new File(".\\image\\" + filename));
	}
}
