package com.adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingConfirmation_Page {
	
	public static WebDriver driver;

	@FindBy(xpath="//input[@id='my_itinerary']")
	private WebElement myItinerary_Btn;

	public BookingConfirmation_Page(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	
	}

	public WebElement getMyItinerary() {
		return myItinerary_Btn;
	}
	
	
}
