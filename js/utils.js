// js/utils.js

/**
 * Função auxiliar para quebrar textos longos em múltiplas linhas para os gráficos.
 * @param {string} str - A string de entrada.
 * @param {number} maxWidth - A largura máxima de cada linha.
 * @returns {string[] | string} Um array de strings ou a string original.
 */
export function wrapLabel(str, maxWidth) {
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