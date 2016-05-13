//Donna Miller


//sidebar info array of objects
var sbarr = [];
sbarr[0] = {
"sbTitle": "WEB TECHNOLOGIES",
"sbList":"JavaScript, JQuery, Bootstrap, HTML, CSS,  Ruby on Rails"
}
sbarr[1] = {
"sbTitle":"SCRIPTING LANGUAGES",
"sbList": "Ruby, Tcl"
}
sbarr[2] = {
"sbTitle":"DATABASES",
"sbList":"SQLite, PostGresSQL"
}
sbarr[3] = {
"sbTitle": "PLATFORMS",
"sbList": "Unix, Linux, Mac, Windows"
}
sbarr[4] = {
"sbTitle":"VERSION CONTROL",
"sbList": "Git"
}
sbarr[5] = {
"sbTitle":"SOFTWARE",
"sbList": "Excel, Word, PowerPoint"
}
sbarr[6] = {
"sbTitle":"FILE FORMATS",
"sbList":"JSON, XML"
}

//panel info array of objects
var parr = [];	
parr[0] ={
"infoTitle":"OBJECTIVE",
"infoParagraph":"To obtain a position where I can apply my 25 years of software development experience, aptitude for problem solving, and focus on results to contribute to the success of a company."
}
parr[1]={
"infoTitle":"EDUCATION",
"infoParagraph":"La Salle, University	Philadelphia, PA -- B.A. Computer Science 1988"
}
parr[2]={
"infoTitle":"EXPERIENCE",
"infoParagraph":"Software Developer	Prime Time, Inc.	1988-PRESENT"  
}
parr[3]={
"infoTitle":"IDEAL ESTIMATING PROJECT" ,
"infoParagraph":"<em>A versatile cost estimating application used by the US Dept of Energy, US Navy, and other government agencies.</em><br><br>" +
" - Full product life-cycle involvement: conceived, architected, designed, developed, and maintained this Tcl/Tk application.<br>" +
" - Implemented platform-agnostic application installer, runtime, and portable data storage.<br>" + 
" - Adapted core engine to power a web-based application with a reimplemented, responsive HTML/CSS/JavaScript interface.<br>" + 
" - Developed scripts to convert complex Excel spreadsheets into IDEAL cost models.<br>" + 
" - Researched and evaluated various libraries, tools, and services for integration; integrated Redis-backed EtherCalc, among others.<br>"   
}
parr[4]={
"infoTitle":"BUSINESS OPPORTUNITY SEARCH SERVICE PROJECT",
"infoParagraph":"<em>A data mining and search tool for finding, then connecting, businesses to government agencies and contractors.</em><br><br>" +
" - Co-developed and maintained this Ruby on Rails powered application.<br>" +    
" - Developed ruby scripts to interface with multiple remote service APIs and parse and store requested large datasets.<br>" +  
" - Responsive design seamlessly presents information from different sources into cohesive and sensible format.<br>" +      
" - Developed relevance matching algorithms to scan data for projects/partnerships for clients.<br>"   
}
parr[5]={
"infoTitle":"FAST, MAP, and INSITE PROJECTS",
"infoParagraph":"<em>A series of parametric cost estimating applications used by NASA, US Dept of Energy, and other government and international agencies.</em><br><br>"+ 
" - Collaborated with high-level mathematicians to implement custom calculation algorithms.<br>" + 
" - Hands-on training of users.<br>"  
}	

parr[6]={
"infoTitle":"COMMUNITY",
"infoParagraph":"Director of Boys' Tee Ball at Calvary Athletic Association, Philadelphia, PA. since 2005."
}


//return text to load side bar info
var sideHtml = function() {
  str = "";	
  for (var i = 0; i < sbarr.length; i++) {
    var sbItem = '<li><b>' + sbarr[i].sbTitle + '</b></li><li>' + sbarr[i].sbList + '</li><br>';
    str += sbItem;
  }
  return str;
};


// return text to load panel info
var panelHtml = function(){
  var str = "";	
  for (var i = 0; i < parr.length; i++) {
    var panelItem = '<div class="panel panel-color padding10"><button class="panel-heading button-panel panel-color" data-toggle="collapse" data-target="#a' + i + '" class="collapsed" >' +
       parr[i].infoTitle + '<span class="caret"></span>' +
      '</button><div id=a' + i +' class="panel-body collapse">'+  parr[i].infoParagraph+
      '</div></div>';
    str += panelItem;  
  }  
  return str;	
};	


//document ready function
$(document).ready(function () {

//call to slick carousel jquery plugin written by Ken Wheeler
  $('.ideal-shots').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 2,  
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]		
  });


//load sidebar
  $('#sb').html(sideHtml());

//load collapsible panels
  $('#info').html(panelHtml());		

//read more button click action  
  $("#readmore").click("on", function() {  
    $("#showless").addClass("hide");
    $("#showless").removeClass("show");
    $("#showmore").removeClass("hide");
    $("#showmore").addClass("show");
  });  

//read less button click action
  $("#readless").click("on", function() {  
    $("#showless").removeClass("hide");
    $("#showless").addClass("show");
    $("#showmore").removeClass("show");
    $("#showmore").addClass("hide");
  });  

});
//end document ready


