// js/modules/charts.js

/**
 * @file Gerencia toda a lógica para criar, atualizar e destruir os gráficos (Chart.js).
 */

import * as appData from './data.js';

// Instâncias dos gráficos para que possam ser destruídas e recriadas
let appCustoTotalChartInstance = null;
let appCustoCategoriaChartInstance = null;
let appPagamentoMensalChartInstance = null;

// --- FUNÇÕES HELPER ---

function wrapLabel(str, maxWidth) {
    if (!str) return '';
    if (str.length <= maxWidth) return str;
    const words = str.split(' ');
    let currentLine = '';
    const lines = [];
    for (const word of words) {
        if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
            lines.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += word + ' ';
    }
    lines.push(currentLine.trim());
    return lines;
}

// --- DEFINIÇÕES DE DADOS E OPÇÕES DOS GRÁFICOS ---

const custoTotalData = {
    labels: ['Voos', 'Hospedagem', 'Seguro'],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: appData.custoTotalPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: appData.custoTotalPorPessoaArray.map(cost => cost * appData.numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: true
    }]
};

const custoCategoriaData = {
    labels: [
        wrapLabel('Voo GOL', 10), wrapLabel('Voo TAP', 10), wrapLabel('Voo LATAM', 10),
        wrapLabel('Hotel LON', 10), wrapLabel('Hotel LIS', 10), wrapLabel('Hotel GRU', 10),
        wrapLabel('Seguro', 10)
    ],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: appData.custoCategoriaPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: appData.custoCategoriaPorPessoaArray.map(cost => cost * appData.numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: true
    }]
};

const pagamentoMensalData = {
    labels: appData.pagamentoMensalLabels,
    datasets: [{
        label: 'Total Mensal por Pessoa (R$)',
        data: appData.pagamentoMensalValores,
        fill: true,
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        borderColor: '#0EA5E9',
        tension: 0.2,
        pointBackgroundColor: '#F97316',
        pointBorderColor: '#FFFFFF',
        pointRadius: 4,
        pointHoverRadius: 6
    }]
};

const commonChartOptions = (type) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f0f4f8',
            bodyColor: '#cbd5e1',
            callbacks: {
                title: (tooltipItems) => {
                    const item = tooltipItems[0];
                    if (!item || !item.chart.data.labels) return '';
                    let label = item.chart.data.labels[item.dataIndex];
                    return Array.isArray(label) ? label.join(' ') : label;
                },
                label: (context) => {
                    let label = context.dataset.label || '';
                    label = label.replace(/\s\(R\$\)$/, '') + ': ';
                    const value = context.parsed.y || context.parsed;
                    return typeof value === 'number' ? label + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : label;
                }
            }
        },
        datalabels: { display: false }
    }
});

function createChart(canvasId, type, data, options) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas com id ${canvasId} não encontrado.`);
        return null;
    }
    return new Chart(canvas, { type, data, options });
}

// --- FUNÇÕES EXPORTADAS ---

export function createCostCharts() {
    if (appCustoTotalChartInstance) appCustoTotalChartInstance.destroy();
    if (appCustoCategoriaChartInstance) appCustoCategoriaChartInstance.destroy();
    
    const custoTotalChartOptions = { ...commonChartOptions('doughnut'), plugins: { ...commonChartOptions('doughnut').plugins, legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, color: '#475569' } }, datalabels: { display: true, formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value), color: (context) => { const bgColor = context.dataset.backgroundColor[context.dataIndex]; if (!bgColor) return '#000'; const r = parseInt(bgColor.slice(1, 3), 16); const g = parseInt(bgColor.slice(3, 5), 16); const b = parseInt(bgColor.slice(5, 7), 16); return (0.2126 * r + 0.7152 * g + 0.0722 * b) > 120 ? '#1e293b' : '#FFFFFF'; }, font: { size: 10, weight: 'bold' } } } };
    const custoCategoriaChartOptions = { ...commonChartOptions('bar'), indexAxis: 'y', scales: { x: { beginAtZero: true, ticks: { display: false } }, y: { ticks: { font: { size: 9 }, color: '#475569', autoSkip: false } } }, plugins: { ...commonChartOptions('bar').plugins, datalabels: { display: (c) => c.dataset.data[c.dataIndex] > 0, anchor: 'end', align: (c) => (c.dataset.data[c.dataIndex] < Math.max(...c.dataset.data) * 0.25 ? 'right' : 'left'), offset: 4, color: (c) => { const value = c.dataset.data[c.dataIndex]; const maxValue = Math.max(...c.dataset.data); if (value < maxValue * 0.25) return '#334155'; const barColor = Array.isArray(c.dataset.backgroundColor) ? c.dataset.backgroundColor[c.dataIndex] : c.dataset.backgroundColor; const getLuminance = (hex) => { if (!hex || hex.length < 7) return 128; hex = hex.replace('#', ''); const r = parseInt(hex.substring(0, 2), 16), g = parseInt(hex.substring(2, 4), 16), b = parseInt(hex.substring(4, 6), 16); return 0.2126 * r + 0.7152 * g + 0.0722 * b; }; return getLuminance(barColor) > 120 ? '#1e293b' : '#FFFFFF'; }, font: { size: 9, weight: '500' }, formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value) } } };
    
    appCustoTotalChartInstance = createChart('appCustoTotalChart', 'doughnut', custoTotalData, custoTotalChartOptions);
    appCustoCategoriaChartInstance = createChart('appCustoCategoriaChart', 'bar', custoCategoriaData, custoCategoriaChartOptions);
    
    const isPorPessoaActive = document.getElementById('btnPorPessoa')?.classList.contains('active');
    updateCustoTotalChartVisibility(isPorPessoaActive);
    updateCustoCategoriaChartVisibility(isPorPessoaActive);
}

export function createPagamentoMensalChart() {
    if (appPagamentoMensalChartInstance) appPagamentoMensalChartInstance.destroy();
    const pagamentoMensalChartOptions = { ...commonChartOptions('line'), scales: { y: { beginAtZero: true, ticks: { display: false } }, x: { ticks: { font: { size: 10 }, color: '#475569' } } }, plugins: { ...commonChartOptions('line').plugins, datalabels: { display: true, anchor: 'end', align: (c) => c.dataIndex % 2 === 0 ? 'top' : 'bottom', offset: (c) => c.dataIndex % 2 === 0 ? 6 : 10, color: '#4A5568', font: { size: 8, weight: '600' }, formatter: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v) } } };
    appPagamentoMensalChartInstance = createChart('appPagamentoMensalChart', 'line', pagamentoMensalData, pagamentoMensalChartOptions);
}

export function updateCustoTotalChartVisibility(showPorPessoa) {
    const custoTotalTituloEl = document.getElementById('custoTotalTitulo');
    if (appCustoTotalChartInstance && custoTotalTituloEl) {
        appCustoTotalChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoTotalChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoTotalChartInstance.update();
        custoTotalTituloEl.textContent = showPorPessoa ? 'Composição do Custo Total por Pessoa' : 'Composição do Custo Total do Grupo';
    }
}

export function updateCustoCategoriaChartVisibility(showPorPessoa) {
    const custoCategoriaTituloEl = document.getElementById('custoCategoriaTitulo');
    if (appCustoCategoriaChartInstance && custoCategoriaTituloEl) {
        appCustoCategoriaChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoCategoriaChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoCategoriaChartInstance.update();
        custoCategoriaTituloEl.textContent = showPorPessoa ? 'Custos Específicos por Pessoa' : 'Custos Específicos Totais do Grupo';
    }
}