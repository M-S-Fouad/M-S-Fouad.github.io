// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
//initialize variable
let fluffyCatsAmount = 0;
let orangeCatAmount = 0;
let cuteCatAmount = 0;
let sleepyCatAmount = 0;
let sillyCatAmount = 0;
let kittyCatAmount = 0;

//creating a function 
function fetchCatData(tag) {
  return fetch(`https://cataas.com/api/cats?tags=${tag}`)
    .then(response => response.json()) //Parse for JSON response
    .then(data => data.length) //return the number of cats for the given tag

    //error catch just in case
    .catch(error => {
      console.error(`Error fetching ${tag} cats:`, error);
      return 0;
    });
}

//fetching data for each type of cat (doing this is allows for change of data whenever)
Promise.all([
  fetchCatData('Fluffy'),
  fetchCatData('Orange'),
  fetchCatData('cute'),
  fetchCatData('sleepy'),
  fetchCatData('silly'),
  fetchCatData('kitty')
])

.then(([fluffyAmount, orangeAmount, cuteAmount, sleepyAmount, sillyAmount, kittyAmount]) => {
  //storing the numbers
  fluffyCatsAmount = fluffyAmount;
  orangeCatAmount = orangeAmount;
  cuteCatAmount = cuteAmount;
  sleepyCatAmount = sleepyAmount;
  sillyCatAmount = sillyAmount;
  kittyCatAmount = kittyAmount;

 
// Bar Chart Example
var ctx = document.getElementById("myBarChart").getContext('2d');//adding getContext 
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Orange", "Cute", "Fluffy", "Sleepy", "Silly", "Kitty"],
      datasets: [{
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [orangeCatAmount, cuteCatAmount, fluffyCatsAmount, sleepyCatAmount, sillyCatAmount, kittyCatAmount],
      }],
    },
    options: {
      responsive: true,
      scales: {
        x: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        y: [{
          ticks: {
            min: 0,
            max: 50,      // Ensure the max value is set to 100
            stepSize: 1,  // This ensures the y-axis ticks will be at intervals of 10
            beginAtZero: true,  // Ensure the y-axis starts at 0
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });
})