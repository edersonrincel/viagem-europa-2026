// js/data/roteiro-data.js

/**
 * @file Contém os dados estruturados para o roteiro da viagem, dia a dia.
 * Cada objeto representa um dia e contém uma lista de eventos programados.
 */

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
                icon: "fas fa-plane-arrival"
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
                icon: "fas fa-bed"
            },
            {
                time: "21:30",
                title: "Jantar Leve (?)",
                description: "Encontrar um local próximo para um jantar rápido após o check-in.",
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
                description: "Café da manhã nas proximidades do hotel para começar o dia.",
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
                icon: "fas fa-camera-retro"
            },
            {
                time: "11:00",
                title: "Troca da Guarda da Cavalaria Real",
                description: "Assistir à cerimônia diária na Horse Guards Parade, uma alternativa menos lotada e igualmente impressionante.",
                type: "cultura",
                icon: "fas fa-chess-rook"
            },
            {
                time: "12:00",
                title: "Ícones de Westminster",
                description: "Caminhar por Whitehall, passando por Downing Street, até a Parliament Square para ver o Big Ben e as Casas do Parlamento.",
                type: "passeio",
                icon: "fas fa-gavel"
            },
            {
                time: "13:30",
                title: "Almoço na Região (?)",
                description: "Pausa para o almoço na área de Westminster ou South Bank.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Abadia de Westminster e Ponte",
                description: "Admirar a Abadia pelo lado de fora e atravessar a Ponte de Westminster para a clássica foto do Parlamento e da London Eye.",
                type: "cultura",
                icon: "fas fa-church"
            },
            {
                time: "19:00",
                title: "Jantar (?)",
                description: "Jantar em um restaurante a ser definido na volta para o hotel.",
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
                icon: "fas fa-landmark"
            },
            {
                time: "12:00",
                title: "Almoço em Covent Garden (?)",
                description: "Almoçar na região de Covent Garden.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "13:30",
                title: "Explorar Covent Garden",
                description: "Explorar o mercado e assistir aos artistas de rua gratuitos na praça.",
                type: "passeio",
                icon: "fas fa-masks-theater"
            },
            {
                time: "15:00",
                title: "Leicester Square e Chinatown",
                description: "Passeio pelo coração do cinema londrino e pelos portões coloridos de Chinatown.",
                type: "passeio",
                icon: "fas fa-film"
            },
            {
                time: "19:00",
                title: "Jantar no Soho (?)",
                description: "Explorar as diversas opções de restaurantes no Soho.",
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
                description: "Café da manhã em Londres antes de pegar o trem.",
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
                icon: "fas fa-university"
            },
            {
                time: "13:00",
                title: "Almoço em Oxford (?)",
                description: "Almoçar em um pub ou café local.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Christ Church Meadow e Covered Market",
                description: "Passear pelo Christ Church Meadow para vistas gratuitas do famoso college e explorar o vibrante mercado coberto.",
                type: "passeio",
                icon: "fas fa-shopping-basket"
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
                description: "Jantar próximo ao hotel após o retorno de Oxford.",
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
                description: "Café da manhã antes de iniciar o dia.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "The National Gallery (Visita Curada)",
                description: "Visita focada de 90 minutos para ver obras como 'Girassóis' de Van Gogh e 'O Retrato de Arnolfini' de Jan van Eyck.",
                type: "cultura",
                icon: "fas fa-palette"
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
                description: "Explorar a atmosfera e as cores do mercado. Almoço na região.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Shakespeare's Globe e Tate Modern",
                description: "Ver os famosos edifícios pelo lado de fora durante a caminhada.",
                type: "cultura",
                icon: "fas fa-theater-masks"
            },
            {
                time: "19:00",
                title: "Jantar (?)",
                description: "Jantar em um restaurante na região da South Bank.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 6: Mercados e Música
    {
        day: 6,
        date: "28/Jan (Qua)",
        title: "Mercados, Música e Modernidade",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Explorar o lado alternativo e criativo de Londres.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Café da manhã antes de ir para Camden.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Explorar Camden Town",
                description: "Visitar o famoso Camden Market e caminhar ao longo do Regent's Canal.",
                type: "passeio",
                icon: "fas fa-guitar"
            },
            {
                time: "13:00",
                title: "Almoço em Camden (?)",
                description: "Aproveitar as diversas opções de comida de rua do mercado.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Abbey Road",
                description: "Pegar o ônibus nº 139 para visitar a icônica passadeira imortalizada pelos Beatles.",
                type: "cultura",
                icon: "fas fa-music"
            },
            {
                time: "16:30",
                title: "Passeio no Regent's Park",
                description: "Caminhada relaxante por um dos mais belos Parques Reais de Londres.",
                type: "passeio",
                icon: "fas fa-leaf"
            },
            {
                time: "19:00",
                title: "Jantar (?)",
                description: "Jantar em um restaurante a ser definido.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 7: Ícones de Londres
    {
        day: 7,
        date: "29/Jan (Qui)",
        title: "Ícones de Londres: Tower Bridge e História",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Um dia focado no marco mais reconhecível da cidade e no seu coração histórico.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Café da manhã antes de explorar a área da Torre.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:00",
                title: "Torre de Londres e Tower Bridge",
                description: "Metrô até Tower Hill. Caminhar pelo perímetro da Torre e atravessar a pé a icônica Tower Bridge (gratuito).",
                type: "passeio",
                icon: "fas fa-chess"
            },
            {
                time: "13:00",
                title: "Almoço na Margem Sul (?)",
                description: "Almoçar na área perto da City Hall, com vistas da ponte.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Catedral de St. Paul's",
                description: "Caminhar pela margem sul, atravessar a Millennium Bridge para a vista perfeita da Catedral de St. Paul.",
                type: "cultura",
                icon: "fas fa-church"
            },
            {
                time: "19:00",
                title: "Jantar de Despedida (?)",
                description: "Último jantar em Londres.",
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
        city: "Londres ✈️ Lisboa",
        countryFlag: "🇬🇧✈️🇵🇹",
        objective: "Uma manhã final em Londres, seguida de um voo para Lisboa e uma primeira noite imersiva.",
        events: [
            {
                time: "09:00",
                title: "Café da Manhã (?)",
                description: "Último café da manhã em Londres.",
                type: "refeicao",
                icon: "fas fa-coffee"
            },
            {
                time: "10:30",
                title: "Manhã Livre em King's Cross",
                description: "Visitar a Plataforma 9 ¾ na estação ou fazer uma última caminhada pelo Russell Square.",
                type: "passeio",
                icon: "fas fa-magic"
            },
            {
                time: "12:00",
                title: "Almoço (?)",
                description: "Último almoço em Londres, próximo ao hotel.",
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
                icon: "fas fa-subway"
            },
            {
                time: "22:15",
                title: "Check-in no Hotel Inn Rossio",
                description: "Check-in e breve caminhada pela Praça do Rossio e Praça da Figueira.",
                type: "hospedagem",
                icon: "fas fa-bed"
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
                icon: "fas fa-archway"
            },
            {
                time: "13:00",
                title: "Almoço no Chiado (?)",
                description: "Almoçar no boêmio bairro do Chiado.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Chiado e Convento do Carmo",
                description: "Subir ao Chiado, visitar o Largo do Carmo e ver as ruínas do Convento (exterior gratuito).",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "17:00",
                title: "Miradouro de São Pedro de Alcântara",
                description: "Desfrutar da vista panorâmica sobre a cidade, uma alternativa gratuita e mais ampla à vista do Elevador de Santa Justa.",
                type: "passeio",
                icon: "fas fa-image"
            },
            {
                time: "19:30",
                title: "Jantar (?)",
                description: "Jantar na região do Bairro Alto ou Chiado.",
                type: "refeicao",
                icon: "fas fa-utensils"
            }
        ]
    },
    // Dia 10: Belém
    {
        day: 10,
        date: "01/Fev (Dom)",
        title: "A Era dos Descobrimentos em Belém",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Uma imersão na história marítima de Portugal, visitando os monumentos que celebram a Era dos Descobrimentos.",
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
                icon: "fas fa-church"
            },
            {
                time: "12:00",
                title: "Padrão dos Descobrimentos e Torre de Belém",
                description: "Caminhar ao longo do rio para ver os monumentos icônicos (exteriores).",
                type: "passeio",
                icon: "fas fa-monument"
            },
            {
                time: "13:30",
                title: "Almoço em Belém (?)",
                description: "Almoçar na região.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Pastéis de Belém",
                description: "Passar pela famosa pastelaria para ver onde a receita original foi criada.",
                type: "refeicao",
                icon: "fas fa-cookie-bite"
            },
            {
                time: "19:30",
                title: "Jantar (?)",
                description: "Jantar em um restaurante a ser definido.",
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
                icon: "fas fa-binoculars"
            },
            {
                time: "13:00",
                title: "Almoço em Alfama (?)",
                description: "Almoçar em um restaurante típico do bairro.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Explorar Alfama",
                description: "Descer pelas ruelas, parando nos Miradouros das Portas do Sol e de Santa Luzia.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "16:30",
                title: "Sé de Lisboa",
                description: "Visitar a imponente Catedral de Lisboa (entrada gratuita) antes de voltar para a Baixa.",
                type: "cultura",
                icon: "fas fa-cross"
            },
            {
                time: "19:30",
                title: "Jantar de Despedida (?)",
                description: "Jantar especial para a última noite em Lisboa.",
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
        city: "Lisboa ✈️ Brasil",
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
                icon: "fas fa-shopping-bag"
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
                icon: "fas fa-plane-departure"
            }
        ]
    }
];
