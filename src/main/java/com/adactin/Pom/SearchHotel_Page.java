package com.adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel_Page {
	
	public static WebDriver driver;

	@FindBy(xpath="//select[@id='location']")
	private WebElement location;
	
	@FindBy(xpath="//select[@id='hotels']")
	private WebElement hotels;
	
	@FindBy(xpath="//select[@id='room_type']")
	private WebElement room_Type;
	
	@FindBy(xpath="//input[@id='datepick_in']")
	private WebElement checkIn_Date;
	
	@FindBy(xpath="//input[@id='datepick_out']")
	private WebElement checkOut_Date;
	
	@FindBy(xpath="//select[@id='adult_room']")
	private WebElement adultPer_Room;
	
	@FindBy(xpath="//select[@id='child_room']")
	private WebElement childPer_Room;

	@FindBy(xpath="//input[@id='Submit']")
	private WebElement submit_Btn;

	public SearchHotel_Page(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoom_Type() {
		return room_Type;
	}

	public WebElement getCheckIn_Date() {
		return checkIn_Date;
	}

	public WebElement getCheckOut_Date() {
		return checkOut_Date;
	}

	public WebElement getAdultPer_Room() {
		return adultPer_Room;
	}

	public WebElement getChildPer_Room() {
		return childPer_Room;
	}

	public WebElement getSubmit_Btn() {
		return submit_Btn;
	}
	
}

