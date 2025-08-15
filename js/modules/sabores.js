// js/modules/sabores.js

import { lisbonRestaurants } from '../data/restaurants-lisbon.js';
import { londonRestaurants } from '../data/restaurants-london.js';
import { oxfordRestaurants } from '../data/restaurants-oxford.js';
import { parisRestaurants } from '../data/restaurants-paris.js';
// CORREÇÃO: Importa a nova função de geolocalização do map.js
import { initializeMap, destroyMap, panToAndOpenPopup, findNearbyRestaurantsOnMap } from './map.js';

const restaurantData = {
    lisboa: lisbonRestaurants,
    londres: londonRestaurants,
    oxford: oxfordRestaurants,
    paris: parisRestaurants
};

let currentView = 'list'; // 'list' or 'map'

function slugify(text) {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-').replace(/\//g, '-').replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

function createRestaurantCard(restaurant, cityKey) {
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
        const hiddenClass = isHidden ? 'hidden extra-address' : '';
        if (addrObj.lat && addrObj.lng) {
            return `<li class="${hiddenClass}"><a href="#" class="view-on-map-btn inline-flex items-start text-slate-600 hover:text-orange-500 transition-colors" data-lat="${addrObj.lat}" data-lng="${addrObj.lng}" data-city="${cityKey}" title="Ver no mapa do app"><i class="fas fa-map-marked-alt fa-fw w-4 text-center mr-1.5 text-slate-400 pt-0.5"></i><span class="underline text-[11px] leading-tight">${addrObj.address}</span></a></li>`;
        } else {
            return `<li class="${hiddenClass}"><div class="inline-flex items-start text-slate-600"><i class="fas fa-map-marked-alt fa-fw w-4 text-center mr-1.5 text-slate-400 pt-0.5"></i><span class="text-[11px] leading-tight">${addrObj.address}</span></div></li>`;
        }
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
        <div id="restaurant-${nameSlug}" class="food-card p-4 rounded-lg border bg-slate-50 flex flex-col h-full scroll-target" data-safety-level="${restaurant.safety.level}" data-cuisine="${cuisineSlug}" data-price="${priceValue}">
            <h4 class="food-card-title text-base font-bold text-slate-800 mb-2">${restaurant.name}</h4>
            <div class="text-xs text-slate-600 space-y-2 mb-3">
                <div class="flex items-start"><i class="fas fa-map-marker-alt fa-fw w-4 text-center mr-1 text-slate-400 pt-1"></i><div><strong class="font-semibold">Endereço(s):</strong><ul class="list-none space-y-1.5 mt-1">${addressListHtml}</ul>${seeMoreButtonHtml}</div></div>
                <p><i class="fas fa-utensils fa-fw w-4 text-center mr-1 text-slate-400"></i><strong class="font-semibold">Cozinha:</strong> ${restaurant.cuisine}</p>
                <p class="${currentSafetyInfo.color}"><i class="fas ${currentSafetyInfo.icon} fa-fw w-4 text-center mr-1"></i><strong class="font-semibold">Segurança:</strong> ${restaurant.safety.text}</p>
                <p><i class="fas fa-tag fa-fw w-4 text-center mr-1 text-slate-400"></i><strong class="font-semibold">Preço:</strong> ${restaurant.price}</p>
                <p><i class="fas fa-book fa-fw w-4 text-center mr-1 text-slate-400"></i><a href="${restaurant.link}" target="_blank" class="underline">Ver cardápio no Google Maps</a></p>
            </div>
            <div class="text-xs text-slate-700 pt-3 border-t border-slate-200 space-y-2 mb-4">
                 <p><strong class="font-semibold text-slate-800">Recomendação:</strong> ${restaurant.recommendation}</p>
                 <p><strong class="font-semibold text-slate-800">Imperdível:</strong> ${restaurant.mustTry}</p>
            </div>
        </div>`;
}

function updateAvailableFilters(cityKey, visibleRestaurants) {
    const cuisineSet = new Set();
    const priceSet = new Set();
    visibleRestaurants.forEach(r => {
        if (r.cuisine) cuisineSet.add(r.cuisine);
        if (r.price) priceSet.add(r.price);
    });
    const cuisineSelect = document.getElementById(`filter-cuisine-${cityKey}`);
    const priceSelect = document.getElementById(`filter-price-${cityKey}`);
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
        if (cuisineSelect.querySelector(`option[value="${currentCuisine}"]`)) cuisineSelect.value = currentCuisine;
    }
    if (priceSelect) {
        priceSelect.innerHTML = '<option value="all">Todas as Faixas</option>';
        [...priceSet].sort().forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            priceSelect.appendChild(option);
        });
        if (priceSelect.querySelector(`option[value="${currentPrice}"]`)) priceSelect.value = currentPrice;
    }
}

function applyAndRefreshFilters(city) {
    const grid = document.getElementById(`content-food-${city}-grid`);
    if (!grid) return;
    const safetyFilter = document.querySelector(`.filter-btn[data-city='${city}'].active`).dataset.filter;
    const nameFilter = document.getElementById(`filter-name-${city}`).value.toLowerCase().trim();
    const allRestaurantsInCity = restaurantData[city] || [];
    let visibleRestaurants = [];
    const restaurantsFilteredByPrimary = allRestaurantsInCity.filter(r => {
        const safetyMatch = safetyFilter === 'all' || r.safety.level === safetyFilter;
        const nameMatch = nameFilter === '' || r.name.toLowerCase().includes(nameFilter);
        return safetyMatch && nameMatch;
    });
    updateAvailableFilters(city, restaurantsFilteredByPrimary);
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

function resetFiltersForCity(cityKey) {
    const nameInput = document.getElementById(`filter-name-${cityKey}`);
    if (nameInput) nameInput.value = '';
    const safetyButtons = document.querySelectorAll(`.filter-btn[data-city='${cityKey}']`);
    safetyButtons.forEach(btn => btn.classList.remove('active'));
    const allButton = document.querySelector(`.filter-btn[data-city='${cityKey}'][data-filter='all']`);
    if (allButton) allButton.classList.add('active');
    const cuisineSelect = document.getElementById(`filter-cuisine-${cityKey}`);
    if (cuisineSelect) cuisineSelect.value = 'all';
    const priceSelect = document.getElementById(`filter-price-${cityKey}`);
    if (priceSelect) priceSelect.value = 'all';
    applyAndRefreshFilters(cityKey);
}

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
        select.addEventListener('change', () => applyAndRefreshFilters(select.dataset.city));
    });
    const searchInputs = document.querySelectorAll('.filter-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', () => applyAndRefreshFilters(input.dataset.city));
    });
}

function setupCardInteractions() {
    const listView = document.getElementById('list-view');
    if (!listView) return;
    listView.addEventListener('click', function(event) {
        const showMoreBtn = event.target.closest('.show-more-addresses');
        const viewOnMapBtn = event.target.closest('.view-on-map-btn');
        if (showMoreBtn) {
            event.preventDefault();
            const addressList = showMoreBtn.closest('div').querySelector('ul');
            if (!addressList) return;
            const extraAddresses = addressList.querySelectorAll('.extra-address');
            const isHidden = showMoreBtn.textContent.includes('Veja mais');
            extraAddresses.forEach(addr => addr.classList.toggle('hidden'));
            showMoreBtn.textContent = isHidden ? 'Veja menos' : 'Veja mais...';
        }
        if (viewOnMapBtn) {
            event.preventDefault();
            const { lat, lng, city } = viewOnMapBtn.dataset;
            if (lat && lng && city) showAddressOnMap(parseFloat(lat), parseFloat(lng), city);
        }
    });
}

function generateRestaurantList(cityKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const restaurants = restaurantData[cityKey] || [];
    if (restaurants.length > 0) {
        const sortedRestaurants = restaurants.sort((a, b) => a.name.localeCompare(b.name));
        container.innerHTML = sortedRestaurants.map(r => createRestaurantCard(r, cityKey)).join('');
    } else {
        container.innerHTML = '<p class="text-center text-slate-500 col-span-full">Nenhum restaurante encontrado.</p>';
    }
}

export function switchView(view) {
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

function setupViewToggler() {
    const listToggle = document.getElementById('view-toggle-list');
    const mapToggle = document.getElementById('view-toggle-map');
    listToggle?.addEventListener('click', () => switchView('list'));
    mapToggle?.addEventListener('click', () => switchView('map'));
}

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

function showAddressOnMap(lat, lng, city) {
    const mapCityButtons = document.querySelectorAll('#map-view .map-city-btn');
    mapCityButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === city);
    });
    switchView('map');
    setTimeout(() => panToAndOpenPopup(lat, lng), 300);
}

export function initializeSaboresPage() {
    const cities = ['londres', 'oxford', 'lisboa', 'paris'];
    cities.forEach(city => {
        const cityContent = document.getElementById(`content-food-${city}`);
        if (cityContent) {
            generateRestaurantList(city, `content-food-${city}-grid`);
            updateAvailableFilters(city, restaurantData[city] || []);
        }
    });
    setupFilterListeners();
    setupCardInteractions();
    setupViewToggler();
    setupFilterCollapsibles();
    switchView('list');
}

export function navigateToRestaurant(restaurantNameSlug) {
    let targetCity = null;
    for (const city in restaurantData) {
        if (restaurantData[city].some(r => slugify(r.name) === restaurantNameSlug)) {
            targetCity = city;
            break;
        }
    }
    if (!targetCity) return;
    switchView('list');
    setTimeout(() => {
        resetFiltersForCity(targetCity);
        const restaurantCard = document.getElementById(`restaurant-${restaurantNameSlug}`);
        if (restaurantCard) {
            const collapsibleContent = restaurantCard.closest('.collapsible-content');
            if (collapsibleContent && collapsibleContent.classList.contains('hidden')) {
                document.querySelector(`[aria-controls='${collapsibleContent.id}']`)?.click();
            }
            setTimeout(() => {
                restaurantCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                restaurantCard.style.transition = 'background-color 0.3s';
                restaurantCard.style.backgroundColor = '#e0f2fe';
                setTimeout(() => { restaurantCard.style.backgroundColor = ''; }, 2000);
            }, 300);
        }
    }, 100);
}

/**
 * Orquestra a mudança para a visão de mapa e a busca por localização.
 * @param {string} city A cidade para focar.
 */
export function showMapAndFindLocation(city) {
    // Garante que o botão da cidade correta está ativo
    const mapCityButtons = document.querySelectorAll('#map-view .map-city-btn');
    mapCityButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === city);
    });
    
    // Muda para a visão de mapa
    switchView('map');

    // Atraso para garantir que o mapa foi inicializado antes de pedir a localização
    setTimeout(() => {
        findNearbyRestaurantsOnMap();
    }, 100);
}