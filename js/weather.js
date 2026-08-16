// OpenWeatherMap API 키. https://openweathermap.org/api 에서 무료로 발급받아 넣는다.
// 클라이언트 전용 정적 페이지라 브라우저에 노출되므로, 사용량 제한이 걸린 무료 키만 사용한다.
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} / ${data.weather[0].main} `;
    })
  );
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
