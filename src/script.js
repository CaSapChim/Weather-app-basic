const apiKey = '7a75aad2332c65f386a04e8e6c5a9ad8';

function weather() {
    const city = document.getElementById('city-input').value;
    const cityName = document.querySelector('.city-name h2');
    const temp= document.querySelector('.temp');
    const weather = document.querySelector('.weather');
    const humidity = document.querySelector('.humidity span');
    const wind = document.querySelector('.wind span');
    const image = document.querySelector('.weather-box img');
    const container = document.querySelector('.container');

    const weatherDetails = document.getElementById('columns');
    const weatherBox = document.querySelector('.weather-box')
    if (!city) {
        alert('Vui lòng nhập tên thành phố');
        return
    }


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`)
        .then(respone => {
            const data = respone.data;
            cityName.innerHTML = `${data.name}`;
            temp.innerHTML = `${data.main.temp} <span>°C</span>`;
            weather.innerHTML = `${data.weather[0].description}`;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${data.wind.speed}km/h`;

            switch (data.weather[0].main) {
                case 'Clear':
                    image.src = 'assets/clear.png';
                    break;

                case 'Rain':
                    image.src = 'assets/rain.png';
                    break;

                case 'Snow':
                    image.src = 'assets/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'assets/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'assets/mist.png';
                    break;

                default:
                    image.src = '';
            }

            weatherDetails.style.display = 'block';
            weatherBox.classList.add('fadeIn');
            container.style.height = '80vh';
        })
        .catch(error => {
            console.log('Lỗi:', error);
            alert('Không tìm được tên thành phố tương ứng');
        });
}