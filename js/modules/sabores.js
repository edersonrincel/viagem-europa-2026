// js/modules/sabores.js

import { restaurantData } from './data.js';

/**
 * Cria o HTML para um único card de restaurante com a nova estrutura de dados.
 * @param {object} restaurant - O objeto do restaurante.
 * @returns {string} - O HTML do card.
 */
function createRestaurantCard(restaurant) {
    // Mapeia o nível de segurança para classes CSS e ícones
    const safetyInfo = {
        safe: {
            icon: 'fa-check-circle',
            color: 'text-green-600',
            text: 'Seguro'
        },
        accredited: {
            icon: 'fa-shield-alt',
            color: 'text-sky-600',
            text: 'Acreditado'
        },
        caution: {
            icon: 'fa-exclamation-triangle',
            color: 'text-amber-600',
            text: 'Cautela'
        }
    };

    const currentSafetyInfo = safetyInfo[restaurant.safety.level] || { icon: 'fa-info-circle', color: 'text-slate-600', text: 'Informação' };

    // Formata a lista de endereços
    const addressList = restaurant.addresses.map(addr => `<li>${addr}</li>`).join('');

    return `
        <div class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col h-full">
            <h4 class="food-card-title text-base font-bold text-slate-800 mb-2">${restaurant.name}</h4>
            
            <div class="text-xs text-slate-600 space-y-2 mb-3">
                <p>
                    <i class="fas fa-map-marker-alt fa-fw w-4 text-center mr-1 text-slate-400"></i>
                    <strong class="font-semibold">Endereço(s):</strong>
                    <ul class="list-disc list-inside pl-5 mt-1">${addressList}</ul>
                </p>
                <p>
                    <i class="fas fa-utensils fa-fw w-4 text-center mr-1 text-slate-400"></i>
                    <strong class="font-semibold">Cozinha:</strong> ${restaurant.cuisine}
                </p>
                <p class="${currentSafetyInfo.color}">
                    <i class="fas ${currentSafetyInfo.icon} fa-fw w-4 text-center mr-1"></i>
                    <strong class="font-semibold">Segurança:</strong> ${restaurant.safety.text}
                </p>
                <p>
                    <i class="fas fa-tag fa-fw w-4 text-center mr-1 text-slate-400"></i>
                    <strong class="font-semibold">Preço:</strong> ${restaurant.price}
                </p>
            </div>

            <div class="text-xs text-slate-700 pt-3 border-t border-slate-200 space-y-2 mb-4">
                 <p><strong class="font-semibold text-slate-800">Recomendação:</strong> ${restaurant.recommendation}</p>
                 <p><strong class="font-semibold text-slate-800">Imperdível:</strong> ${restaurant.mustTry}</p>
            </div>
            
            <div class="mt-auto text-center">
                <a href="${restaurant.link}" target="_blank" class="action-button inline-block w-full sm:w-auto">
                    <i class="fas fa-map-marked-alt"></i>Ver no Mapa
                </a>
            </div>
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
    if (!container) {
        console.error(`Container com ID '${containerId}' não encontrado.`);
        return;
    }

    const restaurants = restaurantData[cityKey] || [];
    if (restaurants.length > 0) {
        // Ordena os restaurantes alfabeticamente pelo nome
        const sortedRestaurants = restaurants.sort((a, b) => a.name.localeCompare(b.name));
        container.innerHTML = sortedRestaurants.map(createRestaurantCard).join('');
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
