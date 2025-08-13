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
        title: "Chegada, Trânsito e Primeiras Impressões",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Garantir um transfer do aeroporto para o hotel que seja suave, económico e com o mínimo de stress após um voo de longo curso.",
        events: [
            {
                time: "18:55",
                title: "Aterragem em Heathrow (LHR)",
                description: "Passar pela imigração e recolha de bagagens. O processo pode levar de 60 a 90 minutos.",
                type: "chegada",
                icon: "fas fa-plane-arrival"
            },
            {
                time: "20:30",
                title: "Transporte para o Hotel",
                description: "Apanhar a Linha Piccadilly do Metro (Tube) diretamente de Heathrow para a estação King's Cross St. Pancras. É a opção mais barata e direta.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "21:30",
                title: "Check-in no Central Hotel",
                description: "Check-in e acomodação no hotel, localizado em Argyle Street, a poucos passos da estação.",
                type: "hospedagem",
                icon: "fas fa-bed"
            },
            {
                time: "22:00",
                title: "Passeio Leve e Descanso",
                description: "Uma curta caminhada pela área para ver a arquitetura da Estação de St. Pancras e as fontes iluminadas na Granary Square.",
                type: "passeio",
                icon: "fas fa-walking"
            }
        ]
    },
    // Dia 2: Poder Real e Político
    {
        day: 2,
        date: "24/Jan (Sáb)",
        title: "Um Passeio pelo Poder Real e Político",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Uma imersão de dia inteiro nos marcos políticos e reais mais icónicos de Londres, otimizada para uma rota a pé lógica e de baixo custo.",
        events: [
            {
                time: "09:00",
                title: "Início em Westminster",
                description: "Apanhar o metro em King's Cross para a estação de Westminster para vistas imediatas do Big Ben e das Casas do Parlamento.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "09:30",
                title: "Parliament Square e Abadia",
                description: "Admirar a arquitetura da Abadia de Westminster pelo exterior.",
                type: "passeio",
                icon: "fas fa-gavel"
            },
            {
                time: "11:00",
                title: "Troca da Guarda da Vida do Rei",
                description: "Assistir à cerimónia na Horse Guards Parade, uma alternativa impressionante e menos concorrida à do Palácio de Buckingham.",
                type: "cultura",
                icon: "fas fa-chess-rook"
            },
            {
                time: "12:00",
                title: "St. James's Park e Palácio",
                description: "Passeio cénico pelo parque até à fachada do Palácio de Buckingham para fotografias.",
                type: "passeio",
                icon: "fas fa-camera-retro"
            },
            {
                time: "14:00",
                title: "Trafalgar Square e National Gallery",
                description: "Caminhar até Trafalgar Square. Visita gratuita à National Gallery para ver obras-primas de Van Gogh e Monet.",
                type: "cultura",
                icon: "fas fa-palette"
            }
        ]
    },
    // Dia 3: Conhecimento e West End
    {
        day: 3,
        date: "25/Jan (Dom)",
        title: "Um Mundo de Conhecimento e Maravilhas do West End",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Combinar uma visita a um museu de classe mundial com a energia vibrante do coração do entretenimento de Londres.",
        events: [
            {
                time: "10:00",
                title: "British Museum (Grátis)",
                description: "Caminhada de 15 minutos do hotel. Focar em tesouros como a Pedra de Roseta e as múmias egípcias (3-4 horas).",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "14:00",
                title: "Covent Garden",
                description: "Passeio para sul até ao bairro de Covent Garden para assistir aos artistas de rua e explorar o Apple Market.",
                type: "passeio",
                icon: "fas fa-masks-theater"
            },
            {
                time: "17:00",
                title: "Leicester Square e Piccadilly Circus",
                description: "Ao anoitecer, passear pela zona dos teatros e ver os famosos painéis digitais de Piccadilly Circus.",
                type: "passeio",
                icon: "fas fa-video"
            }
        ]
    },
    // Dia 4: Oxford
    {
        day: 4,
        date: "26/Jan (Seg)",
        title: "Excursão Académica a Oxford",
        city: "Oxford",
        countryFlag: "🇬🇧",
        objective: "Uma viagem de um dia, eficiente e económica, para vivenciar a atmosfera histórica e académica de Oxford.",
        events: [
            {
                time: "08:30",
                title: "Viagem de Comboio para Oxford",
                description: "Apanhar o metro para a Estação de Paddington e, de lá, o comboio da GWR para Oxford (45-60 min). Reservar com antecedência!",
                type: "transporte",
                icon: "fas fa-train"
            },
            {
                time: "10:00",
                title: "Passeio Autoguiado (Grátis)",
                description: "Caminhada pelo centro histórico, focando no exterior de Christ Church, Radcliffe Camera, Biblioteca Bodleian e outros colleges.",
                type: "passeio",
                icon: "fas fa-university"
            },
            {
                time: "13:00",
                title: "Almoço e Exploração Livre",
                description: "Almoçar e explorar os pátios de colleges com entrada gratuita, como Keble ou St John's (verificar acesso online).",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "18:00",
                title: "Retorno a Londres",
                description: "Apanhar o comboio pré-reservado de volta para Londres Paddington.",
                type: "transporte",
                icon: "fas fa-train"
            }
        ]
    },
    // Dia 5: South Bank
    {
        day: 5,
        date: "27/Jan (Ter)",
        title: "Cultura de South Bank e Pontes Icónicas",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Explorar a vibrante margem sul do Tamisa, combinando gastronomia, cultura e vistas icónicas.",
        events: [
            {
                time: "10:00",
                title: "Borough Market",
                description: "Apanhar o metro para London Bridge e mergulhar num dos mercados alimentares mais antigos de Londres.",
                type: "refeicao",
                icon: "fas fa-shopping-basket"
            },
            {
                time: "12:00",
                title: "Passeio pela South Bank",
                description: "Caminhada cénica passando pelo Golden Hinde e pelo exterior do Shakespeare's Globe Theatre.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "14:00",
                title: "Tate Modern (Grátis)",
                description: "Visitar a coleção de arte moderna e contemporânea.",
                type: "cultura",
                icon: "fas fa-palette"
            },
            {
                time: "16:00",
                title: "Millennium Bridge e St. Paul's",
                description: "Atravessar a ponte para a vista perfeita da Catedral de St. Paul.",
                type: "passeio",
                icon: "fas fa-church"
            },
            {
                time: "18:00",
                title: "Vistas Noturnas",
                description: "Caminhar para leste para vistas noturnas iluminadas da Tower Bridge e da Torre de Londres.",
                type: "passeio",
                icon: "fas fa-moon"
            }
        ]
    },
    // Dia 6: Milha dos Museus
    {
        day: 6,
        date: "28/Jan (Qua)",
        title: "A Milha dos Museus de South Kensington",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Um dia de imersão em conhecimento e natureza, com a flexibilidade de escolher entre museus de classe mundial.",
        events: [
            {
                time: "10:00",
                title: "Viagem para South Kensington",
                description: "Apanhar a Linha Piccadilly diretamente de King's Cross para a 'Museum Row'.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "10:30",
                title: "Escolha de Museu (Grátis)",
                description: "Escolher um ou dois museus para explorar: Natural History Museum, Science Museum ou o V&A (arte e design).",
                type: "cultura",
                icon: "fas fa-university"
            },
            {
                time: "15:00",
                title: "Passeio no Hyde Park",
                description: "Após os museus, uma caminhada relaxante pelo adjacente Hyde Park em direção ao lago Serpentine.",
                type: "passeio",
                icon: "fas fa-tree"
            }
        ]
    },
    // Dia 7: Vistas e Explorações Finais
    {
        day: 7,
        date: "29/Jan (Qui)",
        title: "Vistas Contemporâneas e Explorações Finais",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Desfrutar de vistas panorâmicas da cidade e oferecer flexibilidade para explorar um bairro à escolha do grupo.",
        events: [
            {
                time: "10:00",
                title: "Sky Garden (Grátis)",
                description: "Visita ao jardim público mais alto de Londres para vistas de 360 graus. Requer reserva online com 3 semanas de antecedência!",
                type: "passeio",
                icon: "fas fa-seedling"
            },
            {
                time: "13:00",
                title: "Tarde Flexível",
                description: "Escolha do grupo: Opção A (charme de Notting Hill) ou Opção B (vibração eclética de Camden).",
                type: "passeio",
                icon: "fas fa-random"
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
        objective: "Uma manhã final em Londres, seguida de um voo para Lisboa e uma primeira noite atmosférica.",
        events: [
            {
                time: "10:00",
                title: "Manhã Livre em King's Cross",
                description: "Após o check-out, visitar a Plataforma 9 ¾ e a Galeria de Tesouros da British Library (grátis).",
                type: "cultura",
                icon: "fas fa-book-open"
            },
            {
                time: "14:30",
                title: "Viagem para Heathrow (LHR)",
                description: "Apanhar a Linha Piccadilly em King's Cross para uma viagem direta de 1 hora até ao aeroporto.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "18:30",
                title: "Voo para Lisboa (LIS)",
                description: "Partida do voo de Londres para Lisboa.",
                type: "partida",
                icon: "fas fa-plane-departure"
            },
            {
                time: "21:15",
                title: "Chegada e Transporte em Lisboa",
                description: "Apanhar o Metro (Linha Vermelha > Linha Verde) para a estação Rossio. Comprar e carregar o cartão 'Navegante'.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "22:30",
                title: "Check-in e Passeio no Rossio",
                description: "Check-in no Hotel Inn Rossio e um breve passeio para absorver a atmosfera da praça.",
                type: "hospedagem",
                icon: "fas fa-bed"
            }
        ]
    },
    // Dia 9: Alfama
    {
        day: 9,
        date: "31/Jan (Sáb)",
        title: "A Alma de Alfama e Vistas Deslumbrantes",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Um dia dedicado a explorar o bairro mais antigo de Lisboa, culminando com um pôr do sol inesquecível.",
        events: [
            {
                time: "10:00",
                title: "Passeio por Alfama",
                description: "Começar na Sé de Lisboa e subir pelas ruas labirínticas.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "12:00",
                title: "Miradouros de Alfama",
                description: "Paragem nos Miradouros de Santa Luzia e das Portas do Sol para as vistas mais icónicas sobre os telhados e o rio.",
                type: "passeio",
                icon: "fas fa-camera"
            },
            {
                time: "14:00",
                title: "Almoço e Castelo (Exterior)",
                description: "Almoçar em Alfama e desfrutar das vistas das áreas públicas em redor do Castelo de São Jorge.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "17:00",
                title: "Pôr do Sol no Miradouro",
                description: "Dirigir-se ao Miradouro da Graça ou ao Miradouro da Senhora do Monte para vistas panorâmicas ao pôr do sol.",
                type: "passeio",
                icon: "fas fa-sun"
            }
        ]
    },
    // Dia 10: Belém
    {
        day: 10,
        date: "01/Fev (Dom)",
        title: "A Idade de Ouro dos Descobrimentos em Belém",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Uma viagem de meio dia ao monumental bairro ribeirinho de Belém, dedicado à Era dos Descobrimentos de Portugal.",
        events: [
            {
                time: "09:30",
                title: "Viagem para Belém",
                description: "Apanhar o cénico Elétrico 15E na Praça da Figueira ou na Praça do Comércio.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "10:30",
                title: "Mosteiro dos Jerónimos",
                description: "Visitar a igreja principal (gratuita) e admirar a arquitetura manuelina.",
                type: "cultura",
                icon: "fas fa-church"
            },
            {
                time: "12:00",
                title: "Padrão dos Descobrimentos e Torre de Belém",
                description: "Caminhar ao longo do rio para ver os monumentos icónicos (exteriores).",
                type: "passeio",
                icon: "fas fa-monument"
            },
            {
                time: "14:00",
                title: "Tarde Livre",
                description: "Regressar ao centro e ter a tarde livre para revisitar um local ou explorar uma nova área.",
                type: "passeio",
                icon: "fas fa-compass"
            }
        ]
    },
    // Dia 11: Baixa-Chiado
    {
        day: 11,
        date: "02/Fev (Seg)",
        title: "Grandeza da Baixa-Chiado e um Miradouro Inteligente",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Explorar a baixa a pé e usar uma dica de especialista para obter vistas panorâmicas sem custo.",
        events: [
            {
                time: "10:00",
                title: "Explorar a Baixa",
                description: "Caminhar pela Rua Augusta, passar sob o Arco e chegar à magnífica Praça do Comércio.",
                type: "passeio",
                icon: "fas fa-archway"
            },
            {
                time: "13:00",
                title: "Convento do Carmo e Elevador (Grátis)",
                description: "Subir ao Chiado, visitar as ruínas do Convento do Carmo e usar a passagem pública para aceder à vista do Elevador de Santa Justa sem pagar.",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "17:00",
                title: "Pôr do Sol no Miradouro de São Pedro de Alcântara",
                description: "Desfrutar de uma vista clássica de postal da cidade enquanto o sol se põe.",
                type: "passeio",
                icon: "fas fa-sun"
            }
        ]
    },
    // Dia 12: Partida de Lisboa
    {
        day: 12,
        date: "03/Fev (Ter)",
        title: "Despedida Final (Até a Próxima)",
        city: "Lisboa ✈️ Brasil",
        countryFlag: "🇵🇹✈️🇧🇷",
        objective: "Uma manhã final descontraída antes de uma partida suave para o aeroporto.",
        events: [
            {
                time: "09:00",
                title: "Manhã Livre",
                description: "Último pequeno-almoço português ou compras de última hora na Rua Augusta.",
                type: "passeio",
                icon: "fas fa-shopping-bag"
            },
            {
                time: "09:30",
                title: "Transporte para o Aeroporto",
                description: "Apanhar o Metro no Rossio (Linha Verde > Linha Vermelha) para o Aeroporto de Lisboa (LIS).",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "12:30",
                title: "Voo de Regresso ao Brasil (GRU)",
                description: "Embarque no voo de volta.",
                type: "partida",
                icon: "fas fa-plane-departure"
            }
        ]
    }
];
