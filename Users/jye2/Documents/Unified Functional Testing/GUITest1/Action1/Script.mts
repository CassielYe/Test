
sResultsXML = "C:\test\Report\Results.xml"
sDetailedXSL = "C:\Program Files (x86)\HP\Unified Functional Testing\dat\PDetails.xsl"
sShortXSL = "C:\Program Files (x86)\HP\Unified Functional Testing\dat\PShort.xsl"

ApplyXSL sResultsXML, sDetailedXSL, "C:\Results_Detailed.html"
ApplyXSL sResultsXML, sShortXSL, "C:\Results_Short.html"


SystemUtil.Run "C:\Results_Detailed.html"


'Set table = 
row = table.RowCount
For Iterator = 1 To row
table.GetCellData i,1
Next

s1= time()
wait 5
s2 = time()
Msgbox datediff("s",s1,s2)



Dim a
a = test(1,1)
Msgbox a
