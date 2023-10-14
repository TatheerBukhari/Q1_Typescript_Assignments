function create_car(manufacturer: string, modelName: string, ...options: string[]): any {
    const car: any = {
        manufacturer,
        modelName,
    };

    for (const option of options) {
        const [key, value] = option.split(":");
        car[key] = value;
    }

    return car;
}

const car0 = create_car("Toyota", "Camry", "color:Blue", "year:2023");
const car4 = create_car("Honda", "Civic", "color:Red");

console.log(car0);
console.log(car4);