
const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)