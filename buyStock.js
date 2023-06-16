    var maxProfit = function(prices) {
        let minBuy = prices[0];
        let profit = 0;
        for(let i=1;i<prices.length;i++){
            minBuy = Math.min(minBuy,prices[i])
            profit = Math.max(profit,prices[i]-minBuy)
        }
         return profit;
     };
console.log(maxProfit([2,4,1]));
