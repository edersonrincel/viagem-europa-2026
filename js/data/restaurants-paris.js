// js/data/restaurants-paris.js

/**
 * @file Coném os dados dos restaurantes com opções sem glúten em Paris.
 * Cada objeto representa um restaurante e inclui detalhes como nome, endereço,
 * nível de segurança, preço e recomendações
 */

export const parisRestaurants = [
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
        },
    ];