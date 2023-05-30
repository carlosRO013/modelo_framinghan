var speedCanvas = document.getElementById("speedChart"); 

Chart.defaults.global.defaultFontFamily = "Lato"; 

Chart.defaults.global.defaultFontSize = 18;


var dataSecond = {
    label: "tu colesterol es: "+coles,
    data: [coles,150,230,240,100],
    lineTension: 0,
    fill: false,
backgroundColor: [
        
                'rgba(128, 128, 128, 0.2)',
                'rgb(233, 150, 122, 0.2)',
                'rgb(0, 128, 0, 0.2)',
                'rgba(205, 92, 92, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],

borderColor: [
                'rgb(233, 150, 122)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(205, 92, 92)',
                'rgba(255, 159, 64, 1)'
            ],
borderWidth: 1

  }; 

var speedData = {
  labels: ["valor", "deseable", "normal", "alto"],
  datasets: [dataSecond]
}; 

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}; 

var lineChart = new Chart(speedCanvas, {
  type: 'bar',
  data: speedData,
  options: chartOptions
});




var speedCanvas = document.getElementById("Chart"); 

Chart.defaults.global.defaultFontFamily = "Lato"; 

Chart.defaults.global.defaultFontSize = 18;



var dataSecond = {
    label: " tu colesterol hdl es: "+hdl,
    data: [hdl,40,30,60],
    lineTension: 0,
    fill: false,
  backgroundColor: [
        
                'rgba(128, 128, 128, 0.2)',
                'rgb(233, 150, 122, 0.2)',
                'rgb(0, 128, 0, 0.2)',
                'rgba(205, 92, 92, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],
borderColor: [
                'rgb(233, 150, 122)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(205, 92, 92)',
                'rgba(255, 159, 64, 1)'
            ],
borderWidth: 1
  
  
  }; 

var speedData = {
  labels: ["valor", "aceptable", "limite", "alto"],
  datasets: [dataSecond]
}; 

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}; 

var lineChart = new Chart(speedCanvas, {
  type: 'bar',
  data: speedData,
  options: chartOptions
});



var speedCanvas = document.getElementById("trigli"); 

Chart.defaults.global.defaultFontFamily = "Lato"; 

Chart.defaults.global.defaultFontSize = 18; 

var dataSecond = {
    label: "tu triglicérido es "+tri,
    data: [tri,140,180,500],
    lineTension: 0,
    fill: false,
  backgroundColor: [
        
                'rgba(128, 128, 128, 0.2)',
                'rgb(233, 150, 122, 0.2)',
                'rgb(0, 128, 0, 0.2)',
                'rgba(205, 92, 92, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],
  borderColor: [
                'rgb(233, 150, 122)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(205, 92, 92)',
                'rgba(255, 159, 64, 1)'
            ],
borderWidth: 1
  
  }; 

var speedData = {
  labels: ["valor", "bajo", "normal", "alto"],
  datasets: [dataSecond]
}; 

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}; 

var lineChart = new Chart(speedCanvas, {
  type: 'bar',
  data: speedData,
  options: chartOptions
});


var speedCanvas = document.getElementById("tencion"); 

Chart.defaults.global.defaultFontFamily = "Lato"; 

Chart.defaults.global.defaultFontSize = 18; 

var dataFirst = {
    label: "tu pas es: "+pad,
    data: [0,10,20,30,50,90,120],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };




var dataSecond = {
    label: "tu pad es: "+pas,
    data: [0,20,35,60,96, 130],
    lineTension: 0,
    fill: false,
  borderColor: 'blue',
  backgroundcolor: [
       'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
       'rgb(255, 205, 86)'
     ]
  
  
  }; 

var speedData = {
  labels: [ "0","bajo", "intermedio", "alto", "super alto"],
  datasets: [dataFirst, dataSecond]
}; 

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}; 

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});


var speedCanvas = document.getElementById("imc"); 

Chart.defaults.global.defaultFontFamily = "Lato"; 

Chart.defaults.global.defaultFontSize = 18;


var dataSecond = {
    label: "tu imc es: "+imc,
    data: [imc,18,24,35],
    lineTension: 0,
    fill: false,
  backgroundColor: [
        
                'rgba(128, 128, 128, 0.2)',
                'rgb(233, 150, 122, 0.2)',
                'rgb(0, 128, 0, 0.2)',
                'rgba(205, 92, 92, 0.2)',
                'rgba(255, 0, 0, 0.2)'
                
            ],
  
  borderColor: [
                'rgb(233, 150, 122)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(205, 92, 92)',
                'rgba(255, 159, 64, 1)'
            ],
borderWidth: 1
  }; 

var speedData = {
  labels: ["valor", "bajo", "normal", "alto"],
  datasets: [dataSecond]
}; 

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
}; 

var lineChart = new Chart(speedCanvas, {
  type: 'bar',
  data: speedData,
  options: chartOptions
});








