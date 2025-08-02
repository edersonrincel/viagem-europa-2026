// js/modules/sabores.js

import { restaurantData } from './data.js';

/**
 * Cria o HTML para um único card de restaurante.
 * @param {object} restaurant - O objeto do restaurante.
 * @returns {string} - O HTML do card.
 */
function createRestaurantCard(restaurant) {
    // Mapeia o nível de segurança para uma classe CSS
    const safetyClassMap = {
        safe: 'text-green-700', // Verde para 100% seguro
        accredited: 'text-yellow-600', // Amarelo/Laranja para acreditado/protocolos
    };
    const safetyClass = safetyClassMap[restaurant.safety.level] || 'text-slate-600';

    return `
        <div class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col space-y-2">
            <h4 class="food-card-title">${restaurant.name}</h4>
            <p class="text-xs text-slate-600"><strong>Endereço:</strong> ${restaurant.address}</p>
            <p class="text-xs text-slate-600"><strong>Cozinha:</strong> ${restaurant.cuisine}</p>
            <p class="text-xs text-slate-600"><strong>Segurança:</strong> <span class="font-semibold ${safetyClass}">${restaurant.safety.text}</span></p>
            <p class="text-xs text-slate-600"><strong>Preço:</strong> ${restaurant.price}</p>
            <p class="text-xs text-slate-700 pt-2 border-t border-slate-200 mt-auto"><strong>Recomendação:</strong> ${restaurant.recommendation}</p>
            <p class="text-xs text-slate-600"><strong>Imperdível:</strong> ${restaurant.mustTry}</p>
        </div>
    `;
}

/**
 * Gera a lista de restaurantes para uma cidade específica.
 * @param {string} cityKey - A chave da cidade no objeto restaurantData (ex: 'londres').
 * @param {string} containerId - O ID do elemento onde a lista será inserida.
 */
function generateRestaurantList(cityKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const restaurants = restaurantData[cityKey] || [];
    if (restaurants.length > 0) {
        container.innerHTML = restaurants.map(createRestaurantCard).join('');
    } else {
        container.innerHTML = '<p class="text-center text-slate-500 col-span-full">Nenhum restaurante encontrado.</p>';
    }
}

/**
 * Inicializa a página de sabores, gerando todas as listas de restaurantes.
 */
export function initializeSaboresPage() {
    generateRestaurantList('londres', 'content-food-londres-grid');
    generateRestaurantList('oxford', 'content-food-oxford-grid');
    generateRestaurantList('paris', 'content-food-paris-grid');
    generateRestaurantList('lisboa', 'content-food-lisboa-grid');
}