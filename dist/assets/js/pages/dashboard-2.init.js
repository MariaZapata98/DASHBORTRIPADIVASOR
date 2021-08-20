//data hoteles

new Chart(document.getElementById("polar-chart1"), {
    type: 'polarArea',
    data: {
      labels: ["Attractions", "Hotels", "Restaurants"], 
      datasets: [
        {
          label: "TripAdivasor Dataset",
          display: true,
          backgroundColor: ["#5089de", "#f0643b","#56c2d6"],
          data: [20,150,62]
        }
      ]
    }
});

new Chart(document.getElementById("polar-chart2"), {
    type: 'polarArea',
    data: {
      labels: ["Attractions", "Hotels", "Restaurants"], 
      datasets: [
        {
          label: "TripAdivasor Dataset",
          display: true,
          backgroundColor: ["#5089de", "#f0643b","#56c2d6"],
          data: [1871,618,884]
        }
      ]
    }
});

