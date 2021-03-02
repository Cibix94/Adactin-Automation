package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.adactin.Base.Base_Class;
import com.adactin.Pom.BookAHotel_Page;
import com.adactin.Pom.BookedItinerary_page;
import com.adactin.Pom.BookingConfirmation_Page;
import com.adactin.Pom.Login_Page;
import com.adactin.Pom.SearchHotel_Page;
import com.adactin.Pom.SelectHotel_Page;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends Base_Class {
	
	public static WebDriver driver = Runner.driver;
	
//	Login_Page login = new Login_Page(driver);
//	SearchHotel_Page searchHotel = new SearchHotel_Page(driver);
//	SelectHotel_Page selectHotel = new SelectHotel_Page(driver);
//	BookAHotel_Page bookAHotel = new BookAHotel_Page(driver);
//	BookingConfirmation_Page bookingConfirmation = new BookingConfirmation_Page(driver);
//	BookedItinerary_page bookedItinerary = new BookedItinerary_page(driver);
	
	 PageObjectManager pom = new PageObjectManager(driver);
	
	@Given("^launch The Application$")
	public void launch_The_Application() throws Throwable {
		
	//	getUrl("http://adactinhotelapp.com/");
		
		String url = FileReaderManager.getInstance().getInstanceCR().getUrl();
		
		getUrl(url);
		
	}

//	@When("^enter The Username In Username Textbox$")
//	public void enter_The_Username_In_Username_Textbox() throws Throwable {
		
		@When("^enter The \"([^\"]*)\" In Username Textbox$")
		public void enter_The_In_Username_Textbox(String username) throws Throwable {
		
	//	sendkeys(login.getUsername(), "JackSparow");
	//	String username = FileReaderManager.getInstance().getInstanceCR().getUsername();
		
		sendkeys(pom.get_Login().getUsername(), username);
			
			
	}

//	@When("^enter The Password In Password Textbox$")
//	public void enter_The_Password_In_Password_Textbox() throws Throwable {
		
		@When("^enter The \"([^\"]*)\" In Password Textbox$")
		public void enter_The_In_Password_Textbox(String password) throws Throwable {
		
	//	sendkeys(login.getPassword(), "Yamaha@94");
	//	String password = FileReaderManager.getInstance().getInstanceCR().getPassword();
		sendkeys(pom.get_Login().getPassword(), password);
			
	}

	@Then("^click On Login Button And It Navigates To SearchHotel Page$")
	public void click_On_Login_Button_And_It_Navigates_To_SearchHotel_Page() throws Throwable {
		
		clickOnElement(pom.get_Login().getLogin());
		
	}

	@When("^select The Hotel Location$")
	public void select_The_Hotel_Location() throws Throwable {
		
		dropDown(pom.get_SearchHotel().getLocation(), "selectbyvalue", "Paris");
		
	}

	@When("^select The Hotel$")
	public void select_The_Hotel() throws Throwable {
		
		dropDown(pom.get_SearchHotel().getHotels(), "selectbyvalue", "Hotel Sunshine");
		
	}

	@When("^select The Room Type$")
	public void select_The_Room_Type() throws Throwable {
		
		dropDown(pom.get_SearchHotel().getRoom_Type(), "selectbyvalue", "Super Deluxe");
	}

	@When("^select Number Of Rooms$")
	public void select_Number_Of_Rooms() throws Throwable {
		
		
	}

	@When("^enter The CheckIn Date$")
	public void enter_The_CheckIn_Date() throws Throwable {
		
		sendkeys(pom.get_SearchHotel().getCheckIn_Date(), "06/05/2021");
		
	}

	@When("^enter The CheckOut Date$")
	public void enter_The_CheckOut_Date() throws Throwable {
		
		sendkeys(pom.get_SearchHotel().getCheckOut_Date(), "10/05/2021");
		
	}

	@When("^select Number Of Adults$")
	public void select_Number_Of_Adults() throws Throwable {
		
		dropDown(pom.get_SearchHotel().getAdultPer_Room(), "selectbyvalue", "2");
		
	}

	@When("^select Number Of Childrens$")
	public void select_Number_Of_Childrens() throws Throwable {
	}

	@Then("^click On Search Button And It Navigates To SelectHotel Page$")
	public void click_On_Search_Button_And_It_Navigates_To_SelectHotel_Page() throws Throwable {
		
		clickOnElement(pom.get_SearchHotel().getSubmit_Btn());
		
	}
	
	@When("^select The Hotel By Clicking On Radio Button$")
	public void select_The_Hotel_By_Clicking_On_Radio_Button() throws Throwable {

		clickOnElement(pom.get_SelectHotel().getSelect_Btn());
	
	}

	@Then("^click On Continue Button And It Navigates To BookAHotel Page$")
	public void click_On_Continue_Button_And_It_Navigates_To_BookAHotel_Page() throws Throwable {
		
		clickOnElement(pom.get_SelectHotel().getContinue_Btn());
		
	}

	@When("^enter The First Name In FirstName Textbox$")
	public void enter_The_First_Name_In_FirstName_Textbox() throws Throwable {
		
		sendkeys(pom.get_BookAHotel().getFirst_Name(), "Jack");
	}

	@When("^enter The Last Name In LastName Textbox$")
	public void enter_The_Last_Name_In_LastName_Textbox() throws Throwable {
		
		sendkeys(pom.get_BookAHotel().getLast_Name(), "Sparow");
	}

	@When("^enter The Address In Address TextBox$")
	public void enter_The_Address_In_Address_TextBox() throws Throwable {
		
		sendkeys(pom.get_BookAHotel().getAddress(), "007,Eiffel Tower,Paris");
	}

	@When("^enter CreditCard Number In CreditCard Number Textbox$")
	public void enter_CreditCard_Number_In_CreditCard_Number_Textbox() throws Throwable {
	
		sendkeys(pom.get_BookAHotel().getCreditCard_Num(), "1231231231231231");
	}

	@When("^select CreditCard Type$")
	public void select_CreditCard_Type() throws Throwable {
		
		dropDown(pom.get_BookAHotel().getCreditCard_Type(), "selectbyvalue", "AMEX");
	}

	@When("^select Expiry Month Of CreditCard$")
	public void select_Expiry_Month_Of_CreditCard() throws Throwable {
		
		dropDown(pom.get_BookAHotel().getExpiryDate_Month(), "selectbyvalue", "5");
	}

	@When("^select Expiry Year Of CreditCard$")
	public void select_Expiry_Year_Of_CreditCard() throws Throwable {
		
		dropDown(pom.get_BookAHotel().getExpiryDate_Year(), "selectbyvalue", "2022");
	}

	@When("^enter CVV Number Of CreditCard$")
	public void enter_CVV_Number_Of_CreditCard() throws Throwable {
		
		sendkeys(pom.get_BookAHotel().getCvv_Num(), "007");
	}

	@Then("^click On BookNow Button And It Navigates To BookingConfirmation Page$")
	public void click_On_BookNow_Button_And_It_Navigates_To_BookingConfirmation_Page() throws Throwable {
	
		clickOnElement(pom.get_BookAHotel().getBookNow_Btn());
	}
	
	
	
	@Then("^click On MyItinerary Button And It Navigates To BookedItinerary Page$")
	public void click_On_MyItinerary_Button_And_It_Navigates_To_BookedItinerary_Page() throws Throwable {
	
		Thread.sleep(5000);
		
		clickOnElement(pom.get_BookingConfirmation().getMyItinerary());
	}

	@Then("^click On Logout Button$")
	public void click_On_Logout_Button() throws Throwable {
		
		clickOnElement(pom.get_BookedItinerary().getLogout_Btn());
	}


}
