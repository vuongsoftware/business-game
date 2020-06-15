export class Manager {
    name: string;
    details: string;
    fees: number;
    constructor(config: Manager) {
        Object.assign(this, config);
    }
}

export const managers = [
    new Manager({
        name: 'Cobe Johnson',
        details: 'Runs Lemonade Stands',
        fees: 1000
    }),
    new Manager({
        name: 'Perry Black',
        details: 'Runs Newspaper Deliveries',
        fees: 10000
    }),
    new Manager({
        name: 'W.W Heisenbird',
        details: 'Runs Car Washes',
        fees: 100000
    }),
    new Manager({
        name: 'Mama Sean',
        details: 'Runs Pizza Deliveries',
        fees: 1000000
    }),
    new Manager({
        name: 'Jim Thorton',
        details: 'Runs Donut Shops',
        fees: 100000000
    }),
    new Manager({
        name: 'Forest Trump',
        details: 'Runs Shrimp Boats',
        fees: 1000000000
    }),
    new Manager({
        name: 'Dawn Cheri',
        details: 'Runs Hockey Teams',
        fees: 10000000000
    }),
    new Manager({
        name: 'Staffani Speilberg',
        details: 'Runs Movie Studios',
        fees: 1000000000000
    }),
];

