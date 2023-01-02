const sidebar = document.querySelector("#sidebar");
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector("#close");
let bars = document.querySelectorAll('.bar');
let resizeTimer;
let sidebarToggle;
let collapseTaskpoolToggle;
let collapseTeamRosterToggle;
let date = new Date()
let hour = date.getHours()

window.addEventListener("resize", () => {windowResizeSetSidebar()});

menu.addEventListener("click", () =>{clickSetSidebar()});
  
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
   if(hour>=5 && hour<=12){
      hiThereMessage.textContent = "Good Morning,"
   } else if(hour>12 && hour<18){
      hiThereMessage.textContent = "Good Afternoon,"
   }  else {
      hiThereMessage.textContent = "Good Evening,"
   }
}

const scheduleContainer = document.getElementById("top_right_container")

scheduleContainer.addEventListener("mouseleave", function () {
   var node = this;
   setTimeout(function() {
      schedule()
   }, 5000)
});

function getRealTime(){
   let currentDateTime = new Date();
   let time = currentDateTime.toLocaleTimeString();
   let date = currentDateTime.toDateString();
   let hourSpan = document.getElementById("realTime");
   hourSpan.textContent = time + " - " + date;
   setTimeout(getRealTime, 1000);
}

getRealTime();

function schedule(){
let scheduleHourID;
   if(hour == 0){
      scheduleHourID = "h00"
      .classList.add('line')
   } else if(hour == 1){
      scheduleHourID = "h01"
      document.getElementById("event_descriptionh01").classList.add('line')
   } else if(hour == 2){
      scheduleHourID = "h02"
      document.getElementById("event_descriptionh02").classList.add('line')
   } else if(hour == 3){
      scheduleHourID = "h03"
      document.getElementById("event_descriptionh03").classList.add('line')
   } else if(hour == 4){
      scheduleHourID = "h04"
      document.getElementById("event_descriptionh04").classList.add('line')
   } else if(hour == 5){
      scheduleHourID = "h05"
      document.getElementById("event_descriptionh05").classList.add('line')
   } else if(hour == 6){
      scheduleHourID = "h06"
      document.getElementById("event_descriptionh06").classList.add('line')
   } else if(hour == 7){
      scheduleHourID = "h07"
      document.getElementById("event_descriptionh07").classList.add('line')
   } else if(hour == 8){
      scheduleHourID = "h08"
      document.getElementById("event_descriptionh08").classList.add('line')
   } else if(hour == 9){
      scheduleHourID = "h09"
      document.getElementById("event_descriptionh09").classList.add('line')
   } else if(hour == 10){
      scheduleHourID = "h10"
      document.getElementById("event_descriptionh10").classList.add('line')
   } else if(hour == 11){
      scheduleHourID = "h11"
      document.getElementById("event_descriptionh11").classList.add('line')
   } else if(hour == 12){
      scheduleHourID = "h12"
      document.getElementById("event_descriptionh12").classList.add('line')
   } else if(hour == 13){
      scheduleHourID = "h13"
      document.getElementById("event_descriptionh13").classList.add('line')
   } else if(hour == 14){
      scheduleHourID = "h14"
      document.getElementById("event_descriptionh14").classList.add('line')
   } else if(hour == 15){
      scheduleHourID = "h15"
      document.getElementById("event_descriptionh15").classList.add('line')
   } else if(hour == 16){
      scheduleHourID = "h16"
      document.getElementById("event_descriptionh16").classList.add('line')
   } else if(hour == 17){
      scheduleHourID = "h17"
      document.getElementById("event_descriptionh17").classList.add('line')
   } else if(hour == 18){
      scheduleHourID = "h18"
      document.getElementById("event_descriptionh18").classList.add('line')
   } else if(hour == 19){
      scheduleHourID = "h19"
      document.getElementById("event_descriptionh19").classList.add('line')
   } else if(hour == 20){
      scheduleHourID = "h20"
      document.getElementById("event_descriptionh20").classList.add('line')
   } else if(hour == 21){
      scheduleHourID = "h21"
      document.getElementById("event_descriptionh21").classList.add('line')
   } else if(hour == 22){
      scheduleHourID = "h22"
      document.getElementById("event_descriptionh22").classList.add('line')
   } else if(hour == 23){
      scheduleHourID = "h23"
      document.getElementById("event_descriptionh23").classList.add('line')
   }

   document.getElementById(scheduleHourID).scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });
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