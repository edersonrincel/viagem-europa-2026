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
        title: "Chegada a Londres: De Heathrow a King's Cross",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Garantir um transfer do aeroporto para o hotel que seja suave, económico e com o mínimo de stress após um voo de longo curso.",
        events: [
            {
                time: "19:00",
                title: "Aterragem em Heathrow (LHR)",
                description: "Passar pela imigração e recolha de bagagens. Processo estimado de 60 a 90 minutos.",
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
                description: "Uma curta caminhada pela área de King's Cross para ver o exterior da estação de St. Pancras e as fontes na Granary Square.",
                type: "passeio",
                icon: "fas fa-walking"
            }
        ]
    },
    // Dia 2: Poder e Pompa
    {
        day: 2,
        date: "24/Jan (Sáb)",
        title: "Um Passeio pelo Poder e Pela Pompa",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Uma imersão de dia inteiro nos marcos políticos e reais mais icónicos de Londres, otimizada para uma rota a pé lógica e de baixo custo.",
        events: [
            {
                time: "09:00",
                title: "Início na Estação Green Park",
                description: "Apanhar a Linha Piccadilly de King's Cross até Green Park.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "09:30",
                title: "Palácio de Buckingham e The Mall",
                description: "Atravessar o Green Park para ver o Palácio de Buckingham e caminhar pela The Mall até Trafalgar Square.",
                type: "passeio",
                icon: "fas fa-chess-rook"
            },
            {
                time: "11:00",
                title: "National Gallery (Grátis)",
                description: "Visita à coleção permanente na Trafalgar Square, com obras de Da Vinci, Van Gogh, etc. (Duração sugerida: 1h).",
                type: "cultura",
                icon: "fas fa-palette"
            },
            {
                time: "13:00",
                title: "Caminhada por Whitehall",
                description: "Descer a Whitehall, passando pela Horse Guards Parade e pelo número 10 de Downing Street.",
                type: "passeio",
                icon: "fas fa-landmark"
            },
            {
                time: "14:00",
                title: "Parliament Square e Abadia",
                description: "Admirar as Casas do Parlamento (Big Ben) e a Abadia de Westminster (exterior). Opcional: assistir ao Evensong (gratuito) ao final da tarde.",
                type: "passeio",
                icon: "fas fa-gavel"
            },
            {
                time: "17:00",
                title: "Retorno ao Hotel",
                description: "Apanhar a Linha Jubilee de Westminster, com transbordo em Green Park para a Linha Piccadilly até King's Cross.",
                type: "transporte",
                icon: "fas fa-subway"
            }
        ]
    },
    // Dia 3: South Bank e Arte
    {
        day: 3,
        date: "25/Jan (Dom)",
        title: "South Bank, Borough Market e Arte Moderna",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Explorar as camadas vibrantes, modernas e históricas da margem sul do Tamisa, combinando gastronomia, cultura e vistas icónicas.",
        events: [
            {
                time: "10:00",
                title: "Ida para London Bridge",
                description: "Apanhar a Linha Northern de King's Cross até a estação London Bridge.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "10:30",
                title: "Borough Market",
                description: "Explorar um dos mercados alimentares mais famosos de Londres. Sugestão de almoço com comida de rua.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "12:30",
                title: "Caminhada pela South Bank",
                description: "Passeio cénico pela margem sul, passando pelo Golden Hinde, The Clink Prison e Shakespeare's Globe (exteriores).",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "14:30",
                title: "Tate Modern (Grátis)",
                description: "Visitar a coleção de arte moderna. Subir ao 10º andar para vistas panorâmicas da Catedral de St. Paul.",
                type: "cultura",
                icon: "fas fa-palette"
            },
            {
                time: "16:00",
                title: "Millennium Bridge e St. Paul's",
                description: "Atravessar a ponte pedonal para a vista clássica da Catedral de St. Paul.",
                type: "passeio",
                icon: "fas fa-church"
            },
            {
                time: "17:00",
                title: "Retorno ao Hotel",
                description: "Apanhar a Linha Central de St. Paul's, com transbordo em Holborn para a Linha Piccadilly até King's Cross.",
                type: "transporte",
                icon: "fas fa-subway"
            }
        ]
    },
    // Dia 4: Oxford
    {
        day: 4,
        date: "26/Jan (Seg)",
        title: "Um Dia em Oxford",
        city: "Oxford",
        countryFlag: "🇬🇧",
        objective: "Uma viagem de um dia, eficiente e económica, para vivenciar a atmosfera histórica e académica de Oxford.",
        events: [
            {
                time: "08:30",
                title: "Viagem de Comboio para Oxford",
                description: "Apanhar o comboio de London Marylebone (Chiltern, mais económico) ou Paddington (GWR, mais rápido). Reservar com antecedência!",
                type: "transporte",
                icon: "fas fa-train"
            },
            {
                time: "10:00",
                title: "Passeio Autoguiado (Grátis)",
                description: "Caminhada pelo exterior do Castelo de Oxford, Covered Market, Radcliffe Camera e Biblioteca Bodleian.",
                type: "passeio",
                icon: "fas fa-university"
            },
            {
                time: "13:00",
                title: "Almoço em Oxford",
                description: "Explorar as opções de almoço no centro da cidade ou no Covered Market.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:00",
                title: "Visita aos Colleges (Grátis)",
                description: "Explorar os pátios de colleges com entrada gratuita, como Keble College, Lincoln College e St John's College (verificar acesso online).",
                type: "cultura",
                icon: "fas fa-graduation-cap"
            },
            {
                time: "18:00",
                title: "Retorno a Londres",
                description: "Apanhar o comboio pré-reservado de volta para Londres.",
                type: "transporte",
                icon: "fas fa-train"
            }
        ]
    },
    // Dia 5: Museu Britânico e Camden
    {
        day: 5,
        date: "27/Jan (Ter)",
        title: "História, Cultura e Contracultura",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Combinar uma visita a um museu de classe mundial com a exploração de uma das subculturas mais únicas e vibrantes de Londres.",
        events: [
            {
                time: "09:30",
                title: "British Museum (Grátis)",
                description: "Caminhada de 16 min do hotel. Focar em exposições chave como a Pedra de Roseta e as múmias egípcias.",
                type: "cultura",
                icon: "fas fa-landmark"
            },
            {
                time: "13:00",
                title: "Ida para Camden Town",
                description: "Apanhar a Linha Northern de King's Cross para Camden Town.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "13:30",
                title: "Explorar Camden Market",
                description: "Passear pelo mercado, conhecido pela moda alternativa, artesanato e comida de rua internacional (sugestão de almoço).",
                type: "refeicao",
                icon: "fas fa-shopping-bag"
            },
            {
                time: "17:00",
                title: "Retorno ao Hotel",
                description: "Apanhar a Linha Northern diretamente de Camden Town de volta para King's Cross.",
                type: "transporte",
                icon: "fas fa-subway"
            }
        ]
    },
    // Dia 6: West London
    {
        day: 6,
        date: "28/Jan (Qua)",
        title: "Elegância de West London e a Milha dos Museus",
        city: "Londres",
        countryFlag: "🇬🇧",
        objective: "Vivenciar o charme de Notting Hill e oferecer uma escolha de museus gratuitos de classe mundial.",
        events: [
            {
                time: "09:30",
                title: "Ida para Notting Hill",
                description: "Apanhar a Linha Circle ou Hammersmith & City de King's Cross para Ladbroke Grove.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "10:00",
                title: "Explorar Notting Hill",
                description: "Caminhar pelo Portobello Road Market e admirar as famosas casas coloridas.",
                type: "passeio",
                icon: "fas fa-camera-retro"
            },
            {
                time: "13:00",
                title: "Ida para South Kensington",
                description: "Apanhar a Linha Circle ou District de Notting Hill Gate para South Kensington.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "13:30",
                title: "Escolha de Museu (Grátis)",
                description: "Visitar um dos três grandes museus: V&A (arte e design), Natural History Museum (dinossauros) ou Science Museum (tecnologia).",
                type: "cultura",
                icon: "fas fa-university"
            },
            {
                time: "17:00",
                title: "Retorno ao Hotel",
                description: "Apanhar a Linha Piccadilly diretamente de South Kensington para King's Cross.",
                type: "transporte",
                icon: "fas fa-subway"
            }
        ]
    },
    // Dia 7: Paris
    {
        day: 7,
        date: "29/Jan (Qui)",
        title: "Um Dia Turbulento em Paris",
        city: "Paris",
        countryFlag: "🇫🇷",
        objective: "Uma viagem de um dia de alta energia para capturar a essência de Paris, aproveitando a proximidade do terminal do Eurostar.",
        events: [
            {
                time: "07:00",
                title: "Partida com o Eurostar",
                description: "Embarcar no comboio em St. Pancras International (ao lado do hotel) para Paris Gare du Nord. (Viagem de ~2h20).",
                type: "transporte",
                icon: "fas fa-train"
            },
            {
                time: "10:30",
                title: "Chegada e Montmartre",
                description: "Comprar passe Navigo Jour. Apanhar o Métro para Barbès – Rochechouart e subir até à Basílica do Sacré-Cœur para vistas panorâmicas.",
                type: "passeio",
                icon: "fas fa-church"
            },
            {
                time: "12:30",
                title: "Île de la Cité",
                description: "Apanhar o Métro para Cité. Ver o exterior da Catedral de Notre-Dame e da Sainte-Chapelle.",
                type: "passeio",
                icon: "fas fa-landmark"
            },
            {
                time: "13:30",
                title: "Louvre e Jardin des Tuileries",
                description: "Caminhar até ao Museu do Louvre para fotos da pirâmide e passear pelo Jardin des Tuileries.",
                type: "passeio",
                icon: "fas fa-palette"
            },
            {
                time: "15:30",
                title: "Torre Eiffel",
                description: "Apanhar o Métro para Trocadéro para a vista mais icónica e fotogénica da Torre Eiffel.",
                type: "passeio",
                icon: "fas fa-broadcast-tower"
            },
            {
                time: "21:10",
                title: "Retorno a Londres",
                description: "Apanhar o último comboio Eurostar de volta para St. Pancras. (Chegar à estação com 90 min de antecedência).",
                type: "transporte",
                icon: "fas fa-train"
            }
        ]
    },
    // Dia 8: Viagem para Lisboa
    {
        day: 8,
        date: "30/Jan (Sex)",
        title: "Partida de Londres e Chegada a Lisboa",
        city: "Londres ✈️ Lisboa",
        countryFlag: "🇬🇧✈️🇵🇹",
        objective: "Uma manhã final descontraída em Londres, seguida de um transfer suave para o voo para Lisboa.",
        events: [
            {
                time: "09:00",
                title: "Manhã Livre em King's Cross",
                description: "Após o check-out, visitar a British Library (grátis) ou explorar a área comercial de Coal Drops Yard.",
                type: "cultura",
                icon: "fas fa-book-open"
            },
            {
                time: "12:00",
                title: "Voo para Lisboa (LIS)",
                description: "Transporte para o aeroporto (Gatwick ou Luton recomendado pela facilidade de acesso de comboio desde St. Pancras).",
                type: "transporte",
                icon: "fas fa-plane"
            },
            {
                time: "15:00",
                title: "Chegada e Transporte em Lisboa",
                description: "Apanhar o Metro (Linha Vermelha > Linha Verde) do aeroporto para a estação Rossio. Comprar e carregar o cartão 'Navegante'.",
                type: "transporte",
                icon: "fas fa-subway"
            },
            {
                time: "16:00",
                title: "Check-in no Inn Rossio Hotel",
                description: "Check-in no hotel, localizado no coração da cidade.",
                type: "hospedagem",
                icon: "fas fa-bed"
            },
            {
                time: "18:00",
                title: "Passeio pela Baixa",
                description: "Caminhada exploratória pela Praça do Rossio, Rua Augusta e Praça do Comércio junto ao rio Tejo.",
                type: "passeio",
                icon: "fas fa-walking"
            }
        ]
    },
    // Dia 9: Coração de Lisboa
    {
        day: 9,
        date: "31/Jan (Sáb)",
        title: "O Coração de Lisboa: Baixa, Chiado e Elétrico 28",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Explorar os elegantes bairros do centro da cidade e experienciar a icónica viagem no Elétrico 28 de forma estratégica.",
        events: [
            {
                time: "09:00",
                title: "Passeio pela Baixa e Chiado",
                description: "Caminhada autoguiada, vendo o Elevador de Santa Justa (de baixo), o Convento do Carmo e a Livraria Bertrand.",
                type: "passeio",
                icon: "fas fa-book"
            },
            {
                time: "13:00",
                title: "Almoço no Chiado",
                description: "Explorar as opções de restaurantes na área do Chiado.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "14:30",
                title: "Viagem Estratégica no Elétrico 28",
                description: "Apanhar o elétrico no seu ponto de partida em Campo de Ourique (Prazeres) para garantir um lugar sentado e desfrutar da viagem cénica por Alfama.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "17:00",
                title: "Fim de Tarde no Bairro Alto",
                description: "Explorar o Bairro Alto enquanto o sol se põe, antes de descer de volta para a Baixa.",
                type: "passeio",
                icon: "fas fa-glass-cheers"
            }
        ]
    },
    // Dia 10: Alfama
    {
        day: 10,
        date: "01/Fev (Dom)",
        title: "A Alma Antiga de Alfama",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Um dia dedicado a perder-se nas ruas labirínticas e históricas do bairro mais antigo de Lisboa.",
        events: [
            {
                time: "10:00",
                title: "Explorar Alfama a Pé",
                description: "Começar na Sé de Lisboa e subir pelas ruelas estreitas do bairro.",
                type: "passeio",
                icon: "fas fa-walking"
            },
            {
                time: "11:30",
                title: "Miradouros Incríveis",
                description: "Paragem nos Miradouros de Santa Luzia e das Portas do Sol para vistas deslumbrantes.",
                type: "passeio",
                icon: "fas fa-camera"
            },
            {
                time: "13:00",
                title: "Castelo de São Jorge (Exterior)",
                description: "Subir até às muralhas do castelo para desfrutar das vistas das áreas públicas gratuitas.",
                type: "passeio",
                icon: "fas fa-chess-rook"
            },
            {
                time: "14:00",
                title: "Almoço em Alfama",
                description: "Encontrar um restaurante tradicional para almoçar e absorver a atmosfera.",
                type: "refeicao",
                icon: "fas fa-utensils"
            },
            {
                time: "16:00",
                title: "Tarde Livre",
                description: "Continuar a explorar Alfama ou visitar a Feira da Ladra (se for dia de mercado).",
                type: "passeio",
                icon: "fas fa-shopping-cart"
            }
        ]
    },
    // Dia 11: Belém
    {
        day: 11,
        date: "02/Fev (Seg)",
        title: "Uma Excursão à Era dos Descobrimentos: Belém",
        city: "Lisboa",
        countryFlag: "🇵🇹",
        objective: "Uma viagem de meio dia ao monumental bairro ribeirinho de Belém.",
        events: [
            {
                time: "09:30",
                title: "Viagem para Belém",
                description: "Apanhar o Elétrico 15 na Praça da Figueira em direção a Belém.",
                type: "transporte",
                icon: "fas fa-tram"
            },
            {
                time: "10:00",
                title: "Pastéis de Belém",
                description: "Primeira paragem para provar os pastéis de nata originais.",
                type: "refeicao",
                icon: "fas fa-cookie-bite"
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
                title: "Retorno e Tarde Livre",
                description: "Regressar ao centro no Elétrico 15. Tarde livre para revisitar um local ou explorar a LX Factory.",
                type: "transporte",
                icon: "fas fa-tram"
            }
        ]
    },
    // Dia 12: Partida de Lisboa
    {
        day: 12,
        date: "03/Fev (Ter)",
        title: "Adeus, Lisboa",
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
    },
    // Dia 13: Chegada ao Brasil
    {
        day: 13,
        date: "04/Fev (Qua)",
        title: "De Volta Para Casa",
        city: "Brasil",
        countryFlag: "🇧🇷",
        objective: "Finalizar a jornada com o último voo doméstico.",
        events: [
            {
                time: "07:05",
                title: "Voo GRU -> XAP",
                description: "Voo final de Guarulhos para Chapecó.",
                type: "chegada",
                icon: "fas fa-plane-arrival"
            },
            {
                time: "08:40",
                title: "Chegada em Chapecó",
                description: "Fim da aventura!",
                type: "chegada",
                icon: "fas fa-home"
            }
        ]
    }
];