const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Keep the noise out, or in. You choose.",
        heroImage: "/images/Slider/02_2.jpg",
        images: [
            "/images/outdoor_plant/BetelLeaf_1.png",
            "/images/outdoor_plant/BetelLeaf_2.png",
            "/images/outdoor_plant/BetelLeaf_3.png",
            "/images/outdoor_plant/BetelLeaf_4.png",
        ],
        brand: "BloomHub",
        title: "Betel Leaf",
        info: "It needs a compatible tree or a long pole for support.",
        category: "outdoor",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/indoor_plant/Aralia_plant_1.png",
            "/images/indoor_plant/Aralia_plant_2.png",
            "/images/indoor_plant/Aralia_plant_3.png",
            "/images/indoor_plant/Aralia_plant_4.png",
        ],
        brand: "BloomHub",
        title: "Aralia Green Plant",
        info: "Spinach-shaped lacy leaves are what describe me. Some facts about me are that I am native to India and have significance in traditional medicine.",
        category: "indoor",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/boat131-3.png",
        images: [
            "/images/Hanging_plant/Calathea_1.png",
            "/images/Hanging_plant/Calathea_2.png",
            "/images/Hanging_plant/Calathea_3.png",
            "/images/Hanging_plant/Calathea_4.png",
        ],
        brand: "BloomHub",
        title: "Calathea Rufibarba Plant",
        info: "I come with multiple benefits like air purification, a natural humidifier, and good-looking foliage. Long sleek green leaves with curves on the edges is my signature look. ",
        category: "hanging",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/colourful/AglaonemaLipstick_1.png",
            "/images/colourful/AglaonemaLipstick_2.png",
            "/images/colourful/AglaonemaLipstick_3.png",
            "/images/colourful/AglaonemaLipstick_4.png",
        ],
        brand: "BloomHub",
        title: "boAt BassHeads 110",
        info: " colourful ",
        category: "colourful",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/indoor_plant/jade_plant_1.png",
            "/images/indoor_plant/jade_plant_2.png",
            "/images/indoor_plant/jade_plant_3.png",
            "/images/indoor_plant/jade_plant_4.png",
        ],
        brand: "BloomHub",
        title: "boAt Rockerz 410",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: " indoor ",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/Air_purifing_plant/Aralia_plant_1.png",
            "/images/Air_purifing_plant/Aralia_plant_2.png",
            "/images/Air_purifing_plant/Aralia_plant_3.png",
            "/images/Air_purifing_plant/Aralia_plant_4.png",
        ],
        brand: "BloomHub",
        title: "JBL Live 200BT",
        info: "In-Ear Wireless bonsai ",
        category: " Air_purifing_plant ",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage: "/images/products/sonyxb910n-1.png",
        images: [
            "/images/indoor_plant/money_plant_1.png",
            "/images/indoor_plant/money_plant_2.png",
            "/images/indoor_plant/money_plant_3.png",
            "/images/indoor_plant/money_plant_4.png",
        ],
        brand: "BloomHub",
        title: "Sony WH-XB910N",
        info: "Wireless Over-Ear Headphones",
        category: " indoor ",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/indoor_plant/peace_lily_1.png",
            "/images/indoor_plant/peace_lily_1.png",
            "/images/indoor_plant/peace_lily_1.png",
            "/images/indoor_plant/peace_lily_1.png",
        ],
        brand: "BloomHub",
        title: "JBL Tune 760NC",
        info: "Wireless Over-Ear NC Headphones",
        category: " indoor ",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/Air_purifing_plant/BetelLeaf_1.png",
            "/images/Air_purifing_plant/BetelLeaf_2.png",
            "/images/Air_purifing_plant/BetelLeaf_3.png",
            "/images/Air_purifing_plant/BetelLeaf_4.png",
        ],
        brand: "BloomHub",
        title: "boAt Rockerz 255",
        info: "In-Ear Wireless bonsai ",
        category: " Air_purifing_plant ",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/Hanging_plant/peace_lily_1.png",
            "/images/Hanging_plant/peace_lily_2.png",
            "/images/Hanging_plant/peace_lily_3.png",
            "/images/Hanging_plant/peace_lily_4.png",
        ],
        brand: "BloomHub",
        title: "JBL Wave 100",
        info: "In-Ear Truly Wireless Earbuds",
        category: "hanging",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "/images/Hanging_plant/Philodendron_1.png",
            "/images/Hanging_plant/Philodendron_2.png",
            "/images/Hanging_plant/Philodendron_3.png",
            "/images/Hanging_plant/Philodendron_4.png",
        ],
        brand: "BloomHub",
        title: "Sony WF-1000XM4",
        info: "Wireless In-Ear NC Headphones",
        category: " hanging ",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "/images/colourful/Calathea_red_1.png",
            "/images/colourful/Calathea_red_2.png",
            "/images/colourful/Calathea_red_3.png",
            "/images/colourful/Calathea_red_4.png",
        ],
        brand: "BloomHub",
        title: "boAt BassHeads 228",
        info: " colourful ",
        category: " colourful ",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/colourful/Sansevieria_1.png",
            "/images/colourful/Sansevieria_1.png",
            "/images/colourful/Sansevieria_1.png",
            "/images/colourful/Sansevieria_1.png",
        ],
        brand: "BloomHub",
        title: "JBL Endurance Run Sports",
        info: " colourful ",
        category: " colourful ",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "/images/Hanging_plant/spider_1.png",
            "/images/Hanging_plant/spider_2.png",
            "/images/Hanging_plant/spider_3.png",
            "/images/Hanging_plant/spider_4.png",
        ],
        brand: "BloomHub",
        title: "boAt Airdopes 203",
        info: "In-Ear Truly Wireless Earbuds",
        category: " hanging ",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "/images/outdoor_plant/Dieffenbachia_2.png",
            "/images/outdoor_plant/Dieffenbachia_3.png",
            "/images/outdoor_plant/Dieffenbachia_4.png",
            "/images/outdoor_plant/Dieffenbachia_2.png",
        ],
        brand: "BloomHub",
        title: "Sony WH-CH710N",
        info: "Wireless Over-Ear NC Headphones",
        category: " outdoor_plant ",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "/images/outdoor_plant/Calathea_1.png",
            "/images/outdoor_plant/Calathea_2.png",
            "/images/outdoor_plant/Calathea_3.png",
            "/images/outdoor_plant/Calathea_4.png"
        ],
        brand: "BloomHub",
        title: "JBL Tune 500BT",
        info: "On-Ear Wireless Headphones",
        category: "outdoor",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "/images/outdoor_plant/ZZred_1.png",
            "/images/outdoor_plant/ZZred_2.png",
            "/images/outdoor_plant/ZZred_3.png",
            "/images/outdoor_plant/ZZred_4.png"
        ],
        brand: "BloomHub",
        title: "boAt Airdopes 381",
        info: "In-Ear Wireless Earbuds",
        category: " hanging ",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "/images/colourful/Syngonium_1.png",
            "/images/colourful/Syngonium_2.png",
            "/images/colourful/Syngonium_3.png",
            "/images/colourful/Syngonium_4.png",
        ],
        brand: "BloomHub",
        title: "Sony MDR-EX14AP",
        info: " colourful ",
        category: " colourful ",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "/images/Air_purifing_plant/spider_1.png",
            "/images/Air_purifing_plant/spider_2.png",
            "/images/Air_purifing_plant/spider_3.png",
            "/images/Air_purifing_plant/spider_4.png",
        ],
        brand: "BloomHub",
        title: "Sony WI-XB400",
        info: "Wireless bonsai ",
        category: "Air_purifing_plant",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];

export default productsData;





