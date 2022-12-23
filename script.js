const sidebar = document.querySelector("#sidebar");
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector("#close");
let bars = document.querySelectorAll('.bar');
let resizeTimer;
let sidebarToggle;

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
   if (size.width <= 740) {
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
      if (size.width <= 740) {
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
   let date = new Date()
   let hour = date.getHours()
   const hiThereMessage = document.querySelector("#hiThere")

   if(hour>=5 && hour<=12){
      hiThereMessage.textContent = "Good Morning,"
   } else if(hour>12 && hour<18){
      hiThereMessage.textContent = "Good Afternoon,"
   }  else {
      hiThereMessage.textContent = "Good Evening,"
   }
}

hiThere()
onloadSetSidebar();

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['hjkh',   'gfjh', 'fgjj',    "kdksd"],
          ['jgfj',   1000,      400,      200],
          ['fgj',    1170,      460,    300],
          ['hg',     660,       1520,   200],
          ['gjgfj',  1030,      450,    200],
          ['gjgfj',  930,      596,    300],
          ['gjgfj',  330,      456,    150],
          ['gjgfj',  530,      650,    140],
          ['gjgfj',  760,      756,    270],
          ['gjgfj',  730,      545,    350],
          ['gjgfj',  950,      525,    470],
          ['gjgfj',  890,      529,    460],
          ['gjgfj',  960,      695,    560]
        ]);

        var options = {
            hAxis:      {textPosition: 'none'},
            vAxis:      {textPosition: 'none',
                        gridlines: {color: 'none'}},
            legend:     "none",
            chartArea:  {"width":"100%", "height":"100%"},
            colors:     ["#f9cb15", '#4F8A8B', '#e43e7e']
            
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        var chart = new google.visualization.AreaChart(document.getElementById('rep_chart_div'));
        chart.draw(data, options);

      }
