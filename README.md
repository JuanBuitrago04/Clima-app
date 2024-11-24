# Clima App 🌤️🌍

Este proyecto permite obtener el clima de cualquier ciudad usando la API de [WeatherAPI](https://www.weatherapi.com/). Es una aplicación sencilla donde puedes escribir el nombre de la ciudad y obtener información sobre el clima actual, como la temperatura y la descripción. 🌡️

## Tecnologías utilizadas 🛠️

- **HTML**: Para la estructura de la página.
- **CSS**: Para los estilos de la página.
- **JavaScript**: Para hacer las solicitudes a la API y manipular el DOM.
- **Axios**: Para hacer solicitudes HTTP a la API.

## Cómo funciona 🚀

Este proyecto utiliza la API de WeatherAPI para obtener información del clima. La aplicación realiza una solicitud HTTP a la API cada vez que el usuario ingresa una ciudad y hace clic en el botón "Obtener clima". 🌞

### Endpoint de la API 🌐

- **URL base**: `https://api.weatherapi.com/v1/current.json`
  
- **Parámetros requeridos**:
  - `key` (obligatorio): Tu clave de API de WeatherAPI. Puedes obtenerla [aquí](https://www.weatherapi.com/signup.aspx).
  - `q` (obligatorio): El nombre de la ciudad de la cual deseas obtener el clima.
  - `lang` (opcional): El idioma de la respuesta. En este caso, usamos `es` para que las descripciones estén en español.
  
Ejemplo de cómo se hace la llamada: 💻

```javascript
const API_KEY = 'TU_API_KEY';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeatherByCity(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        lang: 'es', // Para respuestas en español
      },
    });
    showWeather(response.data);
  } catch (error) {
    showError('No se pudo obtener el clima. Verifica el nombre de la ciudad.');
  }
}
