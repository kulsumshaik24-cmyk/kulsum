let prices = [200,300,150,400]
let total = 0;
let Discount = 0;
let FinalAmount=0;
for(let i=0;i < prices.length; i++)
{
    total=total+prices[i];
}
if (total > 1000)
{
    Discount=total*0.10;
}
FinalAmount=total-Discount;
console.log("Total:",total);
console.log("Discount:",Discount);
console.log("Final Amount:",FinalAmount);
