
//Duration Counter

function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

animateValue("value", 0, 45, 2000);

//Height Counter

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['height'],
        datasets: [{
            label: 'height',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [45, 1]
        }]
    },
    options: {}
});


//Speed Counter

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ['speed'],
      datasets: [{
          label: 'speed',
          backgroundColor: [],
          data: [40, 20]
      }]
  },
  options: {
    circumference: Math.PI,
    rotation: Math.PI / 1}
});