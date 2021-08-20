///olar chart ouropreto

new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Attractions", "Hotels", "Restaurants"], 
      datasets: [
        {
          label: "TripAdivasor Dataset",
          display: true,
          backgroundColor: ["#5089de", "#f0643b","#56c2d6"],
          data: [134,184,351]
        }
      ]
    }
  });
