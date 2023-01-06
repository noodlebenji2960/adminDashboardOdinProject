const sidebar = document.querySelector("#sidebar");
const navToggle = document.querySelector('.nav-toggle');
let bars = document.querySelectorAll('.bar');
let resizeTimer;
let sidebarToggle;
let collapseTaskpoolToggle = false;
let collapseTeamRosterToggle = false;
let date = new Date()


window.addEventListener("resize", () => {windowResizeSetSidebar()});
  
function clickSetSidebar(){
   if(sidebar.style.width == "165px"){
      clearTimeout(resizeTimer);
      sidebar.style.width = "30px";
      bars.forEach(bar => bar.classList.remove('x'));
      sidebarToggle = true;
   } else {
      clearTimeout(resizeTimer);
      sidebar.style.width = "165px";
      bars.forEach(bar => bar.classList.add('x'));
      sidebarToggle = false;
   }
};

function onloadSetSidebar(){
   const size = document.body.getBoundingClientRect();
   if (size.width <= 950) {
      clearTimeout(resizeTimer);
      bars.forEach(bar => bar.classList.remove('x'));
      sidebar.style.width = "30px";
   } else {
      clearTimeout(resizeTimer);
      bars.forEach(bar => bar.classList.add('x'));
      sidebar.style.width = "165px";
   }
};

function windowResizeSetSidebar(){
   const size = document.body.getBoundingClientRect();
   if(sidebarToggle !== true){
      if (size.width <= 950) {
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(
            function(){
            bars.forEach(bar => bar.classList.remove('x'));
            sidebar.style.width = "30px"
         }, 250);
      } else {
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(
            function(){
            bars.forEach(bar => bar.classList.add('x'));
            sidebar.style.width = "165px";
      }, 500);

      }
   }
};

function hiThere(){
   const hiThereMessage = document.querySelector("#hiThere")
   let hour = date.getHours()
   if(hour>=5 && hour<=12){
      hiThereMessage.textContent = "Good Morning,"
   } else if(hour>12 && hour<18){
      hiThereMessage.textContent = "Good Afternoon,"
   }  else {
      hiThereMessage.textContent = "Good Evening,"
   }
}

//randomize postit tilts
document.querySelectorAll(".postit").forEach(postit => postit.style.transform = "rotate(" + (Math.random() * (-6 - 6) + 6).toFixed(2) + "deg)");


function getRealTime(){
   let currentDateTime = new Date();
   let time = currentDateTime.toLocaleTimeString();
   let date = currentDateTime.toDateString();
   let hourSpan = document.getElementById("realTime");
   hourSpan.textContent = time + " - " + date;
   setTimeout(getRealTime, 1000);
}

getRealTime();

const scheduleContainer = document.getElementById("schedule_paper");
scheduleContainer.addEventListener("mouseleave", schedule);
let scheduleTimer1;

function schedule(){
//get window position parameters at before scrolltoview moves page position.
let windowPositionLeft = document.documentElement.scrollLeft
let windowPositionTop =document.documentElement.scrollTop

//get timing parameters
let time = new Date()
let scheduleHourID = "h" + (time.getHours())
let millisecondsUntilNextHour =     ((60 - (time.getMinutes())) * 60000) +
                                    ((60 - (time.getSeconds())) * 1000) +
                                    (1000 - (time.getMilliseconds()));

//Reset timer and remove old line
clearTimeout(scheduleTimer1);
document.querySelectorAll(".line").forEach(ele => ele.classList.remove('line'));

//Put line and put in middle (changes scroll position of winidow)
document.getElementById("event_description" + scheduleHourID).classList.add('line')
document.getElementById("event_description" + scheduleHourID).scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });

//Go back to window scroll position
window.scroll(windowPositionLeft, windowPositionTop)

//Repeat on the hour
scheduleTimer1 = setTimeout(schedule, millisecondsUntilNextHour);
}

schedule()

function collapseTaskpool(){
   const assigned = document.getElementById("left_section1")
   const queued = document.getElementById("left_section2")
   const chevron = document.getElementById("chevron_taskpool")

   if(collapseTaskpoolToggle == !true){
   assigned.style.height = "20px"
   queued.style.height = "20px"
   chevron.setAttribute("href", "./icons/chevron-down.svg")
   collapseTaskpoolToggle = true
   } else {
      assigned.style.height = "auto"
      queued.style.height = "auto"
      chevron.setAttribute("href", "./icons/chevron-up.svg")
      collapseTaskpoolToggle = false
   }
}

function collapseTeamRoster(){
   const teamRosterCards = document.querySelectorAll(".team_card")
   const teamRosterCardsContainer = document.getElementById("right_cards_container")
   const chevron = document.getElementById("chevron_teamroster")

   if(collapseTeamRosterToggle == !true){
      teamRosterCards.forEach(card => card.classList.add('cardheight'));
      teamRosterCardsContainer.style.gridTemplateRows = "repeat(auto-fill, 60px)"
      chevron.setAttribute("href", "./icons/chevron-down.svg")
   collapseTeamRosterToggle = true
   } else {
      teamRosterCards.forEach(card => card.classList.remove('cardheight'));
      teamRosterCardsContainer.style.gridTemplateRows = "repeat(auto-fill, 240px)"
      chevron.setAttribute("href", "./icons/chevron-up.svg")
      collapseTeamRosterToggle = false
   }
}

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

         //Team KPI 1

        var headerdata = google.visualization.arrayToDataTable([
          ['hjkh',   ''],
          ['JAN',    1000],
          ['FEB',    1170],
          ['MAR',    660],
          ['APR',    1030],
          ['MAY',    930],
          ['JUN',    330],
          ['JUL',    530],
          ['AUG',    760],
          ['SEP',    730],
          ['OCT',    950],
          ['NOV',    890],
          ['DEC',    960]
        ]);
        var headeroptions = {
        
         chartArea:           {"width":"100%", "height":"100%"},
         legend:              "none",
         colors:              ["#f9cb15", '#4F8A8B', '#e43e7e'],
         backgroundColor:     "none",
         hAxis:               {color: "white",
                              textStyle: {color: "white"}},
         vAxis:               {color: "white",
                              textStyle: {color: "white"}}
     };

        var chart = new google.visualization.AreaChart(document.getElementById('right_chart_div'));
        chart.draw(headerdata, headeroptions);

     // Claims Ratio

     var headerdata = google.visualization.arrayToDataTable([
      ['hjkh',   'Approved', "Denied"],
      ['JAN',    1000, 500],
      ['FEB',    1170, 600],
      ['MAR',    660, 200],
      ['APR',    1030, 450],
      ['MAY',    930, 112],
      ['JUN',    330, 256],
      ['JUL',    530, 650],
      ['AUG',    760, 120],
      ['SEP',    730, 523],
      ['OCT',    950, 230],
      ['NOV',    890, 456],
      ['DEC',    960, 234]
    ]);
    var headeroptions = {
    
     chartArea:           {"width":"100%", "height":"100%"},
     legend:              "none",
     colors:              ["#f9cb15", '#4F8A8B', '#e43e7e'],
     backgroundColor:     "none",
     hAxis:               {color: "white",
                          textStyle: {color: "white"}},
     vAxis:               {color: "white",
                          textStyle: {color: "white"}},
      bar:                 {groupWidth: "100%"}            
 };
    var chart = new google.visualization.ColumnChart(document.getElementById('donutchart1'));
    chart.draw(headerdata, headeroptions);

      // Task Management

        var headerdata = google.visualization.arrayToDataTable([
         ['',   'Value'],
         ['Assigned',   29],
         ['Queued',    18],
         ['Resolved',    15]
       ]);
       var headeroptions = {
       
        chartArea:           {"width":"100%", "height":"100%"},
        legend:              "none",
        colors:              ["#f9cb15", '#4F8A8B', '#e43e7e'],
        backgroundColor:     "none",
        hAxis:               {color: "white",
                             textStyle: {color: "white"}},
        vAxis:               {color: "white",
                             textStyle: {color: "white"}},
         pieHole:             0.9, 
         pieSliceText:        "none",
         tooltip: { trigger: 'none' }
    };
       var chart = new google.visualization.PieChart(document.getElementById('claims_chart'));
       chart.draw(headerdata, headeroptions);

         // Customer rep 1
      
        var repProductivity = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 69, '#f9cb15', '69%' ],
         ["Denied Claims", 88, '#4F8A8B', '88%' ],
         ['Productivity', 100, '#e43e7e', '100%' ]
      ]);
      
       var repProductivityOptions = {
         chartArea:  {"width":"100%", "height":"100%"},
         bar: {groupWidth: "100%"},
         tooltip: { trigger: 'none' }
         

     };
        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div'));
        chart.draw(repProductivity, repProductivityOptions);

         // Customer rep 2

        var repProductivity2 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 56, '#f9cb15', '56%' ],
         ["Denied Claims", 78, '#4F8A8B', '78%' ],
         ['Productivity', 89, '#e43e7e', '89%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div2'));
        chart.draw(repProductivity2, repProductivityOptions);

        // Customer rep 3

         var repProductivity3 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 40, '#f9cb15', '40%' ],
         ["Denied Claims", 65, '#4F8A8B', '65%' ],
         ['Productivity', 90, '#e43e7e', '90%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div3'));
        chart.draw(repProductivity3, repProductivityOptions);
      
         // Customer rep 4

      var repProductivity4 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 66, '#f9cb15', '66%' ],
         ["Denied Claims", 88, '#4F8A8B', '88%' ],
         ['Productivity', 78, '#e43e7e', '78%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div4'));
        chart.draw(repProductivity4, repProductivityOptions);
      
      // Customer rep 5

      var repProductivity5 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 66, '#f9cb15', '66%' ],
         ["Denied Claims", 88, '#4F8A8B', '88%' ],
         ['Productivity', 78, '#e43e7e', '78%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div5'));
        chart.draw(repProductivity5, repProductivityOptions);
      
      // Customer rep 6

      var repProductivity6 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 66, '#f9cb15', '66%' ],
         ["Denied Claims", 29, '#4F8A8B', '29%' ],
         ['Productivity', 45, '#e43e7e', '45%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div6'));
        chart.draw(repProductivity6, repProductivityOptions);

        // Customer rep 7

        var repProductivity6 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 66, '#f9cb15', '66%' ],
         ["Denied Claims", 29, '#4F8A8B', '29%' ],
         ['Productivity', 45, '#e43e7e', '45%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div7'));
        chart.draw(repProductivity6, repProductivityOptions);

      // Customer rep 9

        var repProductivity6 = google.visualization.arrayToDataTable([
         ['KPI', 'Percentage', { role: 'style' }, { role: 'annotation' } ],
         ['Approved Claims', 66, '#f9cb15', '66%' ],
         ["Denied Claims", 29, '#4F8A8B', '29%' ],
         ['Productivity', 45, '#e43e7e', '45%' ]
      ]);

        var chart = new google.visualization.BarChart(document.getElementById('rep_chart_div9'));
        chart.draw(repProductivity6, repProductivityOptions);
      }

hiThere()
onloadSetSidebar();
window.scroll(0, 0)