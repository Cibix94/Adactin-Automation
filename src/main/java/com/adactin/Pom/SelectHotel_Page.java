package com.adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel_Page {
	
	public static WebDriver driver;

	@FindBy(xpath="//input[@id='radiobutton_0']")
	private WebElement select_Btn;
	
	@FindBy(xpath="//input[@id='continue']")
	private WebElement continue_Btn;

	public SelectHotel_Page(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	
	}

	public WebElement getSelect_Btn() {
		return select_Btn;
	}

	public WebElement getContinue_Btn() {
		return continue_Btn;
	}
}
