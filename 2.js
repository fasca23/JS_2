

const goods = {
    1 : {
        id: 1,
        name: "Майка",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["L", "XL", "XXL"],
        price: 1.90,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка",
        description: "хлопок 100 %",
        sizes: ["XL", "XXL"],
        price: 5.02,
        available: true
    },
    3 : {
        id: 3,
        name: "Трусы",
        description: "хлопок 100 %",
        sizes: ["M", "XXL"],
        price: 3.13,
        available: true
    },
    4 : {
        id: 4,
        name: "Супер Трусы",
        description: "хлопок 200 %",
        sizes: ["M", "XXL"],
        price: 3.13,
        available: true
    },
    5 : {
        id: 5,
        name: "Тельняшка",
        description: "хлопок 1000 %",
        sizes: ["L", "XL", "XXL"],
        price: 3.13,
        available: true
    },
}

const basket = [
    {
        good: 3,
        amount: 5,
    },
    {
        good: 4,
        amount: 2,
    },
]

function addOne(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}

// console.log(addOne(process.argv[2], process.argv[2],))

function delOne(good) {
    basket.splice(good, 1); // вроде так удаляет
    return basket
}

// console.log(delOne(process.argv[2],))

function clear() {
    basket.splice(0, basket.length); 
    return basket
}

// console.log(clear())

function amountSum() {

    let totalAmount = 0
    let totalSumm = 0
    
    for (let Position = 0; Position < basket.length; Position++) {

        totalSumm = totalSumm + basket[Position].amount * goods[basket[Position].good].price 

        totalAmount = totalAmount + basket[Position].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": +totalSumm.toFixed(2),
        }
    return totals
}

console.log(amountSum())


