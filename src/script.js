function displayTemperature(response) {
  console.log(response.data);

  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");

  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "teac3ae1388oef3f802de875490b062f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
