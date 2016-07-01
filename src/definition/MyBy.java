package definition;

import org.openqa.selenium.By;

//Use this class to find elments without having to choose specific finding such as
//finding by id or tag name or css selector...
public class MyBy {
	public static By myFindElement(String idContent) {
		String temp;
		
		if (idContent.startsWith("css=")) {		
			return By.cssSelector(idContent.substring(4));
		}
		else if (idContent.startsWith("xpath=")) {
			String xpath;
			//For frames, use absolute xpath for faster finding
			if (idContent.equals("iframeResult")) {
				xpath = "/html/body/div[@id='container']/div[@id='iframecontainer']//iframe[@id='iframeResult']";
			}
			else {
				xpath = idContent.substring(6);
			}
			return By.xpath(xpath);
		}
		else if (idContent.startsWith("id=")) {
			//Use id
			return By.id(idContent.substring(3));
		}
		else if (idContent.startsWith("name")) {
			//e.g idContent = "name=fname"
			temp = "//*[@name='" + idContent.substring(5) + "']";
			return By.xpath(temp);
		}
		else if (idContent.startsWith("link=")) {
			return By.linkText(idContent.substring(5));
		}
		else {
			return By.xpath(idContent.substring(6));
		}
	}
}
