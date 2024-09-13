/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length ; i++){
        profit = Math.max(profit, (prices[i] - minPrice));
        minPrice = Math.min(prices[i] , minPrice);
    }
    return profit;
};