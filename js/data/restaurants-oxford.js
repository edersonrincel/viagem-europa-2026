// js/data/restaurants-oxford.js

/**
 * @file Coném os dados dos restaurantes com opções sem glúten em Oxford.
 * Cada objeto representa um restaurante e inclui detalhes como nome, endereço,
 * nível de segurança, preço e recomendações
 */

export const oxfordRestaurants = [
        {
            name: "Bbuona",
            addresses: [{ address: "102 Gloucester Grn, Oxford OX1 2DF, Reino Unido", lat: 51.7543119, lng: -1.2612759 }],
            cuisine: "Italiano",
            safety: { text: "A 'pinsa' sem glúten é cozinhada num forno separado.", level: "safe" },
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
            safety: { text: "Utiliza um forno separado para a confeção de pizzas sem glúten.", level: "safe" },
            price: "££",
            recommendation: "Uma verdadeira instituição em Oxford, famosa pelas suas premiadas pizzas sem glúten e uma das opções mais seguras da cidade para os amantes de pizza.",
            mustTry: "Qualquer pizza da ementa em base sem glúten",
            link: "https://www.google.com.br/maps/place/The+White+Rabbit/@51.7544476,-1.2632956,17z/data=!4m7!3m6!1s0x4876c6af823e8251:0xec5c61f5d31b0dca!8m2!3d51.7544476!4d-1.2607207!10e9!16s%2Fg%2F11_s78_f5?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
        },
        /* Adição locais 11/08 */
        {
      name: "Côte Brasserie",
      addresses: [
        { address: "41-47 George St, Oxford OX1 2BE", lat: 51.7534155, lng: -1.2644236 }
      ],
      cuisine: "Francês",
      safety: { text: "Acreditada pela Coeliac UK, com menu dedicado e identificação visual para pratos GF.", level: "accredited" },
      price: "£££",
      recommendation: "Uma escolha fiável e sofisticada para uma refeição sentada, com a garantia de segurança da acreditação.",
      mustTry: "Menu sem glúten dedicado",
      link: "https://www.google.com/maps/place/C%C3%B4te+Oxford/@51.7534155,-1.2644236,17z/data=!4m7!3m6!1s0x4876c6a450b7927f:0x843c8e8d48c9a2e0!8m2!3d51.7534122!4d-1.2618487!10e9!16s%2Fg%2F1hhw6k3mk?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "PizzaExpress",
      addresses: [
        { address: "8 Golden Cross, Cornmarket St, Oxford OX1 3EX", lat: 51.7529, lng: -1.2575 }
      ],
      cuisine: "Pizza",
      safety: { text: "Acreditada pela Coeliac UK, com protocolos específicos.", level: "accredited" },
      price: "££",
      recommendation: "Torna a pizza, um prato de alto risco, acessível e seguro para celíacos em toda a cidade.",
      mustTry: "Pizza em base sem glúten",
      link: "https://www.google.com/maps/place/Pizza+Express/@51.75247,-1.2572825,698m/data=!3m1!1e3!4m7!3m6!1s0x4876c6af907d051d:0x52f1b17a3af04e6d!8m2!3d51.75247!4d-1.2572825!10e9!16s%2Fg%2F1tvq3mk4?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Prezzo",
      addresses: [
        { address: "Oxford Castle, 3 Oxford Castle, Oxford OX1 1AY", lat: 51.751, lng: -1.2625 }
      ],
      cuisine: "Italiano",
      safety: { text: "Oferece opções acreditadas pela Coeliac UK.", level: "accredited" },
      price: "££",
      recommendation: "Outra cadeia fiável para comida italiana segura.",
      mustTry: "Pratos do menu sem glúten acreditado",
      link: "https://www.google.com/maps/place/Prezzo+Italian+Restaurant+London+Glasshouse+St+Soho/@51.5106061,-0.136827,702m/data=!3m2!1e3!5s0x487604d43c6b155f:0xf3630e03c6f376ec!4m7!3m6!1s0x487604cdd7f7d6c3:0x8726d17d87d43dfc!8m2!3d51.5106061!4d-0.136827!10e9!16s%2Fg%2F11h1mtqp7?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        name: "Pizza Hut",
        addresses: [
          { address: "61, 63 George St, Oxford OX1 2BQ, Reino Unido", lat: 51.7537236, lng: -1.272311 }
    	],
        cuisine: "Pizza",
        safety: { text: "Certificado pela Coeliac UK.", level: "accredited" },
        price: "££",
        recommendation: "Outra opção confiável de fast-food para pizza, com bases quadradas sem glúten certificadas pela Coeliac UK.",
        mustTry: "Qualquer pizza clássica na base quadrada sem glúten.",
        link: "https://www.google.com/maps/place/Pizza+Hut/@51.5234981,-0.1747409,17z/data=!4m7!3m6!1s0x48761ab42ba6558d:0x9c2def3b574f2d10!8m2!3d51.5234981!4d-0.1747409!10e9!16s%2Fg%2F1tkf0f_t?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
    },
];