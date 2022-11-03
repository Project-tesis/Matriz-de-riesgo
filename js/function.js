function addData(label, data) {
     myChart.data.dataset.splice(0,0,data);

     myChart.update();
 }

 function updateChart(chart, dataObj) {
     // Store data into the database
     Object.assign(data, dataObj);

     // Fetch data from the database and replace old data
     chart.data.labels = Object.keys(data);
     chart.data.datasets.forEach((dataset) => {
         dataset.data = Object.values(data);
     });

     chart.update();
 }

function Points(){

    var cont, puntos = 0;

    


} 