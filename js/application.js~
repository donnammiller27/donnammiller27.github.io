
//fill in sidebar
$.fn.loadSb = function() {
var sba = [];
sba[0] = {
"sbTitle": "WEB TECHNOLOGIES",
"sbList":"JavaScript, JQuery, Bootstrap, HTML, CSS,  Ruby on Rails"
}
sba[1] = {
"sbTitle":"SCRIPTING LANGUAGES",
"sbList": "Ruby, Tcl"
}
sba[2] = {
"sbTitle":"DATABASES",
"sbList":"SQLite, PostGresSQL"
}
sba[3] = {
"sbTitle": "PLATFORMS",
"sbList": "Unix, Linux, Mac, Windows"
}
sba[4] = {
"sbTitle":"VERSION CONTROL",
"sbList": "Git"
}
sba[5] = {
"sbTitle":"SOFTWARE",
"sbList": "Excel, Word, PowerPoint"
}
sba[6] = {
"sbTitle":"FILE FORMATS",
"sbList":"JSON, XML"
}
var html = "";	
for (var i = 0; i < sba.length; i++) {
var sbItem = '<li><b>' + sba[i].sbTitle + '</b></li><li>' + sba[i].sbList + '</li><br>'
html = html+sbItem;
$(this).html(html);
}  	
};

// fill in info panels
$.fn.loadPanels = function(){
var arr = [];	
arr[0] ={
"infoTitle":"OBJECTIVE",
"infoParagraph":"To obtain a position where I can apply my 25 years of software development experience, aptitude for problem solving, and focus on results to contribute to a company success."
}
arr[1]={
"infoTitle":"EDUCATION",
"infoParagraph":"La Salle, University	Philadelphia, PA -- B.A. Computer Science 1988"
}
arr[2]={
"infoTitle":"EXPERIENCE",
"infoParagraph":"Software Developer	Prime Time, Inc.	1988-PRESENT"  
}
arr[3]={
"infoTitle":"IDEAL ESTIMATING PROJECT" ,
"infoParagraph":"<em>A versatile cost estimating application used by the US Dept of Energy, US Navy, and other government agencies.</em><br><br>" +
" - Full product life-cycle involvement: conceived, architected, designed, developed, and maintained this Tcl/Tk application.<br>" +
" - Implemented platform-agnostic application installer, runtime, and portable data storage.<br>" + 
" - Adapted core engine to power a web-based application with a reimplemented, responsive HTML/CSS/JavaScript interface.<br>" + 
" - Developed scripts to convert complex Excel spreadsheets into IDEAL cost models.<br>" + 
" - Researched and evaluated various libraries, tools, and services for integration; integrated Redis-backed EtherCalc, among others.<br>"   
}
arr[4]={
"infoTitle":"BUSINESS OPPORTUNITY SEARCH SERVICE PROJECT",
"infoParagraph":"<em>A data mining and search tool for finding, then connecting, businesses to government agencies and contractors.</em><br><br>" +
" - Co-developed and maintained this Ruby on Rails powered application.<br>" +    
" - Developed ruby scripts to interface with multiple remote service APIs and parse and store requested large datasets.<br>" +  
" - Responsive design seamlessly presents information from different sources into cohesive and sensible format.<br>" +      
" - Developed relevance matching algorithms to scan data for projects/partnerships for clients.<br>"   
}
arr[5]={
"infoTitle":"FAST, MAP, and INSITE PROJECTS",
"infoParagraph":"<em>A series of parametric cost estimating applications used by NASA, US Dept of Energy, and other government and international agencies.</em><br><br>"+ 
" - Collaborated with high-level mathematicians to implement custom calculation algorithms.<br>" + 
" - Hands-on training of users.<br>"  
}	
arr[6]={
"infoTitle":"COMMUNITY",
"infoParagraph":"Director of Boys' Tee Ball at Calvary Athletic Association, Philadelphia, PA. since 2005."
}

var html = "";	
for (var i = 0; i < arr.length; i++) {
var panelItem = '<div class="panel panel-success padding10"><button class="panel-heading button-panel" data-toggle="collapse" data-target="#a' + i + '" class="collapsed" >' +
       arr[i].infoTitle + '<span class="caret"></span>' +
   '</button><div id=a' + i +' class="panel-body collapse">'+  arr[i].infoParagraph+
   '</div></div>';
   console.log(panelItem);
  html = html+panelItem;  
}  
$(this).html(html);	
};	

$(document).ready(function () {

//load slick carousel
$('.ideal-shots').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 1,  
  responsive: [
    {
      breakpoint: 768,
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

//load info side bar
$('#sb').loadSb();
//load collapsible panels
$('#info').loadPanels();		

});


