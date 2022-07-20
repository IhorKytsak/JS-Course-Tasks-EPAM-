let initAmountOfMonay = +prompt('Imput initial amount of money', '1000');
let initNumbOfYears = +prompt('Input number of years', '1');
let initPercentageOfYear = +prompt('Input percentage of a year', '10');
const minMonay = 1000;
const percentage = 100;
const toFixed = 2;

if (Number.isNaN(initAmountOfMonay) ||
   !Number.isInteger(initNumbOfYears) ||
   Number.isNaN(initPercentageOfYear) ||
   initAmountOfMonay < minMonay ||
   initNumbOfYears <= 0 ||
   (initPercentageOfYear > percentage ||
      initPercentageOfYear <= 0)) {
   alert('Invalid input data')
} else {
   if (!Number.isInteger(initAmountOfMonay)) {
      initAmountOfMonay = +initAmountOfMonay.toFixed(toFixed);
   }

   if (!Number.isInteger(initPercentageOfYear)) {
      initPercentageOfYear = +initPercentageOfYear.toFixed(toFixed);
   }

   let totalProfit = initAmountOfMonay / percentage * initPercentageOfYear;
   let totalAmount = initAmountOfMonay + totalProfit;

   for (let i = 1; i < initNumbOfYears; i++) {

      totalProfit = totalProfit + totalAmount / percentage * initPercentageOfYear;
      totalAmount = initAmountOfMonay + totalProfit;
   }

   alert(`Initial amount: ${initAmountOfMonay} 
Number of years: ${initNumbOfYears} 
Percentage of year: ${initPercentageOfYear} \n
Total profit:${totalProfit.toFixed(toFixed)}
Total amount:${totalAmount.toFixed(toFixed)}
`)
}
