Feature: Booking Hotel In Adactin Hotel Application

Scenario Outline: login In Login Page

Given launch The Application
When enter The "<Username>" In Username Textbox
And enter The "<Password>" In Password Textbox
Then click On Login Button And It Navigates To SearchHotel Page

Examples:

	|Username|Password|
	|Pirate|123|
	|JackSparow|Yamaha@94|

Scenario: search Hotel In SearchHotel Page

When select The Hotel Location
And select The Hotel
And select The Room Type
And select Number Of Rooms
And enter The CheckIn Date
And enter The CheckOut Date
And select Number Of Adults
And select Number Of Childrens
Then click On Search Button And It Navigates To SelectHotel Page

Scenario: select Hotel In SelectHotel Page

When select The Hotel By Clicking On Radio Button
Then click On Continue Button And It Navigates To BookAHotel Page

Scenario: booking Payment Details In BookAHotel Page

When enter The First Name In FirstName Textbox
And enter The Last Name In LastName Textbox
And enter The Address In Address TextBox
And enter CreditCard Number In CreditCard Number Textbox
And select CreditCard Type
And select Expiry Month Of CreditCard
And select Expiry Year Of CreditCard
And enter CVV Number Of CreditCard
Then click On BookNow Button And It Navigates To BookingConfirmation Page

Scenario: booking Cofirmation In BookingConfirmation Page

Then click On MyItinerary Button And It Navigates To BookedItinerary Page

Scenario: bookedItineray Can Be Verified

Then click On Logout Button

