

export function inicializarDashboard(){



var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#212123', '#212123', '#212123']
      }
  },
  
  stroke: {
    curve: 'straight'
    
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left',
    style: {
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#fff'
    }

  },
  colors: ['#02FF7C', '#E91E63', '#9C27B0'],

   
  grid: {
    row: {
      colors: ['transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
        style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
        }
    },
  }
  
  };

  var chart = new ApexCharts(document.getElementById("graphLine"), options);
  chart.render();

  var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    colors: ['#02FF7C', '#E91E63', '#9C27B0']
  } ,
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left',
    style: {
      fontSize: '16px',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#fff'
  }

  },
  grid: {
    row: {
      colors: ['transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  
    labels: {
        style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
        }
    },
  }
  };



  var chart = new ApexCharts(document.getElementById("graphLine-2"), options);
  chart.render();

  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  fill: {
    colors: ['#02FF7C', '#E91E63', '#9C27B0', '#3a3a40','#205090']
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
    
  }]
  
  };




  var chart = new ApexCharts(document.getElementById("graphPizza"), options);
  chart.render();

  var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'],
    
    labels: {
        style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
        }
    },
  },
  fill: {
    colors: ['#02FF7C', '#E91E63', '#9C27B0']
  } ,
  };

  var chart = new ApexCharts(document.getElementById("graphBar"), options);
  chart.render();
};