package steps;
 

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class CarSearchSteps {
	
	public static WebDriver driver;

	
	
	@Before
	public void setUp() {
		
		System.setProperty("webdriver.chrome.driver","/Users/anji/Documents/Selenium/Executables/chromedriver");
		driver=new ChromeDriver();
		
		
		
	}
	
	@After
	public void tearDown(Scenario scenario) {
		
		if(scenario.isFailed()) {
			
			byte[] screenshotbytes= ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotbytes, "img/png");
		}
		
		if(driver != null) {
			
			driver.quit();
		}
		
	}
	
	

	@Given("^I am on the home page https://www\\.carsguide\\.com\\.au of carsguide website$")
	public void i_am_on_the_home_page_https_www_carsguide_com_au_of_carsguide_website() throws Throwable {
	   driver.get("https://www.carsguide.com.au");
		
	}

	@Then("^I move to buy \\+ sell menu$")
	public void i_move_to_buy_sell_menu() throws Throwable {
		
		    WebElement buysale=driver.findElement(By.xpath("//a[contains(text(),'buy + sell')]"));
		
		    
		    new Actions(driver).moveToElement(buysale).perform();
		
	    	}

	@Then("^I click on Search Cars$")
	public void i_click_on_Search_Cars() throws Throwable {
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a[contains(text(),'Search Cars')]")).click();
	    
	}

	@Then("^I select Any Make as \"([^\"]*)\"$")
	public void i_select_Any_Make_as(String arg1) throws Throwable {
		
		Thread.sleep(1000);
		new Select(driver.findElement(By.xpath("//select[@id=\"makes\"]"))).selectByVisibleText(arg1);;
	    
	}

	@Then("^I select Any Model as \"([^\"]*)\"$")
	public void i_select_Any_Model_as(String arg1) throws Throwable {
		Thread.sleep(1000);
		new Select(driver.findElement(By.xpath("//select[@id=\"models\"]"))).selectByVisibleText(arg1);;

	    
	}

	@Then("^I select Any Location as \"([^\"]*)\"$")
	public void i_select_Any_Location_as(String arg1) throws Throwable {
		Thread.sleep(1000);
		new Select(driver.findElement(By.xpath("//select[@id=\"locations\"]"))).selectByVisibleText(arg1);

	}

	@Then("^I select Price\\(Max\\) as \"([^\"]*)\"$")
	public void i_select_Price_Max_as(String arg1) throws Throwable {
		Thread.sleep(1000);
		new Select(driver.findElement(By.xpath("//select[@id=\"priceTo\"]"))).selectByVisibleText(arg1);;

	    
	}

	@Then("^I click on Find My Next Car button$")
	public void i_click_on_Find_My_Next_Car_button() throws Throwable {
	    driver.findElement(By.xpath("//input[@id=\"search-submit\"]")).click();;
		
	}

	@Then("^I see a list of  searched cars such as \"([^\"]*)\"$")
	public void i_see_a_list_of_searched_cars_such_as(String car) throws Throwable {
		
		Thread.sleep(1000);
		String  handle= driver.getWindowHandle();
		driver.switchTo().window(handle);
	
		String header=driver.findElement(By.xpath("//h5[contains(text(),'2010 BMW 118D')]")).getText();
		System.out.println(header);
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String expectedTitle) throws Throwable {
		
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals(expectedTitle,title);
	}


}
