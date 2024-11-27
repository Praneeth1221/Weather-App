let progressofTime=[];
let progressifWeight=[];

function click1(){
    let time=document.getElementById("hours").value;
    let weight=document.getElementById("weight").value;
    
    let hours=Number(time);
    let kg=Number(weight);
    
    console.log(hours);
    console.log(kg);
    progressofTime.push(hours);
    progressifWeight.push(kg);

    console.log(progressofTime);
    console.log(progressifWeight);

}


  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat','Sun'],
      datasets: [{
        label: 'Workout Time',
        data: [12, 19, 3, 5, 2, 3,6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

