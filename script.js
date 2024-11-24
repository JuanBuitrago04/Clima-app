const API_KEY = '4e69768516e84bc7813195254242411';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Eventos
searchButton.addEventListener('click', () => {
  const city = searchInput.value.trim();
  if (city) {
    getWeatherByCity(city);
  } else {
    showError('Por favor, escribe una ciudad válida.');
  }
});

// Llamadas a la API
async function getWeatherByCity(city) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        lang: 'es',
      },
    });

    showWeather(data);
  } catch (error) {
    showError('No se pudo obtener el clima. Verifica el nombre de la ciudad.');
  }
}

// Funciones auxiliares
function showWeather(data) {
  const { location, current } = data;
  resultContainer.innerHTML = `
    <p><strong>Ciudad:</strong> ${location.name}</p>
    <p><strong>Temperatura:</strong> ${current.temp_c}°C</p>
    <p><strong>Descripción:</strong> ${current.condition.text}</p>
  `;
}

function showError(message) {
  resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}