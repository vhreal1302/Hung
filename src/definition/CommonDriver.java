package definition;

import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.asserts.SoftAssert;
import org.openqa.selenium.firefox.FirefoxDriver;

//Use this class in order to run all tests on a browser
class CommonDriver {
	 
	public static WebDriver driver = new FirefoxDriver();
	public static SoftAssert myAssert = new SoftAssert();
	public static String homepage = "http://www.google.com";
	//Number of seconds for implicit wait
	public static long numOfSeconds = 30;
}