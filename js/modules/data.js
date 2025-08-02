// js/modules/data.js

/**
 * @file Contém todos os dados estáticos da aplicação, como custos e informações do podcast.
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

// --- DADOS DOS RESTAURANTES ---
export const restaurantData = {
    londres: [
        {
            name: "Niche Gluten-Free Dining",
            address: "197-199 Rosebery Avenue, London, EC1R 4 TJ.",
            cuisine: "Britânica/Europeia Moderna.",
            safety: { text: "100% livre de glúten e acreditado pela Coeliac UK.", level: "safe" },
            price: "££ (Gama média).",
            recommendation: "Uma instituição e um marco para a comunidade celíaca, com um nível de confiança e autenticidade difícil de igualar.",
            mustTry: "Tartes, frango frito, pudins clássicos britânicos."
        },
        {
            name: "Indigo at One Aldwych",
            address: "One Aldwych, London, WC2B 4BZ.",
            cuisine: "Fine Dining Britânico.",
            safety: { text: "Cozinha 100% isenta de glúten e laticínios, e acreditada pela Coeliac UK.", level: "safe" },
            price: "££££ (Luxo).",
            recommendation: "A escolha de eleição para uma refeição de celebração ou uma experiência gastronómica de luxo, oferecendo uma paz de espírito inigualável.",
            mustTry: "Fish and chips, chá da tarde completo, menus de degustação."
        },
        {
            name: "Los Mochis",
            address: "Notting Hill (2-4 Farmer Street, W8 7SN) e Liverpool Street (9th Floor, 100 Liverpool Street, EC2M 2AT).",
            cuisine: "Fusão Mexicano-Japonesa.",
            safety: { text: "Menu 100% isento de glúten, nozes e aipo.", level: "safe" },
            price: "££££ (Luxo).",
            recommendation: "Representa o auge da criatividade, luxo e segurança na gastronomia sem glúten.",
            mustTry: "Tacos, maki rolls, ceviches, experiência omakase (Juno)."
        },
        {
            name: "Paladar",
            address: "4-5 London Road, London, SE1 6JZ.",
            cuisine: "Latino-Americana.",
            safety: { text: "Menu totalmente 100% isento de glúten.", level: "safe" },
            price: "£££ (Média-alta).",
            recommendation: "Torna a rica culinária de um continente inteiro totalmente acessível e segura para celíacos.",
            mustTry: "Pratos de partilha, churros."
        },
        {
            name: "Wicked Fish",
            address: "Spitalfields Market.",
            cuisine: "Fish & Chips.",
            safety: { text: "Localização totalmente dedicada a ser 100% isenta de glúten.", level: "safe" },
            price: "££ (Casual).",
            recommendation: "O auge da segurança para quem anseia por fish and chips. A escolha ideal para o cliente mais ansioso.",
            mustTry: "Fish & chips."
        },
        {
            name: "The Free From Bakehouse",
            address: "Borough Market, 8 Southwark Street, SE1 1TL.",
            cuisine: "Banca de Mercado (Bolos).",
            safety: { text: "Produtor 100% isento de glúten e trigo.", level: "safe" },
            price: "££ (Média).",
            recommendation: "Um pilar da cena sem glúten no mercado de alimentos mais famoso de Londres.",
            mustTry: "Vasta gama de bolos, fatias e bolachas."
        },
        {
            name: "CreamDream",
            address: "Covent Garden.",
            cuisine: "Padaria/Café Ucraniana.",
            safety: { text: "Padaria e café 100% sem glúten.", level: "safe" },
            price: "££ (Média).",
            recommendation: "Adiciona um toque cultural distinto à cena de padarias sem glúten de Londres. Uma paragem fácil e deliciosa.",
            mustTry: "Pastelaria única e bebidas de café."
        },
        {
            name: "Dendara",
            address: "Kensington.",
            cuisine: "Padaria/Café de alimentos integrais.",
            safety: { text: "100% isento de glúten e laticínios.", level: "safe" },
            price: "£££ (Premium/Cara).",
            recommendation: "Preenche uma lacuna importante no mercado, destacando-se na pastelaria salgada sem glúten.",
            mustTry: "Pastilla de frango e tâmaras, quiches, fatias de bolo."
        },
        {
            name: "Guasa London",
            address: "Shoreditch Boxpark.",
            cuisine: "Banca de Mercado (Arepas).",
            safety: { text: "Banca totalmente sem glúten.", level: "safe" },
            price: "££ (Média).",
            recommendation: "Um exemplo perfeito de como a comida de rua naturalmente sem glúten pode ser celebrada.",
            mustTry: "Arepas de pão de milho recheadas."
        },
        {
            name: "La Pepia",
            address: "Borough Market.",
            cuisine: "Banca de Mercado (Arepas).",
            safety: { text: "Banca totalmente sem glúten.", level: "safe" },
            price: "££ (Média).",
            recommendation: "Torna o Borough Market um destino-chave para qualquer visitante celíaco.",
            mustTry: "Pães de milho quentes e recheados."
        },
        {
            name: "Libby's Gluten Free Bakery",
            address: "Notting Hill (61 Ledbury Road, W11 2AA) e Belsize Park.",
            cuisine: "Padaria/Café.",
            safety: { text: "Padaria familiar 100% isenta de glúten.", level: "safe" },
            price: "££-£££ (Cara).",
            recommendation: "Uma padaria dedicada, fiável e bem conceituada, numa localização conveniente e pitoresca.",
            mustTry: "Variedade de produtos doces e salgados, incluindo bolos e pastelaria."
        },
        {
            name: "MaMa Boutique Gluten Free Bakery",
            address: "30 Chiswick High Road, W4 1TE.",
            cuisine: "Padaria Artesanal.",
            safety: { text: "Padaria 100% sem glúten.", level: "safe" },
            price: "££ (Média).",
            recommendation: "Um destino para pão sem glúten de alta qualidade, um produto notoriamente difícil de aperfeiçoar.",
            mustTry: "Pães de fermentação natural, bolos e pastelaria."
        },
        {
            name: "MannaDew",
            address: "171 Battersea High St, SW11 3JS.",
            cuisine: "Padaria/Pastelaria Francesa.",
            safety: { text: "100% sem glúten, com produtos testados em laboratório para <5ppm de glúten.", level: "safe" },
            price: "£££ (Premium).",
            recommendation: "Estabelece um novo padrão para a panificação sem glúten, elevando a experiência a uma verdadeira iguaria.",
            mustTry: "Croissants, pains au chocolat."
        },
        {
            name: "Cotto",
            address: "89 Westminster Bridge Road, SE1 7HR.",
            cuisine: "Italiano / Pizza.",
            safety: { text: "Opera com duas cozinhas completamente separadas, uma 100% dedicada ao sem glúten. O proprietário é celíaco.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "A principal recomendação para pizza segura em Londres. A cozinha separada oferece o nível mais alto de segurança num ambiente misto.",
            mustTry: "Pizza, massa e sobremesas sem glúten."
        },
        {
            name: "Honest Burgers",
            address: "Várias localizações.",
            cuisine: "Hamburgueria.",
            safety: { text: "Fritadeiras dedicadas para batatas fritas e anéis de cebola, tornando todos os acompanhamentos fritos seguros.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Um favorito da comunidade. A capacidade de desfrutar de uma refeição completa de hambúrguer com acompanhamentos fritos seguros é uma experiência rara.",
            mustTry: "Hambúrguer em pão sem glúten, batatas fritas com sal de alecrim, anéis de cebola."
        },
        {
            name: "Pho",
            address: "Várias localizações.",
            cuisine: "Comida de rua vietnamita.",
            safety: { text: "Acreditado pela Coeliac UK; o menu é ~98% isento de glúten por natureza.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma das opções de cadeia de restaurantes mais seguras e amplamente disponíveis, oferecendo pratos saborosos e saudáveis com risco mínimo.",
            mustTry: "Sopa Phở, a maioria dos pratos do menu."
        },
        {
            name: "Côte Brasserie",
            address: "Várias localizações.",
            cuisine: "Brasserie Francesa.",
            safety: { text: "Acreditada pela Coeliac UK, com menu dedicado e identificação visual para pratos GF.", level: "accredited" },
            price: "££-£££ (Média-alta).",
            recommendation: "Uma escolha fiável e sofisticada para uma refeição sentada, com a garantia de segurança da acreditação.",
            mustTry: "Menu sem glúten dedicado."
        },
        {
            name: "Olley's Fish Experience",
            address: "65-69 Norwood Rd, Herne Hill, SE24 9AA.",
            cuisine: "Fish & Chips.",
            safety: { text: "Acreditado pela Coeliac UK, com processos rigorosamente auditados.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Um destino de eleição para uma das melhores e mais seguras experiências de fish and chips em Londres.",
            mustTry: "Fish & chips sem glúten."
        },
        {
            name: "Pizza Express & Zizzi",
            address: "Várias localizações.",
            cuisine: "Italiano / Pizza.",
            safety: { text: "Ambas acreditadas pela Coeliac UK, com protocolos específicos.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Tornam a pizza, um prato de alto risco, acessível e seguro para celíacos em toda a cidade.",
            mustTry: "Pizza em base sem glúten."
        },
        {
            name: "Brigit's Bakery",
            address: "Covent Garden (e passeios de autocarro).",
            cuisine: "Chá da Tarde / Padaria.",
            safety: { text: "Oferece chá da tarde sem glúten com protocolos bem estabelecidos.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Uma alternativa divertida para um chá da tarde, com opções seguras e certificação Halal.",
            mustTry: "Chá da tarde completo sem glúten."
        },
        {
            name: "Brockley's Rock",
            address: "Sul de Londres.",
            cuisine: "Fish & Chips.",
            safety: { text: "Utiliza panela, utensílios e armazenamento dedicados para alimentos sem glúten.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Fortes processos internos para minimizar o risco de contaminação.",
            mustTry: "Fish & chips sem glúten."
        },
        {
            name: "Dishoom",
            address: "Várias localizações.",
            cuisine: "Indiana.",
            safety: { text: "Consistentemente elogiado pela comunidade celíaca pelo seu pessoal conhecedor e menus de alergénios claros.", level: "accredited" },
            price: "££-£££ (Média-alta).",
            recommendation: "Uma excelente escolha para comida indiana, com uma vasta gama de opções sem glúten e uma equipa bem informada.",
            mustTry: "Pratos do menu de alergénios sem glúten."
        },
        {
            name: "Domino's",
            address: "Várias localizações (Delivery).",
            cuisine: "Pizza.",
            safety: { text: "Acreditada pela Coeliac UK.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "A primeira cadeia de entrega a obter acreditação, tornando a pizza de entrega uma opção segura.",
            mustTry: "Pizzas sem glúten retangulares."
        },
        {
            name: "El Pollote",
            address: "13 Ganton Street, Carnaby, W1F 9BL.",
            cuisine: "Frango Frito Latino.",
            safety: { text: "Menu quase inteiramente sem glúten com processos amigáveis para celíacos.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma paragem vibrante e saborosa no coração de Soho.",
            mustTry: "Frango frito latino."
        },
        {
            name: "Fortnum & Mason",
            address: "Piccadilly.",
            cuisine: "Chá da Tarde.",
            safety: { text: "Oferece um serviço de chá da tarde 'Feito Sem Glúten' com atenção impecável ao detalhe.", level: "accredited" },
            price: "££££ (Luxo).",
            recommendation: "Uma instituição clássica para uma experiência de chá da tarde segura e elegante.",
            mustTry: "Serviço de chá da tarde 'Feito Sem Glúten'."
        },
        {
            name: "Hobson's Fish & Chips",
            address: "Várias localizações (Soho, Paddington, etc.).",
            cuisine: "Fish & Chips.",
            safety: { text: "Afirma usar fritadeiras dedicadas, mas o seu próprio menu adverte sobre possível contaminação cruzada, exigindo vigilância.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma opção popular, mas que requer comunicação clara e avaliação do nível de risco pessoal.",
            mustTry: "Fish & chips do menu sem glúten."
        },
        {
            name: "Horn OK Please",
            address: "Banca de Mercado.",
            cuisine: "Indiana Vegetariana.",
            safety: { text: "Banca de mercado maioritariamente sem glúten.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma excelente opção vegetariana e segura nos mercados de Londres.",
            mustTry: "Pratos vegetarianos indianos."
        },
        {
            name: "Lahpet",
            address: "Shoreditch, Covent Garden.",
            cuisine: "Birmanesa.",
            safety: { text: "Menu maioritariamente sem glúten; a localização de Shoreditch tem uma fritadeira dedicada.", level: "accredited" },
            price: "££-£££ (Média-alta).",
            recommendation: "Uma excelente escolha para cozinha birmanesa, especialmente a localização de Shoreditch pela segurança acrescida da fritadeira.",
            mustTry: "Jungle Fried Chicken (em Shoreditch)."
        },
        {
            name: "Ma La Sichuan",
            address: "Westminster.",
            cuisine: "Chinesa.",
            safety: { text: "Um achado raro: um restaurante chinês com um menu dedicado sem glúten.", level: "accredited" },
            price: "££-£££ (Média-alta).",
            recommendation: "Um local valioso que permite aos celíacos desfrutar de uma cozinha frequentemente inacessível.",
            mustTry: "Arroz frito com ovo, frango com gengibre, tofu com sal e pimenta."
        },
        {
            name: "The Mayfair Chippy",
            address: "Várias localizações (Mayfair, Clapham, etc.).",
            cuisine: "Fish & Chips.",
            safety: { text: "Opção sofisticada com protocolos para celíacos e fritadeiras dedicadas.", level: "accredited" },
            price: "£££ (Preços mais elevados).",
            recommendation: "Uma experiência de 'restaurante' mais sofisticada para fish and chips seguros.",
            mustTry: "Fish & chips sem glúten."
        },
        {
            name: "Nopi / Rovi (Restaurantes Ottolenghi)",
            address: "Várias localizações.",
            cuisine: "Europeia Moderna.",
            safety: { text: "Conhecidos pela sua capacidade de atender de forma excelente e segura aos clientes sem glúten.", level: "accredited" },
            price: "£££-££££ (Alta/Luxo).",
            recommendation: "Conhecidos pelos seus pratos vibrantes e pela sua excelente capacidade de adaptação a dietas restritas.",
            mustTry: "Pratos focados em vegetais."
        },
        {
            name: "Oliver's Fish & Chips",
            address: "Belsize Park.",
            cuisine: "Fish & Chips.",
            safety: { text: "Oferece opções sem glúten em todos os dias, exceto às sextas-feiras.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma opção fiável para fish & chips seguros na área.",
            mustTry: "Fish & chips sem glúten."
        },
        {
            name: "Prezzo",
            address: "Várias localizações.",
            cuisine: "Italiano / Pizza.",
            safety: { text: "Oferece opções acreditadas pela Coeliac UK.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Outra cadeia fiável para comida italiana segura.",
            mustTry: "Pratos do menu sem glúten acreditado."
        },
        {
            name: "Sambal Shiok",
            address: "Holloway.",
            cuisine: "Laksa (sopa de noodles).",
            safety: { text: "Oferece caldo perfumado e noodles sem glúten.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Proporciona uma refeição reconfortante e segura para os amantes de sabores asiáticos.",
            mustTry: "Laksa com noodles sem glúten."
        }
    ],
    oxford: [
        {
            name: "La Smorfia",
            address: "247 Cowley Road, Oxford, OX4 1XG.",
            cuisine: "Italiano / Pizza.",
            safety: { text: "Possui uma cozinha dedicada e separada exclusivamente para pratos sem glúten.", level: "safe" },
            price: "££ (Média).",
            recommendation: "A principal recomendação para o viajante celíaco mais apreensivo. A paz de espírito proporcionada pela sua cozinha dedicada é inigualável.",
            mustTry: "Pizza, massa, Tiramisù, brownies (tudo sem glúten)."
        },
        {
            name: "The White Rabbit",
            address: "21 Friars Entry, Oxford, OX1 2BY.",
            cuisine: "Pub / Pizza.",
            safety: { text: "Utiliza um forno separado para a confeção de pizzas sem glúten.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma verdadeira instituição em Oxford, famosa pelas suas premiadas pizzas sem glúten e uma das opções mais seguras da cidade para os amantes de pizza.",
            mustTry: "Qualquer pizza da ementa em base sem glúten."
        },
        {
            name: "Browns Oxford",
            address: "5-11 Woodstock Road, Oxford, OX2 6HA.",
            cuisine: "Brasserie Britânica Clássica.",
            safety: { text: "Acreditado pela Coeliac UK com menus dedicados e extensos.", level: "accredited" },
            price: "£££ (Alta).",
            recommendation: "A escolha ideal para uma refeição mais formal ou uma ocasião especial, com a confiança da acreditação oficial.",
            mustTry: "Pratos do menu sem glúten, como bifes e peixe fresco."
        },
        {
            name: "Pho",
            address: "305 The Westgate, Queen Street, Oxford OX1 1PG.",
            cuisine: "Vietnamita.",
            safety: { text: "Acreditado pela Coeliac UK; 98% do menu é naturalmente isento de glúten.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "A escolha perfeita para um almoço ou jantar conveniente, rápido, delicioso e oficialmente credenciado no centro da cidade.",
            mustTry: "Sopa Phở e outras especialidades vietnamitas."
        },
        {
            name: "The Coconut Tree",
            address: "76 Saint Clement's Street, Oxford, OX4 1AH.",
            cuisine: "Sri Lanka.",
            safety: { text: "Quase todo o menu é isento de glúten por natureza.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "A escolha perfeita para quem procura sabores vibrantes e exóticos num ambiente descontraído.",
            mustTry: "Hoppers (panquecas de coco), caris, pratos 'Devilled'."
        },
        {
            name: "Organic Deli Cafe",
            address: "24 Friars Entry, Oxford OX1 2BY.",
            cuisine: "Café / Comida Saudável.",
            safety: { text: "Equipa excecionalmente bem informada; a maioria dos produtos é ou pode ser feita sem glúten.", level: "accredited" },
            price: "£-££ (Acessível).",
            recommendation: "O ponto de partida ideal para o dia, com uma refeição segura, acessível e saudável antes de iniciar a exploração turística.",
            mustTry: "Bolos e pastelaria (quase todos GF), sanduíches em pão caseiro sem glúten."
        },
        {
            name: "Bbuona",
            address: "102 Gloucester Green, Oxford OX1 2DF.",
            cuisine: "Italiano / Pinsa Romana.",
            safety: { text: "A 'pinsa' sem glúten é cozinhada num forno separado.", level: "accredited" },
            price: "££ (Média).",
            recommendation: "Uma excelente opção central para um almoço ou jantar casual e seguro, oferecendo uma alternativa autêntica à pizza tradicional.",
            mustTry: "Pinsa com base sem glúten."
        }
    ],
    paris: [
        {
            name: "Little Nonna",
            address: "12 Avenue Niel, 75017.",
            cuisine: "Italiano / Pizza.",
            safety: { text: "100% sem glúten, com forno a lenha.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Amplamente considerado o principal destino para comida italiana autêntica e 100% sem glúten, especialmente pizza ao estilo napolitano.",
            mustTry: "Pizza Diavolo, Tiramisu."
        },
        {
            name: "Tasca",
            address: "46 Avenue de Suffren, 75015.",
            cuisine: "Italiano.",
            safety: { text: "Restaurante totalmente sem glúten.", level: "safe" },
            price: "€€€ (Premium).",
            recommendation: "Uma opção logisticamente perfeita e segura para uma refeição italiana completa a poucos passos da Torre Eiffel.",
            mustTry: "Raviólis de abóbora, pizza de vegetais, Tiramisu."
        },
        {
            name: "Chambelland",
            address: "Oberkampf (14 Rue Ternaux, 75011) e Batignolles (43 Rue Brochant, 75017).",
            cuisine: "Pâtisserie & Boulangerie.",
            safety: { text: "100% sem glúten, com moinho de farinha próprio.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "A padaria artesanal fundamental da cena sem glúten parisiense, ideal para um pequeno-almoço ou almoço tranquilo.",
            mustTry: "Le pain du village, pains de sucre (chocolate e laranja), éclairs."
        },
        {
            name: "La Manufacture du Sans Gluten",
            address: "2 Rue Androuet, 75018.",
            cuisine: "Pâtisserie & Boulangerie.",
            safety: { text: "Padaria 100% sem glúten.", level: "safe" },
            price: "€€€ (Premium).",
            recommendation: "Elogiada por produzir os melhores croissants e pains au chocolat sem glúten de Paris. Uma visita obrigatória em Montmartre.",
            mustTry: "Croissants e pains au chocolat."
        },
        {
            name: "Kapunka",
            address: "51 Rue Saint-Sauveur, 75002.",
            cuisine: "Comida de Rua Tailandesa.",
            safety: { text: "Menu completamente sem glúten.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Uma opção fantástica para um jantar saboroso e seguro com cozinha tailandesa vibrante.",
            mustTry: "Khao-Soy (caril vermelho com noodles), Pad Thai."
        },
        {
            name: "Café Mareva",
            address: "27 Rue de Clignancourt, 75018.",
            cuisine: "Café / Brunch.",
            safety: { text: "Menu totalmente sem glúten e sem lactose.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "O local perfeito para um brunch seguro e satisfatório em Montmartre.",
            mustTry: "Waffle 'Classic Avocado' com bacon, waffles de batata-doce."
        },
        {
            name: "Cococo",
            address: "35 Rue Coquillière, 75001.",
            cuisine: "Bento Japonês.",
            safety: { text: "100% sem glúten, sem lactose e sem açúcar refinado.", level: "safe" },
            price: "€€€ (Premium).",
            recommendation: "Um local único para uma requintada e segura experiência de almoço perto do Louvre.",
            mustTry: "Bento com caril de carne japonês, karaage (frango frito)."
        },
        {
            name: "Copains",
            address: "Várias, incluindo Le Marais (29 Rue des Blancs-Manteaux, 75004).",
            cuisine: "Pâtisserie & Boulangerie.",
            safety: { text: "Numerosas localizações 100% sem glúten.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "A face omnipresente e moderna da Paris sem glúten, perfeita para uma pastelaria divinal ou um almoço para levar.",
            mustTry: "Paris Brest, pastelarias com creme de pistácio, baguetes recheadas."
        },
        {
            name: "Grom",
            address: "81 Rue de Seine, 75006.",
            cuisine: "Gelataria.",
            safety: { text: "100% sem glúten, incluindo os cones.", level: "safe" },
            price: "€ (Económico/Média).",
            recommendation: "Uma paragem inegociável para um doce gelado seguro e delicioso.",
            mustTry: "Gelato de pistácio e avelã num cone sem glúten."
        },
        {
            name: "Judy, Cantine Qualitarienne",
            address: "Perto do Louvre (14 Rue Jean-Jacques Rousseau, 75001) e Jardin du Luxembourg (18 Rue de Fleurus, 75006).",
            cuisine: "Café Saudável.",
            safety: { text: "Café 100% sem glúten.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Uma excelente escolha para um pequeno-almoço ou almoço nutritivo e seguro em localizações turísticas chave.",
            mustTry: "Panquecas paleo, rabanada de pão de banana, buddha bowls."
        },
        {
            name: "Maison Plume",
            address: "61 Rue Charlot, 75003.",
            cuisine: "Pâtisserie.",
            safety: { text: "100% sem glúten e sem açúcar.", level: "safe" },
            price: "€€€ (Premium).",
            recommendation: "Uma pâtisserie única que oferece uma indulgência visualmente deslumbrante e sem culpa.",
            mustTry: "Pastelarias 'Plume' (especialmente a de Baunilha e Groselha Negra)."
        },
        {
            name: "Noglu",
            address: "Grenelle (69 Rue de Grenelle, 75007) e Le Pont Traversé (62 Rue de Vaugirard, 75006).",
            cuisine: "Padaria e Restaurante.",
            safety: { text: "Estabelecimento 100% sem glúten.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Um dos estabelecimentos pioneiros que oferece uma experiência completa, desde padaria a refeições sentadas.",
            mustTry: "Pain au chocolat super folhado, mini-baguetes, sanduíche quente de ovo e bacon."
        },
        {
            name: "RizRiz",
            address: "221 Rue Saint-Martin, 75003.",
            cuisine: "Fusão Asiática Vegan.",
            safety: { text: "Estabelecimento 100% sem glúten.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Uma excelente opção para quem procura uma refeição segura, vegan e com sabores asiáticos.",
            mustTry: "Pratos de fusão asiática."
        },
        {
            name: "Breizh Café",
            address: "Múltiplas localizações.",
            cuisine: "Crêperie.",
            safety: { text: "Utiliza farinha de trigo sarraceno certificada sem glúten. É imperativo verificar pessoalmente se usam chapas e utensílios separados.", level: "accredited" },
            price: "€€-€€€ (Média-alta).",
            recommendation: "O candidato mais provável para uma galette segura, mas a verificação dos protocolos de contaminação cruzada é essencial.",
            mustTry: "Galettes de trigo sarraceno."
        },
        {
            name: "Caramel Sarrasin",
            address: "Não especificado.",
            cuisine: "Crêperie.",
            safety: { text: "Aparece em guias sem glúten, mas a mesma advertência rigorosa de verificar os protocolos de contaminação cruzada se aplica.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Investigar com cautela.",
            mustTry: "Não especificados."
        },
        {
            name: "La Crème de Paris",
            address: "1 Quai Saint-Michel, 75005.",
            cuisine: "Crêperie / Waffles.",
            safety: { text: "Indica que todos os waffles são sem glúten, mas a verificação de contaminação cruzada é essencial.", level: "accredited" },
            price: "€€ (Média).",
            recommendation: "Os waffles podem representar uma alternativa mais segura aos crêpes, mas a verificação é crucial.",
            mustTry: "Waffles salgados e doces."
        },
        {
            name: "Ladurée / Pierre Hermé",
            address: "Várias localizações.",
            cuisine: "Pâtisserie (Macarons).",
            safety: { text: "Os macarons são naturalmente isentos de glúten, mas são produzidos em ambiente misto com baixo risco de contaminação cruzada.", level: "accredited" },
            price: "€€€ (Premium).",
            recommendation: "Oferece uma experiência parisiense clássica. Os clientes celíacos devem estar cientes do ambiente misto para tomar uma decisão informada.",
            mustTry: "Macarons de assinatura."
        }
    ],
    lisboa: [
        {
            name: "Café do Rio",
            address: "Rua da Alfândega, 114, 1100-016 Lisboa.",
            cuisine: "Hamburgueria Gourmet.",
            safety: { text: "100% isenta de glúten e certificada pela APC.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Uma experiência libertadora. A possibilidade de entrar e poder escolher qualquer item do menu sem hesitação é rara e valiosa. Uma recomendação de topo para uma refeição casual e tranquila.",
            mustTry: "Hambúrgueres de carne 100% alentejana, opções de bacalhau, salmão, vegetarianas e vegan."
        },
        {
            name: "Rice Me & Rice Me Deli",
            address: "Restaurante (Rua Carlos Testa, 18A) e Deli (Av. António Augusto Aguiar, 124).",
            cuisine: "Restaurante e Pastelaria/Padaria.",
            safety: { text: "Ecossistema 100% sem glúten e certificado pela APC.", level: "safe" },
            price: "€€ (Média).",
            recommendation: "Uma visita obrigatória e um pilar da experiência sem glúten em Lisboa. A certificação e o ambiente 100% GF eliminam qualquer ansiedade.",
            mustTry: "(Restaurante) Risoto de Cogumelos, Pad Thai; (Deli) Pães de fabrico próprio, bolos de aniversário."
        },
        {
            name: "Despensa N.6",
            address: "Avenida Sacadura Cabral, nº 6A, 1000-274 Lisboa.",
            cuisine: "Pastelaria e Café.",
            safety: { text: "100% sem glúten, sem açúcares refinados e certificada pela APC.", level: "safe" },
            price: "€€-€€€ (Média-alta).",
            recommendation: "Um verdadeiro oásis para um pequeno-almoço, lanche ou brunch saudável e seguro. A dupla garantia oferece uma paz de espírito inigualável.",
            mustTry: "Menus de brunch, granolas caseiras, pães, crepes e bolos."
        },
        {
            name: "GROM (Chiado)",
            address: "Rua Garrett 42, 1200-204 Lisboa.",
            cuisine: "Gelataria.",
            safety: { text: "100% sem glúten, incluindo cones, e certificada pela APC.", level: "safe" },
            price: "€€ (Premium).",
            recommendation: "Uma paragem obrigatória e um momento de puro deleite. A alegria de poder escolher qualquer sabor de gelado e saboreá-lo num cone crocante e seguro é um luxo raro.",
            mustTry: "Gelado de qualquer sabor num cone sem glúten."
        },
        {
            name: "Inspira Liberdade Boutique Hotel (Restaurante Open Brasserie)",
            address: "Rua Santa Marta, 48, 1150-297 Lisboa.",
            cuisine: "Hotel / Restaurante Contemporâneo.",
            safety: { text: "Cozinha mista certificada pela APC, com uma área de cozinha separada e exclusiva.", level: "accredited" },
            price: "€€€ (Alta).",
            recommendation: "Provavelmente a cozinha mista mais segura que se pode encontrar. A escolha ideal para uma ocasião especial ou uma experiência de fine dining sem qualquer compromisso com a segurança.",
            mustTry: "Menu executivo ao almoço, menu de jantar completo com opções de carne, peixe, vegetarianas e vegan."
        },
        {
            name: "La Trattoria",
            address: "Rua da Artilharia 1, 79, 1250-038 Lisboa.",
            cuisine: "Restaurante Italiano.",
            safety: { text: "Cozinha mista certificada pela APC com menu dedicado sem glúten.", level: "accredited" },
            price: "€€-€€€ (Média-alta).",
            recommendation: "Uma escolha de topo para uma refeição italiana autêntica com um elevado grau de confiança. A certificação da APC é o selo de garantia fundamental.",
            mustTry: "Pizza sem glúten, Carbonara, Amatriciana."
        },
        {
            name: "Bali do Cais",
            address: "R. Bernardino Costa n.º 21, 1200-052 Lisboa.",
            cuisine: "Indonésio.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "€€ (Acessível a Média).",
            recommendation: "Uma opção fantástica e segura para paladares aventureiros, com a certificação da APC a fornecer uma base sólida de confiança. Recomenda-se vigilância e comunicação clara com a equipa.",
            mustTry: "Beef Rendang, Nasi Goreng, Sate."
        },
        {
            name: "McDonald's",
            address: "Várias localizações em Portugal.",
            cuisine: "Fast-food.",
            safety: { text: "Pães certificados pela APC com protocolo rigoroso (bolsas de aquecimento e luvas dedicadas).", level: "accredited" },
            price: "€ (Económico).",
            recommendation: "Pode ser uma opção de recurso surpreendentemente segura devido aos protocolos auditados, mais fiável do que alguns restaurantes 'saudáveis' não certificados.",
            mustTry: "Hambúrgueres em pão sem glúten."
        },
        {
            name: "Batarda's",
            address: "Praceta Lagoa de Óbidos n. 38, 2775-722 Parede.",
            cuisine: "Pastelaria / Padaria / Restaurante.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Certificado pela APC, uma boa opção na região de Parede.",
            mustTry: "Não especificados."
        },
        {
            name: "Churrasqueira Franguito",
            address: "Estrada do Algueirão, 138, 2725-079 Sintra.",
            cuisine: "Take-away.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Opção segura para um frango de churrasco em Sintra.",
            mustTry: "Não especificados."
        },
        {
            name: "Cozinha por Mim",
            address: "Rua São José, Lote 3B, Loja 3, 2750-623 Cascais.",
            cuisine: "Take-away.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Opção certificada para take-away em Cascais.",
            mustTry: "Não especificados."
        },
        {
            name: "Gelateria Italiana Fabio Lupi",
            address: "Avenida Valbom, 10A, 2750-508 Cascais.",
            cuisine: "Gelataria.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Gelados seguros em Cascais com certificação APC.",
            mustTry: "Não especificados."
        },
        {
            name: "Gluten'Out",
            address: "Mercado Municipal do Seixal, Loja 2, 2840-754 Seixal.",
            cuisine: "Pastelaria / Padaria.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Opção certificada na margem sul, no Seixal.",
            mustTry: "Não especificados."
        },
        {
            name: "Nutty Store",
            address: "São Domingos de Rana.",
            cuisine: "Cozinha Funcional.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Comida funcional com segurança certificada.",
            mustTry: "Não especificados."
        },
        {
            name: "Quase Quase",
            address: "Alvalade (Avenida de Roma, 53B) e Campo de Ourique (Rua Correia Teles 22D).",
            cuisine: "Take-away.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Duas localizações convenientes em Lisboa para take-away seguro.",
            mustTry: "Não especificados."
        },
        {
            name: "Sam",
            address: "Rua Luís Augusto Palmeirim,1D​, 1700-292, Alvalade.",
            cuisine: "Pastelaria / Padaria.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Padaria e pastelaria certificada em Alvalade.",
            mustTry: "Não especificados."
        },
        {
            name: "Scoop Gelato",
            address: "Largo da Princesa, 26A, 1400-303 Lisboa.",
            cuisine: "Gelataria.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Gelataria certificada perto de Belém.",
            mustTry: "Não especificados."
        },
        {
            name: "Totale Pizzeria",
            address: "Parque das Nações, Lisboa.",
            cuisine: "Pizzaria.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Opção de pizza segura na zona moderna do Parque das Nações.",
            mustTry: "Não especificados."
        },
        {
            name: "Zero Healthy Food",
            address: "Rua 21 de agosto 14 D, 2530-814 Vimeiro, Lourinhã.",
            cuisine: "Restaurante.",
            safety: { text: "Cozinha mista com certificação da APC.", level: "accredited" },
            price: "Não especificada.",
            recommendation: "Opção saudável e certificada fora de Lisboa, na Lourinhã.",
            mustTry: "Não especificados."
        }
    ]
};