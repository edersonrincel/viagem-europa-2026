// js/modules/weather.js

/**
 * @file Módulo para buscar e exibir a previsão do tempo.
 * Utiliza a API Open-Meteo e a geolocalização do navegador.
 */

// --- FUNÇÕES HELPER ---

/**
 * Mapeia o código do tempo da API para um ícone do Font Awesome.
 * @param {number} weatherCode - O código do tempo da API.
 * @param {boolean} isDay - Se é dia (true) ou noite (false).
 * @returns {string} - A classe do ícone do Font Awesome.
 */
function getWeatherIcon(weatherCode, isDay = true) {
    const icons = {
        0: isDay ? 'fa-sun' : 'fa-moon', // Céu limpo
        1: isDay ? 'fa-cloud-sun' : 'fa-cloud-moon', // Principalmente limpo
        2: 'fa-cloud', // Parcialmente nublado
        3: 'fa-cloud', // Nublado
        45: 'fa-smog', // Nevoeiro
        46: 'fa-smog', // Nevoeiro gelado
        51: 'fa-cloud-rain', // Chuvisco leve
        53: 'fa-cloud-rain', // Chuvisco moderado
        55: 'fa-cloud-rain', // Chuvisco denso
        61: 'fa-cloud-showers-heavy', // Chuva leve
        63: 'fa-cloud-showers-heavy', // Chuva moderada
        65: 'fa-cloud-showers-heavy', // Chuva forte
        80: 'fa-cloud-showers-heavy', // Aguaceiros leves
        81: 'fa-cloud-showers-heavy', // Aguaceiros moderados
        82: 'fa-cloud-showers-heavy', // Aguaceiros violentos
        95: 'fa-bolt', // Trovoada
    };
    return icons[weatherCode] || 'fa-question-circle'; // Ícone padrão
}


/**
 * Processa os dados horários da API e agrupa em períodos (manhã, tarde, noite).
 * @param {object} hourlyData - Os dados horários da API.
 * @returns {object} - Um objeto com os dados processados para cada período.
 */
function processHourlyData(hourlyData) {
    const periods = {
        manha: { start: 6, end: 12, temps: [], rains: [], codes: [] },
        tarde: { start: 12, end: 18, temps: [], rains: [], codes: [] },
        noite: { start: 18, end: 24, temps: [], rains: [], codes: [] },
    };

    const now = new Date();
    const currentHour = now.getHours();

    hourlyData.time.forEach((timeStr, index) => {
        const hour = new Date(timeStr).getHours();
        for (const periodName in periods) {
            const p = periods[periodName];
            if (hour >= p.start && hour < p.end) {
                p.temps.push(hourlyData.temperature_2m[index]);
                p.rains.push(hourlyData.precipitation_probability[index]);
                p.codes.push(hourlyData.weathercode[index]);
            }
        }
    });

    const results = {};
    for (const periodName in periods) {
        const p = periods[periodName];
        const avgTemp = p.temps.length ? p.temps.reduce((a, b) => a + b, 0) / p.temps.length : null;
        const maxRain = p.rains.length ? Math.max(...p.rains) : null;
        // Pega o código do tempo mais representativo (o que mais aparece)
        const modeCode = p.codes.length ? p.codes.sort((a,b) => p.codes.filter(v => v===a).length - p.codes.filter(v => v===b).length).pop() : null;

        results[periodName] = {
            temp: avgTemp !== null ? `${Math.round(avgTemp)}°C` : 'N/A',
            rain: maxRain !== null ? `${maxRain}%` : 'N/A',
            icon: getWeatherIcon(modeCode, periodName !== 'noite'),
        };
    }
    
    // Pega a temperatura atual
    const currentTemp = hourlyData.temperature_2m[currentHour] ? `${Math.round(hourlyData.temperature_2m[currentHour])}°C` : 'N/A';

    return { periods: results, currentTemp };
}


// --- FUNÇÕES EXPORTADAS ---

/**
 * Obtém a previsão do tempo e chama o callback com o HTML gerado.
 * @param {function} callback - Função para ser chamada com o HTML do card de clima.
 */
export function getWeather(callback) {
    const container = document.getElementById('travel-mode-view');
    if (!container) return;

    // Cria um container para o conteúdo do clima
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-card-container';
    container.prepend(weatherContainer);

    // Mostra o estado de carregamento
    weatherContainer.innerHTML = `<div class="card weather-loading"><i class="fas fa-spinner fa-spin mr-2"></i>Carregando previsão do tempo...</div>`;

    if (!navigator.geolocation) {
        callback(`<div class="card"><div class="weather-error">Geolocalização não é suportada por este navegador.</div></div>`);
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&timezone=auto&forecast_days=1`;
            const geoApiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

            try {
                // Busca os dados do tempo e o nome da cidade em paralelo
                const [weatherResponse, geoResponse] = await Promise.all([
                    fetch(apiUrl),
                    fetch(geoApiUrl)
                ]);

                if (!weatherResponse.ok || !geoResponse.ok) {
                    throw new Error('Falha ao buscar dados do tempo ou localização.');
                }

                const weatherData = await weatherResponse.json();
                const geoData = await geoResponse.json();
                
                const locationName = geoData.address.city || geoData.address.town || geoData.address.village || 'Localização Atual';
                const { periods, currentTemp } = processHourlyData(weatherData.hourly);
                
                const weatherHtml = `
                    <div class="card p-4 md:p-6 mb-6">
                        <div class="weather-header">
                            <div>
                                <h4 class="font-semibold text-slate-700 text-lg"><i class="fas fa-map-marker-alt fa-xs mr-2 text-slate-400"></i>${locationName}</h4>
                                <p class="text-xs text-slate-500">Previsão para hoje</p>
                            </div>
                            <div class="font-bold text-3xl text-slate-800">${currentTemp}</div>
                        </div>
                        <div class="weather-forecast-grid">
                            <div class="bg-slate-50 p-3 rounded-lg text-center">
                                <h5 class="font-semibold text-sm text-slate-600">Manhã</h5>
                                <div class="text-3xl text-sky-500 my-2"><i class="fas ${periods.manha.icon}"></i></div>
                                <div class="font-bold text-lg text-slate-800">${periods.manha.temp}</div>
                                <div class="text-xs text-slate-500 mt-1"><i class="fas fa-tint fa-xs"></i> ${periods.manha.rain}</div>
                            </div>
                            <div class="bg-slate-50 p-3 rounded-lg text-center">
                                <h5 class="font-semibold text-sm text-slate-600">Tarde</h5>
                                <div class="text-3xl text-orange-500 my-2"><i class="fas ${periods.tarde.icon}"></i></div>
                                <div class="font-bold text-lg text-slate-800">${periods.tarde.temp}</div>
                                <div class="text-xs text-slate-500 mt-1"><i class="fas fa-tint fa-xs"></i> ${periods.tarde.rain}</div>
                            </div>
                            <div class="bg-slate-50 p-3 rounded-lg text-center">
                                <h5 class="font-semibold text-sm text-slate-600">Noite</h5>
                                <div class="text-3xl text-indigo-500 my-2"><i class="fas ${periods.noite.icon}"></i></div>
                                <div class="font-bold text-lg text-slate-800">${periods.noite.temp}</div>
                                <div class="text-xs text-slate-500 mt-1"><i class="fas fa-tint fa-xs"></i> ${periods.noite.rain}</div>
                            </div>
                        </div>
                    </div>
                `;
                callback(weatherHtml);

            } catch (error) {
                console.error("Erro ao buscar previsão do tempo:", error);
                callback(`<div class="card"><div class="weather-error">Não foi possível obter a previsão do tempo.</div></div>`);
            }
        },
        (error) => {
            console.error("Erro de geolocalização:", error);
            let message = "Não foi possível obter sua localização.";
            if (error.code === 1) {
                message = "Acesso à localização negado. Habilite nas configurações do seu navegador.";
            }
            callback(`<div class="card"><div class="weather-error">${message}</div></div>`);
        }
    );
}