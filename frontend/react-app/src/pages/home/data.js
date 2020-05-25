const itemOptions = [
    {
        title: 'Цвет',
        items: [
            {
                value: 'white',
                label: 'Белый',
            },
            {
                value: 'black',
                label: 'Черный',
            },
            {
                value: 'red',
                label: 'Красный',
            },
        ]
    },
    {
        title: 'Размер',
        items: [
            {
                value: 'S',
                label: 'S',
            },
            {
                value: 'M',
                label: 'M',
            },
            {
                value: 'XL',
                label: 'XL',
            },
        ]
    },
];

export const pageData = {
    big: [
        {
            image: require("../../assets/images/big-banner-men.png"),
            btnText: "МУЖЧИНАМ",
            href: '/catalog?type=men'
        },
        {
            image: require("../../assets/images/big-banner-women.png"),
            btnText: "ЖЕНЩИНАМ",
            href: '/catalog?type=women'
        },
    ],
    small1: [
        {
            image: require("../../assets/images/small_banner_1.png"),
            btnText: "Мужская обувь",
        },
        {
            image: require("../../assets/images/small_banner_2.png"),
            btnText: "Женская обувь",
        },
    ],
    accessories: [
        {
            image: require("../../assets/images/small_banner_3.png"),
            btnText: "Сумки",
        },
        {
            image: require("../../assets/images/small_banner_4.png"),
            btnText: "Кошельки и портмоне",
        },
        {
            image: require("../../assets/images/small_banner_5.png"),
            btnText: "Часы",
        },
        {
            image: require("../../assets/images/small_banner_6.png"),
            btnText: "Ремни",
        },
    ],
    catalogList: {
        pages: 5,
        list: [
            {
                id: 1,
                image: require("../../assets/images/catalog1.png"),
                image_hover: require("../../assets/images/catalog2.png"),
                title: "Футболка красная AR 95356",
                price: "2400,00 руб",
                photos: [
                    {
                        original: require("../../assets/images/catalog2.png"),
                        thumbnail: require("../../assets/images/catalog2.png"),
                    },
                ],
                description: "С другой стороны консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений",
                options: itemOptions
            },
            {
                id: 2,
                image: require("../../assets/images/catalog1.png"),
                image_hover: require("../../assets/images/catalog2.png"),
                title: "Футболка красная AR 95356",
                price: "2400,00 руб",
                photos: [
                    {
                        original: require("../../assets/images/catalog2.png"),
                        thumbnail: require("../../assets/images/catalog2.png"),
                    },
                ],
                description: "С другой стороны консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений",
                options: itemOptions,
            },
            {
                id: 3,
                image: require("../../assets/images/catalog1.png"),
                image_hover: require("../../assets/images/catalog2.png"),
                title: "Футболка красная AR 95356",
                price: "2400,00 руб",
                photos: [
                    {
                        original: require("../../assets/images/catalog2.png"),
                        thumbnail: require("../../assets/images/catalog2.png"),
                    },
                ],
                description: "С другой стороны консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений",
                options: itemOptions,
            },
            {
                id: 4,
                image: require("../../assets/images/catalog1.png"),
                image_hover: require("../../assets/images/catalog2.png"),
                title: "Футболка красная AR 95356",
                price: "2400,00 руб",
                photos: [
                    {
                        original: require("../../assets/images/catalog2.png"),
                        thumbnail: require("../../assets/images/catalog2.png"),
                    },
                ],
                description: "С другой стороны консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений",
                options: itemOptions,
            },
            {
                id: 5,
                image: require("../../assets/images/catalog1.png"),
                image_hover: require("../../assets/images/catalog2.png"),
                title: "Футболка красная AR 95356",
                price: "2400,00 руб",
                photos: [
                    {
                        original: require("../../assets/images/catalog2.png"),
                        thumbnail: require("../../assets/images/catalog2.png"),
                    },
                ],
                description: "С другой стороны консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений",
                options: itemOptions,
            },
        ]
    },
};
