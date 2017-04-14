const chartData = document.getElementById("lineChart");
const hourData = document.getElementById("hourData");
const weekData = document.getElementById("weeklyData");
const dayData = document.getElementById("dayData");
const chartOptions = document.querySelector(".chart-options");
const line = document.querySelector(".line");


// BUTTONS 
const hourly = document.getElementById("hourly");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
//const monthly = document.getElementById("hourly");


//console.log(CHART);
const monthly = new Chart(chartData, {
    type: 'line',
    data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Months",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
    }
});

const hourlyData = new Chart(hourData, {
    type: 'line',
    data: {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
        {
            label: "Hours",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 32, 80, 86, 16, 75, 80],
            spanGaps: false,
        }
    ]
    }
});

const weeklyData = new Chart(weekData, {
    type: 'line',
    data: {
    labels: ["1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8"],
    datasets: [
        {
            label: "Weeks",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 32, 30, 76, 26, 5, 75],
            spanGaps: false,
        }
    ]
    }
});

const dailyData =  new Chart(dayData, {
    type: 'line',
    data: {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
        {
            label: "Days",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 15, 30, 46, 26, 60, 85],
            spanGaps: false,
        }
    ]
    }
});

hourData.style.display = "none";
weekData.style.display = "none";
dayData.style.display = "none";

chartOptions.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        let hourly = document.getElementById("hourly");
        let monthly = document.getElementById("monthly");
        let weekly = document.getElementById("weekly")
        let daily = document.getElementById("daily");
        if(event.target.textContent === "Hourly") {
            hourly.style.backgroundColor = "lawngreen";
            monthly.style.backgroundColor = "";
            weekly.style.backgroundColor = "";
            daily.style.backgroundColor = "";
            hourData.innerHTML = hourly.value;
            hourData.style.display = "block";
            chartData.style.display = "none";
            weekData.style.display = "none";
            dayData.style.display = "none";
        } else if(event.target.textContent === "Monthly") {
            monthly.style.backgroundColor = "lawngreen";
            hourly.style.backgroundColor = "";
            weekly.style.backgroundColor = "";
            daily.style.backgroundColor = "";
            chartData.innerHTML = monthly.value;
            chartData.style.display = "block";
            hourData.style.display = "none";
            weekData.style.display = "none";
            dayData.style.display = "none";
        } else if (event.target.textContent === "Weekly") {
            weekly.style.backgroundColor = "lawngreen";
            monthly.style.backgroundColor = "";
            hourly.style.backgroundColor = "";
            daily.style.backgroundColor = "";
            weekData.innerHTML = weekly.value;
            chartData.style.display = "none";
            hourData.style.display = "none";
            dayData.style.display = "none";
            weekData.style.display = "block";
        } else if(event.target.textContent === "Daily") {
            daily.style.backgroundColor = "lawngreen";
            monthly.style.backgroundColor = "";
            weekly.style.backgroundColor = "";
            hourly.style.backgroundColor = "";
            dailyData.innerHTML = daily.value;
            daily.style.backgroundColor = "lawngreen";
            chartData.style.display = "none";
            hourData.style.display = "none";
            weekData.style.display = "none";
            dayData.style.display = "block";
        }
    }
});

// CHARTS CONTAINER

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [12, 19, 3, 5, 2, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                '#ddd'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                '#aaa'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const pieChart = document.getElementById("pie");
let pie = new Chart(pieChart, {
    type: 'pie',
    data: {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
}
});

//  ADD NOTIFICATION BAR

const popUp = document.getElementById("pop-up");
const divParent = popUp.parentNode;

popUp.style.width = "85%";
popUp.style.margin = "0 auto";
popUp.style.backgroundColor = "mediumpurple";
popUp.style.padding = "10px 0";
popUp.style.borderRadius = "5px";

popUp.innerHTML = `
    <p><strong style="margin-left: 20px; margin-right: 5px;">Alert</strong>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#" style="width: 25px; height: 15px;"><img id="icon" style="float: right; padding-right:25px;" src="x-icon.png" alt="x icon" width="20px" height="15px"></a></p>
`;

popUp.addEventListener("click", (event) => {
    if(event.target.tagName == "IMG") {
        alert("Are you sure you wanna press X you wont be able to see your notification after");
        divParent.removeChild(popUp);
    }
});


// USER MESSAGE COMPONENT

const usersname = document.getElementById("username");
const usersMessage = document.getElementById("message");
const submitMessage = document.getElementById("submit-user");

submitMessage.addEventListener("click", () => {
    localStorage.setItem("name", usersname.value);
    localStorage.setItem("message", usersMessage.value);
    console.log("Hello I'm " + localStorage.key(0) + " and " + localStorage.key(1));
    usersname.value = "";
    usersMessage.value = "";
});

// MOBILE SLIDE BUTTON

const slideBar = document.getElementById("mobile-slide-bar");
const mobileButton = document.getElementById("mobile-slide-button");
const ul = document.getElementById("pages");
const links = ul.getElementsByTagName("a");

ul.style.display = "none";

for(i = 0; i < links.length; i++) {
    links[i].style.color = "#fff";
}

ul.addEventListener("mouseover", (event) => {
    if(event.target.tagName == "A") {
        event.target.style.color = "mediumpurple";
    }
});

ul.addEventListener("mouseout", (event) => {
    if(event.target.tagName == "A") {
        event.target.style.color = "#fff";
    }
});

mobileButton.addEventListener("click", () => {
    if(ul.style.display == "none") {
        $("#pages").slideDown(1000);
    } else {
        $("#pages").slideUp(1000);
    }
});