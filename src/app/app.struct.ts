export class Business {
    name: string;
    currentPrice: number;
    increasedRevenueRate: number;
    increasePercentage: number;
    icon: string;
    timeForRevenue: number;
    isBuyable: boolean;
    isActive: boolean;
    buyPrice: number;
    isAutomated: boolean;
    currentBusinessCount: number;
    constructor(config: Business) {
        Object.assign(this, config);
    }
}

export const businesses = [
    new Business({
        name: 'Lemonade Shop',
        currentPrice: 1,
        increasedRevenueRate: 1,
        increasePercentage: 7,
        timeForRevenue: 1,
        isBuyable: true,
        isActive: true,
        buyPrice: 4,
        icon: 'assets/icons/juice.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Newspaper',
        currentPrice: 60,
        increasedRevenueRate: 60,
        increasePercentage: 15,
        timeForRevenue: 3,
        isBuyable: false,
        isActive: false,
        buyPrice: 60,
        icon: 'assets/icons/newspaper.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Car Shop',
        currentPrice: 540,
        increasedRevenueRate: 540,
        increasePercentage: 7,
        timeForRevenue: 6,
        isBuyable: false,
        isActive: false,
        buyPrice: 540,
        icon: 'assets/icons/carwash.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Pizza Delivery',
        currentPrice: 8640,
        increasedRevenueRate: 8640,
        increasePercentage: 7,
        timeForRevenue: 12,
        isBuyable: false,
        isActive: false,
        buyPrice: 8640,
        icon: 'assets/icons/pizza.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Donut Shop',
        currentPrice: 103680,
        increasedRevenueRate: 103680,
        increasePercentage: 7,
        timeForRevenue: 60,
        isBuyable: false,
        isActive: false,
        buyPrice: 103680,
        icon: 'assets/icons/donut.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Shrimp Boat',
        currentPrice: 1224160,
        increasedRevenueRate: 1224160,
        increasePercentage: 7,
        timeForRevenue: 120,
        isBuyable: false,
        isActive: false,
        buyPrice: 1224160,
        icon: 'assets/icons/shrimp.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Hockey Team',
        currentPrice: 14929920,
        increasedRevenueRate: 14929920,
        increasePercentage: 7,
        timeForRevenue: 300,
        isBuyable: false,
        isActive: false,
        buyPrice: 14929920,
        icon: 'assets/icons/hockey.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
    new Business({
        name: 'Movie Studio',
        currentPrice: 179159040,
        increasedRevenueRate: 179159040,
        increasePercentage: 7,
        timeForRevenue: 600,
        isBuyable: false,
        isActive: false,
        buyPrice: 179159040,
        icon: 'assets/icons/film.svg',
        isAutomated: false,
        currentBusinessCount: 1,
    }),
];
