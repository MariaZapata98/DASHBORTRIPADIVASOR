// data atracciones
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Santa Cruz - Ecuador", "Cusco - Peru", "Ouro Preto - Brazil"],
      datasets: [
        {
          label: "Count of Attractions",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [19,1871,134]
        }
      ]
    }
});




//data hoteles

new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Santa Cruz - Ecuador", "Cusco - Peru", "Ouro Preto - Brazil"], 
      datasets: [
        {
          label: "Count of Hotels",
          display: true,
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [149,618,185]
        }
      ]
    }
});

//data restaurant
//
var visitasrestaurantes = [
  0,
  61,
  351,
  884
],
etiquetas = [
  "",
  "Santa Cruz - Ecuador",
  "Ouro Preto - Brazil",
  "Cusco - Peru",

];
var opciones = {
// Los colores. En este caso sólo es uno pero puede haber más si tenemos más datos
// por ejemplo si mostrásemos del 2018 y 2019
colors: ['#3e95cd'],
chart: {
  height: 400, //La altura. La anchura es tomada como el 100 % del padre
  type: 'area',// Es una gráfica de tipo area
},
stroke: {
  //La curvatura al unir los puntos
  //smooth o straight. smooth es más suave y straight es rígido
  curve: 'smooth',
},
dataLabels: {
  enabled: false, // No mostrar las etiquetas sin hacer hover
},
series: [{
  name: "Número de visitas", // Lo que describe a nuestros datos
  data: visitasrestaurantes
},
],
title: {
  text: 'Number of visits to restaurants', //El título como cadena
  align: 'left', //Alineación. Puede ser left, right o center
},
xaxis: {
  // Lo que irá en el eje X.
  // Su longitud debe ser igual a la de los datos
  // Es decir, si nuestros datos son 12, las etiquetas deben ser 12
  categories: etiquetas,
},
yaxis: {
  //Si queremos que el eje y esté a la izquierda lo dejamos en false. Si queremos
  // que esté a la derecha, pues en true
  opposite: true,
}
};
var elemento = document.querySelector("#contenedorGrafica");//El id del div, con todo y #
var grafica = new ApexCharts(elemento, opciones);
grafica.render();// La gráfica no será creada hasta llamar a este método







//mapa

