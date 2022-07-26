# You need to calculate the profit of the deposit account.

## Workflow:

1. User inputs initial amount of money. (Use “prompt” function).
2. User inputs number of years. (Use “prompt” function).
3. User inputs percentage of a year. (Use “prompt” function)

Percentage of a year - percentage of the all amount earned every year by the owner of the
money.

Warning: Every year amount changes. (Check example)

4. You need to validate the input data: three values should be numbers, initial amount can’t
   be less than 1000, number of years can’t be less than 1, percentage can’t be bigger than 100.
5. If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
6. You need to calculate total profit and total amount.
7. Show message: (example). Use ”alert” function

```
Initial amount: 1000
Number of years: 3
Percentage of year: 10
Total profit: 331.00
Total amount: 1331.00
```

You should show only 2 numbers after comma (if needed).
Number of years can be only integers.

Example:

```
Initial amount: 1000
Number of years: 2
Percentage of year: 10
1 Year
Total profit: 100 (10% from initial amount)
Total amount: 1100 (initial amount + total profit)
2 Year
Total profit: 210 (previous profit + 10% from previous total amount (1100))
Total amount: 1210 (initial amount + total profit)
```
