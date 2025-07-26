import {
    numeroDeViajantes,
    custoTotalPorPessoaArray,
    custoCategoriaPorPessoaArray,
    pagamentoMensalValores,
    pagamentoMensalLabels
} from './config.js';
import { wrapLabel } from './utils.js';

// Variáveis para armazenar as instâncias dos gráficos
let appCustoTotalChartInstance = null;
let appCustoCategoriaChartInstance = null;
let appPagamentoMensalChartInstance = null;

// --- DADOS E OPÇÕES DOS GRÁFICOS ---

// Dados para o gráfico de Custo Total
const custoTotalData = {
    labels: ['Voos', 'Hospedagem', 'Seguro'],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: custoTotalPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: custoTotalPorPessoaArray.map(cost => cost * numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#F97316', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 2,
        hidden: true
    }]
};

// Dados para o gráfico de Custo por Categoria
const custoCategoriaData = {
    labels: [
        wrapLabel('Voo GOL', 10), wrapLabel('Voo TAP', 10), wrapLabel('Voo LATAM', 10),
        wrapLabel('Hotel LON', 10), wrapLabel('Hotel LIS', 10), wrapLabel('Hotel GRU', 10),
        wrapLabel('Seguro', 10)
    ],
    datasets: [{
        label: 'Custo por Pessoa (R$)',
        data: custoCategoriaPorPessoaArray,
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: false
    }, {
        label: 'Custo Total do Grupo (R$)',
        data: custoCategoriaPorPessoaArray.map(cost => cost * numeroDeViajantes),
        backgroundColor: ['#0EA5E9', '#38BDF8', '#7DD3FC', '#F97316', '#FB923C', '#FDBA74', '#FACC15'],
        borderColor: '#f0f4f8',
        borderWidth: 1,
        hidden: true
    }]
};

// Dados para o gráfico de Pagamentos Mensais
const pagamentoMensalData = {
    labels: pagamentoMensalLabels,
    datasets: [{
        label: 'Total Mensal por Pessoa (R$)',
        data: pagamentoMensalValores,
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

// Função de callback para formatar o título do tooltip (dica de ferramenta)
const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    if (!item || !item.chart || !item.chart.data || !item.chart.data.labels || typeof item.dataIndex === 'undefined') {
        return '';
    }
    let label = item.chart.data.labels[item.dataIndex];
    return Array.isArray(label) ? label.join(' ') : label;
};

// Opções comuns para todos os gráficos
const commonChartOptions = () => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1e293b',
            titleColor: '#f0f4f8',
            bodyColor: '#cbd5e1',
            callbacks: {
                title: tooltipTitleCallback,
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label = label.replace(/\s\(R\$\)$/, '') + ': ';
                    }
                    const value = context.parsed.y || context.parsed;
                    return typeof value === 'number' ? label + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : label;
                }
            }
        },
        datalabels: { display: false }
    }
});

// Opções específicas para o gráfico de Custo Total
const custoTotalChartOptions = {
    ...commonChartOptions(),
    plugins: {
        ...commonChartOptions().plugins,
        legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, color: '#475569' } },
        datalabels: {
            display: true,
            formatter: (value, context) => context.chart.isDatasetVisible(context.datasetIndex) ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : '',
            color: '#1e293b',
            font: { size: 10, weight: 'bold' }
        }
    }
};

// Opções específicas para o gráfico de Custo por Categoria
const custoCategoriaChartOptions = {
    ...commonChartOptions(),
    indexAxis: 'y',
    plugins: {
        ...commonChartOptions().plugins,
        datalabels: {
            display: (c) => c.dataset.data[c.dataIndex] > 0 && c.chart.isDatasetVisible(c.datasetIndex),
            anchor: 'end',
            align: 'start',
            offset: 4,
            color: '#334155',
            font: { size: 9, weight: '500' },
            formatter: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
        }
    },
    scales: {
        x: { beginAtZero: true, ticks: { display: false } },
        y: { ticks: { font: { size: 9 }, color: '#475569', autoSkip: false } }
    }
};

// Opções específicas para o gráfico de Pagamentos Mensais
const pagamentoMensalChartOptions = {
    ...commonChartOptions(),
    plugins: {
        ...commonChartOptions().plugins,
        datalabels: {
            display: true,
            anchor: 'end',
            align: (c) => c.dataIndex % 2 === 0 ? 'top' : 'bottom',
            offset: 6,
            color: '#4A5568',
            font: { size: 8, weight: '600' },
            formatter: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
        }
    },
    scales: {
        y: { beginAtZero: true, ticks: { display: false }, grid: { display: false } },
        x: { ticks: { font: { size: 10 }, color: '#475569' } }
    }
};

// --- FUNÇÕES DE CONTROLE DOS GRÁFICOS ---

/**
 * Cria ou recria um gráfico.
 * @param {string} canvasId - O ID do elemento canvas.
 * @param {object} chartInstance - A variável que armazena a instância do gráfico.
 * @param {string} type - O tipo do gráfico (e.g., 'doughnut', 'bar').
 * @param {object} data - O objeto de dados do gráfico.
 * @param {object} options - O objeto de opções do gráfico.
 * @returns A nova instância do gráfico.
 */
function createOrUpdateChart(canvasId, chartInstance, type, data, options) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    if (chartInstance) {
        chartInstance.destroy();
    }
    return new Chart(ctx, { type, data, options });
}

/**
 * Inicializa os gráficos da seção "Financeiro".
 * @param {boolean} isPorPessoaActive - Indica se a visão "Por Pessoa" está ativa.
 */
export function initializeFinanceCharts(isPorPessoaActive) {
    appCustoTotalChartInstance = createOrUpdateChart('appCustoTotalChart', appCustoTotalChartInstance, 'doughnut', custoTotalData, custoTotalChartOptions);
    updateCustoTotalChartVisibility(isPorPessoaActive);

    appCustoCategoriaChartInstance = createOrUpdateChart('appCustoCategoriaChart', appCustoCategoriaChartInstance, 'bar', custoCategoriaData, custoCategoriaChartOptions);
    updateCustoCategoriaChartVisibility(isPorPessoaActive);
}

/**
 * Inicializa o gráfico da seção de parcelas.
 */
export function initializeInstallmentsChart() {
    appPagamentoMensalChartInstance = createOrUpdateChart('appPagamentoMensalChart', appPagamentoMensalChartInstance, 'line', pagamentoMensalData, pagamentoMensalChartOptions);
}


/**
 * Atualiza a visibilidade dos datasets no gráfico de Custo Total.
 * @param {boolean} showPorPessoa - True para mostrar dados por pessoa, false para mostrar pelo grupo.
 */
export function updateCustoTotalChartVisibility(showPorPessoa) {
    if (appCustoTotalChartInstance) {
        appCustoTotalChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoTotalChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoTotalChartInstance.update();
        document.getElementById('custoTotalTitulo').textContent = showPorPessoa ? 'Composição do Custo Total por Pessoa' : 'Composição do Custo Total do Grupo';
    }
}

/**
 * Atualiza a visibilidade dos datasets no gráfico de Custo por Categoria.
 * @param {boolean} showPorPessoa - True para mostrar dados por pessoa, false para mostrar pelo grupo.
 */
export function updateCustoCategoriaChartVisibility(showPorPessoa) {
    if (appCustoCategoriaChartInstance) {
        appCustoCategoriaChartInstance.data.datasets[0].hidden = !showPorPessoa;
        appCustoCategoriaChartInstance.data.datasets[1].hidden = showPorPessoa;
        appCustoCategoriaChartInstance.update();
        document.getElementById('custoCategoriaTitulo').textContent = showPorPessoa ? 'Custos Específicos por Pessoa' : 'Custos Específicos Totais do Grupo';
    }
}