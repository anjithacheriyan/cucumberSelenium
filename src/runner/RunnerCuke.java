package runner;


import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features={"src/features"},
glue={"steps"},
monochrome= true,
//tags={"@sanity,@bvt"},
plugin={"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})
public class RunnerCuke{

		@BeforeClass
	    public static void setup() {
			
			ExtentCucumberFormatter.initiateExtentCucumberFormatter();
	        ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

	        // User can add the system information as follows
	        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
	        ExtentCucumberFormatter.addSystemInfo("Browser version", "v83.0.4103.116");
	        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.141.59");
	
		}
}
