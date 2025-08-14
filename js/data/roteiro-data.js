// js/data/roteiro-data.js

/**
 * @file Contém os dados estruturados para o roteiro da viagem, dia a dia.
 * Cada objeto representa um dia e contém uma lista de eventos programados com coordenadas.
 */

// Coordenadas dos hotéis para servirem como ponto de partida nos mapas
export const hotelCoords = {
    londres: { lat: 51.5298, lng: -0.1251 }, // Central Hotel, Argyle St
    lisboa: { lat: 38.7141, lng: -9.1395 }   // Hotel Inn Rossio
};

export const itineraryData = [
    // Dia 1: Chegada em Londres
    {
        day: 1,
        date: "23/Jan (Sex)",
        title: "Chegada a Londres e Primeiras Impressões",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Garantir um translado tranquilo e econômico do aeroporto para o hotel, minimizando o estresse após um longo voo.",
        events: [
            {
                time: "18:55",
                title: "Chegada em Heathrow (LHR)",
                description: "Passar pela imigração e retirada de bagagens.",
                type: "chegada",
                icon: "fas fa-plane-arrival",
                coords: { lat: 51.4700, lng: -0.4543 }
            },
            {
                time: "20:00",
                title: "Transporte para o Hotel via Metrô",
                description: "Pegar a Piccadilly Line (direção Cockfosters) diretamente de Heathrow para a estação King's Cross St. Pancras. Usar cartão por aproximação.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "21:00",
                title: "Check-in no Central Hotel",
                description: "Acomodação no hotel. A saída correta da estação é a sinalizada como 'Euston Road'. O hotel fica na Argyle Street.",
                type: "hospedagem",
                icon: "fas fa-bed",
                coords: { lat: 51.5298, lng: -0.1251 }
            },
            {
                time: "21:30",
                title: "Jantar Leve (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "22:30",
                title: "Caminhada Opcional",
                description: "Breve caminhada pela Argyle Square para se familiarizar com o bairro antes de descansar.",
                type: "passeio",
                icon: "fas fa-walking"
            }
        ]
    },
    // Dia 2: Londres Real
    {
        day: 2,
        date: "24/Jan (Sáb)",
        title: "Um Passeio pela Londres Real",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Testemunhar a pompa real e passear pelos mais famosos espaços verdes de Londres.",
        events: [
            {
                time: "08:30",
                title: "Café da Manhã (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "09:30",
                title: "Transporte para Green Park",
                description: "De King's Cross, pegar a Victoria Line (sentido sul) por 3 paradas até a estação Green Park.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "10:00",
                title: "Palácio de Buckingham (Exterior)",
                description: "Caminhar pelo Green Park em direção ao palácio para a icônica fotografia na fachada.",
                type: "passeio",
                icon: "fas fa-camera-retro",
                coords: { lat: 51.5014, lng: -0.1419 }
            },
            {
                time: "11:00",
                title: "Troca da Guarda da Cavalaria Real",
                description: "Assistir à cerimônia diária na Horse Guards Parade, uma alternativa menos lotada e igualmente impressionante.",
                type: "cultura",
                icon: "fas fa-chess-rook",
                coords: { lat: 51.5045, lng: -0.1275 }
            },
            {
                time: "12:00",
                title: "Ícones de Westminster",
                description: "Caminhar por Whitehall, passando por Downing Street, até a Parliament Square para ver o Big Ben e as Casas do Parlamento.",
                type: "passeio",
                icon: "fas fa-gavel",
                coords: { lat: 51.5007, lng: -0.1246 }
            },
            {
                time: "13:30",
                title: "Almoço na Região (?)",
                description: "Local a definir em conjunto com a Gio, na área de Westminster ou South Bank.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Abadia de Westminster e Ponte",
                description: "Admirar a Abadia pelo lado de fora e atravessar a Ponte de Westminster para a clássica foto do Parlamento e da London Eye.",
                type: "cultura",
                icon: "fas fa-church",
                coords: { lat: 51.4994, lng: -0.1273 }
            },
            {
                time: "19:00",
                title: "Jantar (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 3: Tesouros Globais
    {
        day: 3,
        date: "25/Jan (Dom)",
        title: "Tesouros Globais e Ruas Teatrais",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Uma manhã de história mundial seguida pela energia vibrante do distrito dos teatros e mercados de Londres.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Café da manhã antes de seguir para o museu.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "British Museum (Visita Curada)",
                description: "Caminhada de 15-20 min do hotel. Focar em destaques: Pedra de Roseta, Esculturas do Partenon e a estátua da Ilha de Páscoa.",
                type: "cultura",
                icon: "fas fa-landmark",
                coords: { lat: 51.5194, lng: -0.1270 }
            },
            {
                time: "12:00",
                title: "Almoço em Covent Garden (?)",
                description: "Local a definir em conjunto com a Gio, na região de Covent Garden.",
                type: "refeicao",
                icon: "fas fa-utensils",
                coords: { lat: 51.5117, lng: -0.1242 }
            },
            {
                time: "13:30",
                title: "Explorar Covent Garden",
                description: "Explorar o mercado e assistir aos artistas de rua gratuitos na praça.",
                type: "passeio",
                icon: "fas fa-masks-theater",
                coords: { lat: 51.5117, lng: -0.1242 }
            },
            {
                time: "15:00",
                title: "Leicester Square e Chinatown",
                description: "Passeio pelo coração do cinema londrino e pelos portões coloridos de Chinatown.",
                type: "passeio",
                icon: "fas fa-film",
                coords: { lat: 51.5113, lng: -0.1300 }
            },
            {
                time: "19:00",
                title: "Jantar no Soho (?)",
                description: "Local a definir em conjunto com a Gio, na região do Soho",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 4: Oxford
    {
        day: 4,
        date: "26/Jan (Seg)",
        title: "Excursão à Cidade das Torres dos Sonhos: Oxford",
        city: "Oxford",
        countryFlag: "🇬🇧",
        objective: "Uma excursão de um dia inteiro à histórica cidade universitária.",
        events: [
            {
                time: "07:30",
                title: "Café da Manhã Rápido (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "08:30",
                title: "Viagem de Trem para Oxford",
                description: "Metrô para a Estação de Paddington e trem da GWR para Oxford (aprox. 1h). É crucial reservar os bilhetes com antecedência!",
                type: "transporte",
                icon: "fas fa-train"
            },
            {
                time: "10:00",
                title: "Roteiro a Pé Autoguiado",
                description: "Explorar o centro histórico, passando pela Radcliffe Camera, Biblioteca Bodleian e a Ponte dos Suspiros.",
                type: "passeio",
                icon: "fas fa-university",
                coords: { lat: 51.7538, lng: -1.2544 }
            },
            {
                time: "13:00",
                title: "Almoço em Oxford (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Christ Church Meadow e Covered Market",
                description: "Passear pelo Christ Church Meadow para vistas gratuitas do famoso college e explorar o vibrante mercado coberto.",
                type: "passeio",
                icon: "fas fa-shopping-basket",
                coords: { lat: 51.7500, lng: -1.2550 }
            },
            {
                time: "18:00",
                title: "Retorno a Londres",
                description: "Pegar o trem pré-reservado de volta para Londres Paddington.",
                type: "transporte",
                icon: "fas fa-train"
            },
            {
                time: "19:30",
                title: "Jantar em Londres (?)",
                description: "Local a definir em conjunto com a Gio, na região de King's Cross.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 5: South Bank
    {
        day: 5,
        date: "27/Jan (Ter)",
        title: "Obras-Primas Artísticas e um Passeio pela Margem Sul",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Combinar arte de classe mundial com vistas icônicas do rio.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "The National Gallery (Visita Curada)",
                description: "Visita focada de 90 minutos para ver obras como 'Girassóis' de Van Gogh e 'O Retrato de Arnolfini' de Jan van Eyck.",
                type: "cultura",
                icon: "fas fa-palette",
                coords: { lat: 51.5089, lng: -0.1283 }
            },
            {
                time: "12:00",
                title: "Passeio pela South Bank",
                description: "Atravessar a Golden Jubilee Bridge e passear pela margem sul do Tâmisa.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "13:00",
                title: "Almoço no Borough Market (?)",
                description: "Local a definir em conjunto com a Gio, na região do Borough Market.",
                type: "refeicao",
                icon: "fas fa-utensils",
                coords: { lat: 51.5055, lng: -0.0912 }
            },
            {
                time: "15:00",
                title: "Shakespeare's Globe e Tate Modern",
                description: "Ver os famosos edifícios pelo lado de fora durante a caminhada.",
                type: "cultura",
                icon: "fas fa-theater-masks",
                coords: { lat: 51.5081, lng: -0.0972 }
            },
            {
                time: "19:00",
                title: "Jantar (?)",
                description: "Local a definir em conjunto com a Gio, na região da South Bank.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 6: Mercados e Bairros
    {
        day: 6,
        date: "28/Jan (Qua)",
        title: "Mercados, Música e Bairros Icônicos",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Explorar o lado alternativo e charmoso de Londres através de seus mercados e bairros famosos.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Explorar Camden Town",
                description: "Visitar o famoso Camden Market e caminhar ao longo do Regent's Canal.",
                type: "passeio",
                icon: "fas fa-guitar",
                coords: { lat: 51.5415, lng: -0.1466 }
            },
            {
                time: "13:00",
                title: "Almoço em Camden (?)",
                description: "Local a definir em conjunto com a Gio, na região de Camden.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Abbey Road",
                description: "Pegar o ônibus nº 139 para visitar a icônica passadeira imortalizada pelos Beatles.",
                type: "cultura",
                icon: "fas fa-music",
                coords: { lat: 51.5321, lng: -0.1774 }
            },
            {
                time: "16:30",
                title: "Explorar Notting Hill",
                description: "Passear pelas ruas charmosas com casas coloridas e sentir a atmosfera do bairro.",
                type: "passeio",
                icon: "fas fa-home",
                coords: { lat: 51.5098, lng: -0.2040 }
            },
            {
                time: "19:30",
                title: "Jantar em Notting Hill (?)",
                description: "Local a definir em conjunto com a Gio, na região de Notting Hill.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 7: Ícones e Arte Urbana
    {
        day: 7,
        date: "29/Jan (Qui)",
        title: "Ícones Históricos e Arte Urbana",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Um dia de contraste entre o marco mais reconhecível da cidade e a vibrante cena de arte de rua.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Torre de Londres e Tower Bridge",
                description: "Metrô até Tower Hill. Caminhar pelo perímetro da Torre e atravessar a pé a icônica Tower Bridge (gratuito).",
                type: "passeio",
                icon: "fas fa-chess",
                coords: { lat: 51.5055, lng: -0.0754 }
            },
            {
                time: "13:00",
                title: "Almoço na Margem Sul (?)",
                description: "Local a definir em conjunto com a Gio, na região da margem sul do Tâmisa.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Catedral de St. Paul's",
                description: "Caminhar pela margem sul, atravessar a Millennium Bridge para a vista perfeita da Catedral de St. Paul.",
                type: "cultura",
                icon: "fas fa-church",
                coords: { lat: 51.5138, lng: -0.0984 }
            },
            {
                time: "17:00",
                title: "Street Art em Shoreditch",
                description: "Explorar a vibrante cena de arte de rua ao redor de Brick Lane, uma galeria a céu aberto.",
                type: "passeio",
                icon: "fas fa-spray-can",
                coords: { lat: 51.5220, lng: -0.0715 }
            },
            {
                time: "19:30",
                title: "Jantar em Shoreditch (?)",
                description: "Local a definir em conjunto com a Gio, na região de Shoreditch.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 8: Viagem para Lisboa
    {
        day: 8,
        date: "30/Jan (Sex)",
        title: "Despedida de Londres e Chegada a Lisboa",
        city: "Lisboa",
        countryFlag: "🇬🇧✈️🇵🇹",
        objective: "Uma manhã final em Londres, seguida de um voo para Lisboa e uma primeira noite imersiva.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:30",
                title: "Manhã Livre em King's Cross",
                description: "Visitar a Plataforma 9 ¾ na estação ou fazer uma última caminhada pelo Russell Square.",
                type: "passeio",
                icon: "fas fa-magic",
                coords: { lat: 51.5308, lng: -0.1234 }
            },
            {
                time: "12:00",
                title: "Almoço (?)",
                description: "Local a definir em conjunto com a Gio, na região de King's Cross.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Viagem para Heathrow (LHR)",
                description: "Pegar a Piccadilly Line em King's Cross para o aeroporto (aprox. 1h).",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "18:30",
                title: "Voo para Lisboa (LIS)",
                description: "Partida do voo de Londres.",
                type: "partida",
                icon: "fas fa-plane-departure"
            },
            {
                time: "21:15",
                title: "Chegada e Transporte em Lisboa",
                description: "Pegar o Metrô (Linha Vermelha > Linha Verde) para a estação Rossio. Comprar e carregar o cartão 'navegante ocasional' com Zapping.",
                type: "transporte",
                icon: "fas fa-subway",
                coords: { lat: 38.7742, lng: -9.1342 }
            },
            {
                time: "22:15",
                title: "Check-in no Hotel Inn Rossio",
                description: "Check-in e breve caminhada pela Praça do Rossio e Praça da Figueira.",
                type: "hospedagem",
                icon: "fas fa-bed",
                coords: { lat: 38.7141, lng: -9.1395 }
            },
            {
                time: "23:00",
                title: "Jantar leve (?)",
                description: "Local a definir em conjunto com a Gio, na região do Rossio.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 9: Baixa-Chiado
    {
        day: 9,
        date: "31/Jan (Sáb)",
        title: "Coração de Lisboa: Baixa, Chiado e Vistas",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Explorar a pé a elegante baixa de Lisboa e subir às suas colinas para vistas deslumbrantes.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã no Hotel",
                description: "Aproveitar o café da manhã incluso no hotel.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Explorar a Baixa Pombalina",
                description: "Caminhar pela Rua Augusta, passar sob o Arco e chegar à Praça do Comércio.",
                type: "passeio",
                icon: "fas fa-archway",
                coords: { lat: 38.7078, lng: -9.1365 }
            },
            {
                time: "13:00",
                title: "Almoço no Time Out Market (?)",
                description: "Local a definir em conjunto com a Gio, na região do Mercado da Ribeira.",
                type: "refeicao",
                icon: "fas fa-utensils",
                coords: { lat: 38.7068, lng: -9.1460 }
            },
            {
                time: "14:30",
                title: "Passeio pela Pink Street",
                description: "Passagem rápida pela famosa Rua Nova do Carvalho para fotos.",
                type: "passeio",
                icon: "fas fa-camera"
            },
            {
                time: "15:30",
                title: "Chiado e Convento do Carmo",
                description: "Subir ao Chiado, visitar o Largo do Carmo e ver as ruínas do Convento (exterior gratuito).",
                type: "cultura",
                icon: "fas fa-landmark",
                coords: { lat: 38.7121, lng: -9.1411 }
            },
            {
                time: "17:00",
                title: "Miradouro de São Pedro de Alcântara",
                description: "Desfrutar da vista panorâmica sobre a cidade, uma alternativa gratuita e mais ampla à vista do Elevador de Santa Justa.",
                type: "passeio",
                icon: "fas fa-image",
                coords: { lat: 38.7149, lng: -9.1444 }
            },
            {
                time: "19:30",
                title: "Jantar (?)",
                description: "Local a definir em conjunto com a Gio, na região do Bairro Alto ou Chiado.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 10: Belém
    {
        day: 10,
        date: "01/Fev (Dom)",
        title: "A Era dos Descobrimentos e o Lado Moderno",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Uma imersão na história marítima de Portugal, com um toque da Lisboa contemporânea.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã no Hotel",
                description: "Café da manhã antes de ir para Belém.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Viagem para Belém",
                description: "Pegar o cênico Bonde 15E na Praça da Figueira.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "10:30",
                title: "Mosteiro dos Jerônimos (Igreja)",
                description: "Visitar a igreja principal (entrada gratuita) e admirar a arquitetura manuelina.",
                type: "cultura",
                icon: "fas fa-church",
                coords: { lat: 38.6978, lng: -9.2064 }
            },
            {
                time: "12:00",
                title: "Padrão dos Descobrimentos e Torre de Belém",
                description: "Caminhar ao longo do rio para ver os monumentos icônicos (exteriores).",
                type: "passeio",
                icon: "fas fa-monument",
                coords: { lat: 38.6936, lng: -9.2059 }
            },
            {
                time: "13:30",
                title: "Almoço em Belém (?)",
                description: "Local a definir em conjunto com a Gio, na região de Belém.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:30",
                title: "Visita à LX Factory",
                description: "Explorar o complexo industrial revitalizado, com suas lojas de design, livrarias e arte urbana.",
                type: "passeio",
                icon: "fas fa-industry",
                coords: { lat: 38.7034, lng: -9.1783 }
            },
            {
                time: "17:30",
                title: "Pastéis de Belém",
                description: "Passar pela famosa pastelaria para ver onde a receita original foi criada.",
                type: "refeicao",
                icon: "fas fa-cookie-bite",
                coords: { lat: 38.6975, lng: -9.2033 }
            },
            {
                time: "19:30",
                title: "Jantar (?)",
                description: "Local a definir em conjunto com a Gio.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 11: Alfama
    {
        day: 11,
        date: "02/Fev (Seg)",
        title: "As Colinas Históricas: Alfama e Graça",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Perder-se nas ruelas medievais do bairro mais antigo de Lisboa e descobrir os seus miradouros mais autênticos.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã no Hotel",
                description: "Café da manhã no hotel.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Passeio no Elétrico 28",
                description: "Pegar o famoso bonde na Praça Martim Moniz para uma viagem cênica até a Graça.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "11:00",
                title: "Miradouros da Graça",
                description: "Começar pelo ponto mais alto no Miradouro da Senhora do Monte e depois descer para o Miradouro da Graça.",
                type: "passeio",
                icon: "fas fa-binoculars",
                coords: { lat: 38.7193, lng: -9.1336 }
            },
            {
                time: "13:00",
                title: "Almoço em Alfama (?)",
                description: "Local a definir em conjunto com a Gio, na região de Alfama.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Explorar Alfama",
                description: "Descer pelas ruelas, parando nos Miradouros das Portas do Sol e de Santa Luzia.",
                type: "passeio",
                icon: "fas fa-walking",
                coords: { lat: 38.7124, lng: -9.1306 }
            },
            {
                time: "16:30",
                title: "Sé de Lisboa",
                description: "Visitar a imponente Catedral de Lisboa (entrada gratuita) antes de voltar para a Baixa.",
                type: "cultura",
                icon: "fas fa-cross",
                coords: { lat: 38.7099, lng: -9.1328 }
            },
            {
                time: "19:30",
                title: "Jantar de Despedida (?)",
                description: "Local a definir em conjunto com a Gio",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 12: Partida de Lisboa
    {
        day: 12,
        date: "03/Fev (Ter)",
        title: "Feira da Ladra e Despedida de Lisboa",
        city: "Lisboa",
        countryFlag: "🇵🇹✈️🇧🇷",
        objective: "Uma manhã final para uma experiência cultural única antes de uma partida suave para o aeroporto.",
        events: [
            {
                time: "08:00",
                title: "Café da Manhã no Hotel",
                description: "Último café da manhã no hotel.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "09:00",
                title: "Visita à Feira da Ladra",
                description: "Explorar o famoso mercado de pulgas de Lisboa no Campo de Santa Clara (abre às terças e sábados).",
                type: "cultura",
                icon: "fas fa-shopping-bag",
                coords: { lat: 38.7157, lng: -9.1258 }
            },
            {
                time: "10:00",
                title: "Check-out e Transporte para o Aeroporto",
                description: "Retornar ao hotel, fazer o check-out e pegar o Metrô (Linha Verde > Linha Vermelha) para o Aeroporto de Lisboa (LIS).",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "12:30",
                title: "Voo de Retorno ao Brasil (GRU)",
                description: "Embarque no voo de volta.",
                type: "partida",
                icon: "fas fa-plane-departure",
                coords: { lat: 38.7742, lng: -9.1342 }
            }
        ]
    }
];
