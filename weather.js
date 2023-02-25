// const api = 'b1242204db57bcb71cfdbd55d09fac43';


if(localStorage.when != null
    && parseInt(localStorage.when) + 10000 > Date.now()) {
    let freshness = Math.round((Date.now() - localStorage.when)/1000) + " second(s)";
    document.getElementById("temp1").innerHTML = localStorage.temp;
    document.getElementById("humidity").innerHTML = localStorage.humidity;
    document.getElementById("pressure").innerHTML = localStorage.pressure;
    document.getElementById("speed").innerHTML = localStorage.speed;
    document.getElementById("deg").innerHTML = localStorage.direction;
    document.getElementById("description").innerHTML = localStorage.description;

    // No local cache, access network
    } else {


const time1 = document.getElementById('time');
const date1 = document.getElementById('date');
const weather1 = document.getElementById('weather');
const forecast1 = document.getElementById('forecast');
const temp1 = document.getElementsByClassName('temp');
const description1 = document.getElementsByClassName('description');
const icon1 = document.getElementById('icon'); 


 const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const h = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'


    time1.innerHTML = h + ':' + minutes + ':'+ seconds + `<span id="ampm">${ampm}</span>`
    date1.innerHTML = days[day]+ ', ' + date+' ' + months[month]


}, 1000);



//  lat = 52.40656;
//  long =-1.51217;

fetch(`http://localhost/P3/myapi2226158.php`).then(res => res.json()).then(data => {
   console.log(data) 
   showWeatherData(data);
 })

 function showWeatherData(data){
    let temp =  data.weather_temperature;
    let description = data.weather_description;
    let icon = data.weather_icon;
    let humidity =  data.weather_humidity;
    let pressure = data.weather_pressure;
    let speed = data.weather_windspeed;
    let deg = data.weather_winddirection;


    weather1.innerHTML=
   `<div class="humidity">
        <div>Humidity:</div>
        <div> ${humidity}%</div>
    </div>
    <div class="pressure">
        <div>Pressure:</div>
        <div> ${pressure} hPa</div>
    </div>
    <div class="windspeed">
        <div>Wind speed:</div>
        <div>${speed} m/s</div>
        </div>
    <div class="direction">
        <div>Wind direction:</div>
        <div>${deg}°</div>
    </div>`

    forecast1.innerHTML=
    `<div class="temperature">
       <div>Temperature:</div>
       <div>${Math.round(temp)}°C</div>
    </div>
    <div class="description">
       <div> ${description} </div>
       </div>`
       
    icon1.innerHTML=
    `<div class="icon" id="icon"> 
          <img src=" http://openweathermap.org/img/wn/${icon}@2x.png">
      </div>`;

      localStorage.temp=data.weather_temperature;
      localStorage.humidity=data.weather_humidity; 
      localStorage.pressure=data.weather_pressure;
 }}