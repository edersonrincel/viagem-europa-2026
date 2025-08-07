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

    // Adiciona o atributo data-safety-level para permitir a filtragem
    return `
        <div class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col h-full" data-safety-level="${restaurant.safety.level}">
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
                <p>
                    <i class="fas fa-book fa-fw w-4 text-center mr-1 text-slate-400"></i>
                    <a href="${restaurant.link}" target="_blank" class="underline">Ver cardápio no Google Maps</a>
                </p>
            </div>

            <div class="text-xs text-slate-700 pt-3 border-t border-slate-200 space-y-2 mb-4">
                 <p><strong class="font-semibold text-slate-800">Recomendação:</strong> ${restaurant.recommendation}</p>
                 <p><strong class="font-semibold text-slate-800">Imperdível:</strong> ${restaurant.mustTry}</p>
            </div>
        </div>
    `;
}

/**
 * Aplica o filtro de segurança aos cards de uma cidade.
 * @param {string} city - A chave da cidade (ex: 'londres').
 * @param {string} filter - O nível de segurança a ser filtrado (ex: 'safe', 'all').
 */
function applyFilter(city, filter) {
    const grid = document.getElementById(`content-food-${city}-grid`);
    if (!grid) return;

    const cards = grid.querySelectorAll('.food-card');
    let hasVisibleCards = false;

    cards.forEach(card => {
        const safetyLevel = card.dataset.safetyLevel;
        if (filter === 'all' || safetyLevel === filter) {
            card.style.display = 'flex'; // Usar 'flex' pois é o display padrão do card
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Mostra ou esconde a mensagem de "nenhum resultado"
    let noResultsMsg = grid.querySelector('.no-results-message');
    if (!noResultsMsg) {
        noResultsMsg = document.createElement('p');
        noResultsMsg.className = 'no-results-message text-center text-slate-500 col-span-full';
        noResultsMsg.textContent = 'Nenhum local encontrado para este filtro.';
        grid.appendChild(noResultsMsg);
    }

    noResultsMsg.style.display = hasVisibleCards ? 'none' : 'block';
}

/**
 * Adiciona os event listeners aos botões de filtro.
 */
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const city = button.dataset.city;
            const filter = button.dataset.filter;

            // Atualiza o estado 'active' para os botões do mesmo grupo da cidade
            document.querySelectorAll(`.filter-btn[data-city='${city}']`).forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            applyFilter(city, filter);
        });
    });
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
 * Inicializa a página de sabores, gerando todas as listas de restaurantes e configurando os filtros.
 */
export function initializeSaboresPage() {
    generateRestaurantList('londres', 'content-food-londres-grid');
    generateRestaurantList('oxford', 'content-food-oxford-grid');
    generateRestaurantList('paris', 'content-food-paris-grid');
    generateRestaurantList('lisboa', 'content-food-lisboa-grid');
    setupFilterListeners(); // Configura os eventos dos novos botões de filtro
}
