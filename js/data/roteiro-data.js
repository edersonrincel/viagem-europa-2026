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
                description: "Pegar a Piccadilly Line (direção Cockfosters) diretamente de Heathrow para a estação King's Cross St. Pancras.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "21:00",
                title: "Check-in no Central Hotel",
                description: "Check-in e acomodação no hotel. A saída correta da estação é a sinalizada como 'Euston Road'.",
                type: "hospedagem",
                icon: "fas fa-bed"
            },
            {
                time: "21:30",
                title: "Caminhada Opcional",
                description: "Breve caminhada pela Argyle Square para se familiarizar com o bairro.",
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
                time: "09:00",
                title: "Transporte para Green Park",
                description: "De King's Cross, pegar a Victoria Line (sentido sul) por 3 paradas até a estação Green Park.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "09:30",
                title: "Palácio de Buckingham (Exterior)",
                description: "Caminhar pelo Green Park em direção ao palácio para a icônica fotografia.",
                type: "passeio",
                icon: "fas fa-camera-retro"
            },
            {
                time: "11:00",
                title: "Troca da Guarda da Cavalaria Real",
                description: "Assistir à cerimônia na Horse Guards Parade, uma alternativa menos lotada e igualmente impressionante.",
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
                time: "13:00",
                title: "Abadia de Westminster e Ponte",
                description: "Admirar a Abadia pelo lado de fora e atravessar a Ponte de Westminster para a clássica foto do Parlamento e da London Eye.",
                type: "cultura",
                icon: "fas fa-church"
            },
            {
                time: "14:00",
                title: "Almoço na Região",
                description: "Pausa para o almoço na área de Westminster ou South Bank.",
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
                time: "10:00",
                title: "British Museum (Visita Curada)",
                description: "Caminhada de 15-20 min do hotel. Focar em destaques: Pedra de Roseta, Esculturas do Partenon e a estátua da Ilha de Páscoa.",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "12:00",
                title: "Almoço e Exploração de Covent Garden",
                description: "Almoçar na região e explorar o mercado, assistindo aos artistas de rua gratuitos na praça.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Leicester Square e Chinatown",
                description: "Passeio pelo coração do cinema londrino e pelos portões coloridos de Chinatown.",
                type: "passeio",
                icon: "fas fa-film"
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
                title: "Almoço e Christ Church Meadow",
                description: "Almoçar em Oxford e passear pelo Christ Church Meadow para vistas gratuitas do famoso college.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "15:00",
                title: "Explorar o Covered Market",
                description: "Visitar o vibrante mercado coberto para um vislumbre da vida local.",
                type: "passeio",
                icon: "fas fa-shopping-basket"
            },
            {
                time: "18:00",
                title: "Retorno a Londres",
                description: "Pegar o trem pré-reservado de volta para Londres Paddington.",
                type: "transporte",
                icon: "fas fa-train"
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
                title: "Almoço no Borough Market",
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
                time: "10:00",
                title: "Explorar Camden Town",
                description: "Visitar o famoso Camden Market e caminhar ao longo do Regent's Canal.",
                type: "passeio",
                icon: "fas fa-guitar"
            },
            {
                time: "13:00",
                title: "Almoço em Camden",
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
                time: "10:00",
                title: "Torre de Londres e Tower Bridge",
                description: "Metrô até Tower Hill. Caminhar pelo perímetro da Torre e atravessar a pé a icônica Tower Bridge (gratuito).",
                type: "passeio",
                icon: "fas fa-chess"
            },
            {
                time: "13:00",
                title: "Almoço na Margem Sul",
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
                time: "Manhã",
                title: "Manhã Livre em King's Cross",
                description: "Visitar a Plataforma 9 ¾ na estação ou fazer uma última caminhada pelo Russell Square.",
                type: "passeio",
                icon: "fas fa-magic"
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
                time: "Manhã",
                title: "Explorar a Baixa Pombalina",
                description: "Caminhar pela Rua Augusta, passar sob o Arco e chegar à Praça do Comércio.",
                type: "passeio",
                icon: "fas fa-archway"
            },
            {
                time: "Tarde",
                title: "Chiado e Convento do Carmo",
                description: "Subir ao Chiado, visitar o Largo do Carmo e ver as ruínas do Convento (exterior gratuito).",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "Fim de Tarde",
                title: "Miradouro de São Pedro de Alcântara",
                description: "Desfrutar da vista panorâmica sobre a cidade, uma alternativa gratuita e mais ampla à vista do Elevador de Santa Justa.",
                type: "passeio",
                icon: "fas fa-image"
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
                time: "Manhã",
                title: "Viagem para Belém",
                description: "Pegar o cênico Bonde 15E na Praça da Figueira.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "Manhã",
                title: "Mosteiro dos Jerônimos (Igreja)",
                description: "Visitar a igreja principal (entrada gratuita) e admirar a arquitetura manuelina.",
                type: "cultura",
                icon: "fas fa-church"
            },
            {
                time: "Tarde",
                title: "Padrão dos Descobrimentos e Torre de Belém",
                description: "Caminhar ao longo do rio para ver os monumentos icônicos (exteriores).",
                type: "passeio",
                icon: "fas fa-monument"
            },
            {
                time: "Tarde",
                title: "Pastéis de Belém",
                description: "Passar pela famosa pastelaria para ver onde a receita original foi criada.",
                type: "refeicao",
                icon: "fas fa-cookie-bite"
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
                time: "Manhã",
                title: "Passeio no Elétrico 28",
                description: "Pegar o famoso bonde na Praça Martim Moniz para uma viagem cênica até a Graça.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "Manhã",
                title: "Miradouros da Graça",
                description: "Começar pelo ponto mais alto no Miradouro da Senhora do Monte e depois descer para o Miradouro da Graça.",
                type: "passeio",
                icon: "fas fa-binoculars"
            },
            {
                time: "Tarde",
                title: "Explorar Alfama",
                description: "Descer pelas ruelas, parando nos Miradouros das Portas do Sol e de Santa Luzia.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "Fim de Tarde",
                title: "Sé de Lisboa",
                description: "Visitar a imponente Catedral de Lisboa (entrada gratuita) antes de voltar para a Baixa.",
                type: "cultura",
                icon: "fas fa-cross"
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
                time: "Manhã",
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
