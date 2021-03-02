package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.Pom.BookAHotel_Page;
import com.adactin.Pom.BookedItinerary_page;
import com.adactin.Pom.BookingConfirmation_Page;
import com.adactin.Pom.Login_Page;
import com.adactin.Pom.SearchHotel_Page;
import com.adactin.Pom.SelectHotel_Page;

public class PageObjectManager {

	public static WebDriver driver;
	
	public PageObjectManager(WebDriver driver2) {
		
		this.driver = driver2;
		PageFactory.initElements(driver, this);

	}
	
	public Login_Page get_Login() {
		
		Login_Page login = new Login_Page(driver);

		return login;
		
	}
	
	public SearchHotel_Page get_SearchHotel() {
		
		SearchHotel_Page searchHotel = new SearchHotel_Page(driver);
		
		return searchHotel;

	}
	
	public SelectHotel_Page get_SelectHotel() {
		
		SelectHotel_Page selectHotel = new SelectHotel_Page(driver);

		return selectHotel;
		
	}
	
	public BookAHotel_Page get_BookAHotel() {
		
		BookAHotel_Page bookAHotel = new BookAHotel_Page(driver);
				
		return bookAHotel;
		
	}
	
	public BookingConfirmation_Page get_BookingConfirmation() {
		
		BookingConfirmation_Page bookingConfirmation = new BookingConfirmation_Page(driver);

		return bookingConfirmation;
		
	}
	
	public BookedItinerary_page get_BookedItinerary() {
		
		BookedItinerary_page bookedItinerary = new BookedItinerary_page(driver);

		return bookedItinerary;
		
	}
	
}
