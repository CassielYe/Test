Browser("Bing").Page("Bing").WebEdit("q").Set "Github"
Browser("Bing").Page("Bing").WebButton("Submit Query").Click 
Browser("Bing").Page("Github - bing").Sync
Browser("Bing").CloseAllTabs
Reporter.ReportEvent micPass,"Git Test","Pass"
