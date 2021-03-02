package com.adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookedItinerary_page {
	
	public static WebDriver driver;

	@FindBy(xpath="//input[@id='logout']")
	private WebElement logout_Btn;

	public BookedItinerary_page(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	
	}

	public WebElement getLogout_Btn() {
		return logout_Btn;
	}
	
}
