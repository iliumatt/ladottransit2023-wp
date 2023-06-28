jQuery.noConflict();

//(function() {
//    var a = setInterval( function() {
//        if ( typeof window.jQuery === 'undefined' ) {
//            return;
//        }
//        clearInterval( a );
//
//        console.log( 'jQuery is loaded' ); // call your function with jQuery instead of this
//    }, 500 );
//})();
//
//var test_1 = "None";
//jQuery(function(){
//    console.log(test_1)
//})

  var route = jQuery('[data-role=content]').attr('id');

  var page = jQuery('[data-role=content]').attr('id');

  //    var letter = jQuery('.alerts h4').attr('id').length - 1;
  //    var routeDt =  route + " " + letter;  
  //	var tableDash = jQuery('table caption.dash').parent().attr('id'); 
  var routeId = '';
  var routeName = '';
  var pageName = '';
  var cxImageDir = 'https://www.cdn.ladottransit.com/comexp/img/';
  var dashImageDir = 'https://www.cdn.ladottransit.com/dash/img/';
  var crImageDir = 'https://www.cdn.ladottransit.com/cityride/img/';
  var otherImgDir = 'https://www.cdn.ladottransit.com/img/pic/';
  //var routeClass = '';
  var routeColor = '';
  //var routeCXDir = '/comexp/routes/';
  //var routeCX = route.substr(2);
  //var routeCXPageURL = routeCXDir + routeCX + '.html';
  //var routeDashDir = '/dash/routes/';
  //var routeDash = '';
  //var routeFile = '';
  //var routeDASHURL = routeDashDir + routeDash + '.html';
  var cxRouteImageURL = cxImageDir + route.substring(2) + '_pic.jpg';
  var cxRouteImageURL2 = cxImageDir + route.substring(2) + '_pic_lg.jpg';
  var cxRouteImageURL3 = cxImageDir + route.substring(2) + '_pic_xlg.jpg';
  var dashRouteImageURL = dashImageDir + route.substring(4) + '_pic.jpg';
  var dashRouteImageURL2 = dashImageDir + route.substring(4) + '_pic_lg.jpg';
  var dashRouteImageURL3 = dashImageDir + route.substring(4) + '_pic_xlg.jpg';
  var cityrideRouteImageURL = crImageDir + route.substring(8) + '_pic.jpg';
  var cityrideRouteImageURL2 = crImageDir + route.substring(8) + '_pic_lg.jpg';
  var cityrideRouteImageURL3 = crImageDir + route.substring(8) + '_pic_xlg.jpg';
  var pageImageURL = otherImgDir + page + '_pic.jpg';
  var pageImageURL2 = otherImgDir + page + '_pic_lg.jpg';
  var pageImageURL3 = otherImgDir + page + '_pic_xlg.jpg';
  //	var division = '';


function loadElements() {
  //	var baseURL = 'https://www.ladottransit.com';
  

  if (page === 'ridersguide') {
    pageName = 'Rider\'s Guide';
    routeColor = '#00447c';
  } else if (page === 'about') {
    pageName = 'About LADOT Transit'
    routeColor = '#00447c';
  }else if (page === 'ada') {
    pageName = 'ADA \(Americans With Disabilities Act\)'
    routeColor = '#00447c';
  } else if (page === 'advertising') {
    pageName = 'Advertising'
    routeColor = '#00447c';
  } else if (page === 'ladotaccess') {
    pageName = 'Accessible Services'
    routeColor = '#00447c';
  } else if (page === 'bikesonbuses') {
    pageName = 'Bicycles &amp; LADOT Transit'
    routeColor = '#00447c';
  } else if (page === 'business') {
    pageName = 'Doing Business with LADOT'
    routeColor = '#00447c';
  } else if (page === 'cc') {
    pageName = 'Request Community Calendar Ad Space'
    routeColor = '#00447c';
  } else if (page === 'comments') {
    pageName = 'Commen&shy;dations, Comp&shy;laints, Sug&shy;ges&shy;tions'
    routeColor = '#00447c';
  } else if (page === 'conduct') {
    pageName = 'Rider\'s Code of Conduct'
    routeColor = '#00447c';
  } else if (page === 'contact') {
    pageName = 'Contact Us';
    routeColor = '#00447c';
  } else if (page === 'dla') {
    pageName = 'GTFS Feed &amp; Deve&shy;loper License Agree&shy;ment';
    routeColor = '#00447c';
  } else if (page === 'employment') {
    pageName = 'Employment Inquiries';
    routeColor = '#00447c';
  } else if (page === 'fareequity') {
    pageName = 'Fare Equity Public Hearings';
    routeColor = '#00447c';
  } else if (page === 'fares') {
    pageName = 'Fares';
    routeColor = '#00447c';
  } else if (page === 'forbidden') {
    pageName = 'Sorry, you can\'t access that directory listing';
    routeColor = '#00447c';
  } else if (page === 'mobilesales') {
    pageName = 'Mobile Sales Team';
    routeColor = '#00447c';
  } else if (page === 'notfound') {
    pageName = 'Page Not Found';
    routeColor = '#00447c';
  } else if (page === 'planTrip') {
    pageName = 'Trip Planner';
    routeColor = '#00447c';
  } else if (page === 'privacy') {
    pageName = 'City of Los Angeles Depart&shy;ment of Trans&shy;portation Privacy Policy';
    routeColor = '#00447c';
  } else if (page === 'cr-vaccinations') {
    pageName = 'Vaccinations';
    routeColor = '#00447c';
  } else if (page === 'routes') {
    pageName = 'LADOT Transit Route Schedules';
    routeColor = '#00447c';
  } else if (page === 'realTimeInfo') {
    pageName = 'Real-Time Bus Infor&shy;mation';
    routeColor = '#00447c';
  } else if (page === 'signup') {
    pageName = 'Sign Up for Email Alerts';
    routeColor = '#00447c';
  } else if (page === 'titlevi') {
    pageName = 'Title VI Policy';
    routeColor = '#00447c';
  } else if (page === 'twitter') {
    pageName = 'Follow Us on Twitter';
    routeColor = '#00447c';
  } else if (page === 'ondemandstops') {
    pageName = 'SAFE TRAVEL WITH ON-DEMAND STOPS STARTING AUGUST 21, 2021';
    routeColor = '#00447c';
  } else if (page === 'cityride') {
    jQuery('.routetitle h2').css('position', 'absolute');
    jQuery('.routetitle h2').css('left', '-10000px');
    pageName = 'Cityride';
    routeColor = '#00447c';
  } else if (page === 'pgcomexp') {
    pageName = 'Overview';
    routeColor = '#00447c';
  } else if (page === 'pagedash') {
    pageName = 'Overview';
    routeColor = '#00447c';
  } else if (page === 'lamobile') {
    pageName = 'Mobile Ticketing Demonstration';
    routeColor = '#00447c';
  } else if (page === 'lanow') {
    pageName = 'LA\<i\>now\<\/i\>';
    jQuery('.routetitle h2').css('position', 'absolute');
    jQuery('.routetitle h2').css('left', '-10000px');
    routeColor = '#00447c';
  } else if (page === 'lausd') {
    pageName = 'LAUSD Transit Directory and Promotional Materials';
    routeColor = '#00447c';
  } else if (page === 'lausd-e') {
    pageName = 'Student Requirements for Transportation Assistance';
    routeColor = '#00447c';
  } else if (page === 'lausd-s') {
    pageName = 'LADOT Routes Serving LAUSD Schools';
    routeColor = '#00447c';
  } else if (page === 'charterbus') {
    pageName = 'Charter Bus Program';
    routeColor = '#00447c';
  } else if (page === 'productions') {
    pageName = 'Production Crew Parking Request';
    routeColor = '#00447c';
  } else if (page === 'reports') {
    pageName = 'Surveys &amp; Reports';
    routeColor = '#00447c';
  } else if (page === 'students') {
    pageName = 'DASH to Class - Free Rides on DASH for Students';
    routeColor = '#00447c';
  } else if (page === 'whatsnew') {
    pageName = 'News &amp; Service Alerts';
    routeColor = '#00447c';
  } else if (page === 'rideralert') {
    pageName = 'Rider Alert';
    routeColor = '#00447c';
  } else if (page === 'dbe') {
    pageName = 'Disadvantaged Business Enterprise (DBE) Three-Year Overall Goal for Federal Fiscal Years 2022-2024';
    routeColor = '#00447c';
  } else if (page === 'rarequest') {
    pageName = 'Reason&shy;able Accom&shy;modations Re&shy;quests';
    routeColor = '#00447c';
  } else if (page === 'covid') {
    pageName = 'COVID-19 Information';
    routeColor = '#00447c';
  }
  if (route === 'cx574') {

    routeId = '869';
    routeName = 'Commuter Express 574';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //routeImageURL = routeCXDir + 'pic_574.jpg';
    //routeDash = 'beachwood';
    //		 division = 'LADOTMVN';
  } else if (route === 'dashbeachwoodcanyon') {
    routeId = '562';
    routeName = 'DASH Beachwood Canyon';
    //routeDashDir='beachwood';
    //routeFile='beachwood';
    routeColor = "#33460c";
    //		  division = 'LADOT12';
  } else if (route === 'dashboyleheights') {
    routeId = '4867';
    routeName = 'DASH Boyle Heights&#8203;/&#8203;East LA';
    //routeDashDir='boyleheights';
    //routeFile='boyleheights';
    routeColor = "#843c10";
    //		  division = 'LADOTMVC';
  } else if (route === 'dashchesterfieldsquare') {
    routeId = '712';
    routeName = 'DASH Chesterfield Square';
    //routeDashDir='chesterfield';
    //routeFile='chesterfield';
    routeColor = "#9E6C00";
    //		 division = 'LADOTMVN';
  } else if (route === 'dashcrenshaw') {
    routeId = '573,589';
    routeName = 'DASH Crenshaw';
    //routeDashDir='crenshaw';
    //routeFile='crenshaw';
    routeColor = "#0077d4";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntown') {
    routeId = '4447,4443,4446,4444,4445';
    routeName = 'DASH Downtown Los Angeles';
    //routeDashDir='downtown';
    //routeFile='downtown';
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntowna') {
    routeId = '4447';
    routeName = 'DASH Downtown Route A';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "#007ac3";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntownb') {
    routeId = '4443';
    routeName = 'DASH Downtown Route B';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "#9b5ba4";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntownc') {
    routeId = 'TBD';
    routeName = 'DASH Downtown Route C';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "purple";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntownd') {
    routeId = '4446';
    routeName = 'DASH Downtown Route D';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "#faab53";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntowne') {
    routeId = '4444';
    routeName = 'DASH Downtown Route E';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "#ed1c24";
    //		  division = 'LADOT6';
  } else if (route === 'dashdowntownf') {
    routeId = '4445';
    routeName = 'DASH Downtown Route F';
    //routeDashDir='downtown';
    //routeFile='downtown';
    routeColor = "#f174ad";
    //		  division = 'LADOT6';
  } else if (route === 'dashelserenocityterrace') {
    routeId = '4868';
    routeName = 'DASH El Sereno&#8203;/&#8203;City Terrace';
    //routeDashDir='elsereno';
    //routeFile='elsereno';
    routeColor = "#a30059";
    //		  division = 'LADOTMVC';
  } else if (route === 'dashfairfax') {
    routeId = '563';
    routeName = 'DASH Fairfax';
    //routeDashDir='fairfax';
    //routeFile='fairfax';
    routeColor = "#7e2342";
    //		 division = 'LADOT12';
  } else if (route === 'dashhighlandpark') {
    routeId = '566';
    routeName = 'DASH Highland Park&#8203;/&#8203;Eagle Rock';
    //routeDashDir='HighlandPark_EagleRock';
    //routeFile='HighlandPk_EagleRk';
    routeColor = "#BC527D";
    //		  division = 'LADOT12';
  } else if (route === 'dashhollywood') {
    routeId = '564,603';
    routeName = 'DASH Hollywood';
    // routeDashDir='hollywood';
    //routeFile='hollywood';
    routeColor = "#00818F";
    //		  division = 'LADOT12';
  } else if (route === 'dashhollywoodwilshire') {
    routeId = '565';
    routeName = 'DASH Hollywood&#8203;/&#8203;Wilshire';
    //routeDashDir='hollywood_wilshire';
    //routeFile='hollywood_wilshire';
    routeColor = "#667079";
    //			routeColor2="#F14E00"
    //		 division = 'LADOT12';
  } else if (route === 'dashkingeast') {
    routeId = '574,604';
    routeName = 'DASH King&#8203;-&#8203;East';
    //routeDashDir='KingEast';
    //routeFile='kingeast';
    routeColor = "#4555c7";
    //		  division = 'LADOT12';
  } else if (route === 'dashleimertslauson') {
    routeId = '575,605';
    routeName = 'DASH Leimert&#8203;/&#8203;Slauson';
    //routeDashDir='Leimert_Slauson';
    //routeFile='leimertslauson';
    routeColor = "#006233";
    //		  division = 'LADOT12';
  } else if (route === 'dashlincolnheights') {
    routeId = '567,568';
    routeName = 'DASH Lincoln Heights&#8203;/&#8203;China&shy;town';
    //routeDashDir='lincolnheights';
    //routeFile='lincolnheights';
    routeColor = "#836e2c";
    //		  division = 'LADOT12';
  } else if (route === 'dashlosfeliz') {
    routeId = '569';
    routeName = 'DASH Los Feliz';
    //routeDashDir='LosFeliz';
    //routeFile='losfeliz';
    routeColor = "#003066";
    //		  division = 'LADOT12';
  } else if (route === 'dashmidtown') {
    routeId = '576';
    routeName = 'DASH Midtown';
    //routeDashDir='Midtown';
    //routeFile='midtown';
    routeColor = "#857300";
    //		  division = 'LADOT12';
  } else if (route === 'dashnorthridge') {
    routeId = '798';
    routeName = 'DASH Northridge&#8203;/&#8203;Reseda';
    //routeDashDir='Northridge';
    //routeFile='northridge';
    routeColor = "#6f5048";
    //		  division = 'LADOTMVN';
  } else if (route === 'dashobservatory') {
    routeId = '570';
    routeName = 'DASH Observatory';
    //routeDashDir='';
    routeColor = "#c02d19";
    //		  division = 'LADOT12';
  } else if (route === 'dashobslf') {
    routeId = '4577';
    routeName = 'DASH Obser&shy;vatory&#8203;/&#8203;Los Feliz';

    routeColor = "#c02d19";
    //routeDashDir='';
    //		  division = 'LADOT12';
  } else if (route === 'dashpcvn') {
    routeId = '801,804';
    routeName = 'DASH Panorama City&#8203;/&#8203;Van Nuys';
    //routeDashDir='PanoramaCity_VanNuys';
    //routeFile='pcity_vannuys';
    routeColor = "#b0232a";
    //		  division = 'LADOTMVN';
  } else if (route === 'dashpico') {
    routeId = '4869';
    routeName = 'DASH Pico Union&#8203;/&#8203;Echo Park';
    //routeDashDir='PicoUnion_EchoPk';
    //routeFile='picounion';
    routeColor = "#288077";
    //		  division = 'LADOTMVC';
  } else if (route === 'dashpdr') {
    routeId = '1756';
    routeName = 'DASH Pueblo del Rio';
    //routeDashDir='pdr';
    //routeFile='pdr';
    routeColor = "#5d0e8b";
    //		  division = 'LADOT12';
  } else if (route === 'dashsanpedro') {
    routeId = '711';
    routeName = 'DASH San Pedro';
    //routeDashDir='SanPedro';
    //routeFile='sanpedro';
    routeColor = "#27865A";
    //		 division = 'LADOTMVN';
  } else if (route === 'dashsoutheast') {
    routeId = '1757,1758';
    routeName = 'DASH Southeast';
    //routeDashDir='Southeast';
    // routeFile='southeast';
    routeColor = "#d15100";
    //		  division = 'LADOT12';
  } else if (route === 'dashscvn') {
    routeId = '799,800';
    routeName = 'DASH Van Nuys&#8203;/&#8203;Studio City';
    //routeDashDir='VanNuys_StudioCty';
    //routeFilee='VanNuysStudioCity';
    routeColor = "#00667c";
    //		  division = 'LADOTMVN';
  } else if (route === 'dashsylmar') {
    routeId = '5285';
    routeName = 'DASH Sylmar';
    //routeDashDir='VanNuys_StudioCty';
    //routeFilee='VanNuysStudioCity';
    routeColor = "#5B797B";
    //		  division = 'LADOTMVN';
  } else if (route === 'dashvermontmain') {
    routeId = '715,716';
    routeName = 'DASH Vermont&#8203;/&#8203;Main';
    //routeDashDir='VermontMain';
    //routeFile='vermontmain';
    routeColor = "#0D8720";
    //		 division = 'LADOTMVN';
  } else if (route === 'dashwatts') {
    routeId = '713,714';
    routeName = 'DASH Watts';
    //routeDashDir='Watts';
    //routeFile='watts';
    routeColor = "#786490";
    //		 division = 'LADOTMVN';
  } else if (route === 'dashwilmington') {
    routeId = '708,710';
    routeName = 'DASH Wilmington';
    //routeDashDir='Wilmington';
    routeColor = "#9D692A";
    //		 division = 'LADOTMVN';
  } else if (route === 'dashwckt') {
    routeId = '571,572';
    routeName = 'DASH Wilshire Center&#8203;/&#8203;Korea&shy;town';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "#e64184";
    //		  division = 'LADOT12';
  } else if (route === 'dashbhw') {
    routeId = 'TBD';
    routeName = 'DASH Boyle Heights West';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "pink";
    //		  division = 'LADOT12';
  } else if (route === 'dashcanoga') {
    routeId = 'TBD';
    routeName = 'DASH Canoga Park';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "cadetblue";
    //		  division = 'LADOT12';
  } else if (route === 'dashctep') {
    routeId = 'TBD';
    routeName = 'DASH China&shy;town&#8203;/&#8203;Echo Park';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "greenyellow";
    //		  division = 'LADOT12';
  } else if (route === 'dashnholly') {
    routeId = '5819,5820';
    routeName = 'DASH North Holly&shy;wood';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "#A76820";
    //		  division = 'LADOT12';
  } else if (route === 'dashpacoima') {
    routeId = 'TBD';
    routeName = 'DASH Pacoima';
    //routeDashDir='Wilshire';
    //routeFile='wilshire_koreatown';
    routeColor = "indianred";
    //		  division = 'LADOT12';
  } else if (route === 'dashobservatoryshuttle') {
    routeId = '570';
    routeName = 'DASH Observ&shy;atory Shuttle';
    //routeDashDir='';
    //		  division = 'LADOT12';
  } else if (route === 'cx142') {
    routeId = '870';
    routeName = 'Commuter Express 142';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx409') {
    routeId = '29';
    routeName = 'Commuter Express 409';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cx419') {
    routeId = '867';
    routeName = 'Commuter Express 419';
    // routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cx422') {
    routeId = '30';
    routeName = 'Commuter Express 422';
    // routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cx423') {
    routeId = '31';
    routeName = 'Commuter Express 423';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cx431') {
    routeId = '26,1524';
    routeName = 'Commuter Express 431';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx437') {
    routeId = '858,4290';
    routeName = 'Commuter Express 437';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx438') {
    routeId = '27,1458';
    routeName = 'Commuter Express 438';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx439') {
    routeId = '4291';
    routeName = 'Commuter Express 439';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx448') {
    routeId = '28';
    routeName = 'Commuter Express 448';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx534') {
    routeId = '871';
    routeName = 'Commuter Express 534';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVS';
  } else if (route === 'cx549') {
    routeId = '856';
    routeName = 'Commuter Express 549';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cx573') {
    routeId = '868';
    routeName = 'Commuter Express 573';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cxUsbhs') {
    routeId = '900';
    routeName = 'Union Station/ Bunker Hill Shuttle';
    //routeClass = 'cx';
    routeColor = '#4A7182';
    //		 division = 'LADOTMVN';
  } else if (route === 'cityrideparklabrea') {
    routeColor = '#657321';
    routeName = 'Park La Brea Connector';
  } else if (route === 'cityrideviamarisol') {
    routeColor = '#657321';
    routeName = 'Via Marisol Connector';
  }
    
    //LOAD REALTIME MAP
jQuery(document).ready(function() {
     //console.log('route id is' +  routeId);
	if(jQuery(this).find("iframe").length===0) {
	jQuery('.rtmap').append('<iframe id="#ladotbus" src="https://www.ladotbus.com/map?showHeader=0&amp;route='+ routeId +'&silent_disable_timeout=1">Your browser does not support inline frames or is currently configured not to display inline frames</iframe>');
        
	jQuery('.pdflink-rt').append('<a href="https://www.ladotbus.com/map?route='+ routeId +'" target="_blank" class="button-primary button-overrides"><i class="fas fa-external-link-alt"></i>View ' + routeName + ' map on ladotbus.com</a>');
        }
    });

      //POPULATE ROUTE PAGE TITLES
  jQuery('h2.pageTitle').append(pageName)
  var dashRouteTitle = routeName.replace("DASH ", "");
      jQuery('h2.dashTitle').append(dashRouteTitle);  


  //POPULATE ROUTE LEVEL ALERT HEADER
  jQuery('h4#alert-route').append(routeName);

  //PREPEND AND COLOR THE ROUTE'S ALERT BOX
  jQuery('h4.alertbox-main').before().prepend('<div class="alertbox-block"></div>');


  jQuery('.alertbox-block').css('background-color', routeColor);
  //console.log(routeColor);

  jQuery('h4.alertbox-sw').before().prepend('<div class="alertbox-block alertbox-sw-block"></div>');
  jQuery('.alertbox-sw-block').css('background-color', "#B84100");

  if (route == 'dashdowntown'){
      jQuery('.alertbox-block:first-child').addClass('dash');
  }
  //LINK ROUTE PDFS
  jQuery('.cxp .pdf-link').each(function(){
      var pdfLink = 'https://www.cdn.ladottransit.com/pdf/cx/' + "ce" +  route.substring(2) + ".pdf";
        jQuery(this).attr('href', pdfLink);
  });


  jQuery('.dashp .pdf-link').each(function(){
      var pdfLinkDash = 'https://www.cdn.ladottransit.com/pdf/dash/' + route.substring(4) + ".pdf";
        jQuery(this).attr('href', pdfLinkDash);

  });


  jQuery('.crp .pdf-link').each(function(){
      var pdfLinkCR = 'https://www.cdn.ladottransit.com/pdf/cr/' + route.substring(8) + ".pdf";
        jQuery(this).attr('href', pdfLinkCR);

  });
    
    
    //LOAD PHOTOS
    function loadPhotoCX(){

        if (jQuery(window).width() <= 500){	
            jQuery('.routetitle').css('background-image',"url('"+cxRouteImageURL+"')");	
        }	
        if ((jQuery(window).width() >= 501) && (jQuery(window).width() <= 963)){
            jQuery('.routetitle').css('background-image',"url('"+cxRouteImageURL3+"')");
        }	
        if (jQuery(window).width() >= 964) {
            jQuery('.routetitle').css('background-image',"url('"+cxRouteImageURL2+"')");		
        } 


          var cxRouteTitle = routeName.replace("Commuter Express ", "");
              jQuery('h2.cxTitle').append(cxRouteTitle); 
        console.log(cxRouteImageURL2);
    }


    function loadPhotoDash(){

        if (jQuery(window).width() <= 500){

            jQuery('.routetitle').css("background-image","url('"+dashRouteImageURL+"')");

            console.log(dashRouteImageURL);

        }

        if ((jQuery(window).width() >= 501) && (jQuery(window).width() <= 963)){

            jQuery('.routetitle').css("background-image","url('"+dashRouteImageURL3+"')");
            console.log(dashRouteImageURL);

        }

        if (jQuery(window).width() >= 964) {

            jQuery('.routetitle').css("background-image","url('"+dashRouteImageURL2+"')");
            console.log(dashRouteImageURL);

        } 
    }

    function loadPhotoCityride(){

        if (jQuery(window).width() <= 500){
            jQuery('.routetitle').css("background-image","url('"+cityrideRouteImageURL+"')");
        }

        if ((jQuery(window).width() >= 501) && (jQuery(window).width() <= 963)){
            jQuery('.routetitle').css("background-image","url('"+cityrideRouteImageURL3+"')");
        }

        if (jQuery(window).width() >= 964) {

            jQuery('.routetitle').css("background-image","url('"+cityrideRouteImageURL2+"')");

        } 
    }

    function loadPhotoOther(){

        if (jQuery(window).width() <= 500){
            jQuery('.routetitle').css("background-image","url('"+pageImageURL+"')");
        }

        if ((jQuery(window).width() >= 501) && (jQuery(window).width() <= 963)){
            jQuery('.routetitle').css("background-image","url('"+pageImageURL3+"')");
        }

        if (jQuery(window).width() >= 964) {

            jQuery('.routetitle').css("background-image","url('"+pageImageURL2+"')")

        } 
    }
              
      if (jQuery('.routetitle').hasClass('dash')){  
          loadPhotoDash();
      }
      if (jQuery('.routetitle').hasClass('cxt')){
          loadPhotoCX();
      }
      if (jQuery('.routetitle').hasClass('cr')){
          loadPhotoCityride();
      }
      
      if (jQuery('.routetitle').hasClass('other textonly')){
          //NO PIC, DO NOTHING
          return;
          
      } else if (jQuery('.routetitle').hasClass('other')){
          loadPhotoOther();
      }
    
    

}


jQuery(document).ready(function() {
  loadElements();
    //console.log(route);
});

//FETCH ALERTS FOR ROUTE PAGES

function FetchAlertDataSW(alertsSW) {
  if (jQuery("#alerts-sw").length < 1 || jQuery("[data-regarding]").length < 1) {
    return;
  }

  if (alertsSW.length < 1) {
    //Get rid of button if there are no alerts.
    jQuery("#alerts-sw").remove();

    return;
  }

  jQuery.each(alertsSW, function (i, a) {
    //append each alert to the .alert section.
    jQuery("div.alert-sw-wrap:first").append("<div class='alerts-sw alert-sw'>" + jQuery(a).html() + "</div>");
  });

}

function FetchAlertData(alerts) {
  //Do nothing if this isn't an appropriate page.
  if (jQuery("#alerts").length < 1 || jQuery("[data-regarding]").length < 1) {
    return;
  }

  if (alerts.length < 1) {
    //Get rid of section if there are no alerts.
    jQuery("#alerts-in").remove();
    return;
  }

  jQuery.each(alerts, function (i, a) {
    //append each alert to the .alert section.
    jQuery("div.alert-route-wrap:first").append("<div class='alert'>" + jQuery(a).html() + "</div>");
  });
}


function FetchAlertDataDT(alerts, object) {
  //Do nothing if this isn't an appropriate page.
  if (jQuery("#" + object).length < 1 || jQuery("[data-regarding]").length < 1) {
    return;
  }

  if (alerts.length < 1) {
    //Get rid of section if there are no alerts.
    jQuery("#" + object).remove();
    return;
  }
  jQuery.each(alerts, function (i, a) {
    //append each alert to the .alert sectijQuery("#" + objWrap)on.
    var objWrap = object + " div.alert-route-wrap:first";
    jQuery("#" + objWrap).append("<div class='alert'>" + jQuery(a).html() + "</div>");
  });
}


//Invoked AFTER the page is finished loading.
jQuery(window).on('load', function () {
  //get Alerts
  jQuery.get("https://www.cdn.ladottransit.com/alerts.php", function (data) {
    // Check is any data returned or hide the whole div
    if (!data.length) {
      jQuery('#alerts').hide();
      //            return;
    }

    // Call each function passing relevant values for that box
    var isRouteSpecificAlertEmpty = false;
    var isSiteWideAlertEmpty = false;
    if (jQuery("#alerts").length) {
      var alerts = jQuery(data).find("[data-regarding*='" + jQuery("#alerts").data("regarding") + "']");
      if (!alerts.length) {
        isRouteSpecificAlertEmpty = true;
      }
      FetchAlertData(alerts);
    }

    if (jQuery("#alerts-sw").length) {
      var alertsSW = jQuery(data).find("[data-regarding*='system']");
      if (!alertsSW.length) {
        isSiteWideAlertEmpty = true;
      }
      FetchAlertDataSW(alertsSW);
    }

    if (isRouteSpecificAlertEmpty && isSiteWideAlertEmpty) {
      jQuery("#alerts").remove();
    }

    ["alerts-a", "alerts-b", "alerts-d", "alerts-e", "alerts-f"].forEach(function (item) {
      if (('#' + item).length) {
        var alertDowntownData = jQuery(data).find("[data-regarding*='" + jQuery('#' + item).data("regarding") + "']");
        FetchAlertDataDT(alertDowntownData, item);
      }
    })
  });
});

//Invoked BEFORE the page is finished loafing.
jQuery(document).ready(function () {

    WireUpEvents();

    //CENTER BUTTON LISTS SMALL SCREEN
    if (document.documentElement.clientWidth < 800) {
        jQuery("ul.list-h").each(function () {
            jQuery(this).removeClass('list-h');
            jQuery(this).addClass('newslinkCenter');
        });
    }
	
	
    //ROUND CORNERS ON COLLAPSIBLE NON-SETS WITH INSET=FALSE
//    if (document.documentElement.clientWidth > 959) {
//        jQuery("#mainNav div.menuCollapse").addClass("ui-corner-bottom");
//        jQuery(".routesections>div:first-child").addClass('ui-corner-top');
//        jQuery(".routesections>div:last-child").addClass('ui-corner-bottom');
//    }
    //CV LINK SITEWIDE
    
//      jQuery(".containerIcons").append('<div class="covid-outer"><div class="container100 covid-inner"><div class="covid-outer"><div class="container100 covid-inner"><div class="container"><p class="covid-p"><span><strong><i class="fa fa-exclamation-triangle" style="margin-right: .5rem; color:#fff;"></i> RIDER ALERT </strong></span> &nbsp;<strong>Beginning Sunday, June 5, 2022 and continuing through Saturday June 11, 2022, Commuter Express and DASH DOWNTOWN Routes A, B, E, and F and  services will be delayed and rerouted and several bus stops will be temporarily suspended due to the Summit of the Americas.<br /> <a href="/whatsnew/downtown/060222_dtabef.html">DASH Downtown Info</a> | <a href="/whatsnew/060322_sota_cx_allHOLD!!!.html">Commuter Express Info</a></strong></p></div></div></div>');
//    
//      
//      jQuery("#lanow .containerIcons .covid-outer, #cityride .containerIcons .covid-outer").remove();

    
});

function WireUpEvents()
{
    // BACK TO TOP BUTTONS
    jQuery(document).on("click", "a.top", function () {
        jQuery('html, body').stop().animate({ scrollTop: 0 }, 500);
        return false;
    });
//
//	//ANIMATE COLLAPSIBLE
//	
//	  jQuery(document).on("collapsibleexpand", ".ui-collapsible", function(e) {
//    var self = jQuery(this), 
//        menu = jQuery("#mainmenu"),
//        pageY = jQuery(document).scrollTop(),
//        content = jQuery(this).children(".ui-collapsible-content");
//    content.hide();
//    content.slideDown({
//        duration: 300,
//        step: function(now, fx) {
//          if (fx.prop == "height") {
//            var pct = ((100 * now) / fx.end),
//              itemTop = jQuery(self).offset().top,
//              menuScrollTop = jQuery(menu).scrollTop(),
//              amt = (itemTop - pageY) / 100 * pct;
//            menu.scrollTop(menuScrollTop + amt);
//          }
//        }
//      }
//    );
//    e.stopPropagation(); // don't bubble up
//  });
//
//  jQuery(document).on("collapsiblecollapse", ".ui-collapsible", function(e) {
//    var content = jQuery(this).children('.ui-collapsible-content');
//    content.slideUp(300);
//    e.stopPropagation(); // don't bubble up
//  });
}

//jQuery(document).ready(function(){
//	
//	 jQuery('table').each(function(){
//		var tableWidth = jQuery( this ).css( 'width' );
//				jQuery('table + .tablebottom').css('width', tableWidth);
//		//console.log(tableWidth);
//	 });
//});

//COPY STOP NUMBER AND OPEN TEXT

    jQuery(".stopnumber-mobile").click(function(){
              var stopNumber = "ladot "+jQuery(this).text();
              var temp = jQuery("<textarea>");
              jQuery("body").append(temp);
              jQuery(temp).append(stopNumber);
              jQuery(temp).select();
              document.execCommand("copy");
              temp.remove();
              location.href='sms:41411';
            
        });



//FAQ SHOW/HIDE
  
jQuery(document).ready(function() {
	jQuery(".answer").hide();
	jQuery(".question").click(function(){
		jQuery(this).next(".answer").slideToggle(500);
	});
	jQuery( ".question" ).wrapInner( "<strong></strong>");

});

//DIRECT LINK TO SEND MESSAGE OPENS ACCORDION - NEED TO UPDATE FOR BOOTSTRAP
jQuery(window).load(function() {
    var hash = window.location.hash;
	var anchor = hash.substring(hash.lastIndexOf('#') + 1, hash.length);
	var link = 'a#' + anchor;
	console.log(link);
	if(window.location.hash){
//		jQuery('.pages').find(link).trigger('expand');
//		jQuery('#content').find(link).collapse('toggle');
//		$('.accordion-body.in').collapse('toggle');
		jQuery('#collapseGen6').collapse('show');
		jQuery('html, body').animate({
			scrollTop: jQuery(link).offset().top
		}, 1000);
	}
})

//window.onload = function() {
//    var hash = window.location.hash;
//	var anchor = hash.substring(hash.lastIndexOf('#') + 1, hash.length);
//	var link = 'a#' + anchor;
//	console.log(anchor);
//}
	  
	  
jQuery(document).ready(function(){
	
  jQuery( 'table caption' ).each( function() {
      var tableBottomColor =  jQuery( this ).css( 'backgroundColor' );
      //add colored footers to all tables    
    jQuery('<div class="tablebottom" style="background-color:' + tableBottomColor+'"></div>').insertAfter(jQuery(this).parent());
    });
	//match colored footer width to table
	 jQuery('table:visible').each(function(){
		var tableWidth = jQuery( this ).css( 'width' );
		 //get width of container, if table wider, insert "swipe horizontally" msg - not working?
		 var tableContainerWidth = jQuery(this.parent).css( 'width' );
				jQuery( this ).next('.tablebottom' ).css('width', tableWidth);
		 		if(tableWidth > tableContainerWidth){
					
				}
		 //below displayed with %, not px... why?
		 console.log(tableWidth);
	 });
    

    
});
	
	  
jQuery(window).resize(function(){
	//keep colored footer the same width as table on window resize
	jQuery('table').each(function(){
        var tableWidthNew = jQuery( this ).css( 'width' );
        jQuery( this ).next('.tablebottom').css('width', tableWidthNew);
	});
	
});