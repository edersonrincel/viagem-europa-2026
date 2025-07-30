// js/modules/pwa.js

/**
 * @file Gerencia a lógica de instalação do PWA (Progressive Web App),
 * incluindo o banner de instalação para Android e iOS.
 */

let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const installButton = document.getElementById('install-button');
const closeInstallBannerButton = document.getElementById('close-install-banner');

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

function setupInstallBanner() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBanner && !isIOS()) {
            installBanner.style.transform = 'translateY(0)';
        }
    });

    if (installButton) {
        installButton.addEventListener('click', async () => {
            if (installBanner) {
                installBanner.style.transform = 'translateY(-150%)';
            }
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`Resposta do usuário para a instalação: ${outcome}`);
                deferredPrompt = null;
            }
        });
    }

    if (closeInstallBannerButton) {
        closeInstallBannerButton.addEventListener('click', () => {
            if (installBanner) {
                installBanner.style.transform = 'translateY(-150%)';
            }
        });
    }
}

function setupIosBanner() {
    if (isIOS() && !isInStandaloneMode()) {
        if (installBanner) {
            const bannerText = installBanner.querySelector('p.font-semibold');
            const bannerSubText = installBanner.querySelector('p.text-sm');
            if (bannerText) bannerText.textContent = 'Instale o App no seu iPhone';
            if (bannerSubText) bannerSubText.innerHTML = `Use o Safari, toque em <svg class="inline-block h-4 w-5 -mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/></svg> e depois em "Adicionar à Tela de Início".`;
            if (installButton) installButton.style.display = 'none';
            installBanner.style.transform = 'translateY(0)';
        }
    }
}

export function initializePwa() {
    setupInstallBanner();
    setupIosBanner();
}