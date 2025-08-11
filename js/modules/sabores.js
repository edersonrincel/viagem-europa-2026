// js/modules/sabores.js

import { restaurantData } from './data.js';
import { initializeMap, destroyMap, panToAndOpenPopup } from './map.js';

let currentView = 'list'; // 'list' or 'map'

/**
 * Converte uma string para um formato "slug" (ex: "Italiano / Pizza" -> "italiano-pizza").
 * @param {string} text - O texto a ser convertido.
 * @returns {string} - O texto em formato slug.
 */
function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Substitui espaços por -
        .replace(/\//g, '-') // Substitui / por -
        .replace(/[^\w\-]+/g, '') // Remove todos os caracteres não-alfanuméricos exceto -
        .replace(/\-\-+/g, '-') // Substitui múltiplos - por um único -
        .replace(/^-+/, '') // Remove - do início
        .replace(/-+$/, ''); // Remove - do fim
}

/**
 * Cria o HTML para um único card de restaurante com a nova estrutura de dados.
 * @param {object} restaurant - O objeto do restaurante.
 * @param {string} cityKey - A chave da cidade para adicionar aos data attributes.
 * @returns {string} - O HTML do card.
 */
function createRestaurantCard(restaurant, cityKey) {
    // Mapeia o nível de segurança para classes CSS e ícones
    const safetyInfo = {
        safe: { icon: 'fa-check-circle', color: 'text-green-600', text: 'Seguro' },
        accredited: { icon: 'fa-shield-alt', color: 'text-sky-600', text: 'Acreditado' },
        caution: { icon: 'fa-exclamation-triangle', color: 'text-amber-600', text: 'Cautela' }
    };
    const currentSafetyInfo = safetyInfo[restaurant.safety.level] || { icon: 'fa-info-circle', color: 'text-slate-600', text: 'Informação' };

    const addresses = restaurant.addresses;
    let addressListHtml = '';
    let seeMoreButtonHtml = '';

    const createLinkedListItem = (addrObj, isHidden = false) => {
        const encodedAddr = encodeURIComponent(addrObj.address);
        const hiddenClass = isHidden ? 'hidden extra-address' : '';
        
        // Adiciona um botão para ver no mapa do app, se tiver coordenadas
        const viewOnMapBtn = addrObj.lat && addrObj.lng ?
            `<a href="#" class="view-on-map-btn ml-2 text-sky-500 hover:text-orange-500 transition-colors" data-lat="${addrObj.lat}" data-lng="${addrObj.lng}" data-city="${cityKey}" title="Ver no mapa do app">
                <i class="fas fa-crosshairs"></i>
            </a>` : '';

        return `<li class="${hiddenClass} flex justify-between items-center">
                    <a href="https://www.google.com/maps?q=${encodedAddr}" target="_blank" class="flex-grow inline-flex items-start text-slate-600 hover:text-orange-500 transition-colors">
                        <i class="fas fa-map-marked-alt fa-fw w-4 text-center mr-1.5 text-slate-400 pt-0.5"></i>
                        <span class="underline text-[11px] leading-tight">${addrObj.address}</span>
                    </a>
                    ${viewOnMapBtn}
                </li>`;
    };

    if (addresses.length > 3) {
        addressListHtml += addresses.slice(0, 3).map(addrObj => createLinkedListItem(addrObj)).join('');
        addressListHtml += addresses.slice(3).map(addrObj => createLinkedListItem(addrObj, true)).join('');
        seeMoreButtonHtml = `<button class="text-xs text-sky-600 hover:underline mt-2 ml-6 show-more-addresses">Veja mais...</button>`;
    } else {
        addressListHtml = addresses.map(addrObj => createLinkedListItem(addrObj)).join('');
    }

    const cuisineSlug = slugify(restaurant.cuisine);
    const priceValue = restaurant.price; 
    const nameSlug = slugify(restaurant.name);

    return `
        <div id="restaurant-${nameSlug}" class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col h-full scroll-target" 
             data-safety-level="${restaurant.safety.level}" 
             data-cuisine="${cuisineSlug}" 
             data-price="${priceValue}">
            
            <h4 class="food-card-title text-base font-bold text-slate-800 mb-2">${restaurant.name}</h4>
            
            <div class="text-xs text-slate-600 space-y-2 mb-3">
                <div class="flex items-start">
                    <i class="fas fa-map-marker-alt fa-fw w-4 text-center mr-1 text-slate-400 pt-1"></i>
                    <div>
                        <strong class="font-semibold">Endereço(s):</strong>
                        <ul class="list-none space-y-1.5 mt-1">${addressListHtml}</ul>
                        ${seeMoreButtonHtml}
                    </div>
                </div>
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
 * Popula e atualiza dinamicamente os filtros de cozinha e preço com base nos restaurantes visíveis.
 * @param {string} cityKey - A chave da cidade.
 * @param {Array<object>} visibleRestaurants - A lista de restaurantes atualmente visíveis.
 */
function updateAvailableFilters(cityKey, visibleRestaurants) {
    const cuisineSet = new Set();
    const priceSet = new Set();

    visibleRestaurants.forEach(r => {
        if (r.cuisine) cuisineSet.add(r.cuisine);
        if (r.price) priceSet.add(r.price);
    });

    const cuisineSelect = document.getElementById(`filter-cuisine-${cityKey}`);
    const priceSelect = document.getElementById(`filter-price-${cityKey}`);

    // Salva a seleção atual antes de limpar
    const currentCuisine = cuisineSelect.value;
    const currentPrice = priceSelect.value;

    if (cuisineSelect) {
        cuisineSelect.innerHTML = '<option value="all">Todos os Tipos</option>';
        [...cuisineSet].sort().forEach(cuisine => {
            const option = document.createElement('option');
            option.value = slugify(cuisine);
            option.textContent = cuisine;
            cuisineSelect.appendChild(option);
        });
        // Restaura a seleção se ainda for válida
        if (cuisineSelect.querySelector(`option[value="${currentCuisine}"]`)) {
            cuisineSelect.value = currentCuisine;
        }
    }

    if (priceSelect) {
        priceSelect.innerHTML = '<option value="all">Todas as Faixas</option>';
        [...priceSet].sort().forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            priceSelect.appendChild(option);
        });
        // Restaura a seleção se ainda for válida
        if (priceSelect.querySelector(`option[value="${currentPrice}"]`)) {
            priceSelect.value = currentPrice;
        }
    }
}


/**
 * Aplica os filtros e atualiza os filtros secundários (cozinha, preço).
 * @param {string} city - A chave da cidade (ex: 'londres').
 */
function applyAndRefreshFilters(city) {
    const grid = document.getElementById(`content-food-${city}-grid`);
    if (!grid) return;

    const safetyFilter = document.querySelector(`.filter-btn[data-city='${city}'].active`).dataset.filter;
    const cuisineFilter = document.getElementById(`filter-cuisine-${city}`).value;
    const priceFilter = document.getElementById(`filter-price-${city}`).value;
    const nameFilter = document.getElementById(`filter-name-${city}`).value.toLowerCase().trim();

    const allRestaurantsInCity = restaurantData[city] || [];
    let visibleRestaurants = [];

    // Primeiro, filtra por segurança e nome para atualizar os outros filtros
    const restaurantsFilteredByPrimary = allRestaurantsInCity.filter(r => {
        const safetyMatch = safetyFilter === 'all' || r.safety.level === safetyFilter;
        const nameMatch = nameFilter === '' || r.name.toLowerCase().includes(nameFilter);
        return safetyMatch && nameMatch;
    });
    updateAvailableFilters(city, restaurantsFilteredByPrimary);

    // Agora, aplica todos os filtros para exibir os cards
    const cards = grid.querySelectorAll('.food-card');
    let hasVisibleCards = false;

    cards.forEach(card => {
        const restaurantName = card.querySelector('.food-card-title').textContent.toLowerCase();
        const nameMatch = nameFilter === '' || restaurantName.includes(nameFilter);
        const safetyMatch = safetyFilter === 'all' || card.dataset.safetyLevel === safetyFilter;
        
        const updatedCuisineFilter = document.getElementById(`filter-cuisine-${city}`).value;
        const updatedPriceFilter = document.getElementById(`filter-price-${city}`).value;
        
        const cuisineMatch = updatedCuisineFilter === 'all' || card.dataset.cuisine === updatedCuisineFilter;
        const priceMatch = updatedPriceFilter === 'all' || card.dataset.price === updatedPriceFilter;

        if (nameMatch && safetyMatch && cuisineMatch && priceMatch) {
            card.style.display = 'flex';
            hasVisibleCards = true;
            const slug = card.id.replace('restaurant-', '');
            const originalRestaurant = allRestaurantsInCity.find(r => slugify(r.name) === slug);
            if(originalRestaurant) visibleRestaurants.push(originalRestaurant);
        } else {
            card.style.display = 'none';
        }
    });

    updateAvailableFilters(city, visibleRestaurants);

    let noResultsMsg = grid.querySelector('.no-results-message');
    if (!noResultsMsg) {
        noResultsMsg = document.createElement('p');
        noResultsMsg.className = 'no-results-message text-center text-slate-500 col-span-full';
        noResultsMsg.textContent = 'Nenhum local encontrado para esta combinação de filtros.';
        grid.appendChild(noResultsMsg);
    }

    noResultsMsg.style.display = hasVisibleCards ? 'none' : 'block';
}

/**
 * Reseta os controles de filtro de uma cidade para o estado padrão.
 * @param {string} cityKey A chave da cidade.
 */
function resetFiltersForCity(cityKey) {
    // Reseta campo de busca
    const nameInput = document.getElementById(`filter-name-${cityKey}`);
    if (nameInput) nameInput.value = '';

    // Reseta botões de segurança
    const safetyButtons = document.querySelectorAll(`.filter-btn[data-city='${cityKey}']`);
    safetyButtons.forEach(btn => btn.classList.remove('active'));
    const allButton = document.querySelector(`.filter-btn[data-city='${cityKey}'][data-filter='all']`);
    if (allButton) allButton.classList.add('active');

    // Reseta selects de cozinha e preço
    const cuisineSelect = document.getElementById(`filter-cuisine-${cityKey}`);
    if (cuisineSelect) cuisineSelect.value = 'all';
    
    const priceSelect = document.getElementById(`filter-price-${cityKey}`);
    if (priceSelect) priceSelect.value = 'all';

    // Aplica os filtros resetados para garantir que todos os cards sejam exibidos
    applyAndRefreshFilters(cityKey);
}


/**
 * Adiciona os event listeners aos botões e seletores de filtro.
 */
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const city = button.dataset.city;
            document.querySelectorAll(`.filter-btn[data-city='${city}']`).forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyAndRefreshFilters(city);
        });
    });

    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            const city = select.dataset.city;
            applyAndRefreshFilters(city);
        });
    });

    const searchInputs = document.querySelectorAll('.filter-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', () => {
            const city = input.dataset.city;
            applyAndRefreshFilters(city);
        });
    });
}

/**
 * Configura os event listeners para os botões "Veja mais" dos endereços e para os novos botões "Ver no mapa".
 */
function setupCardInteractions() {
    const listView = document.getElementById('list-view');
    if (!listView) return;

    listView.addEventListener('click', function(event) {
        const showMoreBtn = event.target.closest('.show-more-addresses');
        const viewOnMapBtn = event.target.closest('.view-on-map-btn');

        // Lógica para "Veja mais..."
        if (showMoreBtn) {
            event.preventDefault();
            const addressContainer = showMoreBtn.closest('div');
            const addressList = addressContainer.querySelector('ul');
            if (!addressList) return;

            const extraAddresses = addressList.querySelectorAll('.extra-address');
            const isHidden = showMoreBtn.textContent.includes('Veja mais');
            
            extraAddresses.forEach(addr => addr.classList.toggle('hidden'));
            showMoreBtn.textContent = isHidden ? 'Veja menos' : 'Veja mais...';
        }

        // Lógica para o botão "Ver no mapa"
        if (viewOnMapBtn) {
            event.preventDefault();
            const lat = viewOnMapBtn.dataset.lat;
            const lng = viewOnMapBtn.dataset.lng;
            const city = viewOnMapBtn.dataset.city;
            if (lat && lng && city) {
                showAddressOnMap(parseFloat(lat), parseFloat(lng), city);
            }
        }
    });
}


/**
 * Gera a lista de restaurantes para uma cidade específica.
 * @param {string} cityKey - A chave da cidade no objeto restaurantData.
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
        const sortedRestaurants = restaurants.sort((a, b) => a.name.localeCompare(b.name));
        container.innerHTML = sortedRestaurants.map(r => createRestaurantCard(r, cityKey)).join('');
    } else {
        container.innerHTML = '<p class="text-center text-slate-500 col-span-full">Nenhum restaurante encontrado.</p>';
    }
}

/**
 * Alterna a visualização entre lista e mapa.
 * @param {'list' | 'map'} view - A visualização a ser exibida.
 */
function switchView(view) {
    const listView = document.getElementById('list-view');
    const mapView = document.getElementById('map-view');
    const listToggle = document.getElementById('view-toggle-list');
    const mapToggle = document.getElementById('view-toggle-map');

    if (!listView || !mapView || !listToggle || !mapToggle) return;

    currentView = view;

    if (view === 'list') {
        listView.style.display = 'block';
        mapView.style.display = 'none';
        listToggle.classList.add('bg-white', 'text-sky-600', 'shadow');
        mapToggle.classList.remove('bg-white', 'text-sky-600', 'shadow');
        destroyMap();
    } else {
        listView.style.display = 'none';
        mapView.style.display = 'block';
        mapToggle.classList.add('bg-white', 'text-sky-600', 'shadow');
        listToggle.classList.remove('bg-white', 'text-sky-600', 'shadow');
        initializeMap();
    }
}

/**
 * Configura os listeners para o seletor de visualização (lista/mapa).
 */
function setupViewToggler() {
    const listToggle = document.getElementById('view-toggle-list');
    const mapToggle = document.getElementById('view-toggle-map');

    listToggle?.addEventListener('click', () => switchView('list'));
    mapToggle?.addEventListener('click', () => switchView('map'));
}

/**
 * Configura os botões que mostram/escondem os painéis de filtro.
 */
function setupFilterCollapsibles() {
    const toggles = document.querySelectorAll('.filter-toggle-button');
    toggles.forEach(toggle => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.filter-toggle-icon');

        if (content) {
            toggle.addEventListener('click', () => {
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        }
    });
}

/**
 * Muda para a visualização de mapa e foca em um endereço específico.
 * @param {number} lat - Latitude do endereço.
 * @param {number} lng - Longitude do endereço.
 * @param {string} city - A chave da cidade do endereço.
 */
function showAddressOnMap(lat, lng, city) {
    // AJUSTE: Antes de mudar a visão, define qual cidade deve estar ativa no mapa.
    const mapCityButtons = document.querySelectorAll('#map-view .map-city-btn');
    mapCityButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === city);
    });

    // Agora, muda para a visualização de mapa. A função initializeMap será chamada
    // e lerá o botão de cidade ativo para carregar os marcadores corretos.
    switchView('map');

    // Espera um curto período para garantir que o mapa e os marcadores sejam inicializados.
    setTimeout(() => {
        panToAndOpenPopup(lat, lng);
    }, 300); // 300ms é um tempo seguro para a inicialização.
}


/**
 * Inicializa a página de sabores, gerando listas, populando filtros e configurando listeners.
 */
export function initializeSaboresPage() {
    const cities = ['londres', 'oxford', 'lisboa', 'paris'];
    
    cities.forEach(city => {
        const cityContent = document.getElementById(`content-food-${city}`);
        if (cityContent) {
            generateRestaurantList(city, `content-food-${city}-grid`);
            const allRestaurantsInCity = restaurantData[city] || [];
            updateAvailableFilters(city, allRestaurantsInCity);
        }
    });

    setupFilterListeners();
    setupCardInteractions(); // Função unificada para interações de card
    setupViewToggler();
    setupFilterCollapsibles();
    
    switchView('list');
}

/**
 * Navega para um restaurante específico na visualização de lista.
 * @param {string} restaurantNameSlug - O slug do nome do restaurante.
 */
export function navigateToRestaurant(restaurantNameSlug) {
    let targetCity = null;

    // Encontra a cidade do restaurante
    for (const city in restaurantData) {
        if (restaurantData[city].some(r => slugify(r.name) === restaurantNameSlug)) {
            targetCity = city;
            break;
        }
    }

    if (!targetCity) return;

    // Muda para a visualização de lista
    switchView('list');
    
    setTimeout(() => {
        // Reseta os filtros da cidade de destino para garantir que o card esteja visível
        resetFiltersForCity(targetCity);

        const restaurantCard = document.getElementById(`restaurant-${restaurantNameSlug}`);
        if (restaurantCard) {
            const collapsibleContent = restaurantCard.closest('.collapsible-content');
            if (collapsibleContent && collapsibleContent.classList.contains('hidden')) {
                const trigger = document.querySelector(`[aria-controls='${collapsibleContent.id}']`);
                trigger?.click();
            }

            setTimeout(() => {
                restaurantCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                restaurantCard.style.transition = 'background-color 0.3s';
                restaurantCard.style.backgroundColor = '#e0f2fe';
                setTimeout(() => {
                    restaurantCard.style.backgroundColor = '';
                }, 2000);
            }, 300);
        }
    }, 100);
}
