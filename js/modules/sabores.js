// js/modules/sabores.js

import { restaurantData } from './data.js';
import { initializeMap, destroyMap } from './map.js';

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
 * @returns {string} - O HTML do card.
 */
function createRestaurantCard(restaurant) {
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
        return `<li class="${hiddenClass}">
                    <a href="https://www.google.com/maps?q=${encodedAddr}" target="_blank" class="inline-flex items-start text-slate-600 hover:text-orange-500 transition-colors">
                        <i class="fas fa-map-marked-alt fa-fw w-4 text-center mr-1.5 text-slate-400 pt-0.5"></i>
                        <span class="underline text-[11px] leading-tight">${addrObj.address}</span>
                    </a>
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
    const priceSlug = slugify(restaurant.price);
    const nameSlug = slugify(restaurant.name);

    return `
        <div id="restaurant-${nameSlug}" class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col h-full scroll-target" 
             data-safety-level="${restaurant.safety.level}" 
             data-cuisine="${cuisineSlug}" 
             data-price="${priceSlug}">
            
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
 * Aplica os filtros de segurança, cozinha e preço aos cards de uma cidade.
 * @param {string} city - A chave da cidade (ex: 'londres').
 */
function applyFilters(city) {
    const grid = document.getElementById(`content-food-${city}-grid`);
    if (!grid) return;

    const safetyFilter = document.querySelector(`.filter-btn[data-city='${city}'].active`).dataset.filter;
    const cuisineFilter = document.getElementById(`filter-cuisine-${city}`).value;
    const priceFilter = document.getElementById(`filter-price-${city}`).value;

    const cards = grid.querySelectorAll('.food-card');
    let hasVisibleCards = false;

    cards.forEach(card => {
        const safetyMatch = safetyFilter === 'all' || card.dataset.safetyLevel === safetyFilter;
        const cuisineMatch = cuisineFilter === 'all' || card.dataset.cuisine === cuisineFilter;
        const priceMatch = priceFilter === 'all' || card.dataset.price === priceFilter;

        if (safetyMatch && cuisineMatch && priceMatch) {
            card.style.display = 'flex';
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
        }
    });

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
 * Adiciona os event listeners aos botões e seletores de filtro.
 */
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const city = button.dataset.city;
            document.querySelectorAll(`.filter-btn[data-city='${city}']`).forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFilters(city);
        });
    });

    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            const city = select.dataset.city;
            applyFilters(city);
        });
    });
}

/**
 * Configura os event listeners para os botões "Veja mais" dos endereços.
 */
function setupAddressToggles() {
    const grids = document.querySelectorAll('[id^="content-food-"][id$="-grid"]');
    grids.forEach(grid => {
        grid.addEventListener('click', function(event) {
            const target = event.target;
            if (!target.classList.contains('show-more-addresses')) return;
            
            event.preventDefault();
            const addressContainer = target.closest('div');
            const addressList = addressContainer.querySelector('ul');
            if (!addressList) return;

            const extraAddresses = addressList.querySelectorAll('.extra-address');
            const isHidden = target.textContent.includes('Veja mais');
            
            extraAddresses.forEach(addr => addr.classList.toggle('hidden'));
            target.textContent = isHidden ? 'Veja menos' : 'Veja mais...';
        });
    });
}

/**
 * Popula dinamicamente os filtros de cozinha e preço para uma cidade.
 * @param {string} cityKey - A chave da cidade.
 */
function populateFilters(cityKey) {
    const restaurants = restaurantData[cityKey] || [];
    if (restaurants.length === 0) return;

    const cuisineSet = new Set();
    const priceSet = new Set();

    restaurants.forEach(r => {
        if (r.cuisine) cuisineSet.add(r.cuisine);
        if (r.price) priceSet.add(r.price);
    });

    const cuisineSelect = document.getElementById(`filter-cuisine-${cityKey}`);
    const priceSelect = document.getElementById(`filter-price-${cityKey}`);

    if (cuisineSelect) {
        cuisineSelect.innerHTML = '<option value="all">Todos os Tipos</option>';
        [...cuisineSet].sort().forEach(cuisine => {
            const option = document.createElement('option');
            option.value = slugify(cuisine);
            option.textContent = cuisine;
            cuisineSelect.appendChild(option);
        });
    }

    if (priceSelect) {
        priceSelect.innerHTML = '<option value="all">Todas as Faixas</option>';
        [...priceSet].sort().forEach(price => {
            const option = document.createElement('option');
            option.value = slugify(price);
            option.textContent = price;
            priceSelect.appendChild(option);
        });
    }
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
        container.innerHTML = sortedRestaurants.map(createRestaurantCard).join('');
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
 * Inicializa a página de sabores, gerando listas, populando filtros e configurando listeners.
 */
export function initializeSaboresPage() {
    const cities = ['londres', 'oxford', 'lisboa', 'paris'];
    
    cities.forEach(city => {
        if (document.getElementById(`content-food-${city}`)) {
            generateRestaurantList(city, `content-food-${city}-grid`);
            populateFilters(city);
        }
    });

    setupFilterListeners();
    setupAddressToggles();
    setupViewToggler();
    
    // Garante que a visualização de lista seja a padrão na inicialização
    switchView('list');
}

/**
 * Navega para um restaurante específico na visualização de lista.
 * @param {string} restaurantNameSlug - O slug do nome do restaurante.
 */
export function navigateToRestaurant(restaurantNameSlug) {
    switchView('list');
    
    setTimeout(() => {
        const restaurantCard = document.getElementById(`restaurant-${restaurantNameSlug}`);
        if (restaurantCard) {
            // Encontra o botão expansível pai e o expande se necessário
            const collapsibleContent = restaurantCard.closest('.collapsible-content');
            if (collapsibleContent && collapsibleContent.classList.contains('hidden')) {
                const trigger = document.querySelector(`[aria-controls='${collapsibleContent.id}']`);
                trigger?.click();
            }

            // Rola para o card após a expansão
            setTimeout(() => {
                restaurantCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Adiciona um destaque temporário
                restaurantCard.style.transition = 'background-color 0.3s';
                restaurantCard.style.backgroundColor = '#e0f2fe'; // Cor de destaque
                setTimeout(() => {
                    restaurantCard.style.backgroundColor = ''; // Remove o destaque
                }, 2000);
            }, 300);
        }
    }, 100);
}