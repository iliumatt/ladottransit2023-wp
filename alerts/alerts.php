<?php

//ON THE ALERT PAGE (the page you're linking to from this table):
//
//    Copy alert text content from Word doc, paste into a plain-text formatted TextEdit Document. This will completely remove Word's formatting.
//
//    Pre-format in TextEdit so that there is an extra carriage return space between each paragraph or list item, and two after the title.
//
//    The headline should have the affected route on the first line, followed by a single line break, then a brief summation of what is happening, when and why (as short as possible). You may have to finagle what is included on the printed alert, as LADOT use a number of different formatting schemes. 
//
//    Copy and paste the TextEdit copy into an existing alert, replacing the old copy.
//
//    Save alert in it's corresponding route folder in /whatsnew directory using "mmddyy_routename.html" format (e.g. 101910_downtown.html)
//
//    On the alert page, the whole title is bold.
//
//    Format the body of the alert as paragraphs, and, where appropriate, unordered (bulleted) lists. You'll find text formatting options in the Dreamweaver properties panel. Alert authors sometimes set canceled stops in tables – in this case reformat the tables as lists.
//
//    Include a date aligned to the right at the bottom of the alert.
//
//    If a map is provided with the alert (usually on a second page), position and zoom the map in the Word doc in your screen's window so that it's all visible and as large as possible. Take a screen shot and paste into Photoshop.
//
//    Trim and size the map to 1920px wide, or as close as possible with it still being readable.
//
//    Save for Web as a low (<10) quality jpeg. These are ugly anyway – not much you can do to make it worse. Save it to the appropriate directory in the "/whatsnew" directory, using the same numeric date and route naming convention with .jpg extension ("mmddyy_routename.jpg" e.g., 101919_downtown.jpg).
//
//    Include a date at the bottom of the alert page in mm/dd/yy format (10/19/19), aligned to the right of the page.
//
//    If the alert body copy includes the affected route name, link that name to the affected route page. You can copy the full URL of that route page and paste it into the link field in the DW properties panel. If it doesn't include it, I usually try to work it into the copy so it can be linked for user convenience.
//
//    Save the alert file again.
//
//ON THIS PAGE:
//
//    Copy/paste a full table row (<tr>...</tr>) from the table below and replace content accordingly using head and subhead of new alert. Make sure the entire headline is inside a div with the class "alert," as seen in the existing examples.
//
//    You'll note the headline should have the affected route in bold and all caps, followed by a line break, then a brief summation of what is happening (*not* in bold on this page, unlike on the alert itself), when and why. Keep as short as possible. You may have to finagle with what is included on the printed alert, as LADOT use a number of different formatting schemes. If you're lucky, the author will have already used this format.
//
//    Link to alert using root-relative links, beginning with "/" to denote the top level of the site (i.e., a href="/whatsnew/downtown/101910_downtown.html"). See existing alerts for examples. This is most easily and reliably accomplished by clicking the folder icon next to the link field in the properties panel in Dreamweaver; simply click the icon and navigate to the file in the dialog. This will ensure the correct path.
//
//    In the div with the "alert" class (div class="alert"), include a "data-regarding" attribute (refer to existing alerts) with the appropriate slug for the route(s) affected by the alert, separated by spaces (no commas). The slugs for the routes are listed below:
//
//    COMMUTER EXPRESS SLUGS:
//    142 409 419 422 423 431 437 438 439 448 534 549 573 574 cxub 
//
//    DASH SLUGS:
//    beachwood bhw boyleheights canoga chesterfield ctep crenshaw downtown elsereno fairfax highland hollywood hollywilshire kingeast leimert lhct losfeliz midtown nholly northridge observatory obslf pacoima pdr pcvn puep sanpedro southeast sylmar vnsc vermont watts wilmington wckt wos
//
//    CITYRIDE SLUGS:
//    viamarisol parklabrea
//
//    Launch alert page (ctrl+shift+u with that page/tab in focus in Dreamweaver)
//
//    Save and launch this page (ctrl+shift+u). If done correctly, linked alert head and subhead will appear on a homepage slide, on the alerts page slider and content area, and in the alert section of appropriate route page. Easy! -->

?>
<style>
th {
	background: #ddd;
}
</style>
<table class="faretable newstable">
  <caption class="cx">
  LATEST NEWS &amp; ALERTS
  </caption>
  <!-- ONLY EDIT BELOW THIS LINE! --> 
  
  <!--  DASH -->
  <tr>
    <th>DASH</th>
  </tr>
  <tr>
    <td><div class="alert dash news" data-regarding="elsereno pcvn puep watts"><a href="/ondemandstops/index.html"><strong>SAFE TRAVEL WITH ON-DEMAND STOPS STARTING AUGUST 21, 2021</strong></a></div></td>
  </tr>

  <!--  CX  -->

  <tr>
    <th>COMMUTER EXPRESS</th>
  </tr>
<!-- SYSTEM WIDE -->
  <tr>
    <th>SYSTEM WIDE</th>
  </tr>
  <tr>
    <td><div class="alert sw" data-regarding="system"><a href="/whatsnew/041922_masks_rec.html"><strong>FACE COVERINGS ARE REQUIRED TO RIDE LADOT TRANSIT</strong></a></div></td>
  </tr>
  <tr>
    <td><div class="alert sw" data-regarding="system"><a href="/whatsnew/061721_ls.html"><strong>LABOR SHORTAGE CAUSING DELAYS, MISSED TRIPS</strong></a></div></td>
  </tr>


  <!--  NEWS  -->
  <tr>
    <th>NEWS</th>
  </tr>

  <tr>
    <td><div class="alert news"><a href="/dbe?v=1.1"><strong>Disadvantaged Business Enterprise (DBE) Three-Year Overall Goal for Federal Fiscal Years 2019–2021</strong></a></div></td>
  </tr>
  
<!--
  <tr>
    <td><div class="alert news"><a href="https://ladot.lacity.org/sites/default/files/press-releases/press-release-ladot-launches-new-dash-sylmar-route.pdf" target="_blank"><strong>LADOT Launches New DASH Sylmar Route Surpassing 200 miles of DASH Service in Los Angeles</strong></a> <strong>(PDF)</strong></div></td>
  </tr>
-->

  
  <!--  LANOW  -->
  <tr>
    <th>LA<em>now</em></th>
    </tr>
    
    <tr>
    <th>Cityride</th>
  </tr>
<!--
  <tr>
    <td><div class="alert news"><a href="/studentsridefree"><strong>DASH TO CLASS - STUDENTS RIDE DASH FOR FREE! – STARTING AUGUST 2019</strong></a></div></td>
  </tr>
-->
  
  <!-- ONLY EDIT ABOVE THIS LINE! -->
  
</table> 
