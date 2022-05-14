const cust = 25;
const price = 100;


if (cust < 0 || price < 0) {
    console.log('Put some availabe number');
}
else {
    let totalCust = cust * 1000;
    let totalRent = price * 1000;
    totalCust *= 1.20
    let allProfit = totalRent - totalCust;
    console.log(allProfit);
}

