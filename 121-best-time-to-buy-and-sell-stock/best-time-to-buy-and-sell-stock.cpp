class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // int minPrice = INT_MAX;
        // int maxProfit = 0;

        // for(int price: prices){
        //     if(price < minPrice){
        //         minPrice = price;
        //     }else if(price - minPrice >= maxProfit){
        //         maxProfit = price - minPrice;
        //     }
        // }

        int minPrice = prices[0], profit = 0, maxProfit = 0;
        for(int i = 1; i <= prices.size() - 1; i++){
            profit = prices[i] - minPrice;
            maxProfit = max(profit, maxProfit);
            minPrice = min(prices[i], minPrice);
        }
        return maxProfit;
    }
};