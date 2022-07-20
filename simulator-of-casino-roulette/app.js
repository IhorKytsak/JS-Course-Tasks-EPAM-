let casinoRoulette = confirm('Do you want to play a game?');
let userNumber;
let randomIntegerNumber;
let prize;
let currentMaxPrize;
let wantPlayAgain = true;
let wantContinue = true;
let maxRangeNumber;
const minRangeNumber = 0;
const maxRangeInitial = 8;
const attempts = 3;
const initialMaxPrise = 100;
const rangeGrow = 4;
const double = 2;

if (!casinoRoulette) {
   alert('You did not become a billionaire, but can.');
} else {

   while (wantPlayAgain === true) {
      prize = 0;
      let gameCounter = 0;
      wantContinue = true;

      while (wantContinue === true) {
         currentMaxPrize = initialMaxPrise * Math.pow(double, gameCounter);
         maxRangeNumber = maxRangeInitial + rangeGrow * gameCounter;
         randomIntegerNumber = Math.floor(minRangeNumber + Math.random() * (maxRangeNumber + 1 - minRangeNumber));

         for (let i = 0; i < attempts; i++) {
            userNumber = Number(prompt(`Choose a roulette pocket number from ${minRangeNumber} to ${maxRangeNumber}
                  Attempts left: ${attempts - i}
                  Total prize: ${prize}$
                  Posiible prize on current attempt: ${currentMaxPrize / Math.pow(double, i)}$ `));

            if (Number.isInteger(userNumber) === false) {
               alert('Please enter the integer');
            }

            if (userNumber === randomIntegerNumber) {

               if (i === 0) {
                  prize += currentMaxPrize / Math.pow(double, i);
                  alert(`Congratulation, you won! Your prize is: ${currentMaxPrize / Math.pow(double, i)}$.`);
                  break;
               } else if (i === 1) {
                  prize += currentMaxPrize / Math.pow(double, i);
                  alert(`Congratulation, you won! Your prize is: ${currentMaxPrize / Math.pow(double, i)}$.`);
                  break;
               } else if (i === attempts - 1) {
                  prize += currentMaxPrize / Math.pow(double, i);
                  alert(`Congratulation, you won! Your prize is: ${currentMaxPrize / Math.pow(double, i)}$.`);
                  break;
               }
            } else {
               continue;
            }
         }

         if (userNumber === randomIntegerNumber) {
            wantContinue = confirm('Do you want to continue?', '');

            if (wantContinue) {
               gameCounter++;
            } else {
               alert(`Thank you for your participation. Your prize is: ${prize}$`);
            }
         } else {
            alert(`Thank you for your participation. Your prize is: ${prize}$`);
            wantContinue = false;
         }
      }
      wantPlayAgain = confirm('Do you want to play again?');
   }
}