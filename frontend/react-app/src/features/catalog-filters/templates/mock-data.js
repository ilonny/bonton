export const categoriesMock = [
    {
        name: "Верхняя одежда",
        code: "top_dress",
    },
    {
        name: "Футболки",
        code: "t_shirts",
    },
    {
        name: "Джинсы и брюки",
        code: "pants",
    },
];

export const filtersMock = [
    {
        code: "color",
        name: "Цвет",
        items: [
            {
                code: "white",
                name: "Белый",
            },
            {
                code: "gray",
                name: "Серый",
            },
            {
                code: "black",
                name: "Черный",
            },
        ],
    },
    {
        code: "size",
        name: "Размер",
        items: [
            {
                code: "s",
                name: "32-34",
            },
            {
                code: "m",
                name: "34-36",
            },
            {
                code: "xl",
                name: "36-38",
            },
        ],
    },
    {
        code: "season",
        name: "Сезон",
        items: [
            {
                code: "winter",
                name: "Зима",
            },
            {
                code: "summer",
                name: "Лето",
            },
            {
                code: "spring",
                name: "Весна",
            },
        ],
    },
    {
        code: "sale",
        name: "Скидки",
        items: [
            {
                code: "1",
                name: "Со скидкой",
            },
            {
                code: "0",
                name: "Без скидки",
            },
        ],
    },
    {
        code: "price",
        name: "Цена",
        items: [
            {
                code: "price_min",
                name: "4900",
            },
            {
                code: "price_max",
                name: "16990",
            },
        ],
    },
];
