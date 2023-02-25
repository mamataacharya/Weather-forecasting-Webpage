
<?php
$pslx=file_get_contents('https://api.openweathermap.org/data/2.5/weather?lat=52.40656&lon=-1.51217&appid=b1242204db57bcb71cfdbd55d09fac43&units=metric');
$aba=json_decode($pslx);

$Cname=$aba->name;
$tes=date_create(null,timezone_open("Asia/Kathmandu"));
$time_t= date_format($tes,"Y-m-d H:i:s");
$weather_temperature =$aba->main->temp;
$weather_description=$aba->weather[0]->description;
$weather_icon=$aba->weather[0]->icon;
$weather_humidity=$aba->main->humidity;
$weather_pressure=$aba->main->pressure;
$weather_windspeed=$aba->wind->speed;
$weather_winddirection=$aba->wind->deg;


$mysqli= new mysqli('localhost','root','mamata123@');




$creating = 'CREATE DATABASE if not exists db_2226158';

$CreatingDatabase = $mysqli->query($creating);

$SelectingDatabase = $mysqli->select_db('db_2226158');



$w='CREATE TABLE IF NOT EXISTS weatherApplication(

       Cname varchar(100),
       weather_temperature float(5,2),
       weather_description varchar(255),
       weather_icon varchar(255),
       weather_humidity int,
       weather_pressure int,
       weather_windspeed float(5,2),
       weather_winddirection int,
       time_t DATETIME)';

$success = $mysqli->query($w);

$Iset="INSERT INTO weatherApplication (Cname, weather_temperature, weather_description, weather_icon, weather_humidity, weather_pressure, weather_windspeed, weather_winddirection, time_t) 
values('$Cname',$weather_temperature,'$weather_description','$weather_icon',
  $weather_humidity,$weather_pressure,$weather_windspeed,$weather_winddirection,'$time_t'
  )";

$done = $mysqli->query($Iset);

$selectOneData = "SELECT * FROM weatherApplication ORDER BY time_t DESC LIMIT 1";
$result = $mysqli->query($selectOneData);
print (json_encode($result->fetch_assoc()));

?>