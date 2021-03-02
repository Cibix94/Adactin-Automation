package com.adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookAHotel_Page {
	
	public static WebDriver driver;

	@FindBy(xpath="//input[@id='first_name']")
	private WebElement first_Name;
	
	@FindBy(xpath="//input[@id='last_name']")
	private WebElement last_Name;
	
	@FindBy(xpath="//textarea[@id='address']")
	private WebElement address;
	
	@FindBy(xpath="//input[@id='cc_num']")
	private WebElement creditCard_Num;
	
	@FindBy(xpath="//select[@id='cc_type']")
	private WebElement creditCard_Type;
	
	@FindBy(xpath="//select[@id='cc_exp_month']")
	private WebElement expiryDate_Month;
	
	@FindBy(xpath="//select[@id='cc_exp_year']")
	private WebElement expiryDate_Year;
	
	@FindBy(xpath="//input[@id='cc_cvv']")
	private WebElement cvv_Num;
	
	@FindBy(xpath="//input[@id='book_now']")
	private WebElement bookNow_Btn;

	public BookAHotel_Page(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
		
	
	}

	public WebElement getFirst_Name() {
		return first_Name;
	}

	public WebElement getLast_Name() {
		return last_Name;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCreditCard_Num() {
		return creditCard_Num;
	}

	public WebElement getCreditCard_Type() {
		return creditCard_Type;
	}

	public WebElement getExpiryDate_Month() {
		return expiryDate_Month;
	}

	public WebElement getExpiryDate_Year() {
		return expiryDate_Year;
	}

	public WebElement getCvv_Num() {
		return cvv_Num;
	}

	public WebElement getBookNow_Btn() {
		return bookNow_Btn;
	}
	
	
}
