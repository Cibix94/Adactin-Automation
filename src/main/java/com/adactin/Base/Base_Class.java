package com.adactin.Base;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Base_Class {

	public static WebDriver driver;
	
	public static WebDriver getBrowser(String browser) {
		try {
			if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
			} else if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\Drivers\\geckodriver.exe");
				driver = new FirefoxDriver();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		driver.manage().window().maximize();

		return driver;

	}

	public static void getUrl(String Url) {

		driver.get(Url);

	}

	public static void clickOnElement(WebElement element) {

		element.click();

	}

	public static void sendkeys(WebElement element, String value) {

		element.sendKeys(value);
	}

	public static void isDisplayed(WebElement element) {

		boolean displayed = element.isDisplayed();
		System.out.println(displayed);

	}

	public static void isSelected(WebElement element) {

		boolean selected = element.isSelected();
		System.out.println(selected);

	}

	public static void getOptions(WebElement element, String options) {

		Select s = new Select(element);
		List<WebElement> allOptions = s.getOptions();
		for (WebElement all_Options : allOptions) {
			if (options.equalsIgnoreCase("getOptions")) {
				String text = all_Options.getText();
				System.out.println(text);

			} else if (options.equalsIgnoreCase("getAllSelectedOptions")) {
				List<WebElement> allSelectedOptions = s.getAllSelectedOptions();
				for (WebElement allSelected_Options : allSelectedOptions) {
					System.out.println(allSelected_Options.getText());
				}
			} else if (options.equalsIgnoreCase("getfirstSelectedOption")) {
				WebElement firstSelectedOption = s.getFirstSelectedOption();
				System.out.println(firstSelectedOption.getText());
			}
		}
	}

	public static void waitconcepts(String type, int duration, TimeUnit format) {

		if (type.equalsIgnoreCase("implicit")) {
			driver.manage().timeouts().implicitlyWait(duration, format);

		} else if (type.equalsIgnoreCase("pageloadtimeout")) {
			driver.manage().timeouts().pageLoadTimeout(duration, format);
	}
	
		else if (type.equalsIgnoreCase("explicit")) {
			WebDriverWait wait_2 = new WebDriverWait(driver, duration);
			WebElement element = null;
			wait_2.until(ExpectedConditions.visibilityOf(element));

		}
	}

	public static void dropDown(WebElement element, String type, String value) {

		Select s = new Select(element);

		if (type.equalsIgnoreCase("selectbyvalue")) {
			s.selectByValue(value);
		} else if (type.equalsIgnoreCase("selectbyindex")) {
			int parseInt = Integer.parseInt(value);
			s.selectByIndex(parseInt);
		} else if (type.equalsIgnoreCase("selectbyvisibiletext")) {
			s.selectByVisibleText(value);
		}

	}

	public static void alert(WebElement element, String type, String value) {

		Alert alert = driver.switchTo().alert();

		if (type.equalsIgnoreCase("simplealert")) {
			alert.accept();
		} else if (type.equalsIgnoreCase("confirmalertAccept")) {
			alert.accept();
		} else if (type.equalsIgnoreCase("confirmalertDismiss")) {
			alert.dismiss();
		} else if (type.equalsIgnoreCase("promptalertAccept")) {
			alert.sendKeys(value);
			String text = alert.getText();
			System.out.println(text);
			alert.accept();
		}
		else if (type.equalsIgnoreCase("promptalertdismiss")) {
			alert.sendKeys(value);
			String text = alert.getText();
			System.out.println(text);
			alert.dismiss();
			
		}
	}

	public static void frame(String type, String value) {

		if (type.equalsIgnoreCase("index")) {
			int parseInt = Integer.parseInt(value);
			driver.switchTo().frame(parseInt);

		} else if (type.equalsIgnoreCase("idname")) {
			driver.switchTo().frame(value);
			
		} else if (type.equalsIgnoreCase("webelement")) {
			WebElement element = null;
			driver.switchTo().frame(element);

		}
	}

	public static void getTitle() {

		String title = driver.getTitle();
		System.out.println(title);
	}

	
	public static void getCurrentUrl() {

		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
	}

	public static void getText(WebElement element) {

		String text = element.getText();
		System.out.println(text);

	}

	public static void getAttribute(WebElement element, String value) {

		String attribute = element.getAttribute(value);
		System.out.println(attribute);
	}

	public static void isMultiple(WebElement element) {

		Select s = new Select(element);
		boolean multiple = s.isMultiple();
	}

	public static void takeScreenShot(String path) throws Throwable {

		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File destination = new File(path);
		FileUtils.copyFile(source, destination);

	}

	public static void scrollDown_ScrollUp(WebElement element) {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", element);

	}

	public static void actions(WebElement element, String action) {

		Actions a = new Actions(driver);

		if (action.equalsIgnoreCase("click")) {
			a.click(element).build().perform();
		} else if (action.equalsIgnoreCase("contextClick")) {
			a.contextClick(element).build().perform();
		} else if (action.equalsIgnoreCase("doubleClick")) {
			a.doubleClick(element).build().perform();
		} else if (action.equalsIgnoreCase("moveToElement")) {
			a.moveToElement(element).build().perform();
		}
	}

	public static void robot_Down() throws Throwable {

		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
	}

	public static void robot_Enter() throws Throwable {

		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

	public static void navigateTo(String value) {

		driver.navigate().to(value);
	}

	public static void navigateBack() {

		driver.navigate().back();

	}

	public static void navigateForward() {

		driver.navigate().forward();

	}

	public static void navigateRefresh() {

		driver.navigate().refresh();

	}

	public static void close() {

		driver.close();
	}

	public static void quit() {

		driver.quit();
	}

}
