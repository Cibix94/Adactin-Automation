package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.Base.Base_Class;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//featurefile",
glue = "com.adactin.stepdefinition",
monochrome = true,
dryRun = false,
strict = false,
//tags = {""}
plugin = { "html:Report/Html_Report",
//			"pretty",
			"json:Report/Json_Report.json",
		//	"com.cucumber.listener.ExtentCucumberFormatter:Report/ExtendReport.html"
}
		
)

public class Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() throws Throwable {
		
		String browser = FileReaderManager.getInstance().getInstanceCR().getbrowser();
		
		driver = Base_Class.getBrowser(browser);
		
	}
	
	@AfterClass
	public static void tear_Down() {
		
		driver.close();
		
	}
	
}
