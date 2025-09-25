const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov"
    ],
    datasets: [
      {
        label: "BTC",
        data: [29374, 33537, 49631, 59095, 75828,
          36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: "red",
        borderWidth: 2
      },
     {
          label: "ETH",
          data: [31500, 41000, 88000, 25500, 65777,
            23432, 44433, 87789, 23255, 44553, 23421],
          borderColor: "blue",
          borderWidth: 2,
          fill: false
        }
    ]
  },
  options: {
    responsive: true
  }
})

// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const aside = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  aside.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  aside.style.display = 'none';
})

//Chang them

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click' , ()=> {
  document.body.classList.toggle('dark-theme');


  themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
  


})