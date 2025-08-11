// js/modules/data.js

/**
 * @file Contém todos os dados estáticos da aplicação, como custos, informações do podcast e dados de restaurantes.
 * Isso separa os dados da lógica da aplicação.
 */

export const numeroDeViajantes = 4;

export const custoTotalPorPessoaArray = [4468.94, 2771.315, 240.43];

export const custoCategoriaPorPessoaArray = [410.48, 3868.94, 189.52, 1633.9375, 918.978, 218.40, 240.43];

export const pagamentoMensalValores = [1661.65, 679.71, 679.71, 679.71, 679.71, 559.71, 519.64, 519.64, 519.64, 519.64, 230.94, 230.94];

export const pagamentoMensalLabels = ['Jun/25', 'Jul/25', 'Ago/25', 'Set/25', 'Out/25', 'Nov/25', 'Dez/25', 'Jan/26', 'Fev/26', 'Mar/26', 'Abr/26', 'Mai/26'];

export const podcastEpisodes = [
    { "Episódio": 1, "Data lançamento": "07/06/2025", "Título": "A Origem da aventura", "Narrador": "Bruna", "Duração": "3:03", "trackId": "2109241797", "token": "I0JucbUhfCc" },
    { "Episódio": 2, "Data lançamento": "21/06/2025", "Título": "O Mapa da viagem", "Narrador": "Diego", "Duração": "3:50", "trackId": "2109241770", "token": "lPnekm8yTs2" },
    { "Episódio": 3, "Data lançamento": "05/07/2025", "Título": "Passaportes em dia", "Narrador": "Giovana", "Duração": "4:09", "trackId": "2109241779", "token": "Oxie7YtJM03" },
    { "Episódio": 4, "Data lançamento": "19/07/2025", "Título": "As siglas da viagem", "Narrador": "Eder", "Duração": "4:01", "trackId": "2109241794", "token": "UDBYOZgZ5tE" },
    { "Episódio": 5, "Data lançamento": "02/08/2025", "Título": "Nossa rede de segurança", "Narrador": "Bruna", "Duração": "3:52", "trackId": "2109241764", "token": "x0MUpRDm1jO" },
    { "Episódio": 6, "Data lançamento": "16/08/2025", "Título": "Libras, Euros & Cartões", "Narrador": "Diego", "Duração": "4:22", "trackId": "2109459120", "token": "WntGp7nwrSt" },
    { "Episódio": 7, "Data lançamento": "30/08/2025", "Título": "Conectados na Europa", "Narrador": "Giovana", "Duração": "4:39", "trackId": "2109241767", "token": "nCEgXnp8PTk" },
    { "Episódio": 8, "Data lançamento": "13/09/2025", "Título": "Fazendo as malas", "Narrador": "Eder", "Duração": "4:11", "trackId": "2109241806", "token": "xKGzVr2hwuH" },
    { "Episódio": 9, "Data lançamento": "27/09/2025", "Título": "Finanças do grupo", "Narrador": "Bruna", "Duração": "3:51", "trackId": "2109241830", "token": "YfD4McsMIob" },
    { "Episódio": 10, "Data lançamento": "11/10/2025", "Título": "London calling!", "Narrador": "Diego", "Duração": "5:00", "trackId": "2109461376", "token": "Q3MpmbtsDb6" },
    { "Episódio": 11, "Data lançamento": "18/10/2025", "Título": "Dominando o metrô de Londres", "Narrador": "Giovana", "Duração": "4:53", "trackId": "2109241782", "token": "5h9pdyxVgDk" },
    { "Episódio": 12, "Data lançamento": "25/10/2025", "Título": "Sabores de Londres", "Narrador": "Eder", "Duração": "4:10", "trackId": "2109241773", "token": "WuGoerCStbb" },
    { "Episódio": 13, "Data lançamento": "01/11/2025", "Título": "Ícones de Londres", "Narrador": "Bruna", "Duração": "3:53", "trackId": "2109241791", "token": "DlqbbPyxUjj" },
    { "Episódio": 14, "Data lançamento": "08/11/2025", "Título": "Mercados e parques de Londres", "Narrador": "Diego", "Duração": "3:41", "trackId": "2109241788", "token": "fX8LIOXe4CV" },
    { "Episódio": 15, "Data lançamento": "15/11/2025", "Título": "Um dia em Paris", "Narrador": "Giovana", "Duração": "4:29", "trackId": "2109241815", "token": "JiBmHu4QkMY" },
    { "Episódio": 16, "Data lançamento": "22/11/2025", "Título": "Chegada em Lisboa", "Narrador": "Eder", "Duração": "3:13", "trackId": "2109241812", "token": "rYejWZbphgs" },
    { "Episódio": 17, "Data lançamento": "29/11/2025", "Título": "Os elétricos de Lisboa", "Narrador": "Bruna", "Duração": "3:36", "trackId": "2109241818", "token": "8B8MFnnJHUf" },
    { "Episódio": 18, "Data lançamento": "06/12/2025", "Título": "Roteiro por Lisboa", "Narrador": "Diego", "Duração": "3:27", "trackId": "2109241803", "token": "tyqPhj1KBo6" },
    { "Episódio": 19, "Data lançamento": "13/12/2025", "Título": "A magia de Sintra", "Narrador": "Giovana", "Duração": "3:51", "trackId": "2109241800", "token": "Ywh2hP5svic" },
    { "Episódio": 20, "Data lançamento": "20/12/2025", "Título": "Sabores de Portugal", "Narrador": "Eder", "Duração": "3:41", "trackId": "2109241821", "token": "L0zo2ZW2MQc" },
    { "Episódio": 21, "Data lançamento": "03/01/2026", "Título": "A viagem de volta", "Narrador": "Bruna", "Duração": "3:14", "trackId": "2109241809", "token": "GTgyZ48GE1z" },
    { "Episódio": 22, "Data lançamento": "10/01/2026", "Título": "As regras das tarifas", "Narrador": "Diego", "Duração": "3:46", "trackId": "2109241827", "token": "PNzCktX4Sbe" },
    { "Episódio": 23, "Data lançamento": "17/01/2026", "Título": "Checklist final", "Narrador": "Giovana", "Duração": "4:07", "trackId": "2109462783", "token": "LJSbjMeqq7h" }
];

// --- DADOS DOS RESTAURANTES (ESTRUTURA PADRONIZADA COM COORDENADAS) ---
export const restaurantData = {
    lisboa: [
        {
            name: "Bali do Cais",
            addresses: [{ address: "R. Bernardino Costa 21, 1200-052 Lisboa, Portugal", lat: 38.7068816, lng: -9.14244 }],
            cuisine: "Asiático",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "€€",
            recommendation: "Uma opção fantástica e segura para paladares aventureiros, com a certificação da APC a fornecer uma base sólida de confiança. Recomenda-se vigilância e comunicação clara com a equipa.",
            mustTry: "Beef Rendang, Nasi Goreng, Sate",
            link: "https://www.google.com.br/maps/place/Bali+do+Cais+%7C+Coffeeshop+%26+Restaurante+Indon%C3%A9sio+-+Gluten-free+Certification+(Ex+Zarzuela)/@38.7068816,-9.1450149,17z/data=!4m7!3m6!1s0xd19351f51df5ca7:0x68e29d6137b5e712!8m2!3d38.7068816!4d-9.14244!10e9!16s%2Fg%2F11vhw672t6?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Batarda's",
            addresses: [{ address: "Praceta Lagoa de Óbidos 38, 2775-722 Parede, Portugal", lat: 38.6945668, lng: -9.3428507 }],
            cuisine: "Padaria / Café",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Batardas/@38.6945668,-9.3454256,17z/data=!4m7!3m6!1s0xd1ec918d0f6be4b:0x1ddf35288e0f76ff!8m2!3d38.6945668!4d-9.3428507!10e9!16s%2Fg%2F11q8w6tw5_?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Café do Rio",
            addresses: [{ address: "Rua da Alfândega 114, 1100-016 Lisboa, Portugal", lat: 38.708802, lng: -9.1343489 }],
            cuisine: "Hambúrguer",
            safety: { text: "100% isenta de glúten e certificada pela APC.", level: "safe" },
            price: "€€",
            recommendation: "Uma experiência libertadora. A possibilidade de entrar e poder escolher qualquer item do menu sem hesitação é rara e valiosa. Uma recomendação de topo para uma refeição casual e tranquila.",
            mustTry: "Hambúrgueres de carne 100% alentejana, opções de bacalhau, salmão, vegetarianas e vegan",
            link: "https://www.google.com.br/maps/place/Caf%C3%A9+do+Rio+-+Craft+Burgers/@38.708802,-9.1369238,17z/data=!4m7!3m6!1s0xd193477544a9a63:0x775e202cb0291b8d!8m2!3d38.708802!4d-9.1343489!10e9!16s%2Fg%2F1tkkw462?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Churrasqueira Franguito",
            addresses: [{ address: "Estr. Algueirão 138, 2725-079 Algueirão-Mem Martins, Portugal", lat: 38.8078657, lng: -9.3332395 }],
            cuisine: "Variado",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Churrasqueira+Franguito/@38.8078657,-9.3358144,17z/data=!4m16!1m8!3m7!1s0xd1ed04f44cea613:0x200cd9a20968563d!2sChurrasqueira+Franguito!8m2!3d38.8078657!4d-9.3332395!10e9!16s%2Fg%2F11hctjhgcf!3m6!1s0xd1ed04f44cea613:0x200cd9a20968563d!8m2!3d38.8078657!4d-9.3332395!10e9!16s%2Fg%2F11hctjhgcf?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Cozinha por Mim",
            addresses: [{ address: "R. São José 3 B Loja 3, 2750-623 Cascais, Portugal", lat: 38.696348, lng: -9.420563 }],
            cuisine: "Variado",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://maps.app.goo.gl/zcbSzX74NzahQJdF6"
        },
        {
            name: "Despensa N.6",
            addresses: [{ address: "Av. Sacadura Cabral 6A, 1000-274 Lisboa, Portugal", lat: 38.7448556, lng: -9.1402889 }],
            cuisine: "Padaria / Café",
            safety: { text: "100% sem glúten, sem açúcares refinados e certificada pela APC.", level: "safe" },
            price: "€€€",
            recommendation: "Um verdadeiro oásis para um pequeno-almoço, lanche ou brunch saudável e seguro. A dupla garantia oferece uma paz de espírito inigualável.",
            mustTry: "Menus de brunch, granolas caseiras, pães, crepes e bolos",
            link: "https://www.google.com.br/maps/place/Despensa+N.6+-+Healthy+Gluten+Free+Pastry/@38.7448556,-9.1428638,17z/data=!4m7!3m6!1s0xd1933a8acfe5b7f:0xda117bd6fd972cb9!8m2!3d38.7448556!4d-9.1402889!10e9!16s%2Fg%2F11c6zkvnbp?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Gelateria Italiana Fabio Lupi",
            addresses: [
                { address: "Av. Valbom 10A, 2750-508 Cascais, Portugal", lat: 38.6990787, lng: -9.420091 },
                { address: "Avenida Nossa Senhora do Cabo 101, 2750-374 Cascais, Portugal", lat: 38.701130, lng: -9.440260 }
            ],
            cuisine: "Gelataria",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Gelateria+Italiana+Fabio+Lupi/@38.6990787,-9.4226659,17z/data=!4m7!3m6!1s0xd1ec42fab571b4d:0xd4e8240a99ba99a4!8m2!3d38.6990787!4d-9.420091!10e9!16s%2Fg%2F1hc8342m1?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Gluten'Out",
            addresses: [{ address: "Av. Vasco da Gama 53, 2840-745 Seixal, Portugal", lat: 38.641830, lng: -9.102810 }],
            cuisine: "Padaria / Café",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://maps.app.goo.gl/SNY8rDyJnCmzmpK77"
        },
        {
            name: "GROM",
            addresses: [
                { address: "R. Garrett 42, 1200-204 Lisboa, Portugal", lat: 38.710925, lng: -9.1405719 },
                {"address": "Av. Brasília 7, 1300-472 Lisboa", "lat": 38.7002455, "lng": -9.1758213},
                {"address": "Largo de São Miguel 3, 1100-117 Lisboa", "lat": 38.7109117, "lng": -9.129093}
            ],
            cuisine: "Gelataria",
            safety: { text: "100% sem glúten, incluindo cones, e certificada pela APC.", level: "safe" },
            price: "€€",
            recommendation: "Uma paragem obrigatória e um momento de puro deleite. A alegria de poder escolher qualquer sabor de gelado e saboreá-lo num cone crocante e seguro é um luxo raro.",
            mustTry: "Gelado de qualquer sabor num cone sem glúten",
            link: "https://www.google.com.br/maps/place/GROM/@38.710925,-9.1431468,17z/data=!3m1!5s0xd19347f28c4113f:0x6a8739e97cfa1002!4m7!3m6!1s0xd1935e451731811:0x2e277c96afe2a415!8m2!3d38.710925!4d-9.1405719!10e9!16s%2Fg%2F11f72_6vzz?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Inspira Liberdade Boutique Hotel",
            addresses: [{ address: "R. de Santa Marta 48, 1150-297 Lisboa, Portugal", lat: 38.723176, lng: -9.145611 }],
            cuisine: "Contemporâneo",
            safety: { text: "Cozinha mista certificada pela APC, com uma área de cozinha separada e exclusiva para pratos sem glúten.", level: "accredited" },
            price: "€€€",
            recommendation: "Provavelmente a cozinha mista mais segura que se pode encontrar. A escolha ideal para uma ocasião especial ou uma experiência de fine dining sem qualquer compromisso com a segurança.",
            mustTry: "Menu executivo ao almoço, menu de jantar completo com opções de carne, peixe, vegetarianas e vegan",
            link: "https://www.google.com.br/maps/place/Open+Brasserie+Mediterr%C3%A2nica/@38.7231757,-9.148186,17z/data=!4m7!3m6!1s0xd193382aaabedbf:0xf5e9988d8c330b45!8m2!3d38.723176!4d-9.145611!10e9!16s%2Fg%2F11bwg86884?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "La Trattoria",
            addresses: [{ address: "R. Artilharia 1 79, 1250-038 Lisboa, Portugal", lat: 38.724543, lng: -9.15606 }],
            cuisine: "Italiano",
            safety: { text: "Cozinha mista certificada pela APC com menu dedicado sem glúten.", level: "accredited" },
            price: "€€€",
            recommendation: "Uma escolha de topo para uma refeição italiana autêntica com um elevado grau de confiança. A certificação da APC é o selo de garantia fundamental.",
            mustTry: "Pizza sem glúten, Carbonara, Amatriciana",
            link: "https://www.google.com.br/maps/place/La+Trattoria/@38.724543,-9.1586349,17z/data=!4m7!3m6!1s0xd19337030912b4b:0x3156cf4b9cd232d9!8m2!3d38.724543!4d-9.15606!10e9!16s%2Fg%2F1v29d8vt?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "McDonald's",
            addresses: [
                {address: "2ª Circular, Avenida Marechal Craveiro Lopes, Posto de Abastecimento Repsol, 1700-305 Lisboa", lat: 38.762883, lng: -9.140344},
                {address: "Estrada Nacional 249 – km4, 2785-784 São Domingos de Rana", lat: 38.721948, lng: -9.33864},
                {address: "Aeroporto de Lisboa, Sala de Partidas Internacionais, Terminal 1, 1700-007 Lisboa", lat: 38.768956, lng: -9.129578},
                {address: "Aeroporto Humberto Delgado, Terminal 2, 1700-007 Lisboa, Portugal", lat: 38.7686, lng: -9.1293},
                {address: "C. C. Alegro Alfragide, Loja 142, 2790-150 Carnaxide", lat: 38.727253, lng: -9.21815},
                {address: "Rua Damião de Góis, nº32A,B e C, 1495-043 Algés", lat: 38.699686, lng: -9.228178},
                {address: "Praça Alvalade 14A 15D, 1700-000 Lisboa, Portugal", lat: 38.7523, lng: -9.1458},
                {address: "C. C. Babilónia, Loja15, Piso 01, Fase E, Av. Gago Coutinho 47, 2700-405 Amadora", lat: 38.759953, lng: -9.237058},
                {address: "Amoreiras Shopping Center, Ljs 2041 a, 2043, 1070-102 Lisboa, Portugal", lat: 38.7238, lng: -9.1622},
                {address: "Centro Comercial da Bela Vista, lj. 9 10, 1950-441 Lisboa, Portugal", lat: 38.7544, lng: -9.1188},
                {address: "Tv. da Praça 2-14, 1300-469 Lisboa, Portugal", lat: 38.7011, lng: -9.1812},
                {address: "R. Birre 581, 2750-217 Cascais, Portugal", lat: 38.7118, lng: -9.4314},
                {address: "Edifício Caleidoscópio, Jardim do Campo Grande, 1700-090 Lisboa, Portugal", lat: 38.7562, lng: -9.1566},
                {address: "Av. do Forte nº7 - 7A, Posto de Abastecimento B.P., 2790-074 Carnaxide", lat: 38.723397, lng: -9.235108},
                {address: "Rua Sebastião José de Carvalho e Mello, 15-17, 2750-483 Cascais", lat: 38.700033, lng: -9.418672},
                {address: "Cascaishopping, Loja 1B, E.N.9 Alcabideche, 2645-543 Alcabideche", lat: 38.738225, lng: -9.398936},
                {address: "Armazéns do Chiado, R. do Carmo 2 Lj.6, 10A, 1200-049 Lisboa, Portugal", lat: 38.7111, lng: -9.1396},
                {address: "C. C. Colombo, Av.dos Lusiadas, Lj.2112, 1500-392 Lisboa", lat: 38.753997, lng: -9.189786},
                {address: "Av. Dom Carlos I 17-25, 1200-000 Lisboa, Portugal", lat: 38.707, lng: -9.1504},
                {address: "Av. Cruzeiro Seixas, nºs 5 e 7, Centro Comercial Ubbo, Piso 1, Lojas 1061 a 1062, 2650-504 Amadora", lat: 38.7781, lng: -9.2195},
                {address: "Centro Comercial Alegro Sintra, Loja 2.10, Alto do Forte, 2635-098 Rio de Mouro", lat: 38.775042, lng: -9.338696},
                {address: "Praça Marechal Humberto Delgado, 1549-004 Lisboa, Portugal", lat: 38.7408, lng: -9.1706},
                {address: "Largo do Chiado 4 a 7, 1200-108 Lisboa, Portugal", lat: 38.7107, lng: -9.1417},
                {address: "Centro Comercial Loureshopping, Lj.1.065, Quinta do Infantado, 2670 Loures", lat: 38.833131, lng: -9.156261},
                {address: "Av. Marechal Gomes da Costa 33, 1950-081 Lisboa, Portugal", lat: 38.7578, lng: -9.1121},
                {address: "Av. Salgueiro Maia nº98, Massamá Norte, 2605-229 Belas", lat: 38.767028, lng: -9.278733},
                {address: "Rua Cidade Desportiva, 2745-012 Queluz", lat: 38.753314, lng: -9.268467},
                {address: "Estrada de Sintra, Km14,7, 2725-397 Mem Martins", lat: 38.780783, lng: -9.349147},
                {address: "Estrada das Mercês, Limites do lugar de Algueirão, 2725-083 Mem Martins", lat: 38.800628, lng: -9.326003},
                {address: "Piscinas Municipais de Odivelas, Av.Prof.Dr.Augusto Abreu Lopes, 2675-000 Odivelas", lat: 38.794578, lng: -9.181378},
                {address: "Parque, Largo Alm. Gago Coutinho, 2780-322 Oeiras, Portugal", lat: 38.7, lng: -9.313},
                {address: "Área de Serviço GALP A5, Km 9,6, sentido Lisboa/Cascais, 2780-000 Oeiras", lat: 38.714764, lng: -9.287103},
                {address: "Oeiras Parque-O Shopping da Linha, Lj.1080, Caminho dos Mochos, 2770-219 Paço de Arcos", lat: 38.704308, lng: -9.302031},
                {address: "Av. Padre Cruz, 1600-000 Lisboa, Portugal", lat: 38.7611, lng: -9.1691},
                {address: "Edifício Lisboa, Fração B e C, Parque das Nações, Alameda dos Oceanos, Lote 2.11.001 A a AD, 1990-225 Lisboa", lat: 38.763622, lng: -9.095701},
                {address: "Av. José Elias Garcia nº114 -118, 2745-143 Queluz", lat: 38.756444, lng: -9.254519},
                {address: "R. Gregório Lopes, 1400-195 Lisboa, Portugal", lat: 38.7046, lng: -9.2045},
                {address: "R. Rodrigo da Fonseca 33 37, 1250-190 Lisboa, Portugal", lat: 38.7225, lng: -9.1528},
                {address: "Av. de Roma 3A 3B, 1000-260 Lisboa, Portugal", lat: 38.7423, lng: -9.1424},
                {address: "Praça Dom Pedro IV 81 83, 1100-202 Lisboa, Portugal", lat: 38.7138, lng: -9.1395},
                {address: "Rua Cidade de Goa, 22-24, 2685-038 Sacavém", lat: 38.791586, lng: -9.103745},
                {address: "Av. da República 10F, 1050-191 Lisboa, Portugal", lat: 38.7363, lng: -9.1455},
                {address: "Rua Amílcar Antunes, Parque Comercial Sintra Retail Park, 2635-000 Rio de Mouro", lat: 38.776956, lng: -9.335519},
                {address: "Olivais Shopping Center, Lojas 215/216, Rua Cidade de Bolama, 1800-000 Lisboa", lat: 38.761894, lng: -9.114864},
                {address: "Strada Shopping, Lj.2.058, Nó das Patameiras, 2675 Odivelas", lat: 38.781156, lng: -9.192131},
                {address: "Estrada Nacional,249-3,Km1,9-2,2, São Marcos, 2635-000 Rio de Mouro", lat: 38.751461, lng: -9.307028},
                {address: "C.Comercial Continente de Telheiras, Lojas 1-4, Av. Das Nações Unidas, 1600-008 Lisboa", lat: 38.764517, lng: -9.176817},
                {address: "C. C. Vasco da Gama, Lj.2015, Av. D. João II, P.1.05, Lt.02, 1990 Lisboa", lat: 38.767733, lng: -9.0977},
                {address: "Pç do Marquês de Pombal 3, 1250-161 Lisboa, Portugal", lat: 38.7245694, lng: -9.1508837},
                {address: "Rua Comandante Sacadura Cabral, nº6, Quinta da Flamenga, 2660-017 Loures", lat: 38.75557, lng: -9.188562},
                {address: "Estrada de Paço de Arcos, 48, Lote 3, 2770-129 Paço de Arcos", lat: 38.70508, lng: -9.29501},
                {address: "Rua do Campo Santo, 2765 Estoril", lat: 38.713487, lng: -9.387032},
                {address: "Rua Elias Garcia Nº23, 2700-312 Amadora", lat: 38.754722, lng: -9.216389},
                {address: "Av. Lusíada, 1500-392 Lisboa, Portugal", lat: 38.7533, lng: -9.1885},
                {address: "Centro Comercial Alegro Alfragide, Loja 1422720-000, 2720-000 Lisboa, Portugal", lat: 38.7297, lng: -9.2272},
                {address: "Av. das Nações Unidas, 1600-528 Lisboa, Portugal", lat: 38.7592, lng: -9.1748}
            ],
            cuisine: "Fast-food",
            safety: { text: "Os pães sem glúten são certificados pela APC e seguem um protocolo rigoroso com bolsas de aquecimento e luvas dedicadas.", level: "accredited" },
            price: "€",
            recommendation: "Pode ser uma opção de recurso surpreendentemente segura devido aos protocolos auditados, mais fiável do que alguns restaurantes 'saudáveis' não certificados.",
            mustTry: "Hambúrgueres em pão sem glúten",
            link: "https://www.google.com.br/maps/place/McDonald's+-+Marqu%C3%AAs+de+Pombal/@38.7245694,-9.1508837,17z/data=!4m7!3m6!1s0xd1933dbdc62d631:0xf51ba950b1c94cb7!8m2!3d38.7245694!4d-9.1508837!10e9!16s%2Fg%2F11ql1szms6?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Quase Quase",
            addresses: [
                { address: "Av. de Roma 53B, 1700-342 Lisboa, Portugal", lat: 38.7475923, lng: -9.1413112 },
                { address: "R. Correia Teles 22D, 1350-243 Lisboa, Portugal", lat: 38.711500, lng: -9.172400 }
            ],
            cuisine: "Variado",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Quase+Quase/@38.7475923,-9.1438861,17z/data=!4m7!3m6!1s0xd1933c20e56ed85:0x8a066cc94b6b1c9e!8m2!3d38.7475923!4d-9.1413112!10e9!16s%2Fg%2F11rvbrhgqx?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Rice Me Deli",
            addresses: [{ address: "Av. António Augusto de Aguiar 124 A, 1050-124 Lisboa, Portugal", lat: 38.7334939, lng: -9.1529553 }],
            cuisine: "Padaria / Café",
            safety: { text: "Ecossistema 100% sem glúten e certificado pela APC.", level: "safe" },
            price: "€€",
            recommendation: "Uma visita obrigatória e um pilar da experiência sem glúten em Lisboa. A certificação e o ambiente 100% GF eliminam qualquer ansiedade.",
            mustTry: "Pães de fabrico próprio, bolos de aniversário",
            link: "https://www.google.com.br/maps/place/Rice+Me+Deli+-+cafetaria+%26bakery/@38.7334939,-9.1529553,17z/data=!4m7!3m6!1s0xd19332a863562c7:0xa059cbf0a3698930!8m2!3d38.7334939!4d-9.1529553!10e9!16s%2Fg%2F11sff5hwyw?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Rice Me",
            addresses: [{ address: "R. Carlos Testa 18A, 1050-046 Lisboa, Portugal", lat: 38.7335122, lng: -9.1527965 }],
            cuisine: "Variado",
            safety: { text: "Ecossistema 100% sem glúten e certificado pela APC.", level: "safe" },
            price: "€€",
            recommendation: "Uma visita obrigatória e um pilar da experiência sem glúten em Lisboa. A certificação e o ambiente 100% GF eliminam qualquer ansiedade.",
            mustTry: "Risoto de Cogumelos, Pad Thai",
            link: "https://www.google.com.br/maps/place/Rice+Me/@38.7335122,-9.1527965,17z/data=!4m7!3m6!1s0xd19330cc94a941f:0xf9c368e6ddb11397!8m2!3d38.7335122!4d-9.1527965!10e9!16s%2Fg%2F11ck6t93mp?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Sam Pastelaria Saudável",
            addresses: [{ address: "R. Luís Augusto Palmeirim 1 D, 1700-272 Lisboa, Portugal", lat: 38.755404, lng: -9.1416426 }],
            cuisine: "Padaria / Café",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Sam+Bolos+e+Doces+Saud%C3%A1veis/@38.755404,-9.1442175,17z/data=!4m7!3m6!1s0xd19338114ec145b:0xceb9294cb6a453cb!8m2!3d38.755404!4d-9.1416426!10e9!16s%2Fg%2F11rw_yn8xk?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Scoop Gelato",
            addresses: [{ address: "Lgo da Princesa 26 A, 1400-303 Lisboa, Portugal", lat: 38.6951041, lng: -9.2153774 }],
            cuisine: "Gelataria",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Gelataria+Scoop+Gelato/@38.6951041,-9.2179523,17z/data=!4m7!3m6!1s0xd1ecd1793b4ecb7:0xfea791ac63a22682!8m2!3d38.6951041!4d-9.2153774!10e9!16s%2Fg%2F11nnpdj395?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Totale Pizzeria",
            addresses: [
                { address: "Praça José Fontana 17A, 1050-129 Lisboa, Portugal", lat: 38.7300099, lng: -9.1445622 },
                { address: "Alameda dos Oceanos 41F, 1990-203 Lisboa, Portugal", lat: 38.763500, lng: -9.095200 },
                { address: "Largo Machado de Assis 1, 1700-116 Lisboa, Portugal", lat: 38.752300, lng: -9.142100 },
                { address: "Av. Rio de Janeiro 29, 1700-111 Lisboa, Portugal", lat: 38.751100, lng: -9.141200 }
            ],
            cuisine: "Pizza",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/TOTALE+PIZZERIA+-+Saldanha/@38.7300099,-9.1445622,17z/data=!4m7!3m6!1s0xd1933aedf942c63:0x42f43cc9d311476c!8m2!3d38.7300099!4d-9.1445622!10e9!16s%2Fg%2F11r998vl00?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Zero Healthy Food",
            addresses: [{ address: "R. 21 de Agosto 14D, 2530-814 Vimeiro, Portugal", lat: 39.1779596, lng: -9.3196062 }],
            cuisine: "Variado",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "N/A",
            recommendation: "Não especificada",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/ZERO+-+Healthy+Food+.+Gluten+free+.+Dairy+free+.+Sugar+free/@39.1779596,-9.3196062,17z/data=!4m7!3m6!1s0xd1f3152d81a1a3b:0x24e2324de19fe116!8m2!3d39.1779596!4d-9.3196062!10e9!16s%2Fg%2F11x9306x0m?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        // --aqui começa dados do glutenfreemap.org
        {
            name: "Telepizza",
            addresses: [
                {address: "R Cesaltina Fialho Gouveia 35, 2645-038 Alcabideche", lat: 38.7333, lng: -9.40984},
                {address: "Ubr Varzea Do Brejo Lt N Loja Lj R/C, 2615 Alverca Do Ribatejo", lat: 38.90421, lng: -9.03923},
                {address: "Pr Francisco Sa Carneiro 4-A, 1000-159 Lisboa", lat: 38.74204, lng: -9.13393},
                {address: "Arruda dos Vinhos Intermarche, 2630-358 Arruda dos Vinhos", lat: 38.99809, lng: -9.08473},
                {address: "Rua Da Junqueira 470, 1300-341 Lisboa", lat: 38.69749, lng: -9.19834},
                {address: "Pcta Jose Regio 7, 2695-050 Bobadela", lat: 38.80881, lng: -9.0996},
                {address: "Outlet Campera - 1º Lojas 1,2,3, 2580 Carregado", lat: 39.02824, lng: -8.96688},
                {address: "Qt Colonia Ed Intermache, Lt 2, 2580-491 Carregado", lat: 39.02855, lng: -8.98089},
                {address: "En 247 Km 49,4, 2655-319 Ericeira", lat: 38.97742, lng: -9.41807},
                {address: "Rua Pedro Alvares Cabral 6-A, 2670-391 Infantado", lat: 38.8410946, lng: -9.1614909},
                {address: "Pq Varzea Ed V Park, 2530-921 Lourinhã", lat: 39.24501, lng: -9.31209},
                {address: "Intermarché, Estrada Nacional 8, Alto da Lagoa, 2665-297 Malveira", lat: 38.9405975, lng: -9.2517925},
                {address: "Rua Machado Dos Santos 482-D, 2775-236 Parede", lat: 38.69049, lng: -9.35157},
                {address: "Av Gen Humberto Delgado 12 E 12-A, 2560-272 Torres Vedras", lat: 39.08952, lng: -9.25337},
                {address: "Est Dos Canicos 253 Intermarche, 2625-253 Vila Franca de Xira", lat: 38.87653, lng: -9.06993},
                {address: "R. 1º de Dezembro 59, 2600-135 Vila Franca de Xira", lat: 38.9529561, lng: -8.9882112}
            ],
            cuisine: "Pizza",
            safety: {text: "Apesar de ser acreditada APC e oferecer uma base de pizza sem glúten certificada, é preparada no mesmo ambiente que as pizzas com glúten. O risco de contaminação cruzada é muito elevado.", level: "caution"},
            price: "€€",
            recommendation: "Não recomendado para celíacos devido ao alto risco de contaminação cruzada. Apenas para pessoas com sensibilidade leve ao glúten que se sintam confortáveis com o risco.",
            mustTry: "Pizza em base sem glúten (com cautela)",
            link: "https://www.telepizza.pt/"
        },
        {
            name: "Pans & Company",
            addresses: [
                {address: "IC19 Alto do Forte, Loja 2.07, 2635-018 Rio de Mouro", lat: 38.7751032, lng: -9.3401132192272},
                {address: "Estrada Nacional 9, Loja 5B, 2645-543 Alcabideche", lat: 38.7379624, lng: -9.399246670568445},
                {address: "C. C. Colombo, Loja 2113, Av. Lusíada – Letras CC, 1500-392 Lisboa", lat: 38.75461195, lng: -9.1888489345051},
                {address: "Av. António Augusto de Aguiar 31, 1069-413 Lisboa", lat: 38.7335417, lng: -9.1536869},
                {address: "Arena Shopping, Loja 2,016 Rua António Alves Ferreira, 2, 2560-256 Torres Vedras", lat: 39.10159915, lng: -9.253036403956163},
                {address: "C. C. UBBO, Lj. 1,057 Avenida Cruzeiro Seixas, 5 e 7, 2650-504 Amadora", lat: 38.77708, lng: -9.220195377272727},
                {address: "C. C. Vasco da Gama, Loja 2.007 Av. D. João II, Lote 1.05.02, 1990-094 Lisboa", lat: 38.7676497, lng: -9.09688076106504},
                {address: "Av. dos Cavaleiros, loja 140, 2794-971 Carnaxide", lat: 38.72798225, lng: -9.219515046207267}
            ],
            cuisine: "Sanduíches",
            safety: {text: "Apesar de ser acreditada APC e oferecer pão sem glúten para as sanduíches, a preparação é feita na mesma linha de montagem dos produtos com glúten. O risco de contaminação cruzada é extremamente elevado.", level: "caution"},
            price: "€",
            recommendation: "Não recomendado para celíacos. A partilha de superfícies, utensílios e ingredientes torna o risco de contaminação cruzada inevitável.",
            mustTry: "Sanduíche em pão sem glúten (com extrema cautela)",
            link: "https://www.pansandcompany.pt/"
        },
        {
            name: "Burger King",
            addresses: [
                {address: "Av. Lusíada, Centro Comercial Colombo Loja 2023/2023A, 1500-392 Lisboa", lat: 38.7558, lng: -9.1885},
                {address: "Av. Cidade do Porto, Area Serviço Galp Sentido Sul/Norte, 1800-111 Lisboa", lat: 38.779886, lng: -9.122606},
                {address: "CC Strada outlet – loja 2044, Estrada da Paiã, 1107, 2675-626 Odivelas", lat: 38.781911, lng: -9.192041},
                {address: "CC Loures Shopping, Av. Descobertas 93, 2670-390 Loures", lat: 38.834901, lng: -9.156534},
                {address: "Centro de Lazer Campo Pequeno, Loja 146, 1000-082 Lisboa", lat: 38.743005, lng: -9.145221},
                {address: "Avenida D. João II, nº40 – Centro Comercial Vasco da Gama nº2041, 1990-094 Lisboa", lat: 38.77081, lng: -9.09767},
                {address: "CC Dolce Vita Tejo, Avenida José Garces, 2650-435 Amadora", lat: 38.777409, lng: -9.220741},
                {address: "Rua das tulipas nº26, 2750-272 Cascais", lat: 38.716334, lng: -9.439989},
                {address: "Rua António Feijó, Edificio Burger King, 2635-198 Rio de Mouro", lat: 38.786409, lng: -9.340295},
                {address: "Av Salgueiro Maia 1139 B Abóboda, 2785-501 S. Domingos de Rana", lat: 38.724019, lng: -9.336324},
                {address: "Rua Almirante gago Coutinho, 2660-000 Loures", lat: 38.8101, lng: -9.1574},
                {address: "Avenida Fontes Pereira de Melo N6A, 1050-121 Lisboa", lat: 38.726733, lng: -9.148874},
                {address: "Rua do Carmo N 97, 1200-093 Lisboa", lat: 38.712648, lng: -9.139744},
                {address: "Rua Coro de Santo Amaro de Oeiras - Lote E, 2780-379 Oeiras", lat: 38.700912, lng: -9.305131},
                {address: "Rua da Ilha Terceira, IC19 Saída Cacém Poente / Paiões, 2735-479 Cacém", lat: 38.769581, lng: -9.313531},
                {address: "Alameda Hermano Patrone N 5, 1495-064 Algés", lat: 38.69908, lng: -9.232885},
                {address: "Rua Visconde da Luz N 17, 2750-415 Cascais", lat: 38.698947, lng: -9.421099},
                {address: "Rua Ferreira Borges, 75, 1350-266 Lisboa", lat: 38.717157, lng: -9.164177},
                {address: "Avenida de Roma, 74B, 1700-333 Lisboa", lat: 38.751153, lng: -9.142677},
                {address: "Rua General Joaquim Filipe Nery Delgado, 2735-582 Cacem", lat: 38.774653, lng: -9.282167},
                {address: "CC Alvaláxia, Rua Prof. Fernando Da Fonseca, Loja FAN LAB Piso 0, 1600-617 Lisboa", lat: 38.761158, lng: -9.159411},
                {address: "Avenida Professor Egas Moniz N 16, 1649-035 Lisboa", lat: 38.750424, lng: -9.164885},
                {address: "Aeroporto de Lisboa (antes da Segurança - T1), 1700-111 Lisboa", lat: 38.770243, lng: -9.138115},
                {address: "Rua Frederico Jorge Eixo Norte Sul Area de serviço Galp sentido Norte, 1600-468 Lisboa", lat: 38.767902, lng: -9.170707},
                {address: "R. Hermínio da Palma Inácio Lote 29.02, 1750-224 Lisboa", lat: 38.788583, lng: -9.14665},
                {address: "Rua Norton de Matos Quinta do Marquês Continente Bom dia, 2780-155 Oeiras", lat: 38.691051, lng: -9.31085},
                {address: "Rua Quinta do Paizinho 18, 2790-237 Alfragide", lat: 38.722161, lng: -9.218396},
                {address: "Avenida Comandante Paiva Couceiro, 2745-190 Queluz", lat: 38.75469, lng: -9.254489},
                {address: "Estrada de São Marcos 1, Agualva-Cacém, 2735-307 Agualva-Cacém", lat: 38.750996, lng: -9.305212},
                {address: "Rua de Belem 10 a 16, 1300-044 Lisboa", lat: 38.697339, lng: -9.20207},
                {address: "Rua da pimenta 115, 1990-048 Lisboa", lat: 38.77358, lng: -9.092132},
                {address: "R. Pulido Valente Nr 1 Loja 2, 2675-670 Odivelas", lat: 38.78838, lng: -9.19065},
                {address: "Largo das Fontaínhas 7, 1300-113 Lisboa", lat: 38.704371, lng: -9.176739},
                {address: "Avenida Almirante Reis 86-B, 1170-096 Lisboa", lat: 38.729169, lng: -9.13452}
            ],
            cuisine: "Fast-food",
            safety: {text: "Apesar de ser certificado APC e oferecer opções de hambúrgueres sem pão (em prato) e saladas, o risco de contaminação cruzada é elevado devido ao ambiente de fast-food.", level: "caution"},
            price: "€",
            recommendation: "Apenas como última opção e com comunicação muito clara. Apenas os itens naturalmente sem glúten (carne, salada) devem ser considerados. Batatas fritas são cozinhadas com outros produtos e não são seguras.",
            mustTry: "Hambúrguer sem pão (em prato), Salada",
            link: "https://www.burgerking.pt/"
        }
    ],
    londres: [
        {
            name: "Brigit's Bakery",
            addresses: [{ address: "6-7 Chandos Pl, London WC2N 4HU, Reino Unido", lat: 51.5100768, lng: -0.1245529 }],
            cuisine: "Padaria / Café",
            safety: { text: "Oferece chá da tarde sem glúten com protocolos bem estabelecidos.", level: "accredited" },
            price: "N/A",
            recommendation: "Uma alternativa divertida para um chá da tarde, com opções seguras e certificação Halal.",
            mustTry: "Chá da tarde completo sem glúten",
            link: "https://www.google.com.br/maps/place/Brigit's+Bakery+%26+Afternoon+Tea+Bus+Tours/@51.5100768,-0.1271278,17z/data=!4m7!3m6!1s0x487604cc1af88479:0xc3b69fa667ac5340!8m2!3d51.5100768!4d-0.1245529!10e9!16s%2Fg%2F11fz286q4_?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Brockley's Rock",
            addresses: [{ address: "317 Brockley Rd, London SE4 2QZ, Reino Unido", lat: 51.4594444, lng: -0.0336111 }],
            cuisine: "Fish & Chips",
            safety: { text: "Utiliza panela, utensílios e armazenamento dedicados para alimentos sem glúten.", level: "accredited" },
            price: "N/A",
            recommendation: "Fortes processos internos para minimizar o risco de contaminação.",
            mustTry: "Fish & chips sem glúten",
            link: "https://www.google.com.br/maps/place/Brockley's+Rock/@51.4110344,-0.1158014,10.28z/data=!4m7!3m6!1s0x48760245a1e334b3:0xb6f759af3ca36fb8!8m2!3d51.4594444!4d-0.0336111!10e9!16s%2Fg%2F1vc_pv2z?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Cotto",
            addresses: [{ address: "89 Westminster Bridge Rd, London SE1 7HR, Reino Unido", lat: 51.4988111, lng: -0.1127472 }],
            cuisine: "Italiano",
            safety: { text: "Opera com duas cozinhas completamente separadas, uma 100% dedicada ao sem glúten. O proprietário é celíaco.", level: "safe" },
            price: "££",
            recommendation: "A principal recomendação para pizza segura em Londres. A cozinha separada oferece o nível mais alto de segurança num ambiente misto.",
            mustTry: "Pizza, massa e sobremesas sem glúten",
            link: "https://www.google.com.br/maps/place/Cotto/@51.4988111,-0.1127472,17z/data=!4m7!3m6!1s0x487604becc997d01:0xae3e536020fc94d5!8m2!3d51.4988111!4d-0.1127472!10e9!16s%2Fg%2F1tk62lql?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Côte Brasserie",
            addresses: [
                { address: "124-126 Wardour St, London W1F 0TY, Reino Unido", lat: 51.5142121, lng: -0.1343703 },
                { address: "7-12 Sloane Square, London SW1W 8EG, Reino Unido", lat: 51.4923, lng: -0.1572 },
                { address: "1, Hay’s Galleria, Counter St, London SE1 2HD, Reino Unido", lat: 51.5061, lng: -0.0845 },
                { address: "17-21 Tavistock St, London WC2E 7PA, Reino Unido", lat: 51.5113, lng: -0.1218 },
                { address: "50-51 St Martin's Ln, London WC2N 4EA, Reino Unido", lat: 51.5108, lng: -0.1275 },
                { address: "47 Kensington Ct, London W8 5DA, Reino Unido", lat: 51.5009, lng: -0.1911 },
                { address: "Festival Terrace, Southbank Centre, London SE1 8XX, Reino Unido", lat: 51.5065, lng: -0.1166 },
                { address: "1 St Katharine's Way, London E1W 1UN, Reino Unido", lat: 51.5065, lng: -0.0725 },
                { address: "26 Ludgate Hill, London EC4M 7DR, Reino Unido", lat: 51.5138, lng: -0.1017 },
                { address: "6-8 St Christopher's Pl, London W1U 1ND, Reino Unido", lat: 51.5152, lng: -0.1504 },
                { address: "8 High Street Wimbledon, London SW19 5DX, Reino Unido", lat: 51.4215, lng: -0.2071 },
                { address: "9 The Grn, London W5 5DA, Reino Unido", lat: 51.5126, lng: -0.3060 },
                { address: "24 Hill St, Richmond TW9 1TW, Reino Unido", lat: 51.4621, lng: -0.3040 },
                { address: "50-54 Turnham Green Terrace, Chiswick, London W4 1QP, Reino Unido", lat: 51.4939, lng: -0.2558 },
                { address: "6 Riverside Walk, London, Kingston upon Thames KT1 1QN, Reino Unido", lat: 51.4101, lng: -0.3062 },
                { address: "57 Whitecross St, London EC1Y 8AA, Reino Unido", lat: 51.5222, lng: -0.0927 },
                { address: "172 High St, Teddington TW11 8HU, Reino Unido", lat: 51.4248, lng: -0.3347 },
                { address: "102-106 High St, Esher, London KT10 9QJ, Reino Unido", lat: 51.3725, lng: -0.3642 },
                { address: "26-27 Devonshire St, London W1G 6PL, Reino Unido", lat: 51.5204, lng: -0.1475 }
            ],
            cuisine: "Francês",
            safety: { text: "Acreditada pela Coeliac UK, com menu dedicado e identificação visual para pratos GF.", level: "accredited" },
            price: "£££",
            recommendation: "Uma escolha fiável e sofisticada para uma refeição sentada, com a garantia de segurança da acreditação.",
            mustTry: "Menu sem glúten dedicado",
            link: "https://www.google.com.br/maps/place/C%C3%B4te+Soho/@51.5142121,-0.1343703,17z/data=!4m7!3m6!1s0x487604d35ab3b689:0x125b0b90fe9471d3!8m2!3d51.5142121!4d-0.1343703!10e9!16s%2Fg%2F1vpq6bzk?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "CreamDream",
            addresses: [{ address: "46 Bedford St, London WC2E 9HA, Reino Unido", lat: 51.5101008, lng: -0.1236548 }],
            cuisine: "Padaria / Café",
            safety: { text: "Padaria e café 100% sem glúten.", level: "safe" },
            price: "££",
            recommendation: "Adiciona um toque cultural distinto à cena de padarias sem glúten de Londres. Uma paragem fácil e deliciosa.",
            mustTry: "Pastelaria única e bebidas de café",
            link: "https://www.google.com.br/maps/place/Cream+Dream+%E2%80%93+Patisserie+%26+Caf%C3%A9/@51.5100718,-0.1237997,17z/data=!4m16!1m8!3m7!1s0x48760511a3060ad5:0x5a303ed37f2db48e!2sCream+Dream+%E2%80%93+Patisserie+%26+Caf%C3%A9!8m2!3d51.5101008!4d-0.1236548!10e9!16s%2Fg%2F11sjph8dp7!3m6!1s0x48760511a3060ad5:0x5a303ed37f2db48e!8m2!3d51.5101008!4d-0.1236548!10e9!16s%2Fg%2F11sjph8dp7?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Dendara",
            addresses: [{ address: "43 Kensington Church St, London W8 4BA, Reino Unido", lat: 51.5040308, lng: -0.1924159 }],
            cuisine: "Padaria / Café",
            safety: { text: "100% isento de glúten e laticínios.", level: "safe" },
            price: "£££",
            recommendation: "Preenche uma lacuna importante no mercado, destacando-se na pastelaria salgada sem glúten.",
            mustTry: "Pastilla de frango e tâmaras, quiches, fatias de bolo",
            link: "https://www.google.com.br/maps/place/Dendara/@51.5040307,-0.1972868,17z/data=!4m7!3m6!1s0x48760fed8658e62d:0xdab3e49701d34c83!8m2!3d51.5040308!4d-0.1924159!10e9!16s%2Fg%2F11tss4cwzz?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Dishoom",
            addresses: [
                { address: "4 Derry St, London W8 5SE, Reino Unido", lat: 51.5012647, lng: -0.191139 },
                { address: "22 Kingly St, Carnaby, London W1B 5QP, Reino Unido", lat: 51.5126, lng: -0.1387 },
                { address: "12 Upper St Martin's Ln, London WC2H 9FB, Reino Unido", lat: 51.5120, lng: -0.1281 },
                { address: "5 Stable St, London N1C 4AB, Reino Unido", lat: 51.5348, lng: -0.1252 },
                { address: "7 Boundary St, London E2 7JE, Reino Unido", lat: 51.5239, lng: -0.0721 },
                { address: "13 Water St, London E14 5GX, Reino Unido", lat: 51.5050, lng: -0.0195 },
                { address: "186 Portobello Rd, London W11 1LA, Reino Unido", lat: 51.5168, lng: -0.2052 },
                { address: "42 Electric Blvd, Nine Elms, London SW11 8AL, Reino Unido", lat: 51.4815, lng: -0.1258 }
            ],
            cuisine: "Asiático",
            safety: { text: "Consistentemente elogiado pela comunidade celíaca pelo seu pessoal conhecedor e menus de alergénios claros.", level: "accredited" },
            price: "£££",
            recommendation: "Uma excelente escolha para comida indiana, com uma vasta gama de opções sem glúten e uma equipa bem informada.",
            mustTry: "Pratos do menu de alergénios sem glúten",
            link: "https://www.google.com.br/maps/place/Dishoom+Kensington/@51.5012647,-0.191139,17z/data=!3m1!5s0x40630871f0c24945:0x8f9d68cf96e25e98!4m7!3m6!1s0x48760ff6f7a8fbbf:0xe8e77fa717b562ab!8m2!3d51.5012647!4d-0.191139!10e9!16s%2Fg%2F11f1568cfg?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Domino's",
            addresses: [
                { address: "178 High Holborn, London WC1V 7AA, Reino Unido", lat: 51.5160753, lng: -0.1247207 },
                { address: "37 Foley St, London W1W 7TN, Reino Unido", lat: 51.5186, lng: -0.1415 },
                { address: "17 Warwick Wy, Pimlico, London SW1V 1QT, Reino Unido", lat: 51.4913, lng: -0.1388 },
                { address: "613 Fulham Rd., London SW6 5UQ, Reino Unido", lat: 51.4784, lng: -0.1982 },
                { address: "38 Camden High St, London NW1 0JH, Reino Unido", lat: 51.5363, lng: -0.1384 },
                { address: "13, To, 15 N End Parade, London W14 0SJ, Reino Unido", lat: 51.4947, lng: -0.2132 },
                { address: "138-140 King St, London W6 0QU, Reino Unido", lat: 51.4925, lng: -0.2323 },
                { address: "129 Westbourne Park Rd, London W2 5QL, Reino Unido", lat: 51.5195, lng: -0.1920 },
                { address: "378 Edgware Rd, London W2 1EB, Reino Unido", lat: 51.5204, lng: -0.1691 },
                { address: "244 Uxbridge Rd, London W12 7JA, Reino Unido", lat: 51.5057, lng: -0.2345 },
                { address: "57 Battersea Bridge Rd, London SW11 3AX, Reino Unido", lat: 51.4786, lng: -0.1706 },
                { address: "180a Wandsworth Rd, London SW8 2LA, Reino Unido", lat: 51.4741, lng: -0.1357 },
                { address: "330 Wandsworth Bridge Rd., London SW6 2TZ, Reino Unido", lat: 51.4720, lng: -0.1918 },
                { address: "120 Chippenham Rd, London W9 2AD, Reino Unido", lat: 51.5284, lng: -0.1936 },
                { address: "262 W End Ln, London NW6 1LJ, Reino Unido", lat: 51.5451, lng: -0.1873 },
                { address: "87-89 High Rd, London NW10 2SU, Reino Unido", lat: 51.5398, lng: -0.2285 },
                { address: "95 Chiswick High Rd., Chiswick, London W4 2EF, Reino Unido", lat: 51.4930, lng: -0.2482 },
                { address: "192 Victoria Rd, North Acton, London W3 6BW, Reino Unido", lat: 51.5200, lng: -0.2644 },
                { address: "48 Battersea Rise, London SW11 1EE, Reino Unido", lat: 51.4623, lng: -0.1652 },
                { address: "145 Old Kent Rd, London SE1 5UT, Reino Unido", lat: 51.4920, lng: -0.0792 },
                { address: "166 Finchley Rd, London NW3 6BP, Reino Unido", lat: 51.5460, lng: -0.1785 },
                { address: "142 Upper Richmond Rd, London SW15 2SW, Reino Unido", lat: 51.4630, lng: -0.2165 },
                { address: "72 White Lion St, London N1 9PP, Reino Unido", lat: 51.5315, lng: -0.1065 },
                { address: "32 Highgate Hl, London N19 5NL, Reino Unido", lat: 51.5645, lng: -0.1315 },
                { address: "30 Queen St Pl, London EC4R 1BR, Reino Unido", lat: 51.5105, lng: -0.0925 },
                { address: "40 Old St, London EC1V 9AE, Reino Unido", lat: 51.5240, lng: -0.0965 },
                { address: "365 Uxbridge Rd, London W3 9RH, Reino Unido", lat: 51.5100, lng: -0.2855 },
                { address: "194 Kentish Town Rd, London NW5 2AE, Reino Unido", lat: 51.5470, lng: -0.1405 },
                { address: "328 Coldharbour Ln, London SW9 8QH, Reino Unido", lat: 51.4640, lng: -0.1085 },
                { address: "188 Upper Richmond Rd W, London SW14 8AN, Reino Unido", lat: 51.4670, lng: -0.2605 },
                { address: "146-148 Newington Butts, Elephant and Castle, London SE11 4RN, Reino Unido", lat: 51.4920, lng: -0.1035 },
                { address: "114-116 Streatham Hill, London SW2 4RS, Reino Unido", lat: 51.4420, lng: -0.1255 },
                { address: "43 Balham High Rd, London SW12 9AN, Reino Unido", lat: 51.4430, lng: -0.1505 },
                { address: "140 Broadway, London W13 0TL, Reino Unido", lat: 51.5120, lng: -0.3105 },
                { address: "418 High Rd, London HA9 6AH, Reino Unido", lat: 51.5610, lng: -0.2805 },
                { address: "50 The Hwy, London E1W 2BG, Reino Unido", lat: 51.5080, lng: -0.0605 },
                { address: "92 Hornsey Rd, London N7 7NN, Reino Unido", lat: 51.5540, lng: -0.1155 },
                { address: "124 Mitcham Rd, London SW17 9NH, Reino Unido", lat: 51.4250, lng: -0.1605 },
                { address: "617 Garratt Ln, London SW18 4SU, Reino Unido", lat: 51.4400, lng: -0.1855 },
                { address: "598-602 Holloway Rd, Archway, London N19 3PH, Reino Unido", lat: 51.5650, lng: -0.1205 },
                { address: "2, To, 8 W India Dock Rd, London E14 8JA, Reino Unido", lat: 51.5080, lng: -0.0255 },
                { address: "144 Essex Rd, London N1 8LX, Reino Unido", lat: 51.5360, lng: -0.0955 },
                { address: "34 Westow Hill, London SE19 1RX, Reino Unido", lat: 51.4200, lng: -0.0805 },
                { address: "167 Hoxton St, London N1 6PJ, Reino Unido", lat: 51.5300, lng: -0.0755 },
                { address: "222 Mare St, London E8 3RB, Reino Unido", lat: 51.5400, lng: -0.0505 },
                { address: "218 Preston Rd, London, Wembley HA9 8PB, Reino Unido", lat: 51.5750, lng: -0.2905 },
                { address: "88 Kingston Rd, London SW19 1LA, Reino Unido", lat: 51.4150, lng: -0.1955 },
                { address: "151 Tottenham Ln, London N8 9BT, Reino Unido", lat: 51.5850, lng: -0.1155 },
                { address: "269 Bethnal Grn Rd, London E2 6AH, Reino Unido", lat: 51.5260, lng: -0.0605 },
                { address: "239 Golders Green Rd, London NW11 9PN, Reino Unido", lat: 51.5750, lng: -0.2005 },
                { address: "7 Central Circus, London NW4 3JS, Reino Unido", lat: 51.5850, lng: -0.2305 },
                { address: "92 New Cross Rd, London SE14 5BA, Reino Unido", lat: 51.4750, lng: -0.0405 },
                { address: "168 Lower Rd, London SE16 2UN, Reino Unido", lat: 51.4950, lng: -0.0505 },
                { address: "201 Trafalgar Rd, London SE10 9EQ, Reino Unido", lat: 51.4850, lng: -0.0155 },
                { address: "16, Morden Court Parade, London Rd, Morden SM4 5HJ, Reino Unido", lat: 51.4000, lng: -0.1905 },
                { address: "1353 London Rd, Norbury, London SW16 4BE, Reino Unido", lat: 51.4050, lng: -0.1205 },
                { address: "8, 16 Grove Vale, London SE22 8EF, Reino Unido", lat: 51.4550, lng: -0.0705 },
                { address: "1322 Greenford Rd, Greenford UB6 0HL, Reino Unido", lat: 51.5450, lng: -0.3405 },
                { address: "234 Stamford Hill, London N16 6TT, Reino Unido", lat: 51.5750, lng: -0.0705 },
                { address: "363 High Rd, London N17 6QN, Reino Unido", lat: 51.5950, lng: -0.0705 }
            ],
            cuisine: "Pizza",
            safety: { text: "Acreditada pela Coeliac UK.", level: "accredited" },
            price: "££",
            recommendation: "A primeira cadeia de entrega a obter acreditação, tornando a pizza de entrega uma opção segura.",
            mustTry: "Pizzas sem glúten retangulares",
            link: "https://www.google.com.br/maps/place/Domino's+Pizza+-+London+-+High+Holborn/@51.5160753,-0.1247207,17z/data=!4m7!3m6!1s0x48761b348bc3ddb3:0x9be29d452b30cec7!8m2!3d51.5160753!4d-0.1247207!10e9!16s%2Fg%2F1tdndq_4?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "El Pollote",
            addresses: [
                { address: "13 Ganton St, Carnaby, London W1F 9BL, Reino Unido", lat: 51.5130237, lng: -0.1388852 },
                { address: "Camden Lock Market - Unit WY22, London NW1 8AF, Reino Unido", lat: 51.5415, lng: -0.1466 }
            ],
            cuisine: "Latino",
            safety: { text: "Menu quase inteiramente sem glúten com processos amigáveis para celíacos.", level: "accredited" },
            price: "££",
            recommendation: "Uma paragem vibrante e saborosa no coração de Soho.",
            mustTry: "Frango frito latino",
            link: "https://www.google.com.br/maps/place/El+Pollote+-+Carnaby/@51.5130237,-0.1388852,17z/data=!3m1!5s0x487604d50f1ef8b9:0xf140d606d86b7125!4m16!1m8!3m7!1s0x487605e05c467a17:0x80a122c0fdd8c00b!2sEl+Pollote+-+Carnaby!8m2!3d51.5130237!4d-0.1388852!10e9!16s%2Fg%2F11svgpmgy0!3m6!1s0x487605e05c467a17:0x80a122c0fdd8c00b!8m2!3d51.5130237!4d-0.1388852!10e9!16s%2Fg%2F11svgpmgy0?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Fortnum & Mason",
            addresses: [
                { address: "181 Piccadilly, London W1A 1ER, Reino Unido", lat: 51.5083599, lng: -0.1385439 },
                { address: "Pancras Rd, London N1C 4QP, Reino Unido", lat: 51.5318, lng: -0.1258 },
                { address: "4-7 Royal Exchange, London EC3V 3LR, Reino Unido", lat: 51.5135, lng: -0.0868 }
            ],
            cuisine: "Padaria / Café",
            safety: { text: "Oferece um serviço de chá da tarde 'Feito Sem Glúten' com atenção impecável ao detalhe.", level: "accredited" },
            price: "££££",
            recommendation: "Uma instituição clássica para uma experiência de chá da tarde segura e elegante.",
            mustTry: "Serviço de chá da tarde 'Feito Sem Glúten'",
            link: "https://www.google.com.br/maps/place/Fortnum's+Fountain/@51.5083599,-0.1385439,17z/data=!4m7!3m6!1s0x487604d66784f265:0xd4ccbc537021206f!8m2!3d51.5083599!4d-0.1385439!10e9!16s%2Fg%2F12vrgg78d?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "The Free From Bakehouse",
            addresses: [{ address: "Borough Market, 8 Southwark Street, SE1 1TL", lat: 51.5055, lng: -0.0912 }],
            cuisine: "Padaria / Café",
            safety: { text: "Produtor 100% isento de glúten e trigo.", level: "safe" },
            price: "££",
            recommendation: "Um pilar da cena sem glúten no mercado de alimentos mais famoso de Londres.",
            mustTry: "Vasta gama de bolos, fatias e bolachas",
            link: "https://www.thefreefrombakehouse.com/shop/?category=Gluten%20Free"
        },
        {
            name: "Guasa London",
            addresses: [{ address: "2-10 Bethnal Green Road Unit 59, Boxpark, London E1 6GY, Reino Unido", lat: 51.5235, lng: -0.0722 }],
            cuisine: "Latino",
            safety: { text: "Banca totalmente sem glúten.", level: "safe" },
            price: "££",
            recommendation: "Um exemplo perfeito de como a comida de rua naturalmente sem glúten pode ser celebrada.",
            mustTry: "Arepas de pão de milho recheadas",
            link: "https://www.guasagroup.com/"
        },
        {
            name: "Hobson's Fish & Chips",
            addresses: [
                { address: "27 St Anne's Ct, London W1F 0BN, Reino Unido", lat: 51.5146041, lng: -0.1334935 },
                { address: "9 Porchester Rd, London W2 5DP, Reino Unido", lat: 51.5165, lng: -0.1878 },
                { address: "15 Villiers St, London WC2N 6ND, Reino Unido", lat: 51.5076, lng: -0.1242 }
            ],
            cuisine: "Fish & Chips",
            safety: { text: "Afirma usar fritadeiras dedicadas, mas o seu próprio menu adverte sobre possível contaminação cruzada, exigindo vigilância.", level: "caution" },
            price: "££",
            recommendation: "Uma opção popular, mas que requer comunicação clara e avaliação do nível de risco pessoal.",
            mustTry: "Fish & chips do menu sem glúten",
            link: "https://www.google.com.br/maps/place/Hobson%60s+Fish+%26+Chips+Soho/@51.5068268,-0.1430709,13.75z/data=!4m7!3m6!1s0x487605a8bc8cc531:0xf9cefbc341b9333!8m2!3d51.5146041!4d-0.1334935!10e9!16s%2Fg%2F11ft0krns1?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Honest Burgers",
            addresses: [
                { address: "84 Brewer St, London W1F 9UB, Reino Unido", lat: 51.5107583, lng: -0.137213 },
                { address: "4a Meard St, London W1F 0EF, Reino Unido", lat: 51.5139, lng: -0.1338 },
                { address: "24 Thurloe St, South Kensington, London SW7 2LT, Reino Unido", lat: 51.4941, lng: -0.1751 },
                { address: "9 Festival Terrace, London SE1 8XX, Reino Unido", lat: 51.5057, lng: -0.1163 },
                { address: "17 Garrick St, London WC2E 9AX, Reino Unido", lat: 51.5118, lng: -0.1252 },
                { address: "5-7 Southwark St, London SE1 1RQ, Reino Unido", lat: 51.5059, lng: -0.0911 },
                { address: "Unit 34a Camden Lock Pl, London NW1 8AF, Reino Unido", lat: 51.5414, lng: -0.1467 },
                { address: "4 Market Pl, London W1W 8AD, Reino Unido", lat: 51.5169, lng: -0.1408 },
                { address: "251 Pentonville Rd, London N1 9NG, Reino Unido", lat: 51.5312, lng: -0.1189 },
                { address: "31 Paddington St, London W1U 4HD, Reino Unido", lat: 51.5186, lng: -0.1557 },
                { address: "6 Great Queen St, London WC2B 5DH, Reino Unido", lat: 51.5152, lng: -0.1215 },
                { address: "117 Tottenham Ct Rd, London W1T 5AL, Reino Unido", lat: 51.5204, lng: -0.1360 },
                { address: "189 Portobello Rd, London W11 2ED, Reino Unido", lat: 51.5169, lng: -0.2052 },
                { address: "33 Southampton St, London WC2E 7HE, Reino Unido", lat: 51.5105, lng: -0.1215 },
                { address: "39 The Cut, London SE1 8LF, Reino Unido", lat: 51.5028, lng: -0.1084 },
                { address: "24 Fulham Palace Rd, London W6 9PH, Reino Unido", lat: 51.4930, lng: -0.2255 },
                { address: "4, off Change Alley, Lombard St, London EC3V 9AZ, Reino Unido", lat: 51.5126, lng: -0.0864 },
                { address: "95 Mortimer St, London W1W 7GB, Reino Unido", lat: 51.5173, lng: -0.1423 },
                { address: "148 Chiswick High Rd., Chiswick, London W4 1PR, Reino Unido", lat: 51.4933, lng: -0.2526 },
                { address: "6 Bermondsey St, London SE1 2TF, Reino Unido", lat: 51.5034, lng: -0.0831 },
                { address: "6 Baldwin St, London EC1V 9NU, Reino Unido", lat: 51.5255, lng: -0.0991 },
                { address: "12 Widegate St, London E1 7HP, Reino Unido", lat: 51.5178, lng: -0.0768 },
                { address: "1 Commodity Quay, London E1W 1AZ, Reino Unido", lat: 51.5068, lng: -0.0711 },
                { address: "13, Well's Terrace, City N Pl, Finsbury Park, London N4 3FP, Reino Unido", lat: 51.5647, lng: -0.1068 },
                { address: "75 Venn St, London SW4 0BD, Reino Unido", lat: 51.4623, lng: -0.1322 },
                { address: "Unit 12, Brixton Village, London SW9 8PR, Reino Unido", lat: 51.4622, lng: -0.1136 },
                { address: "53 New Broadway, London W5 5AH, Reino Unido", lat: 51.5134, lng: -0.3023 },
                { address: "14-16 Bradbury St, London N16 8JN, Reino Unido", lat: 51.5473, lng: -0.0784 },
                { address: "12-16 Blenheim Grove, London SE15 4QL, Reino Unido", lat: 51.4691, lng: -0.0691 },
                { address: "8 Nelson Rd., London SE10 9JB, Reino Unido", lat: 51.4812, lng: -0.0105 },
                { address: "72 Tooting High St, London SW17 0RN, Reino Unido", lat: 51.4281, lng: -0.1680 }
            ],
            cuisine: "Hambúrguer",
            safety: { text: "Fritadeiras dedicadas para batatas fritas e anéis de cebola, tornando todos os acompanhamentos fritos seguros.", level: "accredited" },
            price: "££",
            recommendation: "Um favorito da comunidade. A capacidade de desfrutar de uma refeição completa de hambúrguer com acompanhamentos fritos seguros é uma experiência rara.",
            mustTry: "Hambúrguer em pão sem glúten, batatas fritas com sal de alecrim, anéis de cebola",
            link: "https://www.google.com.br/maps/place/Honest+Burgers+Brewer+St+-+Soho/@51.5107583,-0.137213,17z/data=!4m7!3m6!1s0x48760574c9313523:0x1d315959dc88ee54!8m2!3d51.5107583!4d-0.137213!10e9!16s%2Fg%2F11fcmj_g52?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Horn OK Please",
            addresses: [
                { address: "Unit 55, Borough Market Kitchen, Jubilee Pl, Winchester Walk, London SE1 9AG, Reino Unido", lat: 51.5059943, lng: -0.0909201 },
                { address: "Royal Festival Hall, Southbank Centre Food Market, Belvedere Rd, London SE1 8XX, Reino Unido", lat: 51.5061, lng: -0.1165 }
            ],
            cuisine: "Asiático",
            safety: { text: "Banca de mercado maioritariamente sem glúten.", level: "accredited" },
            price: "££",
            recommendation: "Uma excelente opção vegetariana e segura nos mercados de Londres.",
            mustTry: "Pratos vegetarianos indianos",
            link: "https://www.google.com.br/maps/place/Horn+OK+Please/@51.5059943,-0.0909201,17z/data=!4m7!3m6!1s0x4876035776b4f021:0xf4378f19f7245e34!8m2!3d51.5059943!4d-0.0909201!10e9!16s%2Fg%2F11dx8_z1zz?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Indigo at One Aldwych",
            addresses: [{ address: "1 Aldwych, London WC2B 4BZ, Reino Unido", lat: 51.5118556, lng: -0.1194135 }],
            cuisine: "Britânico",
            safety: { text: "Cozinha 100% isenta de glúten e laticínios, e acreditada pela Coeliac UK.", level: "safe" },
            price: "££££",
            recommendation: "A escolha de eleição para uma refeição de celebração ou uma experiência gastronómica de luxo, oferecendo uma paz de espírito inigualável.",
            mustTry: "Fish and chips, chá da tarde completo, menus de degustação",
            link: "https://www.google.com.br/maps/place/Indigo+at+One+Aldwych+Restaurant/@51.5118556,-0.1219884,17z/data=!3m1!5s0x487604ca5b5d5e6d:0x595e85c05da383ea!4m7!3m6!1s0x487604ca5bc895ab:0xe94f7918753a8983!8m2!3d51.5118556!4d-0.1194135!10e9!16s%2Fg%2F1vcl379k?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Lahpet",
            addresses: [{ address: "58 Bethnal Grn Rd, London E1 6JW, Reino Unido", lat: 51.5241411, lng: -0.072992 }],
            cuisine: "Asiático",
            safety: { text: "Menu maioritariamente sem glúten; a localização de Shoreditch tem uma fritadeira dedicada.", level: "accredited" },
            price: "£££",
            recommendation: "Uma excelente escolha para cozinha birmanesa, especialmente a localização de Shoreditch pela segurança acrescida da fritadeira.",
            mustTry: "Jungle Fried Chicken (em Shoreditch)",
            link: "https://www.google.com.br/maps/place/Lahpet+Shoreditch/@51.5241411,-0.072992,17z/data=!4m7!3m6!1s0x48761ce62794bf39:0x9e788c3bd403aef2!8m2!3d51.5241411!4d-0.072992!10e9!16s%2Fg%2F11c5sywb0_?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "La Pepia",
            addresses: [{ address: "Borough Market, Bedale St, London SE1 9AL, Reino Unido", lat: 51.5054894, lng: -0.0907299 }],
            cuisine: "Latino",
            safety: { text: "Banca totalmente sem glúten.", level: "safe" },
            price: "££",
            recommendation: "Torna o Borough Market um destino-chave para qualquer visitante celíaco.",
            mustTry: "Pães de milho quentes e recheados",
            link: "https://www.google.com.br/maps/place/La+Pepi%C3%A1/@51.5054894,-0.0933048,17z/data=!3m1!5s0x487603577211f4f7:0x1439846b23deb943!4m7!3m6!1s0x487603afbd190703:0x5d2bf69413a2f3b9!8m2!3d51.5054894!4d-0.0907299!10e9!16s%2Fg%2F11h7nbpj2r?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Libby's Gluten Free Bakery",
            addresses: [{ address: "61a Ledbury Rd, London W11 2AA, Reino Unido", lat: 51.5141921, lng: -0.1992556 }],
            cuisine: "Padaria / Café",
            safety: { text: "Padaria familiar 100% isenta de glúten.", level: "safe" },
            price: "£££",
            recommendation: "Uma padaria dedicada, fiável e bem conceituada, numa localização conveniente e pitoresca.",
            mustTry: "Variedade de produtos doces e salgados, incluindo bolos e pastelaria",
            link: "https://www.google.com.br/maps/place/Libby's+-+Notting+Hill/@51.5141921,-0.1992556,17z/data=!4m7!3m6!1s0x48760f135e026ebf:0xd2f8e1b96d093620!8m2!3d51.5141921!4d-0.1992556!10e9!16s%2Fg%2F11p6drqnhw?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Los Mochis",
            addresses: [
                { address: "2-4 Farmer St, London W8 7SN, Reino Unido", lat: 51.5090, lng: -0.1972 },
                { address: "100 Liverpool St, London EC2M 2AT, Reino Unido", lat: 51.5178082, lng: -0.083777 }
            ],
            cuisine: "Fusion",
            safety: { text: "Menu 100% isento de glúten, nozes e aipo.", level: "safe" },
            price: "££££",
            recommendation: "Representa o auge da criatividade, luxo e segurança na gastronomia sem glúten.",
            mustTry: "Tacos, maki rolls, ceviches, experiência omakase (Juno)",
            link: "https://www.google.com.br/maps/place/Los+Mochis+London+City/@51.5178081,-0.0886479,17z/data=!4m7!3m6!1s0x48761db8fa1dda59:0xf6eb3b316e5cdba!8m2!3d51.5178082!4d-0.083777!10e9!16s%2Fg%2F11l6mdhlc9?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Ma La Sichuan",
            addresses: [{ address: "37 Monck St, London SW1P 2BL, Reino Unido", lat: 51.4967139, lng: -0.130643 }],
            cuisine: "Asiático",
            safety: { text: "Um achado raro: um restaurante chinês com um menu dedicado sem glúten.", level: "accredited" },
            price: "£££",
            recommendation: "Um local valioso que permite aos celíacos desfrutar de uma cozinha frequentemente inacessível.",
            mustTry: "Arroz frito com ovo, frango com gengibre, tofu com sal e pimenta",
            link: "https://www.google.com.br/maps/place/Ma+La+Sichuan/@51.4962047,-0.1429462,14.67z/data=!4m7!3m6!1s0x487604dce1d91965:0xfc7cd4ae1ca8e0cb!8m2!3d51.4967139!4d-0.130643!10e9!16s%2Fg%2F1tmz6dpl?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "MaMa Boutique Gluten Free Bakery",
            addresses: [{ address: "30 Chiswick High Rd., Chiswick, London W4 1TE, Reino Unido", lat: 51.4934933, lng: -0.2467987 }],
            cuisine: "Padaria / Café",
            safety: { text: "Padaria 100% sem glúten.", level: "safe" },
            price: "££",
            recommendation: "Um destino para pão sem glúten de alta qualidade, um produto notoriamente difícil de aperfeiçoar.",
            mustTry: "Pães de fermentação natural, bolos e pastelaria",
            link: "https://www.google.com.br/maps/place/Ma+Ma+Boutique+Bakery/@51.4934933,-0.2493736,17z/data=!4m7!3m6!1s0x48760f684e564539:0x3a5794c6cbc953c3!8m2!3d51.4934933!4d-0.2467987!10e9!16s%2Fg%2F11t1sfsnl1?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "MannaDew",
            addresses: [{ address: "Galapagos Foods, Battersea High St, Battersea Park, London SW11 3JS, Reino Unido", lat: 51.4705147, lng: -0.1719813 }],
            cuisine: "Padaria / Café",
            safety: { text: "100% sem glúten, com produtos testados em laboratório para <5ppm de glúten.", level: "safe" },
            price: "£££",
            recommendation: "Estabelece um novo padrão para a panificação sem glúten, elevando a experiência a uma verdadeira iguaria.",
            mustTry: "Croissants, pains au chocolat",
            link: "https://www.google.com.br/maps/place/Manna+Dew/@51.4705147,-0.1745562,17z/data=!4m7!3m6!1s0x4876059db13270eb:0x61afcf703875cbda!8m2!3d51.4705147!4d-0.1719813!10e9!16s%2Fg%2F11bw62ct0s?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "The Mayfair Chippy",
            addresses: [
                { address: "14 N Audley St, London W1K 6WE, Reino Unido", lat: 51.5131708, lng: -0.1532625 },
                { address: "138 Brompton Rd, London SW3 1HY, Reino Unido", lat: 51.5003, lng: -0.1666 }
            ],
            cuisine: "Fish & Chips",
            safety: { text: "Opção sofisticada com protocolos para celíacos e fritadeiras dedicadas.", level: "accredited" },
            price: "£££",
            recommendation: "Uma experiência de 'restaurante' mais sofisticada para fish and chips seguros.",
            mustTry: "Fish & chips sem glúten",
            link: "https://www.google.com.br/maps/place/The+Mayfair+Chippy/@51.5131707,-0.1581334,17z/data=!4m7!3m6!1s0x4876053296ce3eeb:0x49900da706103950!8m2!3d51.5131708!4d-0.1532625!10e9!16s%2Fg%2F11y27kfrj?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Niche Gluten-Free Dining",
            addresses: [{ address: "197-199 Rosebery Ave, London EC1R 4TJ, Reino Unido", lat: 51.5299631, lng: -0.1054636 }],
            cuisine: "Britânico",
            safety: { text: "O primeiro restaurante 100% livre de glúten de Londres e acreditado pela Coeliac UK.", level: "safe" },
            price: "££",
            recommendation: "Uma instituição e um marco para a comunidade celíaca, com um nível de confiança e autenticidade difícil de igualar.",
            mustTry: "Tartes, frango frito, pudins clássicos britânicos",
            link: "https://www.google.com.br/maps/place/Niche+Gluten-free+Dining/@51.5299631,-0.1080385,17z/data=!4m7!3m6!1s0x48761b5b4db364c3:0x2c988bd885f0ba14!8m2!3d51.5299631!4d-0.1054636!10e9!16s%2Fg%2F12ll2gnw3?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Nopi / Rovi (Ottolenghi)",
            addresses: [
                { address: "21-22 Warwick St, London W1F 9LD, Reino Unido", lat: 51.5115, lng: -0.1385 },
                { address: "59 Wells Street, Fitzrovia, 59-65 Wells St, London W1A 3AE, Reino Unido", lat: 51.5176218, lng: -0.1386031 }
            ],
            cuisine: "Contemporâneo",
            safety: { text: "Conhecidos pela sua capacidade de atender de forma excelente e segura aos clientes sem glúten.", level: "accredited" },
            price: "££££",
            recommendation: "Conhecidos pelos seus pratos vibrantes e pela sua excelente capacidade de adaptação a dietas restritas.",
            mustTry: "Pratos focados em vegetais",
            link: "https://www.google.com.br/maps/place/ROVI/@51.5176217,-0.143474,17z/data=!3m1!5s0x48761b2a58d42661:0x9ded683d712a1d58!4m7!3m6!1s0x48761b277a0418d9:0xdf34d009ce1c0467!8m2!3d51.5176218!4d-0.1386031!10e9!16s%2Fg%2F11g0lcgqd_?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Olley's Fish Experience",
            addresses: [{ address: "65 Norwood Rd, London SE24 9AA, Reino Unido", lat: 51.4510559, lng: -0.1005426 }],
            cuisine: "Fish & Chips",
            safety: { text: "Acreditado pela Coeliac UK, com processos rigorosamente auditados.", level: "accredited" },
            price: "££",
            recommendation: "Um destino de eleição para uma das melhores e mais seguras experiências de fish and chips em Londres.",
            mustTry: "Fish & chips sem glúten",
            link: "https://www.google.com.br/maps/place/Olley's+Fish+and+Chips+Experience/@51.4510559,-0.1031175,17z/data=!4m7!3m6!1s0x4876040cbbec9a63:0x543fc664163cc7b8!8m2!3d51.4510559!4d-0.1005426!10e9!16s%2Fg%2F1vtqvkyh?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Oliver's Fish & Chips",
            addresses: [{ address: "95 Haverstock Hill, London NW3 4RL, Reino Unido", lat: 51.5467771, lng: -0.1587588 }],
            cuisine: "Fish & Chips",
            safety: { text: "Oferece opções sem glúten em todos os dias, exceto às sextas-feiras.", level: "accredited" },
            price: "££",
            recommendation: "Uma opção fiável para fish & chips seguros na área.",
            mustTry: "Fish & chips sem glúten",
            link: "https://www.google.com.br/maps/place/Oliver's+Fish+%26+Chips/@51.5467771,-0.1587588,17z/data=!4m7!3m6!1s0x48761af1ff48c89f:0xe60af638f209a251!8m2!3d51.5467771!4d-0.1587588!10e9!16s%2Fg%2F1tgnwq46?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Paladar",
            addresses: [{ address: "4-5 London Rd, London SE1 6JZ, Reino Unido", lat: 51.4981401, lng: -0.104369 }],
            cuisine: "Latino",
            safety: { text: "Menu totalmente 100% isento de glúten.", level: "safe" },
            price: "£££",
            recommendation: "Torna a rica culinária de um continente inteiro totalmente acessível e segura para celíacos.",
            mustTry: "Pratos de partilha, churros",
            link: "https://www.google.com.br/maps/place/Paladar/@51.4981401,-0.1069439,17z/data=!4m7!3m6!1s0x487604a341961979:0x24ad261bc8353bc7!8m2!3d51.4981401!4d-0.104369!10e9!16s%2Fg%2F11d_2g0gfr?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Pho",
            addresses: [
                { address: "48 Brushfield St, London E1 6AG, Reino Unido", lat: 51.5195, lng: -0.0754 },
                { address: "11 Great Russell St, London WC1B 3NH, Reino Unido", lat: 51.5173, lng: -0.1281 },
                { address: "102 Baker St, London W1U 6TL, Reino Unido", lat: 51.5198, lng: -0.1561 },
                { address: "9 Southwark St, London SE1 1RQ, Reino Unido", lat: 51.5046038, lng: -0.0912226 },
                { address: "63 Commercial St, London E1 6BD, Reino Unido", lat: 51.5179, lng: -0.0735 },
                { address: "163-165 Wardour St, London W1F 8WN, Reino Unido", lat: 51.5152, lng: -0.1354 },
                { address: "184 Grays Inn Rd, London WC1X 8EW, Reino Unido", lat: 51.5235, lng: -0.1171 },
                { address: "76 Shaftesbury Ave, London W1D 6ND, Reino Unido", lat: 51.5121, lng: -0.1328 },
                { address: "59 Brushfield St, London E1 6AA, Reino Unido", lat: 51.5196, lng: -0.0751 },
                { address: "Unit 21, Jubilee Place, 45 Bank St, London E14 5NY, Reino Unido", lat: 51.5033, lng: -0.0201 },
                { address: "65A Long Acre, London WC2E 9JD, Reino Unido", lat: 51.5126, lng: -0.1240 },
                { address: "10 Little Turnstile, London WC1V 7DX, Reino Unido", lat: 51.5167, lng: -0.1221 }
            ],
            cuisine: "Asiático",
            safety: { text: "Acreditado pela Coeliac UK; o menu é ~98% isento de glúten por natureza.", level: "accredited" },
            price: "££",
            recommendation: "Uma das opções de cadeia de restaurantes mais seguras e amplamente disponíveis, oferecendo pratos saborosos e saudáveis com risco mínimo.",
            mustTry: "Sopa Phở, a maioria dos pratos do menu",
            link: "https://www.google.com.br/maps/place/Pho+London+Bridge/@51.5046038,-0.0912226,17z/data=!4m7!3m6!1s0x4876035e1b050069:0xbfb4df5ee9a4b354!8m2!3d51.5046038!4d-0.0912226!10e9!16s%2Fg%2F11srmdbsyv?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Pizza Express",
            addresses: [
                { address: "9 Bow Street, Covent Garden, London WC2E 7AH", lat: 51.5126, lng: -0.1223 },
                { address: "30 Coptic Street, Bloomsbury, London WC1A 1NS", lat: 51.5180, lng: -0.1272 },
                { address: "133 Baker Street, Marylebone, London W1U 6SF", lat: 51.5209, lng: -0.1569 },
                { address: "4 Borough High Street (Bridge House), Southwark, SE1 9QQ", lat: 51.5050, lng: -0.0906 },
                { address: "85-87 Parkway, Camden Town, London NW1 7PP", lat: 51.5383, lng: -0.1430 },
                { address: "21-22 Barrett Street, St Christopher’s Place, London W1U 1BF", lat: 51.5148, lng: -0.1509 },
                { address: "39 Abbey Road, St John’s Wood, London NW8 0AA", lat: 51.5350, lng: -0.1852 },
                { address: "85 Victoria Street, Westminster, London SW1H 0HW", lat: 51.4981, lng: -0.1347 },
                { address: "137 Notting Hill Gate, Notting Hill, London W11 3LB", lat: 51.5093, lng: -0.1970 },
                { address: "7 Rockley Road, Brook Green, London W14 0DJ", lat: 51.4998, lng: -0.2211 },
                { address: "895-896 Fulham Road, Fulham, London SW6 5HU", lat: 51.4770, lng: -0.2014 },
                { address: "46 Moreton Street, Pimlico, London SW1V 2PB", lat: 51.4883, lng: -0.1360 },
                { address: "152-154 King’s Road, Chelsea, London SW3 4UT", lat: 51.4887, lng: -0.1652 },
                { address: "80 St Martin’s Lane, Covent Garden, London WC2N 4AA", lat: 51.5110, lng: -0.1278 },
                { address: "187 Kentish Town Road, Camden, London NW1 8PD", lat: 51.5458, lng: -0.1408 },
                { address: "Cardamom Building, 31 Shad Thames, Bermondsey, London SE1 2YR", lat: 51.5034, lng: -0.0728 },
                { address: "194A Haverstock Hill, Belsize Park, London NW3 2AJ", lat: 51.5492, lng: -0.1653 },
                { address: "144 Upper Richmond Road, Putney, London SW15 2SW", lat: 51.4628, lng: -0.2173 },
                { address: "335 Upper Street, Islington, London N1 0PB", lat: 51.5356, lng: -0.1042 },
                { address: "14-15 Barnes High Street, Barnes, London SW13 9LW", lat: 51.4716, lng: -0.2458 },
                { address: "316 Kennington Road, Kennington, London SE11 4LD", lat: 51.4878, lng: -0.1084 },
                { address: "99 High Holborn, Holborn, London WC1V 6LF", lat: 51.5173, lng: -0.1192 },
                { address: "Unit 99 (W07), London Designer Outlet, Wembley Park, HA9 0FD", lat: 51.5573, lng: -0.2798 },
                { address: "230-236 Lavender Hill, Battersea, London SW11 1LE", lat: 51.4623, lng: -0.1652 },
                { address: "198 Trinity Road, Wandsworth, London SW17 7HR", lat: 51.4423, lng: -0.1752 },
                { address: "20-22 Leadenhall Market, London EC3V 1LR", lat: 51.5126, lng: -0.0827 },
                { address: "Unit S1, Brent Cross Shopping Centre, Prince Charles Drive, Hendon, NW4 3FP", lat: 51.5753, lng: -0.2227 },
                { address: "1 Clerkenwell Road, Clerkenwell, London EC1M 5PA", lat: 51.5233, lng: -0.1027 },
                { address: "Unit 3, The White House, 9c Belvedere Road, Lambeth/Waterloo, London SE1 8YP", lat: 51.5053, lng: -0.1177 },
                { address: "363 Fulham Road, Chelsea, London SW10 9TN", lat: 51.4843, lng: -0.1807 }
            ],
            cuisine: "Pizza",
            safety: { text: "Acreditada pela Coeliac UK, com protocolos específicos.", level: "accredited" },
            price: "££",
            recommendation: "Torna a pizza, um prato de alto risco, acessível e seguro para celíacos em toda a cidade.",
            mustTry: "Pizza em base sem glúten",
            link: "https://www.google.com.br/maps/place/Pizza+Express/@51.509789,-0.0803362,17z/data=!3m1!5s0x4876034dd796a32b:0xb3834ce9e11667ab!4m7!3m6!1s0x4876034e761c78c9:0xd85aaea0d0331115!8m2!3d51.509789!4d-0.0803362!10e9!16s%2Fg%2F1tddx78g?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Zizzi",
            addresses: [
                { address: "20 Bow Street, London WC2E 7AW", lat: 51.513713, lng: -0.1226246 },
                { address: "73 The Strand, London WC2R 0DE", lat: 51.5106, lng: -0.1224 },
                { address: "194 Earls Court Road, London SW5 9QF", lat: 51.4920, lng: -0.1941 },
                { address: "8 Central St Giles Plaza, London WC2H 8AB", lat: 51.5159, lng: -0.1287 },
                { address: "110 Wigmore Street, London W1U 3RD", lat: 51.5152, lng: -0.1534 },
                { address: "The O2, London SE10 0UZ", lat: 51.5029, lng: 0.0032 },
                { address: "17 Sheldon Square, London W2 6EP", lat: 51.5186, lng: -0.1779 },
                { address: "Mezzanine Level, Riverside House, Southwark Bridge Road, London SE1 9HA", lat: 51.5074, lng: -0.0963 },
                { address: "Atrium Kitchen, Upper Level, Cabot Place, London E14 4QT", lat: 51.5050, lng: -0.0203 },
                { address: "Greenwich Promenade (Pier), Cutty Sark Gardens, London SE10 9HT", lat: 51.4828, lng: -0.0101 },
                { address: "Unit Su46, One New Change, London EC4M 9AF", lat: 51.5142, lng: -0.0957 },
                { address: "12 Ivory Street, St Katharine's Dock, London E1W 1AT", lat: 51.5076, lng: -0.0716 },
                { address: "Plaza Level West, Tower Place, London EC3R 5BU", lat: 51.5095, lng: -0.0792 },
                { address: "15 Cardinal Walk, Victoria, London SW1E 5JE", lat: 51.4962, lng: -0.1415 },
                { address: "London Designer Outlet, Wembley, HA9 0FD", lat: 51.5573, lng: -0.2798 },
                { address: "313 The Loft, The Gallery, Westfield Stratford City, London E20 1ET", lat: 51.5453, lng: -0.0076 },
                { address: "Westfield White City, London W12 7GB", lat: 51.5075, lng: -0.2217 },
                { address: "4 Kings Street, Richmond, London TW9 1ND", lat: 51.4616, lng: -0.3060 },
                { address: "1 High Street, Banstead, London SM7 2NE", lat: 51.3225, lng: -0.2023 },
                { address: "157 High Street, Beckenham, London BR3 1AE", lat: 51.4087, lng: -0.0248 },
                { address: "11 Widmore Road, Bromley, London BR1 1RL", lat: 51.4042, lng: 0.0152 },
                { address: "235 Chiswick High Road, London W4 4PU", lat: 51.4937, lng: -0.2625 },
                { address: "1 Bridge Road, East Molesey (surrounding Londres) KT8 9EU", lat: 51.4014, lng: -0.3423 },
                { address: "41 Station Lane, Hornchurch, London RM12 6JT", lat: 51.5598, lng: 0.2202 },
                { address: "43 Market Place, Kingston, London KT1 1ET", lat: 51.4093, lng: -0.3052 },
                { address: "Tilly’s Lane, Two Rivers, Staines‑upon‑Thames TW18 4BL", lat: 51.4357, lng: -0.5132 },
                { address: "13 High Street, Sutton, London SM1 1DF", lat: 51.3615, lng: -0.1932 }
            ],
            cuisine: "Italiano",
            safety: { text: "Acreditada pela Coeliac UK, com protocolos específicos.", level: "accredited" },
            price: "££",
            recommendation: "Torna a pizza, um prato de alto risco, acessível e seguro para celíacos em toda a cidade.",
            mustTry: "Pizza em base sem glúten",
            link: "https://www.google.com.br/maps/place/Zizzi+-+Bow+Street+(Covent+Garden)/@51.513713,-0.1226246,17z/data=!4m7!3m6!1s0x487604cb5d5bed29:0xc9c54afcf9982fa7!8m2!3d51.513713!4d-0.1226246!10e9!16s%2Fg%2F1wc47fsl?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Prezzo",
            addresses: [
                { address: "116 Saint Martin’s Lane, London, WC2N 4BD", lat: 51.5112, lng: -0.1278 },
                { address: "31–32 Northumberland Avenue, London, WC2N 5BW", lat: 51.5074879, lng: -0.1265314 },
                { address: "35A Kensington High Street, London, W8 5BA", lat: 51.5011, lng: -0.1912 },
                { address: "163 Euston Road, London, NW1 2BH", lat: 51.5262, lng: -0.1332 },
                { address: "Unit M4, Mezzanine Level, King’s Cross Station, London, N1C 4AH", lat: 51.5318, lng: -0.1237 },
                { address: "36 Glasshouse St, London, W1B 5DL", lat: 51.5104, lng: -0.1362 },
                { address: "115 Buckingham Palace Rd, London, SW1W 9SJ", lat: 51.4947, lng: -0.1458 }
            ],
            cuisine: "Italiano",
            safety: { text: "Oferece opções acreditadas pela Coeliac UK.", level: "accredited" },
            price: "££",
            recommendation: "Outra cadeia fiável para comida italiana segura.",
            mustTry: "Pratos do menu sem glúten acreditado",
            link: "https://www.google.com.br/maps/place/Prezzo+Italian+Restaurant+London+Northumberland+Avenue/@51.5074879,-0.1265314,17z/data=!4m7!3m6!1s0x487604ce9589fd65:0x707c90920ef1cdbf!8m2!3d51.5074879!4d-0.1265314!10e9!16s%2Fg%2F1tfbsc4y?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Sambal Shiok",
            addresses: [{ address: "171 Holloway Rd, London N7 8LX, Reino Unido", lat: 51.5498748, lng: -0.1089933 }],
            cuisine: "Asiático",
            safety: { text: "Oferece caldo perfumado e noodles sem glúten.", level: "accredited" },
            price: "££",
            recommendation: "Proporciona uma refeição reconfortante e segura para os amantes de sabores asiáticos.",
            mustTry: "Laksa com noodles sem glúten",
            link: "https://www.google.com.br/maps/place/Sambal+Shiok+Laksa+Bar/@51.5498748,-0.1115682,17z/data=!4m7!3m6!1s0x48761b711ce8e899:0x3b4222b556517968!8m2!3d51.5498748!4d-0.1089933!10e9!16s%2Fg%2F11hcyvds5h?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Wicked Fish",
            addresses: [{ address: "2b Lamb St, London E1 6ED, Reino Unido", lat: 51.5203364, lng: -0.0766339 }],
            cuisine: "Fish & Chips",
            safety: { text: "Localização totalmente dedicada a ser 100% isenta de glúten.", level: "safe" },
            price: "££",
            recommendation: "O auge da segurança para quem anseia por fish and chips. A escolha ideal para o cliente mais ansioso.",
            mustTry: "Fish & chips",
            link: "https://www.google.com.br/maps/place/Wicked+Fish+Spitalfields/@51.5203364,-0.0766339,17z/data=!4m7!3m6!1s0x48761d1bcad85253:0x18bab1476010c9cb!8m2!3d51.5203364!4d-0.0766339!10e9!16s%2Fg%2F11kp_1dj4h?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        }
    ],
    oxford: [
        {
            name: "Bbuona",
            addresses: [{ address: "102 Gloucester Grn, Oxford OX1 2DF, Reino Unido", lat: 51.7543119, lng: -1.2612759 }],
            cuisine: "Italiano",
            safety: { text: "A 'pinsa' sem glúten é cozinhada num forno separado.", level: "accredited" },
            price: "££",
            recommendation: "Uma excelente opção central para um almoço ou jantar casual e seguro, oferecendo uma alternativa autêntica à pizza tradicional.",
            mustTry: "Pinsa com base sem glúten",
            link: "https://www.google.com.br/maps/place/Bbuona/@51.7536402,-1.2868893,13.61z/data=!4m7!3m6!1s0x4876c6a5b6a8346d:0xf456a66af15f0e72!8m2!3d51.7543119!4d-1.2612759!10e9!16s%2Fg%2F11bwhb07gh?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Browns Oxford",
            addresses: [{ address: "5-11 Woodstock Rd, Oxford OX2 6HA, Reino Unido", lat: 51.7590727, lng: -1.2610921 }],
            cuisine: "Britânico",
            safety: { text: "Acreditado pela Coeliac UK com menus dedicados e extensos.", level: "accredited" },
            price: "£££",
            recommendation: "A escolha ideal para uma refeição mais formal ou uma ocasião especial, com a confiança da acreditação oficial.",
            mustTry: "Pratos do menu sem glúten, como bifes e peixe fresco",
            link: "https://www.google.com.br/maps/place/Browns+Oxford/@51.7590727,-1.263667,17z/data=!4m7!3m6!1s0x4876c6a7a7c08089:0x2222530b009e6bb1!8m2!3d51.7590727!4d-1.2610921!10e9!16s%2Fg%2F1ym82r4dl?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "The Coconut Tree",
            addresses: [{ address: "76 St Clement's St, Oxford OX4 1AH, Reino Unido", lat: 51.750992, lng: -1.2387484 }],
            cuisine: "Asiático",
            safety: { text: "Quase todo o menu é isento de glúten por natureza.", level: "accredited" },
            price: "££",
            recommendation: "A escolha perfeita para quem procura sabores vibrantes e exóticos num ambiente descontraído.",
            mustTry: "Hoppers (panquecas de coco), caris, pratos 'Devilled'",
            link: "https://www.google.com.br/maps/place/The+Coconut+Tree+Oxford/@51.750992,-1.2387484,17z/data=!4m7!3m6!1s0x4876c151e143b12b:0x4ec2a4f39816d0ed!8m2!3d51.750992!4d-1.2387484!10e9!16s%2Fg%2F11gdrnm9bd?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "La Smorfia",
            addresses: [{ address: "247 Cowley Rd, Oxford OX4 1XG, Reino Unido", lat: 51.7453539, lng: -1.2300644 }],
            cuisine: "Italiano",
            safety: { text: "Possui uma cozinha dedicada e separada exclusivamente para pratos sem glúten.", level: "safe" },
            price: "££",
            recommendation: "A principal recomendação para o viajante celíaco mais apreensivo. A paz de espírito proporcionada pela sua cozinha dedicada é inigualável.",
            mustTry: "Pizza, massa, Tiramisù, brownies (tudo sem glúten)",
            link: "https://www.google.com.br/maps/place/La+Smorfia+Oxford/@51.7453539,-1.2300644,17z/data=!4m7!3m6!1s0x4876c10fef55d09f:0xb75e1299b8274e7e!8m2!3d51.7453539!4d-1.2300644!10e9!16s%2Fg%2F11q8y8jnhz?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Organic Deli Cafe",
            addresses: [{ address: "24 Friars Entry, Oxford OX1 2BY, Reino Unido", lat: 51.7544306, lng: -1.2602506 }],
            cuisine: "Padaria / Café",
            safety: { text: "Equipa excecionalmente bem informada; a maioria dos produtos é ou pode ser feita sem glúten.", level: "accredited" },
            price: "£",
            recommendation: "O ponto de partida ideal para o dia, com uma refeição segura, acessível e saudável antes de iniciar a exploração turística.",
            mustTry: "Bolos e pastelaria (quase todos GF), sanduíches em pão caseiro sem glúten",
            link: "https://www.google.com.br/maps/place/Organic+Deli+Cafe+%26+Catering/@51.7544306,-1.2628255,17z/data=!4m7!3m6!1s0x4876c6a5c779a14d:0x1bbfa2f7e77e2ff7!8m2!3d51.7544306!4d-1.2602506!10e9!16s%2Fg%2F1tncsd9s?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Pho",
            addresses: [{ address: "305 The Westgate, Queen St, Oxford OX1 1PG, Reino Unido", lat: 51.7490457, lng: -1.2614439 }],
            cuisine: "Asiático",
            safety: { text: "Acreditado pela Coeliac UK; 98% do menu é naturalmente isento de glúten.", level: "accredited" },
            price: "££",
            recommendation: "A escolha perfeita para um almoço ou jantar conveniente, rápido, delicioso e oficialmente credenciado no centro da cidade.",
            mustTry: "Sopa Phở e outras especialidades vietnamitas",
            link: "https://www.google.com.br/maps/place/Pho+Oxford/@51.7490457,-1.2614439,17z/data=!4m7!3m6!1s0x4876c6a55dda2bb1:0x7e1049a85508a490!8m2!3d51.7490457!4d-1.2614439!10e9!16s%2Fg%2F11f1pb28tw?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "The White Rabbit",
            addresses: [{ address: "21 Friars Entry, Oxford OX1 2BY, Reino Unido", lat: 51.7544476, lng: -1.2607207 }],
            cuisine: "Pub",
            safety: { text: "Utiliza um forno separado para a confeção de pizzas sem glúten.", level: "accredited" },
            price: "££",
            recommendation: "Uma verdadeira instituição em Oxford, famosa pelas suas premiadas pizzas sem glúten e uma das opções mais seguras da cidade para os amantes de pizza.",
            mustTry: "Qualquer pizza da ementa em base sem glúten",
            link: "https://www.google.com.br/maps/place/The+White+Rabbit/@51.7544476,-1.2632956,17z/data=!4m7!3m6!1s0x4876c6af823e8251:0xec5c61f5d31b0dca!8m2!3d51.7544476!4d-1.2607207!10e9!16s%2Fg%2F11_s78_f5?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        }
    ],
    paris: [
        {
            name: "Breizh Café",
            addresses: [
                { address: "1 Rue de l’Odéon, 75006 Paris", lat: 48.8524, lng: 2.3395 },
                { address: "109 Rue Vieille du Temple, 75003 Paris", lat: 48.8606206, lng: 2.3618066 },
                { address: "14 Rue des Petits Carreaux, 75002 Paris", lat: 48.8681, lng: 2.3468 },
                { address: "93 Rue des Martyrs, 75018 Paris", lat: 48.8837, lng: 2.3418 },
                { address: "4 Impasse des Carrières, 75016 Paris", lat: 48.8596, lng: 2.2789 },
                { address: "112 Quai de Jemmapes, 75010 Paris", lat: 48.8722, lng: 2.3653 },
                { address: "23 Rue Paul Bert, 75011 Paris", lat: 48.8517, lng: 2.3895 },
                { address: "3 Place Charles Michels, 75015 Paris", lat: 48.8480, lng: 2.2858 },
                { address: "31 Rue des Batignolles, 75017 Paris", lat: 48.8856, lng: 2.3228 },
                { address: "111 Rue Vieille du Temple, 75003 Paris", lat: 48.8609, lng: 2.3621 }
            ],
            cuisine: "Crêperie",
            safety: { text: "Utiliza farinha de trigo sarraceno certificada sem glúten. É imperativo verificar pessoalmente se usam chapas e utensílios separados.", level: "caution" },
            price: "€€€",
            recommendation: "O candidato mais provável para uma galette segura, mas a verificação dos protocolos de contaminação cruzada é essencial.",
            mustTry: "Galettes de trigo sarraceno",
            link: "https://www.google.com.br/maps/place/Breizh+Caf%C3%A9/@48.8606206,2.3618066,17z/data=!4m7!3m6!1s0x47e66e0156712d97:0x26035d0c3486bba2!8m2!3d48.8606206!4d2.3618066!10e9!16s%2Fg%2F1tglm6bn?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Café Mareva",
            addresses: [{ address: "27 Rue de Clignancourt, 75018 Paris, França", lat: 48.885559, lng: 2.3471914 }],
            cuisine: "Padaria / Café",
            safety: { text: "Menu totalmente sem glúten e sem lactose.", level: "safe" },
            price: "€€",
            recommendation: "O local perfeito para um brunch seguro e satisfatório em Montmartre.",
            mustTry: "Waffle 'Classic Avocado' com bacon, waffles de batata-doce",
            link: "https://www.google.com.br/maps/place/Caf%C3%A9+Mareva/@48.885559,2.3471914,17z/data=!4m7!3m6!1s0x47e66f441ec5fc9f:0x7aa0677fe82002b2!8m2!3d48.885559!4d2.3471914!10e9!16s%2Fg%2F11t5bc5fkr?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Caramel Sarrasin",
            addresses: [{ address: "47 Rue du Faubourg Montmartre, 75009 Paris, França", lat: 48.8746888, lng: 2.3412773 }],
            cuisine: "Crêperie",
            safety: { text: "Aparece em guias sem glúten, mas a mesma advertência rigorosa de verificar os protocolos de contaminação cruzada se aplica.", level: "caution" },
            price: "N/A",
            recommendation: "Investigar com cautela.",
            mustTry: "Não especificados",
            link: "https://www.google.com.br/maps/place/Caramel+Sarrasin/@48.8746888,2.3387024,17z/data=!4m7!3m6!1s0x47e66e3f3b0a1345:0x8bb803b755e11b3d!8m2!3d48.8746888!4d2.3412773!10e9!16s%2Fg%2F1hc4yj9xy?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Chambelland",
            addresses: [
                { address: "43 Rue Brochant, 75017 Paris, França", lat: 48.8903767, lng: 2.3195918 },
                { address: "14 Rue Ternaux, 75011 Paris, França", lat: 48.8640, lng: 2.3712 }
            ],
            cuisine: "Padaria / Café",
            safety: { text: "100% sem glúten, com moinho de farinha próprio.", level: "safe" },
            price: "€€",
            recommendation: "A padaria artesanal fundamental da cena sem glúten parisiense, ideal para um pequeno-almoço ou almoço tranquilo.",
            mustTry: "Le pain du village, pains de sucre (chocolate e laranja), éclairs",
            link: "https://www.google.com.br/maps/place/Chambelland/@48.8903767,2.3195918,17z/data=!4m7!3m6!1s0x47e66f60052f702d:0x6d8e90727a9d50e8!8m2!3d48.8903767!4d2.3195918!10e9!16s%2Fg%2F11jz1_yc87?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Cococo",
            addresses: [{ address: "35 Rue Coquillière, 75001 Paris, França", lat: 48.8643242, lng: 2.3410183 }],
            cuisine: "Asiático",
            safety: { text: "100% sem glúten, sem lactose e sem açúcar refinado.", level: "safe" },
            price: "€€€",
            recommendation: "Um local único para uma requintada e segura experiência de almoço perto do Louvre.",
            mustTry: "Bento com caril de carne japonês, karaage (frango frito)",
            link: "https://www.google.com.br/maps/place/Cococo/@48.8643242,2.3384434,17z/data=!4m7!3m6!1s0x47e66e230d1e128b:0xf25f1cf484ec8ffe!8m2!3d48.8643242!4d2.3410183!10e9!16s%2Fg%2F11dx8h8g_h?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Copains",
            addresses: [
                { address: "60 Rue Tiquetonne, 75002 Paris", lat: 48.8648592, lng: 2.3459945 },
                { address: "29 Rue des Blancs‑Manteaux, 75004 Paris", lat: 48.8591, lng: 2.3562 },
                { address: "8 Rue des Abbesses, 75018 Paris", lat: 48.8851, lng: 2.3385 },
                { address: "62 Rue Montorgueil, 75002 Paris", lat: 48.8659, lng: 2.3475 },
                { address: "68 Rue des Saints‑Pères, 75006 Paris", lat: 48.8541, lng: 2.3308 },
                { address: "9 Avenue de l’Opéra, 75001 Paris", lat: 48.8659, lng: 2.3340 },
                { address: "26 Rue Linois, 75015 Paris", lat: 48.8496, lng: 2.2820 },
                { address: "90 Avenue Victor Hugo, 75016 Paris", lat: 48.8710, lng: 2.2861 },
                { address: "61 Rue Legendre, 75017 Paris", lat: 48.8872, lng: 2.3168 }
            ],
            cuisine: "Padaria / Café",
            safety: { text: "Numerosas localizações 100% sem glúten.", level: "safe" },
            price: "€€",
            recommendation: "A face omnipresente e moderna da Paris sem glúten, perfeita para uma pastelaria divinal ou um almoço para levar.",
            mustTry: "Paris Brest, pastelarias com creme de pistácio, baguetes recheadas",
            link: "https://www.google.com.br/maps/place/Copains/@48.8648592,2.3459945,17z/data=!4m7!3m6!1s0x47e66fce96f5598f:0x5b32db129c86f2e7!8m2!3d48.8648592!4d2.3459945!10e9!16s%2Fg%2F11pdp36bx4?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "La Crème de Paris",
            addresses: [
                { address: "4 Rue du Faubourg Montmartre, 75009 Paris, França", lat: 48.8727, lng: 2.3421 },
                { address: "1 Quai Saint-Michel, 75005 Paris, França", lat: 48.8530548, lng: 2.3465361 }
            ],
            cuisine: "Crêperie",
            safety: { text: "Indica que todos os waffles são sem glúten, mas a verificação de contaminação cruzada é essencial.", level: "caution" },
            price: "€€",
            recommendation: "Os waffles podem representar uma alternativa mais segura aos crêpes, mas a verificação é crucial.",
            mustTry: "Waffles salgados e doces",
            link: "https://www.google.com.br/maps/place/La+Cr%C3%A8me+de+Paris+Notre-Dame/@48.8530548,2.3465361,17z/data=!4m7!3m6!1s0x47e67174e621c19d:0x65e3fbee06606ec8!8m2!3d48.8530548!4d2.3465361!10e9!16s%2Fg%2F11jrp7vyg1?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Grom",
            addresses: [{ address: "81 Rue de Seine, 75006 Paris, França", lat: 48.8533728, lng: 2.3371026 }],
            cuisine: "Gelataria",
            safety: { text: "100% sem glúten, incluindo os cones.", level: "safe" },
            price: "€€",
            recommendation: "Uma paragem inegociável para um doce gelado seguro e delicioso.",
            mustTry: "Gelato de pistácio e avelã num cone sem glúten",
            link: "https://www.google.com.br/maps/place/Grom+Gelato/@48.8533728,2.3371026,17z/data=!4m7!3m6!1s0x47e671d91817a567:0xc31d062868dc3b74!8m2!3d48.8533728!4d2.3371026!10e9!16s%2Fg%2F1tczpp62?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Judy, Cantine Qualitarienne",
            addresses: [
                { address: "14 Rue Jean-Jacques Rousseau, 75001 Paris, França", lat: 48.862383, lng: 2.3405099 },
                { address: "18 Rue de Fleurus, 75006 Paris, França", lat: 48.8471, lng: 2.3290 }
            ],
            cuisine: "Padaria / Café",
            safety: { text: "Café 100% sem glúten.", level: "safe" },
            price: "€€",
            recommendation: "Uma excelente escolha para um pequeno-almoço ou almoço nutritivo e seguro em localizações turísticas chave.",
            mustTry: "Panquecas paleo, rabanada de pão de banana, buddha bowls",
            link: "https://www.google.com.br/maps/place/Judy,+cantine+et+coffee-shop+qualitariens+-+Rousseau/@48.862383,2.3405099,17z/data=!4m7!3m6!1s0x47e66ffe18774f35:0x98d827c4c838f529!8m2!3d48.862383!4d2.3405099!10e9!16s%2Fg%2F11sw19d1wb?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Kapunka",
            addresses: [{ address: "51 Rue Saint-Sauveur, 75002 Paris, França", lat: 48.866174, lng: 2.347699 }],
            cuisine: "Asiático",
            safety: { text: "Menu completamente sem glúten.", level: "safe" },
            price: "€€",
            recommendation: "Uma opção fantástica para um jantar saboroso e seguro com cozinha tailandesa vibrante.",
            mustTry: "Khao-Soy (caril vermelho com noodles), Pad Thai",
            link: "https://www.google.com.br/maps/place/KAPUNKA+Cantine+Tha%C3%AF+-+Montorgueil/@48.866174,2.347699,17z/data=!4m7!3m6!1s0x47e66e1829dea56b:0x9f5468b205dd086e!8m2!3d48.866174!4d2.347699!10e9!16s%2Fg%2F11b6nn5cmy?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Ladurée / Pierre Hermé",
            addresses: [{ address: "75 Av. des Champs-Élysées, 75008 Paris, França", lat: 48.870839, lng: 2.30319 }],
            cuisine: "Padaria / Café",
            safety: { text: "Os macarons são naturalmente isentos de glúten, mas são produzidos em ambiente misto com baixo risco de contaminação cruzada.", level: "caution" },
            price: "€€€",
            recommendation: "Oferece uma experiência parisiense clássica. Os clientes celíacos devem estar cientes do ambiente misto para tomar uma decisão informada.",
            mustTry: "Macarons de assinatura",
            link: "https://www.google.com.br/maps/place/Ladur%C3%A9e/@48.870839,2.30319,17z/data=!3m1!5s0x47e66fc249cd9277:0xc29afbcb63be1c58!4m7!3m6!1s0x47e66fc249be485d:0x2be3a396c8fd4569!8m2!3d48.870839!4d2.30319!10e9!16s%2Fg%2F1tj456d_?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "La Manufacture du Sans Gluten",
            addresses: [{ address: "2 Rue Androuet, 75018 Paris, França", lat: 48.8855741, lng: 2.3386361 }],
            cuisine: "Padaria / Café",
            safety: { text: "Padaria 100% sem glúten.", level: "safe" },
            price: "€€€",
            recommendation: "Elogiada por produzir os melhores croissants e pains au chocolat sem glúten de Paris. Uma visita obrigatória em Montmartre.",
            mustTry: "Croissants e pains au chocolat",
            link: "https://www.google.com.br/maps/place/La+Manufacture+du+Sans+Gluten/@48.8855741,2.3360612,17z/data=!4m7!3m6!1s0x47e66f18f8e3f6fd:0x42491b9f333a3629!8m2!3d48.8855741!4d2.3386361!10e9!16s%2Fg%2F11sdfy7j75?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Little Nonna",
            addresses: [{ address: "12 Av. Niel, 75017 Paris, França", lat: 48.879706, lng: 2.2949484 }],
            cuisine: "Italiano",
            safety: { text: "100% sem glúten, com forno a lenha.", level: "safe" },
            price: "€€",
            recommendation: "Amplamente considerado o principal destino para comida italiana autêntica e 100% sem glúten, especialmente pizza ao estilo napolitano.",
            mustTry: "Pizza Diavolo, Tiramisu",
            link: "https://www.google.com.br/maps/place/Little+Nonna/@48.879706,2.2923735,17z/data=!4m7!3m6!1s0x47e66f9376d55741:0xe70b746f433ba6ce!8m2!3d48.879706!4d2.2949484!10e9!16s%2Fg%2F11gd0zrjs_?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Maison Plume",
            addresses: [{ address: "61 Rue Charlot, 75003 Paris, França", lat: 48.8637665, lng: 2.3633781 }],
            cuisine: "Padaria / Café",
            safety: { text: "100% sem glúten e sem açúcar.", level: "safe" },
            price: "€€€",
            recommendation: "Uma pâtisserie única que oferece uma indulgência visualmente deslumbrante e sem culpa.",
            mustTry: "Pastelarias 'Plume' (especialmente a de Baunilha e Groselha Negra)",
            link: "https://www.google.com.br/maps/place/Maison+Plume/@48.8637665,2.3633781,17z/data=!4m7!3m6!1s0x47e66f59880feacf:0xff61eab70e47bb54!8m2!3d48.8637665!4d2.3633781!10e9!16s%2Fg%2F11fjzc6vkk?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Noglu",
            addresses: [
                { address: "15 Rue Basfroi, 75011 Paris, França", lat: 48.8544251, lng: 2.3796045 },
                { address: "69 Rue de Grenelle, 75007 Paris, França", lat: 48.8550, lng: 2.3245 }
            ],
            cuisine: "Padaria / Café",
            safety: { text: "Estabelecimento 100% sem glúten.", level: "safe" },
            price: "€€",
            recommendation: "Um dos estabelecimentos pioneiros que oferece uma experiência completa, desde padaria a refeições sentadas.",
            mustTry: "Pain au chocolat super folhado, mini-baguetes, sanduíche quente de ovo e bacon",
            link: "https://www.google.com.br/maps/place/Noglu/@48.8544251,2.3796045,17z/data=!4m7!3m6!1s0x47e673f183722879:0xf0ab2886489154a1!8m2!3d48.8544251!4d2.3796045!10e9!16s%2Fg%2F1hg4xps9x?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "RizRiz",
            addresses: [{ address: "221 Rue Saint-Martin, 75003 Paris, França", lat: 48.8642661, lng: 2.3528279 }],
            cuisine: "Asiático",
            safety: { text: "Estabelecimento 100% sem glúten.", level: "safe" },
            price: "€€",
            recommendation: "Uma excelente opção para quem procura uma refeição segura, vegan e com sabores asiáticos.",
            mustTry: "Pratos de fusão asiática",
            link: "https://www.google.com.br/maps/place/Riz+Riz+Marais/@48.8642661,2.3528279,17z/data=!4m7!3m6!1s0x47e66e1a454e5555:0xfcbf001ad47ea39!8m2!3d48.8642661!4d2.3528279!10e9!16s%2Fg%2F11c6rhrpkt?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Tasca",
            addresses: [{ address: "46 Av. de Suffren, 75015 Paris, França", lat: 48.8537008, lng: 2.2966014 }],
            cuisine: "Italiano",
            safety: { text: "Restaurante totalmente sem glúten.", level: "safe" },
            price: "€€€",
            recommendation: "Uma opção logisticamente perfeita e segura para uma refeição italiana completa a poucos passos da Torre Eiffel.",
            mustTry: "Raviólis de abóbora, pizza de vegetais, Tiramisu",
            link: "https://www.google.com.br/maps/place/Tasca/@48.8537008,2.2966014,17z/data=!4m7!3m6!1s0x47e6719bef8d3e2b:0x246061e1ddbefe2c!8m2!3d48.8537008!4d2.2966014!10e9!16s%2Fg%2F11g21x0z45?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        }
    ]
};
